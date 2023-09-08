/*
The goal of this exercise is to convert a string to a 
new string where each character in the new string is 
"(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/


// Solution

function duplicateEncode(string) {
  let occurances = string.toLowerCase().split('').reduce(function(occ, cha) {
    occ[cha] = (occ[cha] || 0) + 1;
    return occ;
  }, {});
  return string.toLowerCase().replace(/[S/s]/g, function(cha){
    return occurances[cha] > 1 ? ')' : '(';
  }); 
}

// or

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// or

const duplicateEncode = s => {
  const S = [...s.toLowerCase()];
  const counts = S.reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
  return S.map(c => counts[c] > 1 ? ')' : '(').join('');
}