<?php
namespace Library;

abstract class Controller extends ApplicationComponent {
	protected $page;
	protected $module;
	protected $action;
	protected $view;
	public function __construct(Application $app, $module, $action) {
		parent::__construct($app);
		$this->page = new Page($app);
		$this->setModule($module);
		$this->setAction($action);
		$this->setView($action);
	}
	public function setModule($module) {
		if (!is_string($module) || empty($module)) {
			throw new \InvalidArgumentException('Le module spécifié est invalide');
		}
		$this->module = $module;
	}
	public function setAction($action) {
		if (!is_string($action) || empty($action)) {
			throw new \InvalidArgumentException('L\'action spécifiée est invalide');
		}
		$this->action = $action;
	}
	public function setView($view) {
		if (!is_string($view) || empty($view)) {
			throw new \InvalidArgumentException('La vue spécifiée est invalide');
		}
		$this->view = $view;
		$this->page->setContentFile(__DIR__.'/../Applications/'.$this->app->name().'/Modules/'.$this->module.'/Views/'.$this->view.'.php');
	}
	public function page() {
		return $this->page;
	}
	public function execute() {
		$method = 'execute'.ucfirst($this->action);
		if (!is_callable(array($this, $method))) {
			throw new \RuntimeException('L\'action "'.$this->action.'" n\'est pas définie pour ce module');
		}
		$this->$method($this->app->httpRequest());
	}
}