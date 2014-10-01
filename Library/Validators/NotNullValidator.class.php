<?php
namespace Library\Validators;

class NotNullValidator extends \Library\Validator {
	public function isValid($value) {
		return $value != '';
	}
}