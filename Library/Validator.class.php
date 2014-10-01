<?php
namespace Library;

abstract class Validator {
	protected $error;
	public function __construct($error) {
		$this->setError($error);
	}
	public function setError($error) {
		if (is_string($error)) {
			$this->error = $error;
		}
	}
	public function error() {
		return $this->error;
	}
	abstract public function isValid($value);
}