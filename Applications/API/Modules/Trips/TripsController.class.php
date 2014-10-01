<?php
namespace Applications\API\Modules\Trips;

class TripsController extends \Library\Controller {
	public function executeComment(\Library\HTTPRequest $request) {
		if ($this->app->user()->connected()) {
			if ($request->postExists('comment_trip_id') && $request->postExists('comment_body')) {
				$trips = $this->app->database()->getModelOf('Trips');
				if ($trips->getTripNautRole($request->postData('comment_trip_id'), $this->app->user()->id()) > 0) {
					$comment = new \Library\Entities\Comment(array(
						'trip_id' => $request->postData('comment_trip_id'),
						'naut_id' => $this->app->user()->id(),
						'body' => $request->postData('comment_body')
					));
					if ($comment->isValid()) {
						$trips->addComment($comment);
						$this->page->addVar('commented', true);
						$this->page->addVar('comment_id', $comment->id());
					} else {
						$this->page->addVar('commented', false);
						$this->page->addVar('error', 'invalid comment');
					}
				} else {
					$this->page->addVar('commented', false);
					$this->page->addVar('error', 'invalid naut');
				}
			} else {
				$this->page->addVar('commented', false);
				$this->page->addVar('error', 'invalid query');
			}
		} else {
			$this->page->addVar('commented', false);
			$this->page->addVar('error', 'anonymous');
		}
	}
	public function executeCreate(\Library\HTTPRequest $request) {
		if ($this->app->user()->connected()) {
			if ($request->postExists('trip_country_id') && $request->postExists('trip_title') && $request->postExists('trip_start') && $request->postExists('trip_duration')) {
				$trip = new \Library\Entities\Trip(array(
					'country_id' => $request->postData('trip_country_id'),
					'title' => $request->postData('trip_title'),
					'start' => new \DateTime($request->postData('trip_start')),
					'duration' => $request->postData('trip_duration'),
					'blocks' => '[]',
					'locked' => 1,
					'locker_id' => $this->app->user()->id(),
					'creator_id' => $this->app->user()->id(),
					'administration' => 1,
					'nauts' => [new \Library\Entities\Naut(array(
						'id' => $this->app->user()->id(),
						'login' => $this->app->user()->login(),
						'email' => $this->app->user()->email(),
						'rank' => $this->app->user()->rank(),
						'role' => 2
					))],
					'points' => []
				));
				if ($trip->isValid()) {
					$this->app->database()->getModelOf('Trips')->addTrip($trip);
					$this->page->addVar('created', true);
					$this->page->addVar('trip_id', $trip->id());
				} else {
					$this->page->addVar('created', false);
					$this->page->addVar('error', 'invalid trip');
				}
			} else {
				$this->page->addVar('created', false);
				$this->page->addVar('error', 'invalid query');
			}
		} else {
			$this->page->addVar('created', false);
			$this->page->addVar('error', 'anonymous');
		}
	}
	public function executeGetComments(\Library\HTTPRequest $request) {
		if ($request->postExists('trip_id')) {
			if ($request->postExists('start')) { $start = $request->postData('start'); } else { $start = 0; }
			$limit = 10;
			$this->page->addVar('got', true);
			$this->page->addVar('comments', $this->app->database()->getModelOf('Trips')->getComments($request->postData('trip_id'),$start,$limit));
		} else {
			$this->page->addVar('got', false);
			$this->page->addVar('error', 'invalid query');
		}
	}
	public function executeGetTrip(\Library\HTTPRequest $request) {
		if ($request->postExists('trip_id')) {
			$trips = $this->app->database()->getModelOf('Trips');
			$trip = $trips->getTrip($request->postData('trip_id'));
			if ($this->app->user()->connected()) {
				$trips->readTrip($trip->id(), $this->app->user()->id());
			} else {
				$trips->readTrip($trip->id(), 0);
			}
			$this->page->addVar('got', true);
			$this->page->addVar('trip', $trip);
		} else {
			$this->page->addVar('got', false);
			$this->page->addVar('error', 'invalid query');
		}
	}
	public function executeLock(\Library\HTTPRequest $request) {
		if ($this->app->user()->connected()) {
			if ($request->postExists('trip_id')) {
				$trips = $this->app->database()->getModelOf('Trips');
				if ($trips->getTripNautRole($request->postData('trip_id'), $this->app->user()->id()) == 2) {
					$trip = $trips->getTrip($request->postData('trip_id'));
					if ($trip->locked() == 1 && $trip->locker_id() != $this->app->user()->id()) {
						$this->page->addVar('locked', true);
						$this->page->addVar('locker_id', $trip->locker_id());
					} else {
						$trips->lockTrip($trip->id(), $this->app->user()->id());
						$this->page->addVar('locked', true);
						$this->page->addVar('locker_id', $this->app->user()->id());
					}
				} else {
					$this->page->addVar('locked', false);
					$this->page->addVar('error', 'invalid naut');
				}
			} else {
				$this->page->addVar('locked', false);
				$this->page->addVar('error', 'invalid query');
			}
		} else {
			$this->page->addVar('locked', false);
			$this->page->addVar('error', 'anonymous');
		}
	}
	public function executeSave(\Library\HTTPRequest $request) {
		if ($this->app->user()->connected()) {
			if ($request->postExists('trip_id')) {
				$trips = $this->app->database()->getModelOf('Trips');
				if ($trips->getTripNautRole($request->postData('trip_id'), $this->app->user()->id()) == 2) {
					$trip = $trips->getTrip($request->postData('trip_id'));
					if ($trip->locked() != 1 || $trip->locker_id() == $this->app->user()->id()) {
						if ($request->postExists('trip_country_id')) {$trip->setCountry_id($request->postData('trip_country_id'));}
						if ($request->postExists('trip_title')) {$trip->setTitle($request->postData('trip_title'));}
						if ($request->postExists('trip_start')) {$trip->setStart(new \DateTime($request->postData('trip_start')));}
						if ($request->postExists('trip_duration')) {$trip->setDuration($request->postData('trip_duration'));}
						if ($request->postExists('trip_blocks')) {$trip->setBlocks($request->postData('trip_blocks'));}
						if ($request->postExists('trip_administration')) {$trip->setAdministration($request->postData('trip_administration'));}
						if ($trip->isValid()) {
							$trips->updateTrip($trip);
							if ($request->postExists('trip_points')) {
								$points_id = json_decode($request->postData('trip_points'),true);
								$trips->updateTripPoints($request->postData('trip_id'),$points_id);
							}
							$this->page->addVar('saved', true);
						} else {
							$this->page->addVar('saved', false);
							$this->page->addVar('error', 'invalid trip');
						}
					} else {
						$this->page->addVar('saved', false);
						$this->page->addVar('error', 'locked trip');
					}
				} else {
					$this->page->addVar('saved', false);
					$this->page->addVar('error', 'invalid naut');
				}
			} else {
				$this->page->addVar('saved', false);
				$this->page->addVar('error', 'invalid query');
			}
		} else {
			$this->page->addVar('saved', false);
			$this->page->addVar('error', 'anonymous');
		}
	}
	public function executeUnlock(\Library\HTTPRequest $request) {
		if ($this->app->user()->connected()) {
			if ($request->postExists('trip_id')) {
				$trips = $this->app->database()->getModelOf('Trips');
				$trip = $trips->getTrip($request->postData('trip_id'));
				if ($trip->locked() == 1 && $trip->locker_id() != $this->app->user()->id()) {
					$this->page->addVar('unlocked', false);
					$this->page->addVar('error', 'locked by another naut');
				} else {
					$trips->unlockTrip($trip->id());
					$this->page->addVar('unlocked', true);
				}
			} else {
				$this->page->addVar('unlocked', false);
				$this->page->addVar('error', 'invalid query');
			}
		} else {
			$this->page->addVar('unlocked', false);
			$this->page->addVar('error', 'anonymous');
		}
	}
}