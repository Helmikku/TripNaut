<?php if ($registered) { 
	echo('{"registered":true}');
} else {
	echo('{"registered":false, "error":'.json_encode($error).'}');
} ?>