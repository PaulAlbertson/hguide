(function(window)
{
	sideNavigationOpen = true;
	expertSectionLaunched = false;
	selectedSideNavItem = 0;
	previousSideNavItem = 0;
	
	sideNav = document.getElementById('sideNav');
	sideNav0 = document.getElementById('sideNav0');
	sideNav1 = document.getElementById('sideNav1');
	sideNav2 = document.getElementById('sideNav2');
	sideNav3 = document.getElementById('sideNav3');
	sideNav4 = document.getElementById('sideNav4');
	sideNav5 = document.getElementById('sideNav5');
	sideNav6 = document.getElementById('sideNav6');
	sideNav7 = document.getElementById('sideNav7');
	sideNav8 = document.getElementById('sideNav8');
	sideNav9 = document.getElementById('sideNav9');
	sideNav10 = document.getElementById('sideNav10');
	
	
	
	navigationArray = [sideNav0,sideNav1,sideNav2,sideNav3,sideNav4,sideNav5,sideNav6,sideNav,sideNav8,sideNav9,sideNav10];

	function SideNav()
	{
		// Scroll position helper class
		var scrollPosition = new ScrollPosition();
		var expertsSection = new ExpertsSection();
		
		//console.log("Main.urlVar from Side Nav: "+urlVar);
		// Need to stub out conditional for nav
		
		TweenLite.to(navigationArray[0], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:false});
		
		$("#sideNavCarrotDiv").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(sideNavCarrot, .1, {css:{autoAlpha:.5}, ease:Sine.easeOut, delay:0,overwrite:true});
		  //TweenLite.to(sideNavCarrot, .5, {css:{rotation:0}, ease:Sine.easeOut, delay:0});
	  		}, function(event) {
	  			TweenLite.to(sideNavCarrot, .1, {css:{autoAlpha:1}, ease:Sine.easeOut, delay:0,overwrite:true});
		  //TweenLite.to(sideNavCarrot, .5, {css:{rotation:180}, ease:Sine.easeOut, delay:0});
		});
		$("#sideNavCarrotDiv").css('cursor', 'pointer').click(function(event) {
			//console.log("carrot Click");
			toggleNavigation();
		});
		
		$("#sideNav0").css('cursor', 'pointer').hover(function(event) {
			if (selectedSideNavItem != 0){
				TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
		  }, function(event) {
		  	if (selectedSideNavItem != 0){
				TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
	  		// if (this.selectedNavItem != 6){
		  		// TweenLite.to(atypicalSideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		  // }
		});
		$("#sideNav1").css('cursor', 'pointer').hover(function(event) {
			if (selectedSideNavItem != 1){
				TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
		  }, function(event) {
		  	if (selectedSideNavItem != 1){
				TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
		});
		$("#sideNav2").css('cursor', 'pointer').hover(function(event) {
			//console.log("sideNav2");
			if (selectedSideNavItem != 2){
				TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
		  }, function(event) {
		  	if (selectedSideNavItem != 2){
		  		TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  	};
		});
		$("#sideNav3").css('cursor', 'pointer').hover(function(event) {
			//console.log("sideNav3");
			if (selectedSideNavItem != 3){
				TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
		  }, function(event) {
		  	if (selectedSideNavItem != 3){
		  		TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  	};
		});
		$("#sideNav4").css('cursor', 'pointer').hover(function(event) {
			if (selectedSideNavItem != 4){
				TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
		  }, function(event) {
		  	if (selectedSideNavItem != 4){
		  		TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  	};
		});
		$("#sideNav5").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  }, function(event) {
		  	TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		});
		$("#sideNav6").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  }, function(event) {
		  	TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		});
		$("#sideNav7").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  }, function(event) {
		  	TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		});
		$("#sideNav8").css('cursor', 'pointer').hover(function(event) {
			if (selectedSideNavItem !=8){
				TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			};
		  }, function(event) {
		  	if (selectedSideNavItem !=8){
		  		TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  	};
		});
		$("#sideNav9").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  }, function(event) {
		  	TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		});
		$("#sideNav10").css('cursor', 'pointer').hover(function(event) {
			TweenLite.to(event.target, .1, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		  }, function(event) {
		  	TweenLite.to(event.target, .1, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
		});
		
		$("#slide0BtnDiv").css('cursor', 'pointer').click(function(event) {
		  console.log("ButtonClick: "+event.target.id);
		  switch(event.target.id)
		  {
		    case "expertReviewsBtn":
    		    //console.log("expertReviewsBtn");
    		    expertSectionLaunched = true;
                //console.log("expertSectionLaunched POST: "+SideNav.expertSectionLaunched);
                triggerExpertSection();
                TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
                selectedSideNavId(1);
                TweenLite.to(navigationArray[1], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
                var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
                TweenLite.to(curScroll, 1.2, {y:1430, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }, ease:Power2.EaseInOut});
                toggleNavigation();
		    break;
		    case "createAccountSubmitBtn":
		       //console.log("createAccountSubmitBtn");
		    break;
		    case "getMoreDataBtn":
		    	TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
				selectedSideNavId(8);
				TweenLite.to(navigationArray[8], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
				var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
				TweenLite.to(curScroll, 1, {y:6325, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
				toggleNavigation();
		    break;
		  }
		});
		
				// Click Handlers
		$("#sideNavElementsDiv").click(function(event) {
			switch(event.target.id)
			{
				case "sideNav0":
					TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					selectedSideNavId(0);
					TweenLite.to(sideNavContainer, .5, {css:{top:"300px"}, ease:Sine.easeInOut, delay:.5,overwrite:true});
					var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
					TweenLite.to(curScroll, 2, {y:0, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }, ease:Power2.EaseInOut});
					toggleNavigation();
				break;
				case "sideNav1":
				//var projectVariables = new ProjectVariables();
					//console.log("expertSectionLaunched PRE: "+SideNav.expertSectionLaunched);
					expertSectionLaunched = true;
					//console.log("expertSectionLaunched POST: "+SideNav.expertSectionLaunched);
					triggerExpertSection();
					TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					selectedSideNavId(1);
					TweenLite.to(navigationArray[1], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
					TweenLite.to(curScroll, 2, {y:1430, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }, ease:Power2.EaseInOut});
					toggleNavigation();
				break;
				case "sideNav2":
					TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					selectedSideNavId(2);
					TweenLite.to(navigationArray[2], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
					TweenLite.to(curScroll, 2, {y:2625, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
					toggleNavigation();
				break;
				case "sideNav3":
					TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					selectedSideNavId(3);
					TweenLite.to(navigationArray[3], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
					TweenLite.to(curScroll, 2, {y:3875, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
					toggleNavigation();
				break;
				case "sideNav4":
					TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					selectedSideNavId(4);
					TweenLite.to(navigationArray[4], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
					TweenLite.to(curScroll, 2, {y:5125, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
					toggleNavigation();
				break;
				case "sideNav5":
					console.log("click : sideNav5");
				break;
				case "sideNav6":
					console.log("click : sideNav6");
				break;
				case "sideNav7":
					console.log("click : sideNav7");
				break;
				case "sideNav8":
					//console.log("click : sideNav8");
					TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					selectedSideNavId(8);
					TweenLite.to(navigationArray[8], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
					var curScroll = {x:scrollPosition.getScrollX(), y:scrollPosition.getScrollY()};
					TweenLite.to(curScroll, 1, {y:6325, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
					toggleNavigation();
				break;
				case "sideNav9":
					console.log("click : sideNav9");
				break;
				case "sideNav10":
					console.log("click : sideNav10");
				break;
				
				default:
			}
						//console.log(event.target.id);
		});
		
		
		function selectedSideNavId(e){
			selectedSideNavItem = e;
			previousSideNavItem = selectedSideNavItem;
			//console.log(previousSideNavItem);
		}
		function triggerExpertSection()
		{
			TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			selectedSideNavId(1);
			TweenLite.to(navigationArray[1], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			expertsSection.expertsAnimationTrigger();
		}
		this.globalTriggerExpertSection = function()
		{
			TweenLite.to(navigationArray[previousSideNavItem], .3, {css:{color:"#adadad"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			selectedSideNavId(1);
			TweenLite.to(navigationArray[1], .3, {css:{color:"#d8ff49"}, ease:Sine.easeInOut, delay:0,overwrite:true});
			expertsSection.expertsAnimationTrigger();
		}
		this.globalNavToggle = function()
		{
			toggleNavigation();
		}
		function toggleNavigation()
		{
			//console.log("SideNav.sideNavigationOpen: "+SideNav.sideNavigationOpen);
			if (sideNavigationOpen)
			{
				TweenLite.to(sideNavContainer, .5, {css:{right:"-130px"}, ease:Sine.easeInOut, delay:.2,overwrite:false});
				TweenLite.to(sideNavCarrot, 0, {css:{rotation:0}, ease:Sine.easeOut, delay:0,overwrite:false});
				sideNavigationOpen = false;
				console.log("sideNavigationOpen: "+sideNavigationOpen);
				
			} else if (!sideNavigationOpen){
				TweenLite.to(sideNavContainer, .5, {css:{right:"0px"}, ease:Sine.easeInOut, delay:.2,overwrite:false});
				TweenLite.to(sideNavCarrot, 0, {css:{rotation:180}, ease:Sine.easeOut, delay:0,overwrite:false});
				sideNavigationOpen = true;
				console.log("sideNavigationOpen: "+sideNavigationOpen);
			}
		}
	}

	window.SideNav = SideNav;
	
}(window));
