<?php
namespace Library;

class Route {
	protected $url;
	protected $module;
	protected $action;
	protected $varsNames;
	protected $vars;
	public function __construct($url, $module, $action, array $varsNames) {
		$this->setUrl($url);
		$this->setModule($module);
		$this->setAction($action);
		$this->setVarsNames($varsNames);
		$this->vars = array();
	}
	public function setUrl($url) {
		if (is_string($url)) {
			$this->url = $url;
		}
	}
	public function setModule($module) {
		if (is_string($module)) {
			$this->module = $module;
		}
	}
	public function setAction($action) {
		if (is_string($action)) {
			$this->action = $action;
		}
	}
	public function setVarsNames(array $varsNames) {
		$this->varsNames = $varsNames;
	}
	public function setVars(array $vars) {
		$this->vars = $vars;
	}
	public function url() {
		return $this->url;
	}
	public function module() {
		return $this->module;
	}
	public function action() {
		return $this->action;
	}
	public function varsNames() {
		return $this->varsNames;
	}
	public function vars() {
		return $this->vars;
	}
	public function hasVarsNames() {
		return !empty($this->varsNames);
	}
	public function match($url) {
		if (preg_match('`^'.$this->url.'$`', $url, $matches)) {
			return $matches;
		} else {
			return false;
		}
	}
}