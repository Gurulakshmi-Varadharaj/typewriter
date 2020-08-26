const sentences = (sentence) => {
  let time = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time += 50);
  }
};

sentences('hello there from Lighthouse\n');

