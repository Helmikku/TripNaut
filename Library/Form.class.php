<?php
namespace Library;

class Form {
	protected $entity;
	protected $fields;
	public function __construct(Entity $entity) {
		$this->entity = $entity;
	}
	public function entity() {
		return $this->entity;
	}
	public function fields() {
		return $this->fields;
	}
	public function add(Field $field) {
		$attribute = $field->name();
		if (is_callable(array($this->entity(), $attribute))) {
			$field->setValue($this->entity->$attribute());
		}
		$this->fields[] = $field;
	}
	public function isValid() {
		foreach ($this->fields as $field) {
			if (!$field->isValid()) {
				return false;
			}
		}
		return true;
	}
	public function show() {
		$view = '';
		foreach ($this->fields as $field) {
			$view .= $field->show();
		}
		echo $view;
	}
}