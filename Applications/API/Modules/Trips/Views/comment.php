<?php if ($commented) { 
	echo('{"commented":true, "comment_id":'.$comment_id.'}');
} else {
	echo('{"commented":false, "error":'.json_encode($error).'}');
} ?>