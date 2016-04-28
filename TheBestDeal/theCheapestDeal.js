module.exports = function(theArray){
	var cheapest = 100000;
	var deal = '';
	theArray.map(function(object){
		if(object.PricePerAvo < cheapest){
			cheapest = object.PricePerAvo;
			deal = object.Deal;
		}
	})
	return deal;
}
