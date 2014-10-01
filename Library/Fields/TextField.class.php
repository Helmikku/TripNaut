<?php
namespace Library\Fields;

class TextField extends \Library\Field {
	protected $cols;
	protected $rows;
	public function setCols($cols) {
		if ((int) $cols > 0) {
			$this->cols = $cols;
		}
	}
	public function setRows($rows) {
		if ((int) $rows > 0) {
			$this->rows = $rows;
		}
	}
	public function show() {
		$field = '';
		if (!empty($this->error)) {
			$field .= $this->error.'<br />';
		}
		$field .= '<label for="'.$this->name.'">'.$this->label.'</label><textarea id="'.$this->name.'" name="'.$this->name.'"';
		if (!empty($this->cols)) {
			$field .= ' cols="'.$this->cols.'"';
		}
		if (!empty($this->rows)) {
			$field .= ' rows="'.$this->rows.'"';
		}
		$field .= '>';
		if (!empty($this->value)) {
			$field .= htmlspecialchars($this->value);
		}
		return $field.'</textarea>';
	}
}