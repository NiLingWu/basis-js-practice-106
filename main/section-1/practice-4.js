'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var collection =[],A = [];
  var a, b,a1;
  for(a in collectionA)
  {
    A = collectionA[a];
    for(a1 in A.key)
    {
      for(b in objectB.value)
      {
        if(A.key[a1] === objectB.value[b])
        {
          collection.push(A.key[a1]);
        }
      }
    }
  }
  return collection;
}
