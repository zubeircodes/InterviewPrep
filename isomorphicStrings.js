
/*
  2 strings are isomorphic if at every index, the same letters are mapped together
  ex: paper and title, everywhere there is a p, there is a t, and ther rest of the 
  letters are uniquely matched
*/ 
var isIsomorphic = function(s, t) {
 
  if(s.length !== t.length) {
      return false;
  }
  
  const myMap = new Map();
  for (let i = 0; i < s.length; i++ ){
      if(myMap.has(s.charAt(i) && 
      myMap.get(s.charAt(i)) !== t.charAt(i))) {
          return false;
          console.log("First if statement \n");
          console.log(s.charAt(i), t.charAt(i));
      } else {
          myMap.set(s.charAt(i), t.charAt(i));
          console.log("Second if statement \n");
          console.log(s.charAt(i), t.charAt(i));
      }
  }
  return true;
};

isIsomorphic("badc", "bada");
// solution works when you have a 2 mapp solution. makes sure that all of s is 
// uniquely matched with t, and all of t is uniquely matched with s