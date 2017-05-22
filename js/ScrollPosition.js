(function(window){
	function ScrollPosition(){
		
				this.getScrollX = function() {
				    return (window.pageXOffset != null) ? window.pageXOffset : (document.documentElement.scrollLeft != null) ? document.documentElement.scrollLeft : document.body.scrollLeft;
				}
					//returns the current vertical scroll position
				this.getScrollY = function () {
				    return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
				}
				
			}
	window.ScrollPosition = ScrollPosition;
	
}(window));
