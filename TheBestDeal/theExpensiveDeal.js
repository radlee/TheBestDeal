module.exports = function(theArray){
	var expensive = 0;
	var deal = '';
	theArray.map(function(object){
		if(object.PricePerAvo > expensive){
			expensive = object.PricePerAvo;
			deal = object.Deal;
		}
	})
	return deal;
}
