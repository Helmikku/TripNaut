<?php if ($found) {
	echo('{"found":true, "points":'.json_encode($points, JSON_NUMERIC_CHECK).'}');
} else {
	echo('{"found":false, "error":'.json_encode($error).'}');
} ?>