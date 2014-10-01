<?php
namespace Library\Validators;

class MaxLengthValidator extends \Library\Validator {
	protected $maxLength;
	public function __construct($error, $maxLength) {
		parent::__construct($error);
		$this->setMaxLength($maxLength);
	}
	public function setMaxLength($maxLength) {
		if ((int) $maxLength > 0) {
			$this->maxLength = $maxLength;
		}
	}
	public function isValid($value) {
		return strlen($value) <= $this->maxLength;
	}
}