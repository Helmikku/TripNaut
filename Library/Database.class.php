<?php
namespace Library;

class Database extends ApplicationComponent {
	protected $api;
	protected $dao;
	protected $models;
	public function __construct(Application $app, $api, $dao) {
		parent::__construct($app);
		$this->api = $api;
		$this->dao = $dao;
		$this->models = array();
	}
	public function api() {
		return $this->api;
	}
	public function dao() {
		return $this->dao;
	}
	public function getModelOf($module) {
		if (!is_string($module) || empty($module)) {
			throw new \InvalidArgumentException('Le module spécifié est invalide');
		}
		if (!isset($this->models[$module])) {
			$model = '\\Library\\Models\\'.$module.'Model_'.$this->api;
			$this->models[$module] = new $model($this->dao);
		}
		return $this->models[$module];
	}
}