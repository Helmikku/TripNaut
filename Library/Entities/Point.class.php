<?php
namespace Library\Entities;

class Point extends \Library\Entities\Item {
	public $zone_id, $country_id;
	public function setZone_id($zone_id) {
		if ((int) $zone_id > 0) {
			$this->zone_id = $zone_id;
		}
	}
	public function setCountry_id($country_id) {
		if ((int) $country_id > 0) {
			$this->country_id = $country_id;
		}
	}
	public function zone_id() {
		return $this->zone_id;
	}
	public function country_id() {
		return $this->country_id;
	}
	public function isValid() {
		return !(empty($this->zone_id) || empty($this->country_id) || empty($this->Lat) || empty($this->Lng) || empty($this->title));
	}
}