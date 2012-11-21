<?php SESSION_START();?>
<!DOCTYPE html>
<html lang="fr">
  	<head>
    	<?php 
    	include('head.html'); ?>
	</head>
	<body>
		<div class="logo">
			<img src="images/elements/logo/normal.png" alt="logo du site">
		</div>
		<?php 
		include('pages/menu.php')
		;?>
<?php
	error_reporting(E_ALL & ~E_NOTICE);
	switch ($_GET['page'])
	{
	case 'home':
			?>
		<div class="bp home" id="1">
			<?php 
			include('pages/home.php')
			;?>	
		</div>

		<?php
		break;

	case 'presentation':
		?>
			<div class="bp presentation" id="2">
			<?php 
			include('pages/presentation.php')
			;?>	
		</div>
		<?php

		break;

	case 'forfaits':
		?>
			<div class="bp forfait" id="3">
			<?php 
			include('pages/forfait.php')
			;?>	
		</div>
		<?php

		break;

	case 'hypnoses':
		?>
			<div class="bp hypnoses" id="4">
			<?php 
			include('pages/hypnoses.php')
			;?>	
		</div>
		<?php

		break;

	case 'utilisation':
		?>
			<div class="bp utilisation" id="5">
			<?php 
			include('pages/utilisation.php')
			;?>	
		</div>	
		<?php

		break;

	case 'contact':
		?>
			<div class="bp contact" id="6">
			<?php 
			include('pages/contact.php')
			;?>	
		</div>
		<?php

		break;

	default:
	?>
		<div class="bp home" id="1">
			<?php 
			include('pages/home.php')
			;?>	
		</div>

		<?php		break;
		
	}

	?>



		<!-- <div class="logo">
			<img src="images/elements/logo/normal.png" alt="logo du site">
		</div>
		<?php 
		include('pages/menu.php')
		;?> -->
		
<!-- 
		<div class="bp home" id="1">
			<?php 
			// include('pages/home.php')
			;?>	
		</div>

		<div class="bp presentation" id="2">
			<?php 
			// include('pages/presentation.php')
			;?>	
		</div>
		
		<div class="bp forfait" id="3">
			<?php 
			// include('pages/forfait.php')
			;?>	
		</div>
		
		<div class="bp hypnoses" id="4">
			<?php 
			// include('pages/hypnoses.php')
			;?>	
		</div>
		
		<div class="bp utilisation" id="5">
			<?php 
			// include('pages/utilisation.php')
			;?>	
		</div>	
		
		<div class="bp impressions" id="6">
			<?php 
			// include('pages/impressions.php')
			;?>	
		</div>	 -->


	</body>
</html>