<div id="aside" class="col"></div>
<div id="content" class="col">
	<div id="left">
		<div id="guide"></div>
		<div id="time_panel"></div>
	</div>
	<div id="right">
		<div id="map"></div>
		<div id="user_panel"></div>
	</div>
</div>
<script>
	// --- USER ---
	var user = new Naut(<?php echo($user->id()); ?>, <?php echo(json_encode($user->login())); ?>, 2, new Panel(document.getElementById('user_panel'),[[null,-200,null,null],[null,0,null,null]]));
		user.panel.addTab([],document.createTextNode('N'));
	var comments = [];
		<?php foreach ($comments as $comment) { ?>
		comments.push(createElement('p',[{name: 'class', value: 'comment'}],[document.createTextNode(<?php echo(json_encode($trip_nauts[$comment['naut_id']]->login())); ?>+': '+<?php echo(json_encode($comment['body'])); ?>)],false,null,null));
		<?php } ?>
	var comments_list = createElement('div',[{name: 'id', value: 'comments_list'}],comments,false,null,null);
	var comment_input = createElement('input',[{name: 'type', value: 'text'}],[],false,null,null);
	var handler = function(e) { e.preventDefault(); trip.comment(comment_input.value,comments_list,'loader'); comment_input.value = ''; };
	var comment_form = createElement('form',[],[comment_input,createElement('input',[{name: 'type', value: 'submit'},{name: 'value', value: 'Comment'}],[],false,null,null)],true,'submit',handler);
	user.panel.addTab([comment_form,comments_list],document.createTextNode('C'));
	
	// --- WORLD ---
	<?php
		echo('loadedCountries['.$country['id'].'] = new Country('.$country['id'].','.json_encode($country['title']).','.json_encode($country['teaser']).','.$country['shape'].');');
		foreach ($zones as $zone) {
			echo('loadedZones['.$zone['id'].'] = new Zone ('.$zone['id'].','.json_encode($zone['title']).','.json_encode($zone['teaser']).',{"center":['.($zone['Lat'] / 1000000).','.($zone['Lng'] / 1000000).'],"radius":'.$zone['radius'].'});');
		}
		foreach ($trip['points'] as $point) {
			echo('loadedPOIs['.$point['id'].'] = new POI ('.$point['id'].','.json_encode($point['title']).','.json_encode($point['teaser']).',['.($point['Lat'] / 1000000).','.($point['Lng'] / 1000000).']);');
		}
	?>
	
	// --- TRIP ---
	var trip = new Trip(<?php echo($trip['id']); ?>,<?php echo(json_encode($trip['title'])); ?>,new Date("<?php echo($trip['start']->format('m/d/Y')); ?>"),<?php echo($trip['duration']);?>,<?php echo($trip['blocks']); ?>,<?php echo($trip['locked']); ?>,<?php echo($trip['locker_id']); ?>,<?php echo($trip['creator_id']); ?>,<?php echo($trip['administration']); ?>,[],true,true,new Panel(document.getElementById('time_panel'),[[null,null,null,-200],[null,null,null,0]]));
		trip.showOnTime(document.getElementById('aside'));
		trip.buildMenu(document.getElementById('menu'));

	// --- MAP ---
	var map = null;
	init();
</script>