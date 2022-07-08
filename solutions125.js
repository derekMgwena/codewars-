/* DESCRIPTION:
Task: Your task is to implement parseArray function that parses the array representation to JS-Array.

Examples:

"[1,2,3,4]" -> [1,2,3,4]
" [1.5, 2, 3, [1, 2, 3, [4]], 5]" -> [1.5, 2, 3, [1, 2, 3, [4]], 5]
In case of parse error return null or Nothing:

"abc" -> null
"1" -> null
"[1,2,3" -> null
"[#]" -> null
For simplicity, only number literals appear in the array:

"[0xFF, 1e2]" -> Just (A [ N 255, N 100 ])
Note: require() / eval() / JSON.parse() / new Function() are disabled.*/

function parseArray(s){
  s = s.replace(/ /g, '')
  const ary = () => {
    let arr = []
    let el = null
    while (ii < s.length) {
      if (s[ii] === ']' || s[ii] === ',') {
        ii++
        if (el !== null) arr.push(el)
        if (s[ii - 1] === ']') return arr
      } else if (s[ii] === '[') {
        ii++
        el = ary()
      } else {
        let jj = ii
        while (!',]'.includes(s[++jj])) {
          if (jj > s.length) return null
        }
        el = +s.substring(ii, jj)
        ii = jj
      }
    }
    return null
  }

  let ii = 0
  while (s[ii++] !== '[') {
    if (ii > s.length) return null
  }
  let results = ary()
  return ii === s.length ? results : null
}