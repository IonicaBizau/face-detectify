"use strict";

require("./browser-mock")
require("tracking")
require("tracking/build/data/face")

const getpixels = require("get-pixels")

class FaceDetectify {
    static fromBuffer (buffer, width, height, cb) {
	const tracker = new tracking.ObjectTracker("face");
        cb && tracker.on("track", cb)
	tracker.track(buffer, width, height)
	return tracker
    }

    static fromFile (filePath) {
        return new Promise((res, rej) => {
            getpixels(filePath, (err, data) => {
                if (err) { return rej(err) }
                FaceDetectify.fromBuffer(data.data, data.shape[0], data.shape[1], res)
            })
        })
    }
}

module.exports = FaceDetectify
