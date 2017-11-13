'use strict';

module.exports = function countSameElements(collection) {
 var array =[],c;
  for(c in collection)
  {
    var entry = check(collection[c]);
    var num = find(array,entry[0]);
    if(num === -1)
    {
      array.push({name:entry[0],summary:entry[1]});
    }
    else
    {
      array[num].summary += entry[1];
    }
  }
  return array;
}

function find(array,string)
{
  var a,ak =[],a1,num=-1;
  for (a in array)
  {
    ak.push(array[a].name);
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
  var element = ['name',0];
  if(string.match('-'))
  {
    element = string.split('-');
  }
   else if(string.match(':'))
   {
     element = string.split(':');
   }
  else
  {
      var L=string.length-1;
      if(string.length>3)
      {
          for(var s in string)
          {
              if(s==0)
              {
                  element[0] = string[s];
              }
              else if(s>1 && s!=L)
              {
                  element[1] +=string[s];
              }
          }
      }
      else
      {
          element[0] = string;
          element[1] = 1;
      }

  }
  element[1]=parseInt(element[1]);
  return element;
}