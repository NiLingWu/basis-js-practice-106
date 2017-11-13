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

function handleC(num,array,string)
{
  if(num === -1)
  {
    var entry = check(string);
    array.push({key:entry[0],count:entry[1]});
  }
  else
    array[num].count++;
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

function check(string)
{
  var element = ['key',0];
  if(string.match('-'))
  {
    element = string.split('-');
    element[1]=parseInt(element[1]);
  }
  else
  {
    element[0] = string;
    element[1] = 1;
  }
  return element;
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