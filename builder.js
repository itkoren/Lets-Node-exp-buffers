var size = 1024 * 128; // * 256;

function randomizeChar() {
    return 97 + Math.round(Math.random() * 25);
}

function buildString() {
    var longString = "";
    for (var i = 0; i < size; i++) {
        longString += String.fromCharCode(randomizeChar());
    }
    return longString;
}

function buildBuffer() {
    var buffer = new Buffer(size);
    for (var i = 0; i < buffer.length; i++) {
        buffer[i] = randomizeChar();
    }

    return buffer.toString("utf-8");
}

console.time("buildString");
buildString();
console.timeEnd("buildString");
console.time("buildBuffer");
buildBuffer();
console.timeEnd("buildBuffer");