

function c_sc(a) {
  1 == a && (document.getElementById("st").innerHTML = j3, document.getElementById("st1").innerHTML = "a");
  2 == a && (document.getElementById("st").innerHTML = j4, document.getElementById("st1").innerHTML = "d");
}
function c_sc1(a) {
  1 == a && (document.getElementById("st").innerHTML = j3, document.getElementById("st1").innerHTML = "r");
  2 == a && (document.getElementById("st").innerHTML = j4, document.getElementById("st1").innerHTML = "d");
}
function ptr() {
  var a = new tfraction, b = new tfraction, c = new tfraction, f = new tfraction, d = new TfrRes;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  c.newf(document.getElementById("n3").value);
  if (0 != a.er || 0 != b.er || 0 != c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (-1 == a.znak || -1 == b.znak || -1 == c.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  f = oms1(oms1(a, b), c);
  d.add("P = <div class=formula>a</div> + <div class=formula>b</div> + <div class=formula>c</div> =&nbsp");
  d.add(a.showtab());
  d.add("&nbsp;+&nbsp;");
  d.add(b.showtab());
  d.add("&nbsp;+&nbsp;");
  d.add(c.showtab());
  d.add("&nbsp=&nbsp;");
  d.add(f.showtab());
  setFocus(d.show());
}
function prect() {
  var a = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  if (0 != a.er || 0 != b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (-1 == a.znak || -1 == b.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  var c = new TfrRes;
  c.add('P = 2(<div class="formula">a</div> + <div class="formula">b</div>) = 2(');
  c.add(a.showtab());
  c.add("&nbsp;+&nbsp;");
  c.add(b.showtab());
  c.add(")&nbsp;= 2" + mn);
  a = oms1(a, b);
  c.add(a.showtab());
  a.ch *= 2;
  a.simplify;
  c.add("&nbsp=&nbsp;");
  c.add(a.showtab());
  setFocus(c.show());
}
function psquare() {
  var a = new tfraction;
  a.newf(document.getElementById("n1").value);
  0 != a.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  -1 == a.znak && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  var b = new TfrRes;
  1 == document.getElementById("vform").value && (b.add('P = 4 <div class="formula">a</div> = 4' + mn), b.add(a.showtab()), b.add("&nbsp;=&nbsp;"), a.ch *= 4, a.simplify(), b.add(a.showtab()));
  2 == document.getElementById("vform").value && (b.add("P = 2" + j5 + '<span style="text-decoration:overline">2</span> <div class="formula">d</div> = 2' + j5 + '<span style="text-decoration:overline">2</span>' + mn), b.add(a.showtab()), b.add("&nbsp;" + j6 + "&nbsp;" + (2 * Math.sqrt(2) * a.ch / a.zn).toFixed(4)));
  setFocus(b.show());
}
function pdiamond() {
  var a = new tfraction;
  a.newf(document.getElementById("n1").value);
  0 != a.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  -1 == a.znak && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  var b = new TfrRes;
  b.add('P = 4 <div class="formula">a</div> = 4' + mn);
  b.add(a.showtab());
  b.add("&nbsp;=&nbsp;");
  a.ch *= 4;
  a.simplify();
  a.d = 1;
  b.add(a.showtab());
  setFocus(b.show());
}
function ptrapezium() {
  var a = new tfraction, b = new tfraction, c = new tfraction, f = new tfraction, d = new tfraction;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  c.newf(document.getElementById("n3").value);
  f.newf(document.getElementById("n4").value);
  if (0 != a.er || 0 != b.er || 0 != c.er || 0 != f.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  d = oms1(oms1(oms1(a, b), c), f);
  if (-1 == a.znak || -1 == b.znak || -1 == c.znak || -1 == f.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  var e = new TfrRes;
  e.add('P = <div class="formula">a</div> + <div class="formula">b</div> + <div class="formula">c</div> + <div class="formula">d</div> =&nbsp;');
  e.add(a.showtab());
  e.add("&nbsp;+&nbsp;");
  e.add(b.showtab());
  e.add("&nbsp;+&nbsp;");
  e.add(c.showtab());
  e.add("&nbsp;+&nbsp;");
  e.add(f.showtab());
  e.add("&nbsp;=&nbsp;");
  e.add(d.showtab());
  setFocus(e.show());
}
function pcircle() {
  var a = new tfraction;
  a.newf(document.getElementById("n1").value);
  0 != a.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  -1 == a.znak && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  var b = new TfrRes;
  1 == document.getElementById("vform").value && (b.add('P = 2 <div class="formula">' + j5 + " r</div> =&nbsp;"), b.add('2 <div class="formula">' + j5 + "</div>&nbsp;"), b.add(a.showtab()), a.ch *= 2, a.simplify(), b.add("&nbsp;=&nbsp;"));
  2 == document.getElementById("vform").value && b.add('P = <div class="formula">' + j5 + " d</div> =&nbsp;");
  b.add(a.showtab());
  b.add('&nbsp;<div class="formula">' + j5 + "</div>");
  b.add(j6 + 3141592 * a.ch / (1E6 * a.zn));
  setFocus(b.show());
}
;