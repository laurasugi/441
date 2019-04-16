// JavaScript Document

//Audio
	//Sets a 1 second delay before audio begins

		setTimeout(function(){
			document.getElementById("backgroundAudio").play();
			console.log('Audio has started');
		}, 1000);

// Background change
	//Right button

	let idx= 0;
	let divR = document.querySelector('#rightButton');
	divR.addEventListner( "click", changeBackgroundR );

		function changeBackgroundR() {

			if( idx === 0 ) {
				document.body.style.backgroundImage =  "url('./images/2.png')"; 
				console.log('First right change has occured'); 
				
			} else if(  idx === 1 ) { 	
				document.body.style.backgroundImage = "url('./images/4.png')";	
				console.log('Second right change has occured,');
				
				//Starts radio audio
				document.getElementById('audioP4').play();
				console.log('P4 audio is playing');
				
			} else if(  idx === 2 ) { 	 	
				document.body.style.backgroundImage = "url('./images/6.png')";
				console.log('Third right change has occured');
				
				
			} else if(  idx === 3 ) { 	
				document.body.style.backgroundImage = "url('./images/7.png')";	
				console.log('Fourth right change has occured,');
				
				
				//Ends radio audio
				document.getElementById('audioP4').pause();
				console.log('P4 audio has stopped');
				
			}
														
			idx = (idx + 1) % 4;	

		}
	



//Left button
		
		let divL = document.querySelector('#leftButton');
		divL.addEventListner( "click", changeBackgroundL );
		
			function changeBackgroundL() {

				if( idx === 1 ) {
					document.body.style.backgroundImage =  "url('./images/3.png')"; 
					console.log('First left change has occured');
					divL.removeEventListener("click", changeBackgroundL );
					
				} else if(  idx === 2 ) { 	
					document.body.style.backgroundImage = "url('./images/5.png')";
					console.log('Second left change has occured');
					
					
					
				}


			idx = (idx + 1) % 4;	
			

			}

		
	
	
		



	