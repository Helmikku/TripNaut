<?php
namespace Applications\TripNaut\Modules\Trips;

class TripsController extends \Library\Controller {
	public function executeIndex(\Library\HTTPRequest $request) {
		$trips_number = $this->app->config()->getVar('trips_number');
		$this->page->addVar('page_title', $trips_number.' trips');
		$this->page->addVar('breadcrumb', array('Trips' => '/trips'));
		$this->page->addVar('trips', $this->app->database()->getModelOf('Trips')->getTrips(0, $trips_number));
	}
	public function executeShow(\Library\HTTPRequest $request) {
		$trips = $this->app->database()->getModelOf('Trips');
		$world = $this->app->database()->getModelOf('World');
		$trip = $trips->getTrip($request->getData('id'));
		$this->page->addVar('page_title', $trip->title());
		$this->page->addVar('breadcrumb', array('Trips' => '/trips',$trip->title() => '/trips/'.$trip->id()));
		$this->page->addVar('trip', $trip);
		$this->page->addVar('country', $world->getCountry($trip->country_id()));
		$this->page->addVar('zones', $world->getZones($trip->country_id()));
		if ($this->app->user()->connected()) {
			$user_role = $trips->getTripNautRole($trip->id(), $this->app->user()->id());
			$this->page->addVar('user_role', $user_role);
			if ($user_role > 0) {
				$trip_nauts = array();
				foreach ($trip->nauts() as $naut) { $trip_nauts[$naut->id()] = $naut; }
				$this->page->addVar('trip_nauts', $trip_nauts);
				$comments_number = $this->app->config()->getVar('comments_number');
				$comments = $trips->getComments($trip->id(), 0, $comments_number);
				$this->page->addVar('comments', $comments);
			}
			$trips->readTrip($trip->id(), $this->app->user()->id());
		} else {
			$this->page->addVar('user_role', 0);
			$trips->readTrip($trip->id(), 0);
		}
	}
	public function executeEdition(\Library\HTTPRequest $request) {
		if ($this->app->user()->connected()) {
			$trips = $this->app->database()->getModelOf('Trips');
			if ($trips->getTripNautRole($request->getData('id'), $this->app->user()->id()) == 2) {
				$world = $this->app->database()->getModelOf('World');
				$trip = $trips->getTrip($request->getData('id'));
				$this->page->addVar('page_title', $trip->title());
				$this->page->addVar('breadcrumb', array('Trips' => '/trips',$trip->title() => '/trips/'.$trip->id()));
				$this->page->addVar('trip', $trip);
				$this->page->addVar('country', $world->getCountry($trip->country_id()));
				$this->page->addVar('zones', $world->getZones($trip->country_id()));
				$trip_nauts = array();
				foreach ($trip->nauts() as $naut) { $trip_nauts[$naut->id()] = $naut; }
				$this->page->addVar('trip_nauts', $trip_nauts);
				$comments_number = $this->app->config()->getVar('comments_number');
				$comments = $trips->getComments($trip->id(), 0, $comments_number);
				$this->page->addVar('comments', $comments);
				$trips->readTrip($trip->id(), $this->app->user()->id());
			} else {
				$this->app->httpResponse()->redirect('/trips/'.$request->getData('id'));
			}
		} else {
			$this->app->httpResponse()->redirect('/trips/'.$request->getData('id'));
		}
	}
	public function executeOfflineEdition(\Library\HTTPRequest $request) {
		
	}
}