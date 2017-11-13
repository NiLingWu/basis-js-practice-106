'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  var a, b,c;
  for(a in collectionA)
  {
    var num = find(collectionC,collectionA[a]);
    handleC(num,collectionC,collectionA[a]);
  }
  for(b in objectB.value)
  {
    for(c in collectionC)
    {
      if(collectionC[c].key === objectB.value[b])
      {
        collectionC[c].count = full3(collectionC[c].count);
      }
    }
  }
  return collectionC;
}

function find(array,string)
{
  var a,ak =[],a1,num=-1;
  for (a in array)
  {
    ak.push(array[a].key);
  }
  for(a1 in ak)
  {
    if(ak[a1] === string)
    {
      num = a1;
      break;
    }
  }
  return num;
}

function  full3(count)
{
  if(count>=3)
  {
    var i;
    i = count/3;
    var j = parseInt(i);
    count -= j;
  }
  return count;
}

function handleC(num,array,string)
{
  if(num !== -1)
  {
    array[num].count++;
  }
  else
  {
    array.push({key:string,count:1});
  }
}