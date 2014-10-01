<?php
namespace Library\Models;

use \Library\Entities\Trip;
use \Library\Entities\Naut;
use \Library\Entities\Point;
use \Library\Entities\Comment;

class TripsModel_PDO extends TripsModel {
	public function getTrips($start = -1, $limit = -1) {
		$sql = 'SELECT id, country_id, title, start, duration, locked, locker_id, creator_id, administration, post_time, edit_time FROM trips ORDER BY id DESC';
		if ($start != -1 || $limit != -1) {
			$sql .= ' LIMIT '.(int) $limit.' OFFSET '.(int) $start;
		}
		$query = $this->dao->query($sql);
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Trip');
		$trips = $query->fetchAll();
		foreach ($trips as $trip) {
			$trip->setStart(new \DateTime($trip->start()));
			$trip->setPost_time(new \DateTime($trip->post_time()));
			$trip->setEdit_time(new \DateTime($trip->edit_time()));
		}
		$query->closeCursor();
		return $trips;
	}
	public function addTrip(Trip $trip) {
		$query = $this->dao->prepare('INSERT INTO trips SET country_id = :country_id, title = :title, start = :start, duration = :duration, blocks = :blocks, locked = :locked, locker_id = :locker_id, creator_id = :creator_id, administration = :administration, post_time = NOW(), edit_time = NOW()');
		$query->bindValue(':country_id', $trip->country_id(), \PDO::PARAM_INT);
		$query->bindValue(':title', $trip->title(), \PDO::PARAM_STR);
		$query->bindValue(':start', $trip->start()->format('Y-m-d'), \PDO::PARAM_STR);
		$query->bindValue(':duration', $trip->duration(), \PDO::PARAM_INT);
		$query->bindValue(':blocks', $trip->blocks(), \PDO::PARAM_STR);
		$query->bindValue(':locked', $trip->locked(), \PDO::PARAM_INT);
		$query->bindValue(':locker_id', $trip->locker_id(), \PDO::PARAM_INT);
		$query->bindValue(':creator_id', $trip->creator_id(), \PDO::PARAM_INT);
		$query->bindValue(':administration', $trip->administration(), \PDO::PARAM_INT);
		$query->execute();
		$trip->setId($this->dao->lastInsertId());
		foreach ($trip->nauts() as $naut) {
			$this->addTripNautRole($trip->id(), $naut->id(), $naut->role());
		}
		$query->closeCursor();
	}
	public function addTripNautRole($trip_id, $naut_id, $role) {
		$query = $this->dao->prepare('INSERT INTO trips_roles SET trip_id = :trip_id, naut_id = :naut_id, role = :role ON DUPLICATE KEY UPDATE role = :role');
		$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
		$query->bindValue(':naut_id', $naut_id, \PDO::PARAM_INT);
		$query->bindValue(':role', $role, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function addTripPoint($trip_id, $point_id) {
		$query = $this->dao->prepare('INSERT IGNORE INTO trips_points SET trip_id = :trip_id, point_id = :point_id');
		$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
		$query->bindValue(':point_id', $point_id, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function updateTrip(Trip $trip) {
		$query = $this->dao->prepare('UPDATE trips SET country_id = :country_id, title = :title, start = :start, duration = :duration, blocks = :blocks, administration = :administration, edit_time = NOW() WHERE id = :id');
		$query->bindValue(':country_id', $trip->country_id(), \PDO::PARAM_INT);
		$query->bindValue(':title', $trip->title(), \PDO::PARAM_STR);
		$query->bindValue(':start', $trip->start()->format('Y-m-d'), \PDO::PARAM_STR);
		$query->bindValue(':duration', $trip->duration(), \PDO::PARAM_INT);
		$query->bindValue(':blocks', $trip->blocks(), \PDO::PARAM_STR);
		$query->bindValue(':administration', $trip->administration(), \PDO::PARAM_INT);
		$query->bindValue(':id', $trip->id(), \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function updateTripPoints($trip_id, $points_id) {
		$this->deleteTripPoints($trip_id);
		foreach ($points_id as $point_id) {
			$this->addTripPoint($trip_id, $point_id);
		}
	}
	public function deleteTrip($trip_id) {
		$query = $this->dao->prepare('DELETE FROM trips WHERE id = :id');
		$query->bindValue(':id', $trip_id, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function deleteTripPoints($trip_id) {
		$query = $this->dao->prepare('DELETE FROM trips_points WHERE trip_id = :trip_id');
		$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function getTrip($trip_id) {
		$query = $this->dao->prepare('SELECT * FROM trips WHERE id = :id');
		$query->bindValue(':id', $trip_id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Trip');
		if ($trip = $query->fetch()) {
			$trip->setStart(new \DateTime($trip->start()));
			$trip->setPost_time(new \DateTime($trip->post_time()));
			$trip->setEdit_time(new \DateTime($trip->edit_time()));
			$query->closeCursor();
			$query = $this->dao->prepare('SELECT id, login, rank, role FROM trips_roles INNER JOIN nauts ON trips_roles.naut_id = nauts.id WHERE trip_id = :trip_id');
			$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
			$query->execute();
			$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Naut');
			$nauts = $query->fetchAll();
			$trip->setNauts($nauts);
			$query->closeCursor();
			$query = $this->dao->prepare('SELECT id, zone_id, country_id, Lat, Lng, title, teaser FROM trips_points INNER JOIN points ON trips_points.point_id = points.id WHERE trip_id = :trip_id');
			$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
			$query->execute();
			$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Point');
			$points = $query->fetchAll();
			$trip->setPoints($points);
			$query->closeCursor();
			return $trip;
		}
		$query->closeCursor();
		return null;
	}
	public function getTripNautRole($trip_id, $naut_id) {
		$query = $this->dao->prepare('SELECT role FROM trips_roles WHERE trip_id = :trip_id AND naut_id = :naut_id');
		$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
		$query->bindValue(':naut_id', $naut_id, \PDO::PARAM_INT);
		$query->execute();
		if ($result = $query->fetch()) {
			$query->closeCursor();
			return (int) $result['role'];
		}
		$query->closeCursor();
		return 0;
	}
	public function lockTrip($trip_id, $user_id) {
		$query = $this->dao->prepare('UPDATE trips SET locked = 1, locker_id = :locker_id WHERE id = :id');
		$query->bindValue(':locker_id', $user_id, \PDO::PARAM_INT);
		$query->bindValue(':id', $trip_id, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function readTrip($trip_id, $user_id) {
		$query = $this->dao->prepare('INSERT INTO trips_views SET trip_id = :trip_id, naut_id = :naut_id, views = 1, view_time = NOW() ON DUPLICATE KEY UPDATE views = views + 1, view_time = NOW()');
		$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
		$query->bindValue(':naut_id', $user_id, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function unlockTrip($trip_id) {
		$query = $this->dao->prepare('UPDATE trips SET locked = 2 WHERE id = :id');
		$query->bindValue(':id', $trip_id, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function getComments($trip_id, $start = -1, $limit = -1) {
		$sql = 'SELECT id, trip_id, naut_id, body, post_time, edit_time FROM comments WHERE trip_id = :trip_id ORDER BY id DESC';
		if ($start != -1 || $limit != -1) {
			$sql .= ' LIMIT '.(int) $limit.' OFFSET '.(int) $start;
		}
		$query = $this->dao->prepare($sql);
		$query->bindValue(':trip_id', $trip_id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Comment');
		$comments = $query->fetchAll();
		foreach ($comments as $comment) {
			$comment->setPost_time(new \DateTime($comment->post_time()));
			$comment->setEdit_time(new \DateTime($comment->edit_time()));
		}
		$query->closeCursor();
		return $comments;
	}
	public function addComment(Comment $comment) {
		$query = $this->dao->prepare('INSERT INTO comments SET trip_id = :trip_id, naut_id = :naut_id, body = :body, post_time = NOW(), edit_time = NOW()');
		$query->bindValue(':trip_id', $comment->trip_id(), \PDO::PARAM_INT);
		$query->bindValue(':naut_id', $comment->naut_id(), \PDO::PARAM_INT);
		$query->bindValue(':body', $comment->body(), \PDO::PARAM_STR);
		$query->execute();
		$comment->setId($this->dao->lastInsertId());
		$query->closeCursor();
	}
	public function updateComment(Comment $comment) {
		$query = $this->dao->prepare('UPDATE comments SET body = :body, edit_time = NOW() WHERE id = :id');
		$query->bindValue(':body', $comment->body(), \PDO::PARAM_STR);
		$query->bindValue(':id', $comment->id(), \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function deleteComment($comment_id) {
		$query = $this->dao->prepare('DELETE FROM comments WHERE id = :id');
		$query->bindValue(':id', $comment_id, \PDO::PARAM_INT);
		$query->execute();
		$query->closeCursor();
	}
	public function getComment($comment_id) {
		$query = $this->dao->prepare('SELECT * FROM comments WHERE id = :id');
		$query->bindValue(':id', $comment_id, \PDO::PARAM_INT);
		$query->execute();
		$query->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, '\Library\Entities\Comment');
		if ($comment = $query->fetch()) {
			$comment->setPost_time(new \DateTime($comment->post_time()));
			$comment->setEdit_time(new \DateTime($comment->edit_time()));
			$query->closeCursor();
			return $comment;
		}
		$query->closeCursor();
		return null;
	}
}