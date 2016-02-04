function percent1(a) {
  var e = new tfraction, d = new tfraction, b = new tfraction;
  e.newf(document.getElementById(a + "_1").value);
  d.newf(document.getElementById(a + "_2").value);
  if (0 != e.er || 0 != d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  b = oms3(e, d);
  b.zn *= 100;
  b.simplify();
  a = new TfrRes;
  a.add(e.showtab());
  a.add("%");
  a.add(j2);
  a.add(d.showtab());
  a.add("&nbsp;=&nbsp;");
  a.add(e.show() + "%", "100%");
  a.add(mn);
  a.add(d.showtab());
  a.add("&nbsp;=&nbsp;");
  a.add(b.showtab());
  b.isdecimal() ? 1 != b.d && b.isdecimal() && 1 != b.zn && (a.addstr("&nbsp;=&nbsp;"), a.addstr(b.ch / b.zn)) : (a.addstr(AE), a.addstr(b.ch / b.zn));
  setFocus(a.show());
}
function percent2(a) {
  var e = new tfraction, d = new tfraction, b = new tfraction, c = 1;
  e.newf(document.getElementById(a + "_1").value);
  d.newf(document.getElementById(a + "_2").value);
  if (0 != e.er || 0 != d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  b = oms4(d, e);
  b.ch *= 100;
  b.simplify();
  c = "<div class=formula>x</div>" + j3 + "100%";
  a = new TfrRes;
  a.add(d.showtab());
  a.add(j3);
  a.add(e.showtab());
  a.add("%");
  c += a.show();
  c += "<br>" + j4 + "<br><br>";
  a.clear();
  a.add("<div class=formula>x</div>", d.show());
  a.add("&nbsp;=&nbsp;");
  a.add("100%", e.show() + "%");
  c += a.show();
  c += "<br>" + j5 + "<br><br>";
  a.clear();
  a.add("<div class=formula>x</div>");
  a.add("&nbsp;=&nbsp;");
  a.add("100" + mn + d.show(), e.show());
  a.add("&nbsp;=&nbsp;");
  a.add(b.showtab());
  b.isdecimal() ? 1 != b.d && b.isdecimal() && 1 != b.zn && (a.addstr("&nbsp;=&nbsp;"), a.addstr(b.ch / b.zn)) : (a.addstr(AE), a.addstr(b.ch / b.zn));
  c += a.show();
  setFocus(c);
}
function copir1() {
  alert("");
}
function percent3(a) {
  var e = new tfraction, d = new tfraction, b = new tfraction, c = 1;
  e.newf(document.getElementById(a + "_1").value);
  d.newf(document.getElementById(a + "_2").value);
  n3 = document.getElementById(a + "_3").value;
  if (0 != e.er || 0 != d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  mtext = j6;
  c = mtext.replace("{1}", e.show()).replace("{2}", d.show()) + "<br><br>";
  b = oms3(e, d);
  b.zn *= 100;
  b.simplify();
  a = new TfrRes;
  a.add(e.showtab());
  a.add("%");
  a.add(j2);
  a.add(d.showtab());
  a.add("&nbsp;=&nbsp;");
  a.add(e.show() + "%", "100%");
  a.add(mn);
  a.add(d.showtab());
  a.add("&nbsp;=&nbsp;");
  a.add(b.showtab());
  c += a.show() + "<br>";
  a.clear();
  "1" == n3 ? (mtext = j7, a.add(mtext.replace("{1}", e.show()).replace("{2}", d.show())), a.add("&nbsp;=&nbsp;"), a.add(d.showtab()), a.add("&nbsp;+&nbsp;"), a.add(b.showtab()), b = oms1(d, b)) : (mtext = j8, a.add(mtext.replace("{1}", e.show()).replace("{2}", d.show())), a.add("&nbsp;=&nbsp;"), a.add(d.showtab()), a.add("&nbsp;-&nbsp;"), a.add(b.showtab()), b = oms2(d, b));
  a.add("&nbsp;=&nbsp;");
  a.add(b.showtab());
  b.isdecimal() ? 1 != b.d && b.isdecimal() && 1 != b.zn && (a.addstr("&nbsp;=&nbsp;"), a.addstr(b.ch / b.zn)) : (a.addstr(AE), a.addstr(b.ch / b.zn));
  c += a.show();
  setFocus(c);
}
function percent4(a) {
  var e = new tfraction, d = new tfraction, b = new tfraction, c = 1;
  e.newf(document.getElementById(a + "_1").value);
  d.newf(document.getElementById(a + "_2").value);
  if (0 != e.er || 0 != d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  b = oms4(e, d);
  b.ch *= 100;
  b.simplify();
  a = new TfrRes;
  a.add(d.showtab());
  a.add(j3);
  a.add("100%");
  c = a.show();
  a.clear();
  a.add(e.showtab());
  a.add(j3);
  a.add("<div class=formula>x</div>%");
  c += a.show();
  c += "<br>" + j4 + "<br><br>";
  a.clear();
  a.add(d.show(), e.show());
  a.add("&nbsp;=&nbsp;");
  a.add("100%", "<div class=formula>x</div>%");
  c += a.show();
  c += "<br>" + j5 + "<br><br>";
  a.clear();
  a.add("<div class=formula>x</div>");
  a.add("&nbsp;=&nbsp;");
  a.add("100%" + mn + e.show(), d.show());
  a.add("&nbsp;=&nbsp;");
  a.add(b.showtab());
  a.add("%");
  b.isdecimal() ? 1 != b.d && b.isdecimal() && 1 != b.zn && (a.addstr("&nbsp;=&nbsp;"), a.addstr(b.ch / b.zn), a.add("%")) : (a.addstr(AE), a.addstr(b.ch / b.zn), a.add("%"));
  c += a.show();
  setFocus(c);
}
function percent5(a) {
  var e = new TfrRes, d = new tfraction, b = new tfraction, c = new tfraction, g = new tfraction;
  new tfraction;
  var f = 1;
  d.newf(document.getElementById(a + "_1").value);
  b.newf(document.getElementById(a + "_2").value);
  c.newf(document.getElementById(a + "_3").value);
  g.newf(document.getElementById(a + "_4").value);
  if (0 != d.er || 0 != b.er || 0 != c.er || 0 != g.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (1 != c.zn || 0 > c.znak || 0 == c.ch) {
    setFocus("<font class=n>" + j9 + "</font>"), exit;
  }
  0 > b.znak && (setFocus("<font class=n>" + j20 + "</font>"), exit);
  var k = document.getElementById(a + "_sl_5_1").value;
  a = document.getElementById(a + "_sl_5_2").value;
  f = "<table><tbody>" + ("<tr><td>" + j10 + "</td><td>" + d.show() + "</td></tr>");
  0 != g.ch && (f += "<tr><td>" + j17 + "</td><td>" + g.show() + "</td></tr>");
  var h;
  h = 1 == k ? j12 : j13;
  f += "<tr><td>" + j11 + "</td><td>" + b.show() + "% " + h + "</td></tr>";
  h = 1 == a ? 1 == c.ch && 1 == c.zn ? j21 : 5 > c.ch / c.zn ? j22 : j15 : 1 == c.ch && 1 == c.zn ? j23 : 5 > c.ch / c.zn ? j24 : j16;
  f += "<tr><td>" + j14 + "</td><td>" + c.show() + " " + h + "</td></tr>";
  f += "</tbody></table>";
  1 == k && (2 == a && Math.round(c.ch / 12) != c.ch / 12 || 0 != g.ch) ? (f += "<br>" + j19, e.add("(1 +&nbsp;"), e.add(formula("x"), "100%"), e.add(")<sup>12</sup> = 1 +&nbsp;"), e.add(b.show(), "100"), f += e.show(" "), e.clear(), e = 100 * (Math.pow(1 + b.ch / (100 * b.zn), 1 / 12) - 1), f += formula("x") + " = (<sup>12</sup>\u221a<div class=sqrt>1 + " + b.show() + "/100</div> - 1)\u00b7100% \u2248 " + e + "%<br><br>" + j18, f = f + "<table><tbody>" + ("<tr><td>" + j10 + "</td><td>" + d.show() + 
  "</td></tr>"), 0 != g.ch && (f += "<tr><td>" + j17 + "</td><td>" + g.show() + "</td></tr>"), f += "<tr><td>" + j11 + "</td><td>" + e + "% " + j13 + "</td></tr>", 1 == a && (a = 2, c.ch *= 12), h = 1 == c.ch && 1 == c.zn ? j23 : 5 > c.ch / c.zn ? j24 : j16, f += "<tr><td>" + j14 + "</td><td>" + c.show() + " " + h + "</td></tr>", f += "</tbody></table>", k = 2) : (e = b.ch / b.zn, 1 == k && 2 == a && Math.round(c.ch / 12) == c.ch / 12 && (c.ch /= 12, a = 1));
  2 == k && 1 == a && (c.ch *= 12);
  h = 1 == k ? j28 : j29;
  b = '<br><table align=center border="1"></tbody>' + ("<tr><td>" + h + "</td><td>" + j25 + "</td><td>" + j26 + "</td><td>" + j27 + "</td></tr>");
  d = d.ch / d.zn;
  e = 1 + e / 100;
  k = g.ch / g.zn;
  a = 0;
  for (h = 1;h <= c.ch;h++) {
    g = 1 * (d * e).toFixed(2) - d, a += 1 * g.toFixed(2), b += "<tr><td>" + h + "</td><td>" + d.toFixed(2) + "</td><td>" + g.toFixed(2) + "</td><td>" + (d + g).toFixed(2) + "</td></tr>", d = 1 * (d * e).toFixed(2) + k;
  }
  b += "<tr><td>" + j30 + "</td><td></td><td>" + a.toFixed(2) + "</td><td>" + (d - k).toFixed(2) + "</td></tr>";
  b += "</tbody></table>";
  f += "<br>" + j31;
  f += "<table><tbody>";
  f += "<tr><td>" + j32 + "</td><td>" + (d - k).toFixed(2) + "</td></tr>";
  f += "<tr><td>" + j33 + "</td><td>" + a.toFixed(2) + "</td></tr>";
  f += "</tbody></table>";
  f += "<br>" + j34 + b + "<br><br>";
  setFocus(f);
}
;