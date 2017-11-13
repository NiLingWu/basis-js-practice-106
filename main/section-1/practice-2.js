'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var collection = [];
  var collectionb =[];
  var a, b,b1;
  for(a in collectionA)
  {
    for (b in collectionB)
    {
      collectionb = collectionB[b];
      for (b1 in collectionb)
      {
        if(collectionA[a] === collectionb[b1])
        {
          collection.push(collectionA[a])
        }
      }
    }
  }
  return collection;
}
