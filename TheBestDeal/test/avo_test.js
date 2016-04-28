var assert = require('assert');
var getArray = require('../getArray');
var makeAnObject = require('../makeAnObject');
var theCheapestDeal = require('../theCheapestDeal');
var theExpensiveDeal = require('../theExpensiveDeal');
var averageDeal = require('../averageDeal');

var deal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50"

var array = getArray(deal);
// var obj = makeAnObject(array);
var theArrayOfObjetcs = makeAnObject(deal);

describe('Get the Best Deal--->', function(){
  it('should retun an array of Quantities and Prices', function(){
    assert.deepEqual(array,
  [
    ['1','3'],
    ['2','7'],
    ['3','10'],
    ['5','14.50']
  ]
);
  });

  it('should retun a list of deals with prices per avo', function(){
    assert.deepEqual(makeAnObject(deal),

    [
      {
        Deal : '1 for R3',
        Price : 3.00,
        Quantity : 1,
        PricePerAvo : 3.00
      },
      {
        Deal : '2 for R7',
        Price : 7.00,
        Quantity : 2,
        PricePerAvo : 3.5
      },
      {
        Deal : '3 for R10',
        Price : 10.00,
        Quantity : 3,
        PricePerAvo : 3.33
      },
      {
        Deal : '5 for R14.50',
        Price : 14.50,
        Quantity : 5,
        PricePerAvo : 2.90
      }

    ]
  );
  });

  it('should retun the cheapest deal', function(){
    assert.deepEqual(theCheapestDeal(theArrayOfObjetcs),
    "5 for R14.50"

);
  });

  it('should return the most Expensive Deal', function(){
    assert.equal(theExpensiveDeal(theArrayOfObjetcs),
    "2 for R7"

);
  });

  it('should return the average of all the deal prices', function(){
    assert.equal(averageDeal(array), 3.14);
  });
});
