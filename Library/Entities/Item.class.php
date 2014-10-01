<?php
namespace Library\Entities;

abstract class Item extends \Library\Entity {
	public $Lat, $Lng, $title, $teaser;
	public function setLat($Lat) {
		$this->Lat = (int) $Lat;
	}
	public function setLng($Lng) {
		$this->Lng = (int) $Lng;
	}
	public function setTitle($title) {
		$title = htmlspecialchars($title);
		if (!empty($title) && is_string($title)) {
			$this->title = $title;
		}
	}
	public function setTeaser($teaser) {
		$teaser = htmlspecialchars($teaser);
		if (!empty($teaser) && is_string($teaser)) {
			$this->teaser = $teaser;
		}
	}
	public function Lat() {
		return $this->Lat;
	}
	public function Lng() {
		return $this->Lng;
	}
	public function title() {
		return $this->title;
	}
	public function teaser() {
		return $this->teaser;
	}
}