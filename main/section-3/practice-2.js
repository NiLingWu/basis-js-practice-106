'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var a,b;
  for (b in objectB.value)
  {
    for(a in collectionA)
    {
      if(collectionA[a].key === objectB.value[b])
      {
        if(collectionA[a].count>=3)
        {
          var i;
          i = collectionA[a].count/3;
          var j = parseInt(i);
          collectionA[a].count -= j;
        }
      }
    }
  }
  return collectionA;
}
