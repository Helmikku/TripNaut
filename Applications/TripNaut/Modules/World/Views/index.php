<div id="content">
	<div id="left">
		<?php foreach ($countries as $country) {
			echo('<h1><a href="/countries/'.$country['id'].'/'.$country['title'].'">'.$country['title'].'</a></h1><p>'.$country['teaser'].'</p><p>'.$country['contents'].'</p>');
		} ?>
	</div>
	<div id="right"></div>
	<script> 
	
	<?php
		echo('loadedCountries['.$country['id'].'] = new Country('.$country['id'].','.json_encode($country['title']).','.json_encode($country['teaser']).','.$country['shape'].');');

	?>
		init_world(); 
	
	</script>
</div>