//Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments.

/*time in seconds
const input = process.argv.
process.stdout.write("\x07");*/
/*let count = 1000;
let alarms = process.argv;
below code referred to as an example.
const timer = () => {
  for (let i = 2; i < alarms.length; i++) {
    // eslint-disable-next-line use-isnan
    if (alarms[i] >= 0 && alarms[i] !== NaN) {
      setTimeout(() => {
        process.stdout.write(".");
        process.stdout.write("\x07");
      }, count * alarms[i]);
    }
  }
};

timer(alarms);*/

const timer = function(timeUntil) {
  let countdown = timeUntil * 1000;
  if (countdown > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, countdown);
  }
};
  
for (let j = 0; j < process.argv.length; j++) {
  timer(process.argv[j]);
}
  