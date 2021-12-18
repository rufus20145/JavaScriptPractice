const DEFAULT_VALUE = 128;

function matrixes(n) {
    var x = new Array(n + 1);
    for (let i = 0; i < x.length; i++) {
        x[i] = new Array(n + 1);
    }

    x[0][0] = 1n;

    for (let i = 1; i <= n; i++) {
        x[i][0] = x[i - 1][i - 1];
        for (var j = 1; j <= i; j++) {
            x[i][j] = x[i - 1][j - 1] + x[i][j - 1];
        }
    }

    return x[n][0];
}

var number;
if (typeof process.argv[2] == "string") {
    number = process.argv[2];
} else {
    number = DEFAULT_VALUE;
}

var digits = 0;
var tmp = number;
while (tmp > 0) {
    digits += 1;
    tmp = Math.floor(tmp / 10);
}
// console.log("Количество цифр:", digits);
digits++; // учитываем пробел после номера

var results = new Array(257);
for (let index = 0; index <= number; index++) {
    results[index] = matrixes(index);
}

results.forEach((element, index) => {
    console.log(String(index).padEnd(digits), element.toString());
});
