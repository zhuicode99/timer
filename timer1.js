let arg = process.argv;
let time = arg.slice(2);

const beep = function(time) {
  for (let num of time) {
    if (!num || num === undefined || num < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
};

beep(time);






