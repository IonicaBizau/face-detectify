"use strict";

const FaceDetectify = require("../lib");

FaceDetectify.fromFile(`${__dirname}/example.jpg`).then(res => {
    console.log(res)
    // => { data: [ { total: 1, width: 39, height: 39, x: 1038, y: 0 } ] }
}).catch(console.error)
