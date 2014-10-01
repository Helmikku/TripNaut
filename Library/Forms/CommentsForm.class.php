<?php
namespace Library\Forms;

class CommentsForm extends \Library\Form {
	public function __construct(\Library\Entity $entity) {
		parent::__construct($entity);
		$this->add(new \Library\Fields\StringField(array(
			'label' => 'Commentaire',
			'name' => 'comment_body',
			'validators' => array(
				new \Library\Validators\NotNullValidator('Votre commentaire est vide')
			),
		)));
	}
}