<?php if ($created) { 
	echo('{"created":true, "trip_id":'.$trip_id.'}');
} else {
	echo('{"created":false, "error":'.json_encode($error).'}');
} ?>