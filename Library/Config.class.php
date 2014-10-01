<?php
namespace Library;

class Config extends ApplicationComponent {
	const NO_ROUTE = 1;
	protected $routes;
	protected $vars;
	public function __construct(Application $app) {
		parent::__construct($app);
		$this->setRoutes($app);
		$this->setVars($app);
	}
	public function setRoutes(Application $app) {
		$routes = array();
		$xml = new \DOMDocument;
		$xml->load(__DIR__.'/../Applications/'.$app->name().'/Config/routes.xml');
		$elements = $xml->getElementsByTagName('route');
		foreach ($elements as $element) {
			$varsNames = array();
			if ($element->hasAttribute('vars')) {
				$varsNames = explode(',', $element->getAttribute('vars'));
			}
			$routes[] = new Route($element->getAttribute('url'), $element->getAttribute('module'), $element->getAttribute('action'), $varsNames);
		}
		$this->routes = $routes;
	}
	public function setVars(Application $app) {
		$vars = array();
		$xml = new \DOMDocument;
		$xml->load(__DIR__.'/../Applications/'.$app->name().'/Config/app.xml');
		$elements = $xml->getElementsByTagName('definition');
		foreach ($elements as $element) {
			$vars[$element->getAttribute('var')] = $element->getAttribute('value');
		}
		$this->vars = $vars;
	}
	public function getRoute($url) {
		foreach ($this->routes as $route) {
			if (($varsValues = $route->match($url)) !== false) {
				if ($route->hasVarsNames()) {
					$varsNames = $route->varsNames();
					$vars = array();
					foreach ($varsValues as $key => $match) {
						if ($key !== 0) {
							$vars[$varsNames[$key - 1]] = $match;
						}
					}
					$route->setVars($vars);
				}
				return $route;
			}
		}
		throw new \RuntimeException('Aucune route ne correspond à l\'URL', self::NO_ROUTE);
	}
	public function getVar($var) {
		if (isset($this->vars[$var])) {
			return $this->vars[$var];
		}
		return null;
	}
}