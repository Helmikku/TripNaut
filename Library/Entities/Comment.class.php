<?php
namespace Library\Entities;

class Comment extends \Library\Entity {
	public $trip_id, $naut_id, $body, $post_time, $edit_time;
	public function setTrip_id($trip_id) {
		if ((int) $trip_id > 0) {
			$this->trip_id = $trip_id;
		}
	}
	public function setNaut_id($naut_id) {
		if ((int) $naut_id > 0) {
			$this->naut_id = $naut_id;
		}
	}
	public function setBody($body) {
		$body = htmlspecialchars($body);
		if (!empty($body) && is_string($body)) {
			$this->body = $body;
		}
	}
	public function setPost_time(\DateTime $post_time) {
		$this->post_time = $post_time;
	}
	public function setEdit_time(\DateTime $edit_time) {
		$this->edit_time = $edit_time;
	}
	public function trip_id() {
		return $this->trip_id;
	}
	public function naut_id() {
		return $this->naut_id;
	}
	public function body() {
		return $this->body;
	}
	public function post_time() {
		return $this->post_time;
	}
	public function edit_time() {
		return $this->edit_time;
	}
	public function isValid() {
		return !(empty($this->trip_id) || empty($this->naut_id) || empty($this->body));
	}
}