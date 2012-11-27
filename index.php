<?php SESSION_START();?>
<!DOCTYPE html>
<html lang="fr">
  	<head>
  	<!--[if lt IE 9]>
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
    	<?php 
    	include('head.html'); ?>
	</head>
	<body>
		<?php 
			include('pages/menu.php')
		;?>
			
		<?php
			include('pages/liens_connect.php')
		?>
	

		<section class="bp home active" id="1">
			<?php 	include('pages/home.php');?>	
		</section>

			<section class="bp presentation" id="2">
			<?php 	include('pages/presentation.php');?>	
		</section>

		<section class="bp forfaits" id="3">
			<?php 	include('pages/forfait.php');?>	
		</section>

		<section class="bp hypnoses" id="4">
			<?php 	include('pages/hypnoses.php');?>	
		</section>
		
		<section class="bp utilisation" id="5">
			<?php 	include('pages/utilisation.php');?>	
		</section>	
		
		<section class="bp impressions" id="6">
			<?php 	include('pages/impressions.php');?>	
		</section>

		<section class="bp contact" id="7">
			<?php 	include('pages/contact.php');?>	
		</section>


	</body>
</html>