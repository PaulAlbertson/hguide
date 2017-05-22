(function(window)
{
	function Shoppers()
	{
		$("#shoppersExitLinkDiv").css('cursor', 'pointer').click(function(event) {
			shoppingExitLink();
		});
		
		function shoppingExitLink()
		{
			window.location= "https://www.hyundaiusa.com/build-your-hyundai/";
		}	
	}	
	window.Shoppers = Shoppers;
}(window));