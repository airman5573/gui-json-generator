import { nanoid } from "nanoid";

const randomImageApiUrl = "https://picsum.photos";

const randomNumberInRange = (min, max) => {
  return Math.max(min, Math.floor(Math.random() * (max + 1)));
};

const randomString = (min, max) => {
  const ramdom = randomNumberInRange(min, max);
  return nanoid(ramdom);
};

const nextIndex = (currentIndex) => {
  return currentIndex + 1;
};

const oneOf = (arr) => {
  const randomIndex = randomNumberInRange(0, arr.length - 1);
  return arr[randomIndex];
};

const num = (min, max) => {
  return randomNumberInRange(min, max);
};

const image = (width, height) => {
  return `${randomImageApiUrl}/${width}/${height}`;
};

const money = (min, max, interval) => {
  const m = randomNumberInRange(min, max);
  return Math.floor(m / interval) * interval;
};

const isFunction = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Function]";
};

const isPlainObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

export default {
  randomNumberInRange,
  randomString,
  nextIndex,
  oneOf,
  num,
  image,
  money,
  isFunction,
  isPlainObject,
};