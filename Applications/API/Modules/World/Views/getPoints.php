<?php if ($got) {
	echo('{"got":true, "points":'.json_encode($points, JSON_NUMERIC_CHECK).'}');
} else {
	echo('{"got":false, "error":'.json_encode($error).'}');
} ?>