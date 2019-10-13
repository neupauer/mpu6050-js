const mpu6050 = require('./index');

const {
  createTempStream,
  createGyroStream,
  createAccelStream,
  createRotationStream
} = mpu6050;

const $stream = createRotationStream({readInterval: 1000});

$stream.subscribe((data) => {
  console.log(data);
});
