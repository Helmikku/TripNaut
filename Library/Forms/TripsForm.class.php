<?php
namespace Library\Forms;

class TripsForm extends \Library\Form {
	public function __construct(\Library\Entity $entity) {
		parent::__construct($entity);
		$this->add(new \Library\Fields\StringField(array(
			'label' => 'Name your awesome trip !',
			'name' => 'title',
			'maxLength' => 15,
			'validators' => array(
				new \Library\Validators\NotNullValidator('You need to give your trip a name ;)'),
				new \Library\Validators\MaxLengthValidator('No more than 15 characters please :)',15)
			),
		)));
		$this->add(new \Library\Fields\StringField(array(
			'label' => 'When does it start ? (YYYY-MM-DD)',
			'name' => 'start',
			'maxLength' => 10,
			'validators' => array(
				new \Library\Validators\NotNullValidator('You need to give your trip a first day ;)')
			),
		)));
		$this->add(new \Library\Fields\StringField(array(
			'label' => 'Duration',
			'name' => 'duration',
			'maxLength' => 3,
			'validators' => array(
				new \Library\Validators\PositiveIntValidator('Write a duration with a number of days.')
			),
		)));
	}
}