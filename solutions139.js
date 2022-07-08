/* Generate an array of unique strings.

There are three conditions:

1- The array must contain size unique strings.

Minimum possible array length is 4
Maximum possible array length is 500
2- valid_pct is a number from 0.0 to 1.0(0.25 = 25%, 0.4 = 40%). The number of valid strings must be size * valid_pct floored.

A valid string is alphanumerical(case insensitive) with underscores allowed.
An invalid string contains any other character(Ex: \`'"~!@#$%^&*()[]{}:;<>?|\/)
3- str_size = [str_min_length, str_max_length]. Each string's length must be inside this range(inclusive).

Minimum possible str_length is 2
Maximum possible str_length is 32
Example:
size:4, valid_pct:0.25, str_size:[4, 6] should return an array with 4 strings, 1 valid string, 3 invalid strings, and all strings should have length: 4 <= string.length <= 6

def uniq_strings(size, valid_pct, str_size)
  ...
end

uniq_strings(4,  0.25,  [3,  5])    # => ["wn*", "6!Em", "r^c", "RobxT"]
uniq_srtings(3,  0.1,   [4,  6])    # => ["m#fP&", "Lr4]3", "`@QI"]
uniq_strings(5,  0.9,   [4,  6])    # => ["f7*NG", "gXVd", "Qkxe6R", "3ngST", "P4pkt"]
uniq_strings(11, 0.7,   [8, 16])    # => ["4$$JQ2f8~feQ[Y", "2_()(W7_s5*IWMGn", "Izc**;{_1I", "6K38]hlu@+=+oJ", "LaO4YIz5aY", "lpVC0_*/

//Generate An Array of Unique Strings
function randStrings(size, validPct, strSize) {
  var output = [];
  for (let i = 0; i < size; i++) {
    output.push(i < ~~(size * validPct) ? Array(strSize[0] + ~~(Math.random() * (strSize[1] - strSize[0] + 1))).fill(0).map(e => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_"[~~(Math.random() * 53)]).join("") : Array(strSize[0] + ~~(Math.random() * (strSize[1] - strSize[0] + 1))).fill(0).map(e => "\\`'\"~!@#$%^&*()[]{}:;<>?|/"[~~(Math.random() * 25)]).join(""));
  }
  console.log(output);
  return output;
}