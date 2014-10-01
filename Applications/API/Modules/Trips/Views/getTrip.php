<?php if ($got) {
	echo('{"got":true, "trip":'.json_encode($trip, JSON_NUMERIC_CHECK).'}');
} else {
	echo('{"got":false, "error":'.json_encode($error).'}');
} ?>