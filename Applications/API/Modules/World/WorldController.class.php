<?php
namespace Applications\API\Modules\World;

class WorldController extends \Library\Controller {
	public function executeGetPoints(\Library\HTTPRequest $request) {
		if ($request->postExists('country_id')) {
			$this->page->addVar('got', true);
			$this->page->addVar('points', $this->app->database()->getModelOf('World')->getCountryPoints($request->postData('country_id')));
		} else if ($request->postExists('zone_id')) {
			$this->page->addVar('got', true);
			$this->page->addVar('points', $this->app->database()->getModelOf('World')->getZonePoints($request->postData('zone_id')));
		} else {
			$this->page->addVar('got', false);
			$this->page->addVar('error', 'invalid query');
		}
	}
	public function executeSearch(\Library\HTTPRequest $request) {
		if ($request->postExists('text')) {
			$this->page->addVar('found', true);
			$this->page->addVar('points', $this->app->database()->getModelOf('World')->searchPoints($request->postData('text'),0,5));
		} else {
			$this->page->addVar('found', false);
			$this->page->addVar('error', 'invalid query');
		}
	}
}