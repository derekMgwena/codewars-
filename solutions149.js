/* DESCRIPTION:
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""*/
//Backspaces in string
function cleanString(s) {
  let str = s;
  for (let i = 0; i < s.length-1; i += 1) {
    const idx = str.indexOf('#');
    const splitStr = str.split(str.slice(idx-1, idx+1)).join('');
    
    if (idx === 0) {
      str = str.substring(1, );
      
      if (str === '#') {
        return '';
      }
      
    } else {
      str = splitStr;
    }
  }
  
  return str;
};
