<?php
namespace Applications\API\Modules\Nauts;

class NautsController extends \Library\Controller {
	public function executeLogin(\Library\HTTPRequest $request) {
		if ($request->postExists('email') && $request->postExists('password')) {
			$email = $request->postData('email');
			$password = hash("sha256", 'OH!'.$request->postData('password').'TripNaut!');
			$nauts = $this->app->database()->getModelOf('Nauts');
			if ($naut = $nauts->login($email, $password)) {
				$this->page->addVar('connected', true);
				$this->page->addVar('login', $naut->login());
			} else {
				$this->page->addVar('connected', false);
				$this->page->addVar('error', 'invalid email or password');
			}
		} else {
			$this->page->addVar('connected', false);
			$this->page->addVar('error', 'invalid form');
		}
	}
	public function executeSignup(\Library\HTTPRequest $request) {
		if ($request->postExists('login') && $request->postExists('email') && $request->postExists('password')) {
			$login = $request->postData('login');
			$email = $request->postData('email');
			$password = hash("sha256", 'OH!'.$request->postData('password').'TripNaut!');
			$nauts = $this->app->database()->getModelOf('Nauts');
			if ($nauts->login_available($login)) {
				if ($nauts->email_available($email)) {
					$naut = new \Library\Entities\Naut(array(
						'login' => $login,
						'email' => $email,
						'rank' => 1
					));
					if ($naut->isValid()) {
						$nauts->signup($naut->login(), $naut->email(), $password);
						$this->page->addVar('registered', true);
					} else {
						$this->page->addVar('registered', false);
						$this->page->addVar('error', 'invalid form');
					}
				} else {
					$this->page->addVar('registered', false);
					$this->page->addVar('error', 'invalid email');
				}
			} else {
				$this->page->addVar('registered', false);
				$this->page->addVar('error', 'invalid login');
			}
		} else {
			$this->page->addVar('registered', false);
			$this->page->addVar('error', 'invalid form');
		}
	}
}