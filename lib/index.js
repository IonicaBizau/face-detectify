"use strict";

// Mock the Browser API
require("./browser-mock")
require("tracking")
require("tracking/build/data/face")

const getpixels = require("get-pixels")

class FaceDetectify {
    /**
     * fromBuffer
     * Process a buffer.
     *
     * @name fromBuffer
     * @function
     * @static
     * @param {Buffer} buffer The image buffer.
     * @param {Number} width The width.
     * @param {Number} height The height.
     * @param {Function} cb The callback function.
     * @return {EvenEmitter} The `ObjectTracker` instance created by `tracking`.
     */
    static fromBuffer (buffer, width, height, cb) {
	const tracker = new tracking.ObjectTracker("face");
        cb && tracker.on("track", cb)
	tracker.track(buffer, width, height)
	return tracker
    }

    /**
     * fromFile
     * Process a file.
     *
     * @name fromFile
     * @function
     * @static
     * @param {String} filePath The file path to the image.
     * @returns {Promise} A promise resolving with the following object:
     *    - `data` (Array): An array of objects representing the positions of the faces in the image:
     *      - `total` (Number)
     *      - `width` (Number)
     *      - `height` (Number)
     *      - `x` (Number)
     *      - `y` (Number)
     */
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
