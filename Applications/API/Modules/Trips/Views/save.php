<?php if ($saved) { 
	echo('{"saved":true}');
} else {
	echo('{"saved":false, "error":'.json_encode($error).'}');
} ?>