
    	var canvas    = document.getElementById('myCanvas');
    	var winWidth  = window.innerWidth;
    	var winHeight = window.innerHeight;

    	canvas.width  = winWidth;
    	canvas.height = winHeight;
      
    	if(canvas && canvas.getContext){  
      
       		var context = canvas.getContext('2d'); //On initialise le canvas

          var centerx = winWidth / 2;
          var centery = winHeight / 2;

          //console.log(winWidth + " " + winHeight + " " +centerx + " " + centery);

          context.clearRect(0, 0, winWidth, winHeight);
			    context.moveTo(centerx,centery); 		//On se déplace au centre du repère
          context.beginPath();

          //Customisation
			    context.strokeStyle = '#000000'; // Noir
    		  context.lineWidth = 0;

          var x,y;
      		var a = 12;
          var b = 12;
			  
          for (i = 0; i < 720; i++) {
              angle = 0.1 * i;
              x = centerx + (a + b * angle) * Math.cos(angle);
              y = centery + (a + b * angle) * Math.sin(angle);
    			    context.lineWidth += 0.05

    			    context.lineTo(x,y);//Trace
    			}

			    context.stroke(); //Affiche

    	} 

    