<?php
namespace Applications\TripNaut\Modules\World;

class WorldController extends \Library\Controller {
	public function executeIndex(\Library\HTTPRequest $request) {
		$this->page->addVar('countries', $this->app->database()->getModelOf('World')->getCountries());
	}
	public function executeCountry(\Library\HTTPRequest $request) {
		$world = $this->app->database()->getModelOf('World');
		$country = $world->getCountry($request->getData('id'));
		$zones = $world->getZones($country->id());
		$this->page->addVar('page_title', $country->title());
		$this->page->addVar('breadcrumb', array($country->title() => '/countries/'.$country->id().'/'.$country->title()));
		$this->page->addVar('country', $country);
		$this->page->addVar('zones', $zones);
		if ($request->getExists('trip_id')) {
			$trip = $this->app->database()->getModelOf('Trips')->getTrip($request->getData('trip_id'));
			$this->page->addVar('trip', $trip);
		}
	}
}