<?php
namespace Library\Entities;

class Country extends \Library\Entities\Item {
	public $shape, $contents;
	public function setShape($shape) {
		$shape = htmlspecialchars($shape);
		if (!empty($shape) && is_string($shape)) {
			$this->shape = $shape;
		}
	}
	public function setContents($contents) {
		$contents = htmlspecialchars($contents);
		if (!empty($contents) && is_string($contents)) {
			$this->contents = $contents;
		}
	}
	public function shape() {
		return $this->shape;
	}
	public function contents() {
		return $this->contents;
	}
	public function isValid() {
		return !(empty($this->shape) || empty($this->title));
	}
}