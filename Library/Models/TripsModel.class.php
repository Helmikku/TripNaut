<?php
namespace Library\Models;

use \Library\Entities\Trip;
use \Library\Entities\Naut;
use \Library\Entities\Point;
use \Library\Entities\Comment;

abstract class TripsModel extends \Library\Model {
	abstract public function getTrips($start = -1, $limit = -1);
	
	abstract public function addTrip(Trip $trip);
	abstract public function addTripNautRole($trip_id, $naut_id, $role);
	abstract public function addTripPoint($trip_id, $point_id);
	abstract public function updateTrip(Trip $trip);
	abstract public function updateTripPoints($trip_id, $points_id);
	abstract public function deleteTrip($trip_id);
	abstract public function deleteTripPoints($trip_id);
	abstract public function getTrip($trip_id);
	abstract public function getTripNautRole($trip_id, $naut_id);
	abstract public function lockTrip($trip_id, $user_id);
	abstract public function readTrip($trip_id, $user_id);
	abstract public function unlockTrip($trip_id);
	
	abstract public function getComments($trip_id, $start = -1, $limit = -1);
	
	abstract public function addComment(Comment $comment);
	abstract public function updateComment(Comment $comment);
	abstract public function deleteComment($comment_id);
	abstract public function getComment($comment_id);
}