'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var collection = [];
  var a,b;
  for(a in collectionA)
  {
    for(b in objectB.value)
    {
      if(collectionA[a] === objectB.value[b])
      {
        collection.push(collectionA[a]);
      }
    }
  }
  return collection;
}
