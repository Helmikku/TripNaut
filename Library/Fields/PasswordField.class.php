<?php
namespace Library\Fields;

class PasswordField extends \Library\Field {
	protected $maxLength;
	public function setMaxLength($maxLength) {
		if ((int) $maxLength > 0) {
			$this->maxLength = $maxLength;
		}
	}
	public function show() {
		$field = '';
		if (!empty($this->error)) {
			$field .= $this->error.'<br />';
		}
		$field .= '<label for="'.$this->name.'">'.$this->label.'</label><input type="password" id="'.$this->name.'" name="'.$this->name.'"';
		if (!empty($this->value)) {
			$field .= ' value="'.htmlspecialchars($this->value).'"';
		}
		if (!empty($this->maxLength)) {
			$field .= ' maxlength="'.$this->maxLength.'"';
		}
		return $field .= ' />';
	}
}