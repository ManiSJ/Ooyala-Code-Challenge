function onCreate(player) {
       
	   player.mb.subscribe('playbackReady', 'myPage', function(eventName) //Player message bus event
	   { 
	   //Functions
       document.getElementById('p1').innerHTML = player.getCurrentItemTitle();
       document.getElementById('p2').innerHTML = player.getCurrentItemDescription() ;
       document.getElementById('p3').innerHTML = player.getTotalTime();
	   document.getElementById('p4').innerHTML = player.getFullscreen();
	   document.getElementById('p5').innerHTML = player.getCurrentItemEmbedCode();
	   document.getElementById('p7').innerHTML = player.getVolume();
       });
	   
	   player.mb.subscribe('paused', 'myPage', function(eventName) {
	   document.getElementById('p6').innerHTML = "Paused";
	   });
	   
	   player.mb.subscribe('playing', 'myPage', function(eventName) {
	   document.getElementById('p6').innerHTML = "Playing";
	   });

	   };
	   
 OO.ready(function() 
	{
	OO.Player.create('ooyalaplayer','03ZWZrdjqfMpvpYcC-_VNo7bsnDm78kO',{onCreate: window.onCreate}); 
	});
	

	