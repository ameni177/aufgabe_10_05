var random = require('random-string-generator');
var result = random(100000, 'scoped:ABCDE');
var stat = [0, 0, 0, 0, 0];
for (var i in result) {
    var s = result[i];
    switch (s) {
        case 'A': stat[0]++; break;
        case 'B': stat[1]++; break;
        case 'C': stat[2]++; break;
        case 'D': stat[3]++; break;
        case 'E': stat[4]++; break;
        default: break;
    }
}

function output(char, num) {
    return char + ': ' + stat[num] / 1000 + '%';
}

console.log(output('A', 0));
console.log(output('B', 1));
console.log(output('C', 2));
console.log(output('D', 3));
console.log(output('E', 4));

/*
 * The results may be:
 *
 * A: 20.044%
 * B: 19.969%
 * C: 19.93%
 * D: 19.991%
 * E: 20.066%
 *
 * or some others.
*/