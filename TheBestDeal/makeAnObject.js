module.exports =  function(stringToSplit){
  var listOfDeals = stringToSplit.split(', ');
  var dealObj = [];
  var dealAndPrice ={};
  listOfDeals.map(function(deal){
    var str = deal.split(' for R');
    var result = {
      Deal : deal,
      Price : Number(str[1]).toFixed(2),
      Quantity : Number(str[0]),
      PricePerAvo : Number(str[1]/str[0]).toFixed(2)
    }
    dealAndPrice[deal] = result.Price;
    dealObj.push(result)
  })
    return dealObj;
  }
