<?php
namespace Library;

class PDOFactory {
	public static function getMysqlConnexion() {
		$db = new \PDO('mysql:host=localhost;dbname=tripnaut','root','root');
		$db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$db->query("SET NAMES 'utf8'");
		return $db;
	}
}