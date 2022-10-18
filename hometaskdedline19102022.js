function stringTypeofSomeValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    if (
        typeof value === 'number' ||
        typeof value === 'boolean'
    ) {
        return String(value).length;
    }
}
console.log(stringTypeofSomeValue('hello,world'));
console.log(stringTypeofSomeValue(255555));
console.log(stringTypeofSomeValue(false));