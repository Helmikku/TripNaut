<?php
namespace Library\Entities;

class Zone extends \Library\Entities\Item {
	public $country_id, $radius;
	public function setCountry_id($country_id) {
		if ((int) $country_id > 0) {
			$this->country_id = $country_id;
		}
	}
	public function setRadius($radius) {
		$this->radius = (int) $radius;
	}
	public function country_id() {
		return $this->country_id;
	}
	public function radius() {
		return $this->radius;
	}
	public function isValid() {
		return !(empty($this->country_id) || empty($this->radius) || empty($this->Lat) || empty($this->Lng) || empty($this->title));
	}
}