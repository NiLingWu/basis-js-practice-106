'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var b,a;
  for(b in objectB.value)
  {
    for(a in collectionA)
    {
      if(collectionA[a].key ===objectB.value[b])
      {
        collectionA[a].count--;
      }
    }
  }
  return collectionA;
}
