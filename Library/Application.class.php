<?php
namespace Library;

abstract class Application {
	protected $name;
	protected $config;
	protected $database;
	protected $user;
	protected $httpRequest;
	protected $httpResponse;
	public function __construct() {
		$this->name = null;
		$this->config = null;
		$this->database = new Database($this, 'PDO', PDOFactory::getMysqlConnexion());
		$this->user = new User($this);
		$this->httpRequest = new HTTPRequest($this);
		$this->httpResponse = new HTTPResponse($this);
	}
	public function name() {
		return $this->name;
	}
	public function config() {
		return $this->config;
	}
	public function database() {
		return $this->database;
	}
	public function user() {
		return $this->user;
	}
	public function httpRequest() {
		return $this->httpRequest;
	}
	public function httpResponse() {
		return $this->httpResponse;
	}
	public function getController() {
		try {
			$route = $this->config->getRoute($this->httpRequest->uri());
		}
		catch (\RuntimeException $e) {
			if ($e->getCode() == \Library\Config::NO_ROUTE) {
				$this->httpResponse->redirect404();
			}
		}
		$_GET = array_merge($_GET, $route->vars());
		$controller = 'Applications\\'.$this->name.'\\Modules\\'.$route->module().'\\'.$route->module().'Controller';
		return new $controller($this, $route->module(), $route->action());
	}
	abstract public function run();
}