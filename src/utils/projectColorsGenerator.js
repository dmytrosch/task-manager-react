function* projectColorGenerator() {
  yield "#8C72DF";
  yield "#FF765F";
  yield "#71DF87";
  return;
}
let instance = projectColorGenerator;
let generator = instance();
export default function getColor() {
  const iterable = generator.next();
  if (!iterable.done) {
    return iterable.value;
  } else {
    instance = projectColorGenerator;
    generator = instance();
    const iterable = generator.next();
    return iterable.value;
  }
}
