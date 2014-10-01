<?php if ($got) {
	echo('{"got":true, "comments":'.json_encode($comments, JSON_NUMERIC_CHECK).'}');
} else {
	echo('{"got":false, "error":'.json_encode($error).'}');
} ?>