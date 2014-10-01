<?php
namespace Library\Models;

use \Library\Entities\Country;
use \Library\Entities\Zone;
use \Library\Entities\Point;

class WorldModel_PDO extends WorldModel {
	public function getCountries($start = -1, $limit = -1) {
		$sql = 'SELECT id, shape, title, teaser, contents FROM countries';
		if ($start != -1 || $limit != -1) {
			$sql .= ' LIMIT '.(int) $limit.' OFFSET '.(int) $start;
		}
		$query = $this->dao->query($sql);
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Country');
		return $query->fetchAll();
	}
	public function getCountry($country_id) {
		$query = $this->dao->prepare('SELECT * FROM countries WHERE id = :id');
		$query->bindValue(':id', $country_id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Country');
		return $query->fetch();
	}
	public function getCountryPoints($country_id, $start = -1, $limit = -1) {
		$sql = 'SELECT id, zone_id, country_id, Lat, Lng, title, teaser FROM points WHERE country_id = :country_id ';
		if ($start != -1 || $limit != -1) {
			$sql .= ' LIMIT '.(int) $limit.' OFFSET '.(int) $start;
		}
		$query = $this->dao->prepare($sql);
		$query->bindValue(':country_id', $country_id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Point');
		return $query->fetchAll();
	}
	public function getZones($country_id, $start = -1, $limit = -1) {
		$sql = 'SELECT id, country_id, Lat, Lng, radius, title, teaser FROM zones WHERE country_id = :country_id ';
		if ($start != -1 || $limit != -1) {
			$sql .= ' LIMIT '.(int) $limit.' OFFSET '.(int) $start;
		}
		$query = $this->dao->prepare($sql);
		$query->bindValue(':country_id', $country_id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Zone');
		return $query->fetchAll();
	}
	public function getZone($zone_id) {
		
	}
	public function getZonePoints($zone_id, $start = -1, $limit = -1) {
		$sql = 'SELECT id, zone_id, country_id, Lat, Lng, title, teaser FROM points WHERE zone_id = :zone_id ';
		if ($start != -1 || $limit != -1) {
			$sql .= ' LIMIT '.(int) $limit.' OFFSET '.(int) $start;
		}
		$query = $this->dao->prepare($sql);
		$query->bindValue(':zone_id', $zone_id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Point');
		return $query->fetchAll();
	}
	public function searchPoints($text, $start = -1, $limit = -1) {
		$search = mysql_real_escape_string($text);
		$sql = "SELECT id, zone_id, country_id, Lat, Lng, title, teaser FROM points WHERE title LIKE '%{$search}%'";
		if ($start != -1 || $limit != -1) {
			$sql .= ' LIMIT '.(int) $limit.' OFFSET '.(int) $start;
		}
		$query = $this->dao->query($sql);
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Point');
		return $query->fetchAll();
	}
	public function getPoint($point_id) {
		
	}
}