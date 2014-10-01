<div id="aside" class="col">
	<div id="create">
		<?php if ($user->connected()) {
			echo('<form onsubmit="createTrip(document.getElementById(\'country_id\').value,document.getElementById(\'title\').value,document.getElementById(\'start\').value,document.getElementById(\'duration\').value,\'loader\'); return false;">');
			$trip = new \Library\Entities\Trip;
			$form = new \Library\Forms\TripsForm($trip);
			$form->show();
			echo('<input type="submit" value="Create a trip !"/></form>');
		} ?>
	</div>
</div>
<div id="content" class="col">
	<?php foreach ($trips as $trip) {
		echo('<h2><a href="/trips/'.$trip['id'].'">'.$trip['title'].'</a></h2><p>'.$trip['start']->format('Y-m-d').' - '.$trip['duration'].' jours</p><p>Créateur : '.$trip['creator_id'].' - Mode : '.nl2br($trip['administration']).'</p>');
	} ?>
</div>