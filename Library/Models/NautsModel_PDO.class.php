<?php
namespace Library\Models;

use \Library\Entities\Naut;

class NautsModel_PDO extends NautsModel {
	public function getOneById($id) {
		$query = $this->dao->prepare('SELECT * FROM nauts WHERE id = :id');
		$query->bindValue(':id', (int) $id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Naut');
		if ($naut = $query->fetch()) {
			$naut->setSignup_time(new \DateTime($naut->signup_time()));
			$naut->setLogin_time(new \DateTime($naut->login_time()));
			return $naut;
		}
		return false;
	}
	public function getOneByLogin($login) {
		$query = $this->dao->prepare('SELECT * FROM nauts WHERE login = :login');
		$query->bindValue(':login', $login, \PDO::PARAM_STR);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Naut');
		if ($naut = $query->fetch()) {
			$naut->setSignup_time(new \DateTime($naut->signup_time()));
			$naut->setLogin_time(new \DateTime($naut->login_time()));
			return $naut;
		}
		return false;
	}
	public function login_available($login) {
		$query = $this->dao->prepare('SELECT id FROM nauts WHERE login = :login');
		$query->bindValue(':login', $login, \PDO::PARAM_STR);
		$query->execute();
		return !((bool) $query->fetchColumn());
	}
	public function email_available($email) {
		$query = $this->dao->prepare('SELECT id FROM nauts WHERE email = :email');
		$query->bindValue(':email', $email, \PDO::PARAM_STR);
		$query->execute();
		return !((bool) $query->fetchColumn());
	}
	public function login($email, $password) {
		$query = $this->dao->prepare('SELECT * FROM nauts WHERE email = :email AND password = :password');
		$query->bindValue(':email', $email, \PDO::PARAM_STR);
		$query->bindValue(':password', $password, \PDO::PARAM_STR);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Naut');
		if ($naut = $query->fetch()) {
			$naut->setSignup_time(new \DateTime($naut->signup_time()));
			$naut->setLogin_time(new \DateTime(date("Y-m-d H:i:s")));
			$update = $this->dao->prepare('UPDATE nauts SET login_time = NOW() WHERE id = :id');
			$update->bindValue(':id', $naut->id(), \PDO::PARAM_INT);
			$update->execute();
			$_SESSION['id'] = $naut->id();
			$_SESSION['login'] = $naut->login();
			$_SESSION['email'] = $naut->email();
			$_SESSION['signup_time'] = $naut->signup_time();
			$_SESSION['login_time'] = $naut->login_time();
			$_SESSION['rank'] = $naut->rank();
			$_SESSION['connected'] = true;
			return $naut;
		}
		return false;
	}
	public function signup($login, $email, $password) {
		$query = $this->dao->prepare('INSERT INTO nauts (login, email, password, signup_time, login_time, rank) VALUES (:login, :email, :password, NOW(), NOW(), 1)');
		$query->bindValue(':login', $login, \PDO::PARAM_STR);
		$query->bindValue(':email', $email, \PDO::PARAM_STR);
		$query->bindValue(':password', $password, \PDO::PARAM_STR);
		$query->execute();
	}
}