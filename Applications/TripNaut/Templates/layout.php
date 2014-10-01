<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title><?php if (isset($page_title)) { echo($page_title); } else { echo('TripNaut'); } ?></title>
		<link rel="stylesheet" type="text/css" href="/css/tripnaut_layout.css">
		<link rel="stylesheet" type="text/css" href="/css/tripnaut_style.css">
		
<! -- Ajouté récemment, a nettoyer -->
		<link rel="stylesheet" type="text/css" href="/css/tripnaut_maps.css">
		<!-- LEAFLET initialization -->
		<link rel="stylesheet" href="/javascript/leaflet/leaflet.css" />
		<link rel="stylesheet" href="/javascript/leaflet/leaflet.label.css" />
		<!--[if lte IE 8]>
		<link rel="stylesheet" href="/javascript/leaflet/leaflet.ie.css" />
	    <![endif]-->
 
	    <script src="/javascript/leaflet/leaflet.js"></script> 
	    <script src="/javascript/leaflet/leaflet.label.js"></script>
	    <script type="text/javascript" src="http://maps.stamen.com/js/tile.stamen.js?v1.2.3"></script>
	   
<! -- Ajouté récemment, a nettoyer -->

		<script src="/javascript/tripnaut.js"></script>
		<script src="/javascript/tripnaut_maps.js"></script>
		<script src="/javascript/tripnaut_naut.js"></script>
		<script src="/javascript/tripnaut_trip.js"></script>
		<script src="/javascript/world.js"></script>
	</head>
	<body id="tripnaut">
		<header id="header">
			<nav id="breadcrumb">
				<ul>
					<li><a href="/">Trip<span style="color:#CCC;">Naut</span></a></li>
					<?php
						if (isset($breadcrumb)) {
							foreach ($breadcrumb as $crumb => $link) {
								echo('<li><span> : </span></li><li><a href="'.$link.'">'.$crumb.'</a></li>');
							}
						}
					?>
				</ul>
			</nav>
			<div id="menu"></div>
			<div id="user">
				<?php
					if ($user->connected()) {
						echo('<p>Ahoy '.$user->login().'!</p>');
					} else {
						echo('<form onsubmit="login(document.getElementById(\'email\').value,document.getElementById(\'password\').value); return false;">');
						$naut = new \Library\Entities\Naut();
						$form = new \Library\Forms\LoginForm($naut);
						$form->show();
						echo('<input type="submit" value="Connexion"/></form>');
					}
					if ($user->hasFlash()) {
						echo('<div id="flash"><p>'.$user->getFlash().'</p></div>');
					}
				?>
			</div>
		</header>
		<section id="section">
			<?php echo($content); ?>
		</section>
		<footer id="footer"></footer>
	</body>
</html>