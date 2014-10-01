<?php
namespace Library;

session_start();

class User extends ApplicationComponent {
	protected $id, $login, $email, $signup_time, $login_time, $rank;
	public function __construct(Application $app) {
		parent::__construct($app);
		if ($this->connected()) {
			$this->id = $_SESSION['id'];
			$this->login = $_SESSION['login'];
			$this->email = $_SESSION['email'];
			$this->signup_time = $_SESSION['signup_time'];
			$this->login_time = $_SESSION['login_time'];
			$this->rank = $_SESSION['rank'];
		} elseif (isset($_COOKIE['login']) && isset($_COOKIE['password'])) {
			$login = $_COOKIE['login'];
			$password = $_COOKIE['password'];
			$nauts = $this->app->database()->getModelOf('Nauts');
			if ($naut = $nauts->login($login, $password)) {
				$this->id = $naut->id();
				$this->login = $naut->login();
				$this->email = $naut->email();
				$this->signup_time = $naut->signup_time();
				$this->login_time = $naut->login_time();
				$this->rank = $naut->rank();
			}
		}
	}
	public function id() {
		return $this->id;
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
	public function connected() {
		return (isset($_SESSION['connected']) && $_SESSION['connected'] === true);
	}
	public function setAttribute($attribute, $value) {
		$_SESSION[$attribute] = $value;
	}
	public function getAttribute($attribute) {
		return isset($_SESSION[$attribute]) ? $_SESSION[$attribute] : null;
	}
	public function setFlash($value) {
		$_SESSION['flash'] = $value;
	}
	public function hasFlash() {
		return isset($_SESSION['flash']);
	}
	public function getFlash() {
		$flash = $_SESSION['flash'];
		unset($_SESSION['flash']);
		return $flash;
	}
}