#!/usr/bin/env node
"use strict";

const Tilda = require("tilda")
    , faceDetectify = require("..")
    ;

new Tilda(`${__dirname}/../package.json`, {
    options: [
        {
            name: "foo"
          , opts: ["f", "foo"]
          , desc: "Dummy argument"
        }
    ]
}).main(action => {
    /* Do something there */
    console.log("Hello World!");
});