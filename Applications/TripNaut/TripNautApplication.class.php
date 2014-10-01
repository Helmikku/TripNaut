<?php
namespace Applications\TripNaut;

class TripNautApplication extends \Library\Application {
	public function __construct() {
		parent::__construct();
		$this->name = 'TripNaut';
		$this->config = new \Library\Config($this);
	}
	public function run() {
		$controller = $this->getController();
		$controller->execute();
		$this->httpResponse->setPage($controller->page());
		$this->httpResponse->send();
	}
}