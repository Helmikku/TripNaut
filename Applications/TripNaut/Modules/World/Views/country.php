<div id="aside" class="col">
	<?php if ($user->connected() && !isset($trip)) {
		echo('<div id="create"><form onsubmit="createTrip(country.id,document.getElementById(\'title\').value,document.getElementById(\'start\').value,document.getElementById(\'duration\').value,\'loader\',document.getElementById(\'aside\'),document.getElementById(\'menu\'),document.getElementById(\'time_panel\')); return false;">');
		$form = new \Library\Forms\TripsForm(new \Library\Entities\Trip);
		$form->show();
		echo('<input type="submit" value="Create a trip !"/></form></div>');
	} ?>
</div>
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
var menu = document.getElementById('menu');
var time = document.getElementById('aside');
var time_panel = document.getElementById('time_panel');
var loadedZones=[];
var loadedPOIs=[];
	<?php
		// User
		if ($user->connected()) {
			echo('var user = new Naut('.$user->id().','.json_encode($user->login()).',0,new Panel(document.getElementById(\'user_panel\'),[[null,-200,null,null],[null,0,null,null]])); user.panel.addTab([],document.createTextNode(\'N\'));');
		} else {
			echo('var user = new Naut(0,\'anonymous\',0,new Panel(document.getElementById(\'user_panel\'),[[null,-200,null,null],[null,0,null,null]]));');
		}
		// World
		echo('var country = new Country('.$country['id'].','.json_encode($country['title']).','.json_encode($country['teaser']).','.$country['shape'].');');
		echo('loadedCountries[country.id] = country;');
		foreach ($zones as $zone) {
			echo('loadedZones['.($zone['id']-1).'] = new Zone ('.$zone['id'].','.json_encode($zone['title']).','.json_encode($zone['teaser']).',{"center":['.($zone['Lat'] / 1000000).','.($zone['Lng'] / 1000000).'],"radius":'.$zone['radius'].'});');
		}
		// Trip
		if (isset($trip)) {
			echo('var trip; buildTrip('.json_encode($trip).',false,time,menu,time_panel);');
		}
	?>
	var map = null;
	init();
</script>