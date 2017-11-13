'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var collection = [];
  var a ,b;
  for(a in collectionA)
  {
    for(b in collectionB)
    {
      if(collectionA[a]===collectionB[b])
      {
        collection.push(collectionA[a]);
      }
    }
  }
  return collection;
}
