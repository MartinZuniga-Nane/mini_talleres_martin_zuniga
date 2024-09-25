//https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) return '';

    let longest = [];
    for (let i = 0; i <= strarr.length - k; i++) {
        let current = strarr.slice(i, i + k).join('');
        longest.push(current);
    }

    longest.sort((a, b) => b.length - a.length);

    return longest[0];
}

