<?php
namespace Library\Entities;

class Trip extends \Library\Entity {
	public $country_id, $title, $start, $duration, $blocks, $locked, $locker_id, $creator_id, $administration, $post_time, $edit_time;
	public $nauts = array();
	public $points = array();
	public function setCountry_id($country_id) {
		if ((int) $country_id > 0) {
			$this->country_id = $country_id;
		}
	}
	public function setTitle($title) {
		$title = htmlspecialchars($title);
		if (!empty($title) && is_string($title)) {
			$this->title = $title;
		}
	}
	public function setStart(\DateTime $start) {
		$this->start = $start;
	}
	public function setDuration($duration) {
		if ((int) $duration > 0) {
			$this->duration = $duration;
		}
	}
	public function setBlocks($blocks) {
		$blocks = json_decode($blocks);
		$blocks = json_encode($blocks);
		if (!empty($blocks) && is_string($blocks)) {
			$this->blocks = $blocks;
		}
	}
	public function setLocked($locked) {
		if ((int) $locked > 0) {
			$this->locked = $locked;
		}
	}
	public function setLocker_id($locker_id) {
		if ((int) $locker_id > 0) {
			$this->locker_id = $locker_id;
		}
	}
	public function setCreator_id($creator_id) {
		if ((int) $creator_id > 0) {
			$this->creator_id = $creator_id;
		}
	}
	public function setAdministration($administration) {
		if ((int) $administration > 0) {
			$this->administration = $administration;
		}
	}
	public function setPost_time(\DateTime $post_time) {
		$this->post_time = $post_time;
	}
	public function setEdit_time(\DateTime $edit_time) {
		$this->edit_time = $edit_time;
	}
	public function setNauts(array $nauts) {
		foreach ($nauts as $naut) {
			if ($naut->isValid()) {
				$this->nauts[] = $naut;
			}
		}
	}
	public function setPoints(array $points) {
		foreach ($points as $point) {
			if ($point->isValid()) {
				$this->points[] = $point;
			}
		}
	}
	public function country_id() {
		return $this->country_id;
	}
	public function title() {
		return $this->title;
	}
	public function start() {
		return $this->start;
	}
	public function duration() {
		return $this->duration;
	}
	public function blocks() {
		return $this->blocks;
	}
	public function locked() {
		return $this->locked;
	}
	public function locker_id() {
		return $this->locker_id;
	}
	public function creator_id() {
		return $this->creator_id;
	}
	public function administration() {
		return $this->administration;
	}
	public function post_time() {
		return $this->post_time;
	}
	public function edit_time() {
		return $this->edit_time;
	}
	public function nauts() {
		return $this->nauts;
	}
	public function points() {
		return $this->points;
	}
	public function isValid() {
		return !(empty($this->title) || empty($this->start) || empty($this->duration) || empty($this->blocks) || empty($this->creator_id) || empty($this->administration) || empty($this->nauts));
	}
}