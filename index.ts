import stream from 'stream';
import inherits from 'inherits';

const Writable = stream.Writable;
// GIF CONSTANTS: http://www.matthewflickinger.com/lab/whatsinagif/bits_and_bytes.asp
const BLOCK_TERMINATOR = { value: '00' };
const EXTENSION_INTRODUCER = {
  value: '21',
  head: 0,
  tail: 1,
};
const GRAPHIC_CONTROL_LABEL = {
  value: 'f9',
  head: 1,
  tail: 2,
};

class AnimatedGifDetector extends Writable {
  buffer: Buffer;
  count: number;
  isGIF: boolean | null;
  pointer: string;

  constructor() {
    super();
    this.buffer = Buffer.alloc(0);
    this.count = 0;
    this.isGIF = null;
    this.pointer = '';
  }

  isAnimated(buffer: Buffer) {
    let result = false;
    for (let i = 0; i < buffer.length; i++) {
      const headIntro = i + EXTENSION_INTRODUCER.head;
      const tailIntro = i + EXTENSION_INTRODUCER.tail;
      const headControl = i + GRAPHIC_CONTROL_LABEL.head;
      const tailControl = i + GRAPHIC_CONTROL_LABEL.tail;
      const chunkIntro = buffer.toString('hex', headIntro, tailIntro);
      const chunkControl = buffer.toString('hex', headControl, tailControl);
      result =
        this.pointer === BLOCK_TERMINATOR.value &&
        chunkIntro === EXTENSION_INTRODUCER.value &&
        chunkControl === GRAPHIC_CONTROL_LABEL.value;
      if (result) {
        console.log(chunkIntro);
        console.log(chunkControl);
        this.count++;
      }
      if (this.count > 1) {
        return true;
      }
      this.pointer = buffer.toString('hex', i, i + 1);
    }
    return false;
  }
}

export default function animated(buffer: Buffer) {
  if (buffer.slice(0, 3).toString() !== 'GIF') {
    return false;
  }
  return new AnimatedGifDetector().isAnimated(buffer);
}
