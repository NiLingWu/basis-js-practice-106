'use strict';

module.exports = function countSameElements(collection) {
  var array = [],c;
  for(c in collection)
  {
    var num = find(array,collection[c]);
    if(num === -1)
    {
      var entry = check(collection[c]);
      array.push({key:entry[0],count:entry[1]});
    }
    else
      array[num].count++;
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
