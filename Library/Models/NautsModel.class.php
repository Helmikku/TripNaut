<?php
namespace Library\Models;

abstract class NautsModel extends \Library\Model {
	abstract public function getOneById($id);
	abstract public function getOneByLogin($login);
	abstract public function login_available($login);
	abstract public function email_available($email);
	abstract public function login($email, $password);
	abstract public function signup($login, $email, $password);
}