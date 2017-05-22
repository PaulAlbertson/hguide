(function(window){
	
	var selectedEntryState = 0;
	var ci = 0;
	// parse url parameters into array
	// we are only worried about "entry" for now
	var qString = unescape(top.location.search.substring(1));
	var pairs = qString.split(/\&/);
	
	for (var i in pairs)
	{
		var nameVal = pairs[i].split(/\=/);
		window[nameVal[0]] = nameVal[1];

	}
	counterBubbleDiv = document.getElementById("counterBubbleDiv");
	expertReviewsBtn = document.getElementById("expertReviewsBtn");	
	rdTestOverlayDiv = document.getElementById("rdTestOverlayDiv");
	sftyRatingsOverlayDiv = document.getElementById("sftyRatingsOverlayDiv");
	mgzArtcOverlayDiv = document.getElementById("mgzArtcOverlayDiv");
	indAwardsOverlayDiv = document.getElementById("indAwardsOverlayDiv");
	featArtOverlayDiv = document.getElementById("featArtOverlayDiv");
	featRateOverlayDiv = document.getElementById("featRateOverlayDiv");
	trueCostOverlayDiv = document.getElementById("trueCostOverlayDiv");
	featArt2OverlayDiv = document.getElementById("featArt2OverlayDiv");
	expOpinOverlayDiv = document.getElementById("expOpinOverlayDiv");
	slide0Hero = document.getElementById("slide0Hero");
	counterElement = document.getElementById("counterElement");
	sideNavContainer = document.getElementById("sideNavContainer");
	sideNavCarrot = document.getElementById("sideNavCarrot");
	whiteSpotDiv = document.getElementById("whiteSpotDiv");
						
	slide0QuoteArray0 = [
						["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;people are<br />building &amp; pricing a<br />white Sonata SE<br />right now.","","bubbleQuoteCountCopy"],
						["&quot;Overall we're quite<br />impressed, and we think<br />family sedan shoppers<br />should give the latest<br />Sonata serious<br />consideration.&quot;","edmunds.com","bubbleQuoteCopy"],
                        ["&quot;Unlike most of its <br />competition, there’s no V-6,<br />but a 274-hp turbo four is<br />the power alternative to the<br />base four-cylinder.&quot;","Car and Driver<br />Magazine","bubbleQuoteCopy"],
                        ["Motor Trend<br />&quote;First Drive&quote;"],
						[[,2,"#373c48",0],
						[,2.2,"#373c48",0],
						[,2.4,"#373c48",0],
						[,2.6,"#373c48",0]],
						[expertReviewsBtn,1,0]
						];
						
	slide0QuoteArray1 = [
						["&quot;The current model is not<br />only a fully competitive<br />choice for a family sedan,<br />but a strong standout among<br />its peers.&quot;","KBB.com","bubbleQuoteCopy"],
						["NOT USED","NOT USED","bubbleQuoteCopy"],
						["&quot;Unlike most of its<br />competition, there's no V-6,<br />but a 274-hp turbo four is<br/>the power alternative to the<br />base four-cylinder.&quot;","Car and Driver<br />Magazine","bubbleQuoteCopy"],
						["Automobile Mag<br />&quot;First Drive&quot;","bubbleQuoteCopy"],
						[[,2,"#c13134",1],
						[,2.2,"#373c48",1],
						[,2.2,"#373c48",0]],
						[,0,1]
						];
	
	quoteArrayArray = [slide0QuoteArray0,slide0QuoteArray1];
	
	function randomGenerator()
	{
		//Math.floor(Math.random() * (UpperRange - LowerRange + 1)) + LowerRange;
		randomNum = Math.floor(Math.random()*(3))+0;
		//console.log("randomNum: "+randomNum);
	}
	
	function Main(){
		
		var sideNav = new SideNav();
		var shoppers = new Shoppers();
		 
		 // IOS likes document.onscroll, not window.onscroll
        document.onscroll = function()
        {
	        var currentBrowserYpos = window.pageYOffset;
	        var newSideNavPosition = currentBrowserYpos+350+"px";
	        TweenLite.to(sideNavContainer, .5, {css:{top:newSideNavPosition}, ease:Sine.easeOut, delay:.2});
	        if(!expertSectionLaunched && currentBrowserYpos>=1200) 
	        {
	        	//console.log("currentBrowserYpos");
	        	triggerExpertScroll();
	        	expertSectionLaunched = true;
	        }
		};
		
		
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
			// if (selectedEntryState==0){
				// setStageElements(this.winW,this.winH);
			// }
			// if(selectedEntryState==1){
				// setStageElements(this.winW,this.winH);
			// }
			// if(selectedEntryState==2){
				// googleEntry(this.winW,this.winH);
			// }
			//setStageElements(this.winW,this.winH);
		}
		
		// function googleEntry(w,h)
		// {
			// $("#slide0H3a").html("See what other people found useful.");
			// $("#slide0H3b").html("");	
			// TweenLite.to(slide0H3a, 1, {css:{top:"680px"}, delay:0});	
			// TweenLite.to(slide0ExpertReviewsBtnDiv, 1, {css:{top:"-210px"}, delay:0});
			// TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv,expertReviewsBtn], 0, {css:{autoAlpha:0}, delay:0,overwrite:false});
			// TweenLite.to(slide0Hero, 1, {css:{left:"2%"}, ease:Power2.easeOut, delay:0});
			// //TweenLite.to(getMoreDataBtn, 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.2});
			// TweenLite.to([slide0Hero,slide0H3a], 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.4});
			// TweenLite.to(shopperDataGraphDiv, 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.8});
			// TweenLite.to(getMoreDataBtn, 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.2});
// 			
			// TweenLite.to(sideNavContainer, .3, {css:{right:"0px"}, ease:Power2.easeInOut, delay:2});
			// TweenLite.to(sideNavCarrot, .3, {css:{rotation:180}, ease:Power2.easeOut, delay:2});
		// }
		function setStageElements(w,h)
		{
		   
            TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv,getMoreDataBtn,expertReviewsBtn,getMoreDataBtn,moreTrendsBtn], 0, {css:{autoAlpha:0}, delay:0});
			if (selectedEntryState==0){
				TweenLite.to([slide0Hero,slide0H3a], 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.4});	
			};
			if (selectedEntryState==1){
				$("#slide0SubHead").html("2013 GENESIS");
				$("#slide0Price").html('<span class="dollarSign font12">$</span>30,500&nbsp;MSRP');
				//$("slide0GenesisHero").html('<img id="slide0GenesisHero" src="img/heros/genesisCoupeHero.png">');
				$("#slide0H3a").html("The critcs have spoken.");
				$("#slide0H3b").html("Find out what else the experts said about Genesis Coupe.");	
				//TweenLite.to(bubbleDiv2, 1, {css:{top:"280px"}, delay:0});	
				//TweenLite.to(slide0H3a, 1, {css:{top:"680px"}, delay:0});	
				//TweenLite.to(slide0ExpertReviewsBtnDiv, 1, {css:{top:"-210px"}, delay:0});	
				//slide0HeadlineDiv
				//TweenLite.to(slide0HeadlineDiv, 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:.5});
				TweenLite.to([slide1GenesisFront,slide0GenesisHero,slide0HeadlineDiv,motorTrendQuoteImg,expertCardStackImg,expertReviewsBtn], 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.4});		
			};
			if (selectedEntryState==2){
				$("#slide0SubHead").html("2013 SANTA FE");
				$("#slide0Price").html('<span class="dollarSign font12">$</span>24,450&nbsp;MSRP');
				//$("#slide0H3a").html('<p id="slide0H3a" class="helv75Bold letSpaceNeg1 font40 lightBlue">Great minds research alike.</p>');
				$("#slide0H3a").html("Great minds research alike.");
				$("#slide0H3b").html("");				
				TweenLite.to([slide1SantaFeProfile,slide0HeadlineDiv,dataNoGeoHeroImg,dataNoGeoZipField,moreTrendsBtn,graphTrimTitle], 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.4, onComplete:drawTrimConfigGraph});
			};
			if (selectedEntryState==3){
				$("#slide0SubHead").html("2013 SANTA FE");
				$("#slide0Price").html('<span class="dollarSign font12">$</span>24,450&nbsp;MSRP');
				$("#slide0H3a").html("Here's what people like you liked.");
				$("#slide0H3b").html("See vehicles, options and colors most popular in your area.");
				TweenLite.to([slide1SantaFeProfileWhite,slide0HeadlineDiv,moreTrendsBtn,dataGeoHeroImg,dataGeoInfoGraphic], 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.4});
			};
			if (selectedEntryState==4){
				$("#slide0SubHead").html("2013 GENESIS");
				$("#slide0Price").html('<span class="dollarSign font12">$</span>30,500&nbsp;MSRP');
				$("#slide0H3a").html("The latest word from people paid to know cars");
				$("#slide0H3b").html("Find out what else the experts said about Genesis Coupe.");	
				TweenLite.to([slide1GenesisProfile,slide0HeadlineDiv,expertReviewsBtn,latestConfigImg], 1, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:1.4,onComplete:drawSpeedCompare});
			};
			
			//TweenLite.to(quoteArrayArray[selectedEntryState][5][0], 1, {css:{autoAlpha:quoteArrayArray[selectedEntryState][5][2]}, ease:Power2.easeOut, delay:1.2});
			
			//TweenLite.to(counterElement, 1, {css:{autoAlpha:quoteArrayArray[selectedEntryState][5][1]}, ease:Power2.easeOut, delay:2.2});
			if(selectedEntryState == 0)
			{
			     setTimeout(function(){myTimer = setInterval(counterAddition,50)},3000);        
			};
			
			// for (var i=0; i<quoteArrayArray[selectedEntryState][endBubble].length; i++)
			// {
                // (function (i){
//                     
                    // var tempColor = quoteArrayArray[selectedEntryState][endBubble][i][2];
                    // var tempOpacity = quoteArrayArray[selectedEntryState][endBubble][i][3];
                    // var introCirclePaper = Raphael(quoteArrayArray[selectedEntryState][endBubble][i][0], 220,220, 0,0);
//                     
                    // //this["contentCircle"+i] = introCirclePaper.circle(112, 108, 80).attr({stroke: "none", fill: "#cccccc", opacity: 1});
                    // this["contentCircle"+i] = introCirclePaper.ellipse(113, 106, 90,85).attr({stroke: "none", fill: tempColor, opacity: tempOpacity});
//                     
                    // //console.log("array content: "+quoteArrayArray[selectedEntryState][endBubble][i]);
                    // TweenLite.to(quoteArrayArray[selectedEntryState][endBubble][i], .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:quoteArrayArray[selectedEntryState][endBubble][i][1]});
                // }(i));
			// }
			
			// random generated from array
			//TweenLite.to(quoteArrayArray[randomNum][3][0], .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2});
			//TweenLite.to(quoteArrayArray[randomNum][3][1], .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.6});
			//TweenLite.to(sideNavContainer, .3, {css:{right:"0px"}, ease:Power2.easeInOut, delay:2});
			//TweenLite.to(sideNavCarrot, .3, {css:{rotation:180}, ease:Power2.easeOut, delay:2});
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
		// function counterAddition()
		// {
		    // var counterDiv = $('#counterElement');
// 		    
		    // for(var i=0; i<30; i++){
    		   // (function(i){
                    // counterDiv.html(i);
                    // setTimeout(counterAddition,1000);
                    // console.log("I: "+i);
                // }(i));   
		    // }
		// }
		
		function counterAddition()
		{
            var counterDiv = $('#counterElement');
            
            //console.log("i: "+ci);
            counterDiv.html(ci);
            if(ci>=29){
                clearInterval(myTimer);
            }
            ci++;
		}
		function goCounterInt()
		{
		    myTimer = setInterval(counterAddition,50);
		}
		// function setBubbleContent()
		// {
			// if (selectedEntryState==0){
				// $("#bubbleGraphicCase1Div div:eq(0) p:eq(0)").toggleClass('bubbleQuoteCountCopy');
			// } 
			// //$("#bubbleGraphicCase1Div div:eq(0) p:eq(0)").toggleClass('bubbleQuoteCountCopy');
			// $("#bubbleGraphicCase1Div div:eq(0) p:eq(0)").html(quoteArrayArray[selectedEntryState][0][0]);
			// $("#bubbleGraphicCase1Div div:eq(0) p:eq(1)").html(quoteArrayArray[selectedEntryState][0][1]);
            // //textBubbles[0].getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[selectedEntryState][0][0];
            // //textBubbles[0].getElementsByTagName('div')[0].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[selectedEntryState][0][1];
//             
            // $("#bubbleGraphicCase1Div div:eq(1) p:eq(0)").html(quoteArrayArray[selectedEntryState][1][0]);
            // $("#bubbleGraphicCase1Div div:eq(1) p:eq(1)").html(quoteArrayArray[selectedEntryState][1][1]);
           // // textBubbles[0].getElementsByTagName('div')[1].getElementsByTagName('p')[0].innerHTML = quoteArrayArray[selectedEntryState][1][0];
           // // textBubbles[0].getElementsByTagName('div')[1].getElementsByTagName('p')[1].innerHTML = quoteArrayArray[selectedEntryState][1][1];
//             
            // $("#bubbleGraphicCase1Div div:eq(2) p:eq(0)").html(quoteArrayArray[selectedEntryState][2][0]);
            // $("#bubbleGraphicCase1Div div:eq(2) p:eq(1)").html(quoteArrayArray[selectedEntryState][2][1]);
// 
		// }
		 /*
		* Raphael start
		*/
		function drawSpeedCompare(){
			var c= Raphael("speedCompareDiv", 400, 220);

			var fr1 = c.path("M5 0 L5 214").attr({stroke:"#96b4cb","stroke-width":3, "stroke-linecap":"round"});
			var fr2 = c.path("M5 215 L395 215").attr({stroke:"#96b4cb","stroke-width":3, "stroke-linecap":"round"});
			
			var xLine1 = c.path("M5 36").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var xLine2 = c.path("M5 72").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var xLine3 = c.path("M5 108").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var xLine4 = c.path("M5 144").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var xLine5 = c.path("M5 180").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			
			var yLine1 = c.path("M36 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine2 = c.path("M72 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine3 = c.path("M108 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine4 = c.path("M144 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine5 = c.path("M180 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine6 = c.path("M216 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine7 = c.path("M252 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine8 = c.path("M288 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine9 = c.path("M324 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine10 = c.path("M360 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine11 = c.path("M396 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var yLine12 = c.path("M432 215").attr({stroke:"#96b4cb","stroke-width":1, "stroke-linecap":"round"});
			var diagLine1 = c.path("M8 210").attr({stroke:"#f39335","stroke-width":3, "stroke-linecap":"round"});
			
			function diaglineGo(){
				diagLine1.animate({path:"M8 210 L380 50"}, 200, function() {
					var panaPointBack = c.circle(150, 150, 8).attr({stroke: "none", fill: "#955b1e", opacity: 1});
					var panaPoint = c.circle(150, 150, 6).attr({stroke: "none", fill: "#f39335", opacity: 1});
					var genesisPointBack = c.circle(290, 90, 10).attr({stroke: "none", fill: "#955b1e", opacity: 1});
					var genPoint = c.circle(290, 90, 8).attr({stroke: "none", fill: "#f39335", opacity: 1});
					var carendPointBack = c.circle(380, 50, 13).attr({stroke: "none", fill: "#955b1e", opacity: 1});
					var carendPoint = c.circle(380, 50, 11).attr({stroke: "none", fill: "#f39335", opacity: 1});
				});
			};
				
			xLine5.animate({path:"M5 180 L395 180"}, 100, function() {
				xLine4.animate({path:"M5 144 L395 144"}, 100, function() {
					xLine3.animate({path:"M5 108 L395 108"}, 100, function() {
						xLine2.animate({path:"M5 72 L395 72"}, 100, function() {
							xLine1.animate({path:"M5 36 L395 36"}, 50, function() {
								yLine1.animate({path:"M36 215 L36 0"}, 50, function() {
									yLine2.animate({path:"M72 215 L72 0"}, 50, function() {
										yLine3.animate({path:"M108 215 L108 0"}, 50, function() {
											yLine4.animate({path:"M144 215 L144 0"}, 50, function() {
												yLine5.animate({path:"M180 215 L180 0"}, 50, function() {
													yLine6.animate({path:"M216 215 L216 0"}, 50, function() {
														yLine7.animate({path:"M252 215 L252 0"}, 50, function() {
															yLine8.animate({path:"M288 215 L288 0"}, 50, function() {
																yLine9.animate({path:"M324 215 L324 0"}, 50, function() {
																	yLine10.animate({path:"M360 215 L360 0"}, 50, function() {
																		yLine11.animate({path:"M396 215 L396 0"}, 50, function() {
																			yLine12.animate({path:"M432 215 L432 0"}, 50, function() {
																				TweenLite.to(smGnesisImg, .5, {css:{left:"235px"}, ease:Power2.easeOut, delay:.2});
																				TweenLite.to(panameraImg, .5, {css:{left:"90px"}, ease:Power2.easeOut, delay:.6, onComplete:diaglineGo});
																				TweenLite.to(panaBubble, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2});
																				TweenLite.to(genesisBubble, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:2.5});
																				TweenLite.to(mopFloorImg, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:3});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		}
		
		function drawTrimConfigGraph(){
			var c= Raphael("trimConfigGraphDiv", 400, 220);

			var fr1dot1 = c.circle(5, 5, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot2 = c.circle(50, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot2 = c.circle(100, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot2 = c.circle(150, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot2 = c.circle(200, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot2 = c.circle(250, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot2 = c.circle(300, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot2 = c.circle(350, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1dot9 = c.circle(395, 215, 5).attr({stroke: "none", fill: "#999999", opacity: 1});
			var fr1 = c.path("M5 0 L5 215").attr({stroke:"#999999","stroke-width":3, "stroke-linecap":"round"});
			var fr2 = c.path("M5 215 L400 215").attr({stroke:"#999999","stroke-width":3, "stroke-linecap":"round"});
			
			//"stroke-dasharray":"-",
			
    		var y1 = c.path("M7 120").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});
   			var y2 = c.path("M40 120").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});
   			var y3 = c.path("M100 60").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});
   			var y4 = c.path("M160 60").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});
   			var y5 = c.path("M240 140").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});
   			var y6 = c.path("M300 140").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});
   			var y7 = c.path("M320 160").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});
   			var y8 = c.path("M360 160").attr({stroke:"#e9a244","stroke-width":3, "stroke-linecap":"round"});

		    y1.animate({path:"M7 120 L40 120"}, 200, function() {
		        y2.animate({path:"M40 120 L 100 60"}, 200,function(){
		       		y3.animate({path:"M100 60 L 160 60"}, 200,function(){
		       				var yellowLinePoint = c.circle(160, 60, 5).attr({stroke: "none", fill: "#ffffff", opacity: 1});
							var yellowLinePointBack = c.circle(160, 60, 20).attr({stroke: "#999999", fill: "#e9a244", opacity: .2});
							var dash2 = c.path("M160 60 L160 215").attr({stroke:"#999999","stroke-width":1, "stroke-dasharray":"-",});
		        		y4.animate({path:"M160 60 L 240 140"}, 200,function(){
		        			y5.animate({path:"M240 140 L 300 140"}, 200,function(){
		        				y6.animate({path:"M300 140 L 320 160"}, 200,function(){
		        					y7.animate({path:"M320 160 L 360 160"}, 200,function(){
		        						y8.animate({path:"M360 160 L 390 135"}, 200,function(){
										   var yellowLineEndPoint = c.circle(390, 135, 6).attr({stroke: "none", fill: "#e9a244", opacity: 1});
								           var yellowLineEndPointDot = c.circle(390, 135, 3).attr({stroke: "none", fill: "#ffffff", opacity: 1});
		        						});
		        					});
		        				});
		        			});
		        		});
		        	});
		        });
		    });
		    
		    var r1 = c.path("M8 212").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    var r2 = c.path("M115 100").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    var r3 = c.path("M160 100").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    var r4 = c.path("M230 30").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    var r5 = c.path("M260 30").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    var r6 = c.path("M270 20").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    var r7 = c.path("M340 20").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    var r8 = c.path("M360 30").attr({stroke:"#d64e51","stroke-width":3, "stroke-linecap":"round"});
		    
		    r1.animate({path:"M8 212 L115 100"}, 200, function() {
		    	r2.animate({path:"M115 100 L160 100"}, 200, function() {
		    		r3.animate({path:"M160 100 L230 30"}, 200, function() {
		    			r4.animate({path:"M230 30 L260 30"}, 200, function() {
		    				r5.animate({path:"M260 30 L270 20"}, 200, function() {
		    					r6.animate({path:"M270 20 L340 20"}, 200, function() {
		    						r7.animate({path:"M340 20 L360 40"}, 200, function() {
		    							var redLinePoint = c.circle(360, 40, 5).attr({stroke: "none", fill: "#ffffff", opacity: 1});
								        var redLinePointBack = c.circle(360, 40, 20).attr({stroke: "#999999", fill: "#d64e51", opacity: .2});
								        var dash4 = c.path("M360 40 L360 215").attr({stroke:"#999999","stroke-width":1, "stroke-dasharray":"-",});
		    							r8.animate({path:"M360 40 L390 15"}, 200, function() {
								           var redLineEndPoint = c.circle(390, 15, 6).attr({stroke: "none", fill: "#d64e51", opacity: 1});
								           var redLineEndPointDot = c.circle(390, 15, 3).attr({stroke: "none", fill: "#ffffff", opacity: 1});
		    							});
		    						});
		    					});
		    				});
		    			});
		    		});
		    	});
		    });
		    
		    var b1 = c.path("M7 180").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b2 = c.path("M50 180").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b3 = c.path("M88 140").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b4 = c.path("M110 140").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b5 = c.path("M123 125").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b6 = c.path("M190 125").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b7 = c.path("M235 80").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b8 = c.path("M295 80").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b9 = c.path("M310 95").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    var b10 = c.path("M340 95").attr({stroke:"#51b2d0","stroke-width":3, "stroke-linecap":"round"});
		    
		    b1.animate({path:"M7 180 L50 180"}, 200, function() {
		    	b2.animate({path:"M50 180 L88 140"}, 200, function() {
		    		b3.animate({path:"M88 140 L110 140"}, 200, function() {
		    			b4.animate({path:"M110 140 L123 125"}, 200, function() {
		    				b5.animate({path:"M123 125 L190 125"}, 200, function() {
		    					b6.animate({path:"M190 125 L235 80"}, 200, function() {
		    							var blueLinePoint = c.circle(235, 80, 5).attr({stroke: "none", fill: "#ffffff", opacity: 1});
										var blueLinePointBack = c.circle(235, 80, 20).attr({stroke: "#999999", fill: "#51b2d0", opacity: .2});
										var dash3 = c.path("M235 80 L235 215").attr({stroke:"#999999","stroke-width":1, "stroke-dasharray":"-",});
		    						b7.animate({path:"M235 80 L295 80"}, 200, function() {
		    							b8.animate({path:"M295 80 L310 95"}, 200, function() {
		    								b9.animate({path:"M310 95 L340 95"}, 200, function() {
		    									b10.animate({path:"M340 95 L390 55"}, 200, function() {
		    										   var blueLineEndPoint = c.circle(390, 55, 6).attr({stroke: "none", fill: "#51b2d0", opacity: 1});
											           var blueLineEndPointDot = c.circle(390, 55, 3).attr({stroke: "none", fill: "#ffffff", opacity: 1});
											           triggerTrimTitles();
		    									});
		    								});
		    							});
		    						});
		    					});
		    				});
		    			});
		    		});
		    	});
		    });
		    
		     var w1 = c.path("M7 200").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     var w2 = c.path("M70 200").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     var w3 = c.path("M120 150").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     var w4 = c.path("M140 150").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     var w5 = c.path("M235 50").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     var w6 = c.path("M275 50").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     var w7 = c.path("M345 120").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     var w8 = c.path("M365 120").attr({stroke:"#ffffff","stroke-width":3, "stroke-linecap":"round"});
		     
		     w1.animate({path:"M7 200 L70 200"}, 200, function() {
		     	w2.animate({path:"M70 200 L120 150"}, 200, function() {
		     		w3.animate({path:"M120 150 L140 150"}, 200, function() {
 								var whiteLinePoint = c.circle(140, 150, 5).attr({stroke: "none", fill: "#ffffff", opacity: 1});
								var whiteLinePointBack = c.circle(140, 150, 20).attr({stroke: "#999999", fill: "#ffffff", opacity: .2});
								var dash1 = c.path("M140 150 L140 215").attr({stroke:"#999999","stroke-width":1, "stroke-dasharray":"-",});
		     			w4.animate({path:"M140 150 L235 50"}, 200, function() {
		     				w5.animate({path:"M235 50 L275 50"}, 200, function() {
		     					w6.animate({path:"M275 50 L345 120"}, 200, function() {
		     						w7.animate({path:"M345 120 L365 120"}, 200, function() {
		     							w8.animate({path:"M365 120 L390 100"}, 200, function() {
		     								var whiteLineEndPoint = c.circle(390, 100, 6).attr({stroke: "none", fill: "#ffffff", opacity: 1});
          									var whiteLineEndPointDot = c.circle(390, 100, 3).attr({stroke: "none", fill: "#cccccc", opacity: 1});
		     							});
		     						});
		     					});
		     				});
		     			});
		     		});
		     	});
		     });			
		}
		function  triggerTrimTitles(){
			TweenLite.to(trim1, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:0});
			TweenLite.to(trim2, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:.2});
			TweenLite.to(trim3, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:.4});
			TweenLite.to(trim4, .5, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:.6});
		};
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
		//  !!!!!!!!!	I commented out the redraw white spot as I am not sure if it is conflicting with tweens??
			//redrawWhiteSpot($(window).width(),1450);
			//setStageElements($(window).width(),1450);
		  	//console.log($(window).width());
		});
		
		$('#carSelectorDiv').css("cursor","pointer").click(function(event) {
			console.log("selectedEntryState: "+selectedEntryState);
			if (selectedEntryState == 1){
				//console.log("selectedEntryState: "+selectedEntryState);
				window.open("experts-user-flow-entry-builder.html","_self");
			};
			if (selectedEntryState == 2){
				//console.log("selectedEntryState: "+selectedEntryState);
				window.open("index.html?entry=shopper-data-geo-known","_self");
			};
			
		});

		function init(v)
		{
			//randomGenerator();
			console.log("url param: "+v);
			switch(v)
			{
				case "default":
				    selectedEntryState = 0;
				    getBrowserDimensions();
					//setBubbleContent();
				break;
				case "expert-opinions":
				    selectedEntryState = 1;
				    getBrowserDimensions();
					//setBubbleContent();
				break;
				case "shopper-data":
					selectedEntryState = 2;
					getBrowserDimensions();
				break;
				case "shopper-data-geo-known":
					selectedEntryState = 3;
					getBrowserDimensions();
				break;
				case "expert-opinions-build-price":
				    selectedEntryState = 4;
				    getBrowserDimensions();
					//setBubbleContent();
				break;
			}
			// getBrowserDimensions();
			// setBubbleContent();
		}
		
		init(entry);
			
	}
			
	window.Main = Main;
	
}(window));
