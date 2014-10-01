<?php if ($locked) { 
	echo('{"locked":true, "locker_id":'.$locker_id.'}');
} else {
	echo('{"locked":false, "error":'.json_encode($error).'}');
} ?>