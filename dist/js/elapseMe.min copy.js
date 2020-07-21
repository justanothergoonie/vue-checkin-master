"use strict";

var elapseMe = function elapseTimer(e) {
  var l = new Date();
  var g = {
    year: l.getFullYear(),
    month: l.getMonth(),
    day: l.getDate(),
    hr: l.getHours(),
    min: l.getMinutes(),
    sec: l.getSeconds(),
    targetId: "elapsedTime",
    update: true,
    show: "all"
  };

  if (typeof e == "undefined") {
    e = {};
  }

  for (var h in g) {
    e[h] = typeof e[h] == "undefined" ? g[h] : e[h];
  }

  var c = new Date();
  c.setYear(e.year);
  c.setMonth(e.month);
  c.setDate(e.day);
  c.setHours(e.hr);
  c.setMinutes(e.min);
  c.setSeconds(e.sec);
  var r = new Date();
  var s = r.getTime() - c.getTime();
  var b = 86400000;
  var k = Math.floor(s / b);
  var p = s % b;
  var n = 3600000;
  var m = Math.floor(p / n);
  p = p % n;
  var o = 60000;
  var a = Math.floor(p / o);
  p = p % o;
  var q = 1000;
  var j = Math.round(p / q);
  var f = e.show == "all" || e.show.match(/days/gi) ? k + " Day" + (k == 1 ? " " : "s ") : "";
  f += e.show == "all" || e.show.match(/hours/gi) ? m + " Hour" + (m == 1 ? " " : "s ") : "";
  f += e.show == "all" || e.show.match(/minutes/gi) ? a + " Minute" + (a == 1 ? " " : "s ") : "";
  f += e.show == "all" || e.show.match(/seconds/gi) ? j + " Second" + (j == 1 ? " " : "s ") : "";
  document.getElementById(e.targetId).innerHTML = f;

  if (e.update) {
    t = setTimeout(function () {
      elapseTimer(e);
    }, 1000);
  }
};
//# sourceMappingURL=elapseMe.min copy.js.map
