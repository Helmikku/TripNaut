<?php if ($unlocked) { 
	echo('{"unlocked":true}');
} else {
	echo('{"unlocked":false, "error":'.json_encode($error).'}');
} ?>