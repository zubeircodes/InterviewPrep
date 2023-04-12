
var isSubsequence = function(s, t) {
  let sIndex = 0;
  let tIndex = 0;
  let matchedStr = "";

  for(let i =tIndex; i <t.length; i++) {
    for (let j = sIndex; j< s.length; j++) {
      if(s.charAt(j) === t.charAt(i)){
        matchedStr += t.charAt(i);
        sIndex++;
        tIndex++;
        console.log("matchedStr: ", matchedStr);
        console.log("s: ", s);
      } else {
        tIndex++;
      }
    }
  }
  return matchedStr === s;
};

isSubsequence('aaaaaa', 'bbaaaa');