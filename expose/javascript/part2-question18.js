function printTime() {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}

printTime();
setInterval(printTime, 1000);
