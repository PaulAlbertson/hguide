(function(window){
	
	//urlVar = window.location.hash;
	//urlVar = window.location.search;
	// parse url parameters into array
	// we are only worried about "entry" for now
	var qString = unescape(top.location.search.substring(1));
	var pairs = qString.split(/\&/);
	
	for (var i in pairs)
	{
		var nameVal = pairs[i].split(/\=/);
		window[nameVal[0]] = nameVal[1];

	}
	
	slide0QuoteArray0 = [
						["&quot;The current model is<br />not only a fully competitive<br />choice for a family sedan,<br />but a standout among<br />its peers.&quot;","KBB.com"],
						["&quot;Overall we're quite<br />impressed, and we think<br />family sedan shoppers<br />should give the latest<br />Sonata serious<br />consideration.&quot;","edmunds.com"],
						["&quot;Unlike most of its <br />competition, there’s no V-6,<br />but a 274-hp turbo four is<br />the power alternative to the<br />base four-cylinder.&quot;","Car and Driver<br />Magazine"],
						[bubbleDiv0,bubbleDiv1]
						];
						
	slide0QuoteArray1 = [
						["people are<br />building &amp; pricing a<br />white Sonata SE<br />right now."],
						["&quot;Overall we're quite<br />impressed, and we think<br />family sedan shoppers<br />should give the latest<br />Sonata serious<br />consideration.&quot;","edmunds.com"],
                        ["&quot;Unlike most of its <br />competition, there’s no V-6,<br />but a 274-hp turbo four is<br />the power alternative to the<br />base four-cylinder.&quot;","Car and Driver<br />Magazine"],
						[bubbleDiv0,bubbleDiv3]
						];
						
	slide0QuoteArray2 = [
						["&quot;Slide array 2 Quote 1<br />Lorem Lorem Lorem ipsum<br />Lorem Lorem Lorem ipsum,<br />Lorem Lorem Lorem ipsum<br />Lorem Lorem.&quot;","blahblah.com"],
						["&quot;Slide array 2 Quote 2<br />Lorem Lorem Lorem ipsum<br />Lorem Lorem Lorem ipsum,<br />Lorem Lorem Lorem ipsum<br />Lorem Lorem.&quot;","blahblah.com"],
						["&quot;Slide array 2 Quote 3<br />Lorem Lorem Lorem ipsum<br />Lorem Lorem Lorem ipsum,<br />Lorem Lorem Lorem ipsum<br />Lorem Lorem.&quot;","blahblah.com"],
						[bubbleDiv1,bubbleDiv2]
						];
	
	quoteArrayArray = [slide0QuoteArray0,slide0QuoteArray1,slide0QuoteArray2]
	
	function randomGenerator()
	{
		//Math.floor(Math.random() * (UpperRange - LowerRange + 1)) + LowerRange;
		randomNum = Math.floor(Math.random()*(3))+0;
		//console.log("randomNum: "+randomNum);
	}
	
	function Main(){
		
		var sideNav = new SideNav();
		 
		 // IOS likes document.onscroll, not window.onscroll
        document.onscroll = function()
        {
	        var currentBrowserYpos = window.pageYOffset;
	        var newSideNavPosition = currentBrowserYpos+350+"px";
	        TweenLite.to(sideNavContainer, .3, {css:{top:newSideNavPosition}, ease:Sine.easeOut, delay:.2});
	        if(!expertSectionLaunched && currentBrowserYpos>=1200) 
	        {
	        	//console.log("currentBrowserYpos");
	        	triggerExpertScroll();
	        	expertSectionLaunched = true;
	        }
		};
		
		// $(document).mousemove(function(e){
// 	      
	      // var bubPos0 = $('#bubbleDiv0').position();
	      // var bubPos1 = $('#bubbleDiv1').position();
	      // var bubPos2 = $('#bubbleDiv2').position();
	      // var bubPos3 = $('#bubbleDiv3').position();
// 	      
// 	      
	      // var movementStrength = -10;
		  // var height = movementStrength / $(window).height();
		  // var width = movementStrength / $(window).width();
          // var pageX = e.pageX - ($(window).width() / 2);
          // var pageY = e.pageY - ($(window).height() / 2);
//           
//           
          // newvalueX = width * pageX * -1;
          // newvalueY = height * pageY * -1;
//           
//           
          // newBub0X = Math.round(bubPos0.left - newvalueX);
          // newBub0Y = Math.round(bubPos0.top - newvalueY);
          // newBub1X = Math.round(bubPos1.left - newvalueX);
          // newBub1Y = Math.round(bubPos1.top - newvalueY);
          // newBub2X = Math.round(bubPos2.left - newvalueX);
          // newBub2Y = Math.round(bubPos2.top - newvalueY);
          // newBub3X = Math.round(bubPos3.left - newvalueX);
          // newBub3Y = Math.round(bubPos3.top - newvalueY);
//           
	      // moveItMoveIt();
// 
	      // function moveItMoveIt()
		   // {
// 
		   	// TweenLite.to(bubbleDiv0, .5, {css:{left:newBub0X+"px",top:newBub0Y+"px"}, ease:Power2.easeOut, delay:0});
		   	// TweenLite.to(bubbleDiv1, .5, {css:{left:newBub1X+"px",top:newBub1Y+"px"}, ease:Power2.easeOut, delay:0});
		   	// TweenLite.to(bubbleDiv2, .5, {css:{left:newBub2X+"px",top:newBub2Y+"px"}, ease:Power2.easeOut, delay:0});
		   	// TweenLite.to(bubbleDiv3, .5, {css:{left:newBub3X+"px",top:newBub3Y+"px"}, ease:Power2.easeOut, delay:0});
// 
		   // }
	   // });
	   
	   //var p = $("p:first");
		//var position = p.position();
		//$("p:last").text( "left: " + position.left + ", top: " + position.top );
		
		function getBrowserDimensions()
		{
			this.winW = 630, this.winH = 460;
			if (document.body && document.body.offsetWidth) {
			 this.winW = document.body.offsetWidth;
			 this.winH = document.body.offsetHeight;
			}
			if (document.compatMode=='CSS1Compat' &&
			    document.documentElement &&
			    document.documentElement.offsetWidth ) {
			 this.winW = document.documentElement.offsetWidth;
			 this.winH = document.documentElement.offsetHeight;
			}
			if (window.innerWidth && window.innerHeight) {
			 this.winW = window.innerWidth;
			 this.winH = window.innerHeight;
			}
			//TweenLite.to(cityFloor, 0, {css:{width:this.winW}, delay:0});
			
			//sideNavContainer
			//console.log(this.winW);
			setStageElements(this.winW,this.winH);
		}
		
		function setStageElements(w,h)
		{
			//var expertsSection = new ExpertsSection();
			TweenLite.to(slide0Hero, 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.4});
			
			TweenLite.to(bubbleDiv0, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2});
			TweenLite.to(bubbleDiv1, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.2});
			TweenLite.to(bubbleDiv2, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.4});
			TweenLite.to(bubbleDiv3, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.6});
			
			// random generated from array
			//TweenLite.to(quoteArrayArray[randomNum][3][0], .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2});
			//TweenLite.to(quoteArrayArray[randomNum][3][1], .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.6});
			TweenLite.to(sideNavContainer, .3, {css:{right:"0px"}, ease:Power2.easeInOut, delay:2});
			TweenLite.to(sideNavCarrot, .3, {css:{rotation:180}, ease:Power2.easeOut, delay:2});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], 0, {css:{autoAlpha:0}, delay:0,overwrite:false});
			redrawWhiteSpot(w,h);
			
			// var paper = Raphael(whiteSpotDiv, w, h);
			// var c = paper.ellipse(w/2, 295, 800, w/3).attr({stroke: "none", fill: "r(.5,0)#fff-#fff", opacity: 0});
			
			//console.log(ProjectVariables.prototype.slide0QuoteArray[0][0]);
		}
		function redrawWhiteSpot(w,h)
		{
			var paper = Raphael(whiteSpotDiv, w, h);
			var c = paper.ellipse(w/2, 295, 800, w/3).attr({stroke: "none", fill: "r(.5,0)#fff-#fff", opacity: 0});
		}
		function setBubbleContent()
		{
		    
		    
		    
			var textBubbles = $('#bubbleGraphicCase1Div');
			
            textBubbles[0].getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[1][0][0];
            textBubbles[0].getElementsByTagName('div')[0].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[1][0][1];
            
            textBubbles[0].getElementsByTagName('div')[1].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[1][1][0];
            textBubbles[0].getElementsByTagName('div')[1].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[1][1][1];
            
            textBubbles[0].getElementsByTagName('div')[2].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[1][2][0];
            textBubbles[0].getElementsByTagName('div')[2].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[1][2][1];
			
			
			
			// Random version
			// textBubbles[0].getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[randomNum][0][0];
			// textBubbles[0].getElementsByTagName('div')[0].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[randomNum][0][1];
// 			
			// textBubbles[0].getElementsByTagName('div')[1].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[randomNum][1][0];
			// textBubbles[0].getElementsByTagName('div')[1].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[randomNum][1][1];
// 			
			// textBubbles[0].getElementsByTagName('div')[2].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[randomNum][2][0];
			// textBubbles[0].getElementsByTagName('div')[2].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[randomNum][2][1];
			
		}
		function triggerExpertScroll()
		{
			sideNav.globalTriggerExpertSection();
			if (sideNavigationOpen)
			{
				sideNav.globalNavToggle();
			}
			//sideNav.globalNavToggle();
		}

			// Creates canvas 320 × 200 at 10, 50
			//var paper = Raphael(whiteSpotDiv, this.winW, 1300);
			
			// // Creates circle at x = 50, y = 40, with radius 10
			//var circle = paper.circle(650, 440, 420).attr({stroke: "none", fill: "r(.5,.1)#ccc-#ccc", opacity: 1});
			
			//var c = paper.ellipse(650, 440, 800, 450).attr({stroke: "none", fill: "r(.5,0)#fff-#fff", opacity: 0});
			//circle.attr({"fill-opacity":0});
			
		// on window resize redraw gradient
		$(window).resize(function() {
			// For some reason this is triggering overflow issues on the Experts panel
			// When the browser is resized it is causing the road test overlay div to disappear
			// its either the setStageElements function or ?...
			redrawWhiteSpot($(window).width(),1450);
			//setStageElements($(window).width(),1450);
		  	//console.log($(window).width());
		});
				

		function init(v)
		{
			//randomGenerator();
			
			switch(v)
			{
				case "normal":
					getBrowserDimensions();
					setBubbleContent();
				break;
				case "expert":
					alert("EXPERT Entry");
					//console.log("hashy");
				break;
			}
			//getBrowserDimensions();
			//setBubbleContent();
		}
		
		init(entry);
			
	}
			
	window.Main = Main;
	
}(window));
