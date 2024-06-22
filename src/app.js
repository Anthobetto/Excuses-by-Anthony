let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function AnExcuse(QWho, Qaction, Qwhat, Qwhen) {
  QWho = who[Math.floor(Math.random() * who.length)];
  Qaction = action[Math.floor(Math.random() * action.length)];
  Qwhat = what[Math.floor(Math.random() * what.length)];
  Qwhen = when[Math.floor(Math.random() * when.length)];

  return QWho + " " + Qaction + " " + Qwhat + " " + Qwhen;
}

function OnLoad() {
  document.getElementById("excuse").innerHTML = AnExcuse();
}

window.onload = OnLoad();
