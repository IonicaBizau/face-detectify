## Documentation

You can see below the API reference of this module.

### `fromBuffer(buffer, width, height, cb)`
Process a buffer.

#### Params

- **Buffer** `buffer`: The image buffer.
- **Number** `width`: The width.
- **Number** `height`: The height.
- **Function** `cb`: The callback function.

#### Return
- **EvenEmitter** The `ObjectTracker` instance created by `tracking`.

### `fromFile(filePath)`
Process a file.

#### Params

- **String** `filePath`: The file path to the image.

#### Return
- **Promise** A promise resolving with the following object:    - `data` (Array): An array of objects representing the positions of the faces in the image:
     - `total` (Number)
     - `width` (Number)
     - `height` (Number)
     - `x` (Number)
     - `y` (Number)

