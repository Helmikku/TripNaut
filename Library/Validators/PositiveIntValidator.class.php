<?php
namespace Library\Validators;

class PositiveIntValidator extends \Library\Validator {
	public function isValid($value) {
		return (int) $value > 0;
	}
}