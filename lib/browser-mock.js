const noop = require("noop6")

// Mock browser globals used by tracking.js
global.window = {
    URL: ""
  , requestAnimationFrame: noop
  , cancelAnimationFrame: noop
  , navigator: {
        getUserMedia: noop
    }
}

global.navigator = window.navigator
global.tracking  = window.tracking = {};
