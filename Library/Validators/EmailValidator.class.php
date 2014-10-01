<?php
namespace Library\Validators;

class EmailValidator extends \Library\Validator {
	public function isValid($value) {
		return preg_match("#^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$#", $email) == 1;
	}
}