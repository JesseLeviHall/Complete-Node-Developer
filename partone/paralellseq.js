//paralell: run them all at the same time Promise.all
//sequential: run them one after the other
//race: run them all at the same time and return the first one that finishes. Promise.race

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(item);
    }, delay)
  );

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

//parallel
const parallel = async () => {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
};

parallel().then(console.log);

//race
const race = async () => {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
};

race().then(console.log);

//sequence
const sequence = async () => {
  const outputOne = await a();
  const outputTwo = await b();
  const outputThree = await c();
  return `sequence is done ${outputOne} ${outputTwo} ${outputThree}`;
};

sequence().then(console.log);

//output:
//race is done: a
//parallel is done: a b c
//sequence is done a b c
