module.exports = function reverse (n) {
    let toStringSplit = n.toString().split('');
    if (toStringSplit[0] !== '-') {
        return Number(toStringSplit.reverse().join(''));
    }
    else {
        let exceptOfMinus = '';
        for (let i = 1; i < toStringSplit.length; i++) {
            exceptOfMinus += toStringSplit[i];
        }
        return Number(exceptOfMinus.split('').reverse().join(''));
    }
}
