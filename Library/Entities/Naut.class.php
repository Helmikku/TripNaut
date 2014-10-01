<?php
namespace Library\Entities;

class Naut extends \Library\Entity {
	public $login, $email, $signup_time, $login_time, $rank, $role;
	public function setLogin($login) {
		$login = htmlspecialchars($login);
		if (!empty($login) && is_string($login) && strlen($login) < 16) {
			$this->login = $login;
		}
	}
	public function setEmail($email) {
		$email = htmlspecialchars($email);
		if (!empty($email) && is_string($email) && preg_match("#^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$#", $email) == 1) {
			$this->email = $email;
		}
	}
	public function setSignup_time(\DateTime $signup_time) {
		$this->signup_time = $signup_time;
	}
	public function setLogin_time(\DateTime $login_time) {
		$this->login_time = $login_time;
	}
	public function setRank($rank) {
		if ((int) $rank > 0) {
			$this->rank = $rank;
		}
	}
	public function setRole($role) {
		if ((int) $role > 0) {
			$this->role = $role;
		}
	}
	public function login() {
		return $this->login;
	}
	public function email() {
		return $this->email;
	}
	public function signup_time() {
		return $this->signup_time;
	}
	public function login_time() {
		return $this->login_time;
	}
	public function rank() {
		return $this->rank;
	}
	public function role() {
		return $this->role;
	}
	public function isValid() {
		return !(empty($this->login));
	}
}