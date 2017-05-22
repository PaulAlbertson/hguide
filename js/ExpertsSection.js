(function(window)
{
	contentDotsHolderDiv = document.getElementById("contentDotsHolderDiv");
	slide1RedDot1 = document.getElementById("slide1RedDot1");
	slide1BlueDot1 = document.getElementById("slide1BlueDot1");
	slide1YellowDot1 = document.getElementById("slide1YellowDot1");
	slide1YellowDot2 = document.getElementById("slide1YellowDot2");
	slide1RedDot2 = document.getElementById("slide1RedDot2");
	slide1BlueDot2 = document.getElementById("slide1BlueDot2");
	
	rdTestOverlayDiv = document.getElementById("rdTestOverlayDiv");
	sftyRatingsOverlayDiv = document.getElementById("sftyRatingsOverlayDiv");
	mgzArtcOverlayDiv = document.getElementById("mgzArtcOverlayDiv");
	mgzArtcOverlayDiv = document.getElementById("mgzArtcOverlayDiv");
	indAwardsOverlayDiv = document.getElementById("indAwardsOverlayDiv");
	featArtOverlayDiv = document.getElementById("featArtOverlayDiv");
	featRateOverlayDiv = document.getElementById("featRateOverlayDiv");
	trueCostOverlayDiv = document.getElementById("trueCostOverlayDiv");
	featArt2OverlayDiv = document.getElementById("featArt2OverlayDiv");
	expOpinOverlayDiv = document.getElementById("expOpinOverlayDiv");
	
	rdTestOverlayCarrotImg = document.getElementById("rdTestOverlayCarrotImg");
	roadTestOverlayTitle = document.getElementById("roadTestOverlayTitle");
	
	sftyRatingsCarrotImg = document.getElementById("sftyRatingsCarrotImg");
	mgzArtcCarrotImg = document.getElementById("mgzArtcCarrotImg");
	indAwardsCarrotImg = document.getElementById("indAwardsCarrotImg");
	featArtCarrotImg = document.getElementById("featArtCarrotImg");
	featRateCarrotImg = document.getElementById("featRateCarrotImg");
	trueCostCarrotImg = document.getElementById("trueCostCarrotImg");
	featArt2CarrotImg = document.getElementById("featArt2CarrotImg");
	expOpinCarrotImg = document.getElementById("expOpinCarrotImg");
	
	redDot1Copy = document.getElementById("redDot1Copy");
	blueDot1Copy = document.getElementById("blueDot1Copy");
	yellowDot1Copy = document.getElementById("yellowDot1Copy");
	yellowDot2Copy = document.getElementById("yellowDot2Copy");
	redDot2Copy = document.getElementById("redDot2Copy");
	blueDot2Copy = document.getElementById("blueDot2Copy");
		
	slide1DivOverlayArray=[
							[rdTestOverlayDiv,"450px","12px"],
							[sftyRatingsOverlayDiv,"385px","150px"],
							[mgzArtcOverlayDiv,"385px","808px"],
							[indAwardsOverlayDiv,"450px","955px"],
							[featArtOverlayDiv,"585px","175px"],
							[featRateOverlayDiv,"585px","790px"],
							[trueCostOverlayDiv,"705px","320px"],
							[featArt2OverlayDiv,"705px","645px"],
							[expOpinOverlayDiv,"790px","485px"]							
							];

	selectedExpertPanel = "holdme";
	
	function ExpertsSection()
	{
		var scrollPosition = new ScrollPosition();
		
		$("#expertCloseButton").click(function(event) {
			resetOverlayBoxes();
			setExpertPanelId(20);
			TweenLite.to($("#rdTestOverlayCarrotImg"), .1, {css:{autoAlpha:1, top:"5px", left:"70px"}, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
			TweenLite.to(roadTestOverlayTitle, .3, {css:{autoAlpha:0}, ease:Power2.easeInOut, delay:.2,overwrite:false});
			player.pauseVideo();
			
			// Nested div reference
			//document.getElementById('mainDiv).getElementsByTagName('div')[0]
			
		});
		
		$("#rdTestOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			if (selectedExpertPanel != 0){
			  	TweenLite.to(rdTestOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			  	TweenLite.to(rdTestOverlayCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			  	TweenLite.to(roadTestOverlayTitle, .3, {css:{autoAlpha:1}, ease:Power2.easeInOut, delay:.2,overwrite:false});
				TweenLite.to([sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
			}
		 }, function(event) {
		  	if (selectedExpertPanel != 0){
			  	TweenLite.to(rdTestOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
			  	TweenLite.to(rdTestOverlayCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			  	TweenLite.to(roadTestOverlayTitle, .1, {css:{autoAlpha:0}, delay:0,overwrite:false});
				TweenLite.to([sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});			}
		});
		$("#rdTestOverlayDiv").click(function(event) {
			setExpertPanelId(0);
			TweenLite.to(rdTestOverlayDiv, .3, {css:{width:"1062px", height:"1300px", top:"230px"}, ease:Power2.easeInOut, delay:0,overwrite:false});
			var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
			TweenLite.to(curScroll, 1, {y:1360, onUpdate:function(event) { window.scrollTo(curScroll.x, curScroll.y); }});
			//TweenLite.to(sideNavContainer, .5, {css:{top:"2000px"}, ease:Power2.easeInOut, delay:.5,overwrite:true});
			TweenLite.to([rdTestOverlayCarrotImg,roadTestOverlayTitle], .1, {css:{autoAlpha:0}, delay:0,overwrite:false});
			TweenLite.to([roadTestArticle0Div,roadTestArticle1Div,roadTestArticle2Div,expertCloseButton], .5, {css:{autoAlpha:1}, ease:Power2.easeInOut, delay:1,overwrite:false});	
		});
		$("#sftyRatingsOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(sftyRatingsOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(sftyRatingsCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(sftyRatingsOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(sftyRatingsCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to([rdTestOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});
		$("#mgzArtcOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(mgzArtcOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(mgzArtcCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(mgzArtcOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(mgzArtcCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});	
		$("#indAwardsOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(indAwardsOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(indAwardsCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(indAwardsOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(indAwardsCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});
		$("#featArtOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(featArtOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(featArtCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(featArtOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(featArtCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});
		$("#featRateOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(featRateOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(featRateCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(featRateOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(featRateCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});
		$("#trueCostOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(trueCostOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(trueCostCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(trueCostOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(trueCostCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,featArt2OverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});
		$("#featArt2OverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(featArt2OverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(featArt2CarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(featArt2OverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(featArt2CarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,expOpinOverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});
		$("#expOpinOverlayDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(expOpinOverlayDiv, .3, {css:{width:"232px", height:"225px", zIndex:610}, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to(expOpinCarrotImg, .3, {css:{top:"50px",left:"180px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv], .3, {css:{alpha:.2}, delay:0,overwrite:false});
		  }, function(event) {
		  	TweenLite.to(expOpinOverlayDiv, .3, {css:{width:"118px", height:"174px", zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:false});
		  	TweenLite.to(expOpinCarrotImg, .3, {css:{top:"5px",left:"70px" }, ease:Power2.easeInOut, delay:0,overwrite:false});
			TweenLite.to([rdTestOverlayDiv,sftyRatingsOverlayDiv,mgzArtcOverlayDiv,indAwardsOverlayDiv,featArtOverlayDiv,featRateOverlayDiv,trueCostOverlayDiv,featArt2OverlayDiv], .3, {css:{alpha:1}, delay:0,overwrite:false});
		});
		// Creates canvas 320 × 200 at 10, 50
		
		// testBubbleArray = [
							// [RedDot1Overlay,"342px","587px",slide1RedDot1,"335px","580px","#d64e51"],
							// [BlueDot1Overlay,"385px","440px",slide1BlueDot1,"385px","440px","#51b2d0"],
							// [yelDot1Overlay,"423px","653px",slide1YellowDot1,"416px","646px","#e19d44"],
							// [YellowDot2Overlay,"495px","345px",slide1YellowDot2,"485px","345px","#e19d44"],
							// [RedDot2Overlay,"630px","430px",slide1RedDot2,"630px","430px","#d64e51"],
							// [BlueDot2Overlay,"640px","610px",slide1BlueDot2,"640px","610px","#51b2d0"]					
						// ];
		// testBubbleHolderArray= [];
		// function createDotsOverlay()
		// {
			// for (i=0; i<testBubbleArray.length; i++)
			// {
				// console.log("testBubbleArray: "+testBubbleArray[i][1]);
// 				
				// var bubblePaperUnder = Raphael(testBubbleArray[i][3], 30,30, 0,0);
				// var bubblePaperOver = Raphael(testBubbleArray[i][0], 30,30, 0,0);
// 					
					// // // Creates circle at x = 50, y = 40, with radius 10
				// var circle = bubblePaperUnder.circle(12, 12, 12).attr({stroke: "none", fill: testBubbleArray[i][6], opacity: 1});
				// var circle = bubblePaperOver.circle(5, 5, 5).attr({stroke: "none", fill: "#ffffff", opacity: 1});
			// }
		// }
		// createDotsOverlay();
		// red d64e51
		// teal 51b2d0		
		
		var bubblePaper = Raphael(contentDotsHolderDiv, 1200,1200, 0,0);		
		
		testBubbleArray2 = [
							[slide1RedDot1,600,350,"#d64e51",redDot1Copy],
							[slide1BlueDot1,458,398,"#51b2d0",blueDot1Copy],
							[slide1YellowDot1,660,430,"#e19d44",yellowDot1Copy],
							[slide1YellowDot2,360,500,"#e19d44",yellowDot2Copy],
							[slide1RedDot2,448,645,"#d64e51",redDot2Copy],
							[slide1BlueDot2,628,653,"#51b2d0",blueDot2Copy]
							];
		bubbleHolder = [];
							
		function createDotsOverlay()
		{
			for (i=0; i<testBubbleArray2.length; i++)
			{
				
				this["circle"+i] = bubblePaper.circle(testBubbleArray2[i][1], testBubbleArray2[i][2], 12).attr({stroke: "none", fill: testBubbleArray2[i][3], opacity: 1});
				this["circleb"+i] = bubblePaper.circle(testBubbleArray2[i][1], testBubbleArray2[i][2], 5).attr({stroke: "none", fill: "#ffffff", opacity: 1});
				
				bubbleHolder.push([this["circle"+i],this["circleb"+i]]);
				//console.log("bubbleHolder: "+bubbleHolder[i]);
				(function (i){
					$(testBubbleArray2[i][0]).css('cursor', 'pointer').hover(function(event) {
		
						TweenLite.to(bubbleHolder[i][0], .3, {raphael:{r:100}, ease:Power2.easeInOut});
						TweenLite.to(bubbleHolder[i][1], .3, {raphael:{r:90}, ease:Power2.easeInOut});
						TweenLite.to(testBubbleArray2[i][4],.5,{css:{autoAlpha:1},ease:Power2.easeInOut});
					}, function(event) {
						TweenLite.to(bubbleHolder[i][0], .3, {raphael:{r:12}, ease:Power2.easeInOut});
						TweenLite.to(bubbleHolder[i][1], .3, {raphael:{r:5}, ease:Power2.easeInOut});
						TweenLite.to(testBubbleArray2[i][4], .1,{css:{autoAlpha:0},ease:Power2.easeInOut});

					});
				}(i));		
			}
			
		}
		createDotsOverlay();


		// Experts animation
		function expertsAnimationGo()
		{
			expertSectionLaunched = true;
			//console.log("expertSectionLaunched: "+projectVariables.expertSectionLaunched);
			
			//TweenLite.to(slide1HeadlineDiv, .5, {css:{autoAlpha:1}, ease:Power2.easeInOut, delay:1,overwrite:false});
			//TweenLite.to(slide1HeroDiv, .5, {css:{autoAlpha:1}, ease:Power2.easeInOut, delay:2,overwrite:false});
			
			// TweenLite.from(slide1RedDot1, 2, {css:{rotation:270, autoAlpha:0, transformOrigin:"-40px 190px"},ease:Power2.easeInOut, delay:1,overwrite:false});
			// TweenLite.from(slide1BlueDot1, 2, {css:{rotation:-270, autoAlpha:0, transformOrigin:"100px 140px"},ease:Power2.easeInOut, delay:1,overwrite:false});
			// TweenLite.from(slide1YellowDot1, 2, {css:{rotation:350, autoAlpha:0, transformOrigin:"-105px 105px"},ease:Power2.easeInOut, delay:1,overwrite:false});
			// TweenLite.from(slide1YellowDot2, 2, {css:{rotation:270, autoAlpha:0, transformOrigin:"190px 30px"},ease:Power2.easeInOut, delay:1,overwrite:false});
			// TweenLite.from(slide1RedDot2, 2, {css:{rotation:-270, autoAlpha:0, transformOrigin:"115px -105px"},ease:Power2.easeInOut, delay:1,overwrite:false});
			// TweenLite.from(slide1BlueDot2, 2, {css:{rotation:350, autoAlpha:0, transformOrigin:"-70px -110px"},ease:Power2.easeInOut, delay:1,overwrite:false});
			
			TweenLite.to(slide1RedDot1, .1, {css:{autoAlpha:1,}, ease:Strong.easeOut, delay:.8,overwrite:false});
			TweenLite.to(slide1BlueDot1, .1, {css:{autoAlpha:1,}, ease:Strong.easeOut, delay:.9,overwrite:false});
			TweenLite.to(slide1YellowDot1, .1, {css:{autoAlpha:1,}, ease:Strong.easeOut, delay:1,overwrite:false});
			TweenLite.to(slide1YellowDot2, .1, {css:{autoAlpha:1,}, ease:Strong.easeOut, delay:1.1,overwrite:false});
			TweenLite.to(slide1RedDot2, .1, {css:{autoAlpha:1,}, ease:Strong.easeOut, delay:1.2,overwrite:false});
			TweenLite.to(slide1BlueDot2, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:1.3,overwrite:false});
			
			TweenLite.to(rdTestOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:1.8,overwrite:false});
			TweenLite.to(sftyRatingsOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:1.9,overwrite:false});
			TweenLite.to(mgzArtcOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:2,overwrite:false});
			TweenLite.to(indAwardsOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:2.1,overwrite:false});
			TweenLite.to(featArtOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:2.2,overwrite:false});
			TweenLite.to(featRateOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:2.3,overwrite:false});
			TweenLite.to(trueCostOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:2.4,overwrite:false});
			TweenLite.to(featArt2OverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:2.5,overwrite:false});
			TweenLite.to(expOpinOverlayDiv, .1, {css:{autoAlpha:1}, ease:Strong.easeOut, delay:2.6,overwrite:false});

		}
		
		function resetOverlayBoxes()
		{
			closeDivName = slide1DivOverlayArray[selectedExpertPanel][0];
			closeDivTop = slide1DivOverlayArray[selectedExpertPanel][1];
			closeDivLeft = slide1DivOverlayArray[selectedExpertPanel][2];
			//console.log("closeDivName - "+closeDivName+" : "+"closeDivTop - "+closeDivTop+" : "+"closeDivLeft - "+closeDivLeft);
			//TweenLite.to(rdTestOverlayDiv, .4, {css:{width:"118px", height:"174px", zIndex:50}, ease:Power2.easeInOut, delay:.5,overwrite:true});
			TweenLite.to([roadTestArticle0Div,roadTestArticle1Div,roadTestArticle2Div,expertCloseButton], .3, {css:{autoAlpha:0}, ease:Power2.easeInOut, delay:0,overwrite:true});
			TweenLite.to(closeDivName, .5, {css:{width:"118px", height:"174px", top:closeDivTop, left:closeDivLeft, zIndex:600}, ease:Power2.easeInOut, delay:0,overwrite:true});
		}
		
		// Animation trigger from side nav
		
		this.expertsAnimationTrigger = function()
		{
			expertsAnimationGo();
			//console.log("expertsAnimationTrigger");
		}
		
		
		function setExpertPanelId(e){
			selectedExpertPanel = e;
			//console.log(selectedExpertPanel);
			//TweenLite.to(navigationArray[selectedNavItem], .5, {css:{opacity:1}, ease:Power2.easeOut, delay:0});
		}
		
	}

	window.ExpertsSection = ExpertsSection;
	
}(window));