module.exports = function(priceArray){
	var quantities =[];
	var prices =[];
	var totalAvos = 0;
	var totalPrice = 0;
	priceArray.forEach(function(item){
		var price = item[1];
		var quantity = item[0];
		quantities.push(quantity)
		prices.push(price)
	})
	quantities.forEach(function(item){
		totalAvos += Number(item);
	})
	prices.forEach(function(item){
		totalPrice += Number(item);
	})
	return (totalPrice/totalAvos).toFixed(2);
	}
