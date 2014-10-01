<?php if ($connected) { 
	echo('{"connected":true, "login":'.json_encode($login).'}');
} else {
	echo('{"connected":false, "error":'.json_encode($error).'}');
} ?>