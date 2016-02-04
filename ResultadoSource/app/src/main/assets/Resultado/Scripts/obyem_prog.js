

function vcube() {
  var a = new tfraction, c = new tfraction;
  a.newf(document.getElementById("n1").value);
  0 != a.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  -1 == a.znak && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  var b = new TfrRes, c = oms3(oms3(a, a), a);
  b.add('V = <div class="formula">a</div><sup>3</sup> =&nbsp;');
  b.add(c.showtab());
  setFocus(b.show());
}
function vparallelepiped1() {
  var a = new tfraction, c = new tfraction, b = new tfraction, d = new tfraction;
  a.newf(document.getElementById("n1").value);
  c.newf(document.getElementById("n2").value);
  b.newf(document.getElementById("n3").value);
  if (0 != a.er || 0 != c.er || 0 != b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (-1 == a.znak || -1 == c.znak || -1 == b.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  var e = new TfrRes, d = oms3(oms3(a, c), b);
  e.add('V = <div class="formula">a' + j3 + "b" + j3 + "h</div> =&nbsp;");
  e.add(d.showtab());
  setFocus(e.show());
}
function vparallelepiped() {
  var a = new tfraction, c = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  c.newf(document.getElementById("n2").value);
  if (0 != a.er || 0 != c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (-1 == a.znak || -1 == c.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  var d = new TfrRes, b = oms3(a, c);
  d.add('V = <div class="formula">' + j4 + j3 + "h</div> =&nbsp;");
  d.add(b.showtab());
  setFocus(d.show());
}
function vpyramid() {
  var a = new tfraction, c = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  c.newf(document.getElementById("n2").value);
  if (0 != a.er || 0 != c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (-1 == a.znak || -1 == c.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  var d = new TfrRes, b = oms3(a, c);
  b.zn *= 3;
  b.simplify();
  d.add("V =&nbsp;");
  d.add('<table><tbody><tr><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;"><div class=formula>' + j4 + j3 + "h</div></td></tr><tr><td align=center>3</td></tr></tbody></table>");
  d.add("&nbsp;=&nbsp;");
  d.add(b.showtab());
  setFocus(d.show());
}
function vtetrahedron() {
  var a = new tfraction, c = new tfraction;
  a.newf(document.getElementById("n1").value);
  0 != a.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  -1 == a.znak && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  c = oms3(oms3(a, a), a);
  c.zn *= 12;
  c.simplify();
  var b = new TfrRes;
  b.add("V =&nbsp;");
  b.add('<table><tbody><tr><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;"><div class=formula>a</div><sup>3</sup>' + MQ + '<span style="text-decoration:overline">2</span></td></tr><tr><td align=center>12</td></tr></tbody></table>');
  b.add("&nbsp;=&nbsp;");
  b.add('<table><tbody><tr><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;">' + a.showzn() + "<sup>3</sup>" + MQ + '<span style="text-decoration:overline">2</span></td></tr><tr><td align=center>12</td></tr></tbody></table>');
  b.add("&nbsp;=&nbsp;");
  b.add(c.showtab());
  b.add(MQ + '<span style="text-decoration:overline">2</span>');
  b.add(j4);
  b.add(Math.sqrt(2) * c.ch / c.zn);
  setFocus(b.show());
}
function vsphere() {
  var a = new tfraction, c = new tfraction;
  a.newf(document.getElementById("n1").value);
  0 != a.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  -1 == a.znak && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  var b = new TfrRes, c = oms3(oms3(a, a), a);
  c.zn *= 3;
  c.ch *= 4;
  c.simplify();
  b.add("V =&nbsp;");
  b.add('<table align=center><tbody><tr><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;">4</td></tr><tr><td align=center>3</td></tr></tbody></table>');
  b.add("<div class=formula>" + j3 + " R</div><sup>3</sup></div>");
  b.add("&nbsp;=&nbsp;");
  b.add(c.showtab());
  b.add("<div class=formula>" + j3 + "</div>");
  setFocus(b.show());
}
function vcylinder() {
  var a = new tfraction, c = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  c.newf(document.getElementById("n2").value);
  if (0 != a.er || 0 != c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (-1 == a.znak || -1 == c.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  var d = new TfrRes, b = oms3(oms3(a, a), c);
  d.add("V = <div class=formula>" + j3 + " R</div><sup>2</sup> <div class=formula>h</div>");
  d.add("&nbsp;=&nbsp;");
  d.add(b.showtab());
  d.add("<div class=formula>" + j3 + "</div>");
  setFocus(d.show());
}
function vcone() {
  var a = new tfraction, c = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  c.newf(document.getElementById("n2").value);
  if (0 != a.er || 0 != c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (-1 == a.znak || -1 == c.znak) {
    setFocus("<font class=n>" + j2 + "</font>"), exit;
  }
  var d = new TfrRes, b = oms3(oms3(a, a), c);
  b.zn *= 3;
  b.simplify();
  d.add("V =&nbsp;");
  d.add('<table align=center><tbody><tr><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;">1</td></tr><tr><td align=center>3</td></tr></tbody></table>');
  d.add("<div class=formula>" + j3 + " R</div><sup>2</sup> <div class=formula>h</div>");
  d.add("&nbsp;=&nbsp;");
  d.add(b.showtab());
  d.add("<div class=formula>" + j3 + "</div>");
  setFocus(d.show());
}
;