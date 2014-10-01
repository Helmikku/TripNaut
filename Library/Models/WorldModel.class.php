<?php
namespace Library\Models;

use \Library\Entities\Country;
use \Library\Entities\Zone;
use \Library\Entities\Point;

abstract class WorldModel extends \Library\Model {
	abstract public function getCountries($start = -1, $limit = -1);
	
	abstract public function getCountry($country_id);
	abstract public function getCountryPoints($country_id, $start = -1, $limit = -1);
	
	abstract public function getZones($country_id, $start = -1, $limit = -1);
	
	abstract public function getZone($zone_id);
	abstract public function getZonePoints($zone_id, $start = -1, $limit = -1);
	
	abstract public function searchPoints($text, $start = -1, $limit = -1);
	
	abstract public function getPoint($point_id);
}