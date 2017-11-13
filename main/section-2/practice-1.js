'use strict';

module.exports = function countSameElements(collection) {
  var array = [];
  var c;
  for(c in collection)
  {
    var num = find(array,collection[c]);
    if(num !== -1)
    {
      array[num].count++;
    }
    else
      array.push({key:collection[c],count:1});
  }
  return array;
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