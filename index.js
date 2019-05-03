var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var current = katzDeliLine[0];
  katzDeliLine.unshift();
  return "Currently serving " + current + ".";
}
