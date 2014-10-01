<?php
namespace Applications\API;

class APIApplication extends \Library\Application {
	public function __construct() {
		parent::__construct();
		$this->name = 'API';
		$this->config = new \Library\Config($this);
	}
	public function run() {
		$controller = $this->getController();
		$controller->execute();
		$this->httpResponse->setPage($controller->page());
		$this->httpResponse->send();
	}
}