<?php
namespace Library\Forms;

class LoginForm extends \Library\Form {
	public function __construct(\Library\Entity $entity) {
		parent::__construct($entity);
		$this->add(new \Library\Fields\StringField(array(
			'label' => 'Email',
			'name' => 'email',
			'validators' => array(
				new \Library\Validators\NotNullValidator('Don\'t forget your email :)'),
				new \Library\Validators\EmailValidator('Is that an email ?'),
			),
		)));
		$this->add(new \Library\Fields\PasswordField(array(
			'label' => 'Password',
			'name' => 'password',
			'validators' => array(
				new \Library\Validators\NotNullValidator('Don\'t forget your password :)'),
			),
		)));
	}
}