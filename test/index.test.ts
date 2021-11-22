import path from 'path';
import fs from 'fs';
import isAnimated from '../index';

const testBuffer: Buffer = Buffer.alloc(0);

test('Ensure it is working with any buffer', () => {
  expect(isAnimated(testBuffer)).toBe(false);
});

test('Animated - example.gif', () => {
  const file = path.resolve(`./test/files/example.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(true);
});

test('Not animated - GifSample.gif', () => {
  const file = path.resolve(`./test/files/GifSample.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - Quilt_design_as_46x46_uncompressed_GIF.gif', () => {
  const file = path.resolve(
    `./test/files/Quilt_design_as_46x46_uncompressed_GIF.gif`
  );
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Animated - SmallFullColourGIF.gif', () => {
  const file = path.resolve(`./test/files/SmallFullColourGIF.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(true);
});

test('Not animated - Sunflower_as_gif_websafe.gif', () => {
  const file = path.resolve(`./test/files/Sunflower_as_gif_websafe.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - postcard.gif', () => {
  const file = path.resolve(`./test/files/postcard.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - 1E3A0FFF2F0ED7F3DD8DAE5CC461494E.gif', () => {
  const file = path.resolve(
    `./test/files/1E3A0FFF2F0ED7F3DD8DAE5CC461494E.gif`
  );
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - 09_24_14_Better_Together_GC_Event_FD.gif', () => {
  const file = path.resolve(
    `./test/files/09_24_14_Better_Together_GC_Event_FD.gif`
  );
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - 21.gif', () => {
  const file = path.resolve(`./test/files/21.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - calendar_265x230.gif', () => {
  const file = path.resolve(`./test/files/calendar_265x230.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - 2026556_rw_nl_160X250.gif', () => {
  const file = path.resolve(`./test/files/2026556_rw_nl_160X250.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - connections.gif', () => {
  const file = path.resolve(`./test/files/connections.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - block-7.gif', () => {
  const file = path.resolve(`./test/files/block-7.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - PSP14_728-x-90_HOUZZ.gif', () => {
  const file = path.resolve(`./test/files/PSP14_728-x-90_HOUZZ.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - daily-idea-header.gif', () => {
  const file = path.resolve(`./test/files/daily-idea-header.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - b_cc_email14.gif', () => {
  const file = path.resolve(`./test/files/b_cc_email14.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - generic-header.gif', () => {
  const file = path.resolve(`./test/files/generic-header.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Animated - colbert.gif', () => {
  const file = path.resolve(`./test/files/colbert.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(true);
});

test('Non GIF - Physical-Representations-of-Data.png', () => {
  const file = path.resolve(
    `./test/files/Physical-Representations-of-Data.png`
  );
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});

test('Not animated - large-size-not-animated.gif', () => {
  const file = path.resolve(`./test/files/large-size-not-animated.gif`);
  const buffer = fs.readFileSync(file);
  expect(isAnimated(buffer)).toBe(false);
});
