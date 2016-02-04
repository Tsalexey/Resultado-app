
function select_0(a, b) {
  1 == a ? (document.getElementById(b + "_1").style.display = "block", document.getElementById(b + "_2").style.display = "none") : (document.getElementById(b + "_1").style.display = "none", document.getElementById(b + "_2").style.display = "block");
}
function Tline() {
  this.razmer = 3;
  this.v = [];
  this.k = [];
  for (var a = 0;a < this.razmer;a++) {
    this.v[a] = new tfraction, this.k[a] = new tfraction;
  }
  this.form = 1;
  this.er = 0;
  this.add = add_line;
  this.show = show_line;
  this.showv = show_line_vector;
  this.showp = show_line_point;
}
function add_line(a, b) {
  for (var d = 0;d < this.razmer;d++) {
    if (this.v[d].newf(document.getElementById(a + (1 * b + 1 * d)).value), this.k[d].newf(document.getElementById(a + (1 * b + 1 * d + 3)).value), 0 < this.v[d].er || 0 < this.k[d].er) {
      this.er = 1;
    }
  }
  for (var c = 0, d = 0;d < this.razmer;d++) {
    0 == this.v[d].ch && c++;
  }
  c == this.razmer && (this.er = 2);
}
function show_line() {
  var a = new TfrRes;
  1 == this.form ? (a.add(formula("x") + lineeq1(this.k[0]), this.v[0].show()), a.add("&nbsp;=&nbsp;"), a.add(formula("y") + lineeq1(this.k[1]), this.v[1].show()), 3 == this.razmer && (a.add("&nbsp;=&nbsp;"), a.add(formula("z") + lineeq1(this.k[2]), this.v[2].show())), tt = a.show(" ")) : (tt = '<table><tbody><tr><td rowspan="3"><img src="../../image/SS.png" width="10" height="' + 20 * this.razmer + '"></td>', tt += "<td>" + formula("x") + " = " + lineeq2(this.v[0], this.k[0]) + "</td></tr>", 
  tt += "<td>" + formula("y") + " = " + lineeq2(this.v[1], this.k[1]) + "</td></tr>", 3 == this.razmer && (tt += "<td>" + formula("z") + " = " + lineeq2(this.v[2], this.k[2]) + "</td></tr>"), tt += "</tbody></table>");
  return tt;
}
function lineeq1(a) {
  var b = "";
  if (0 == a.ch) {
    b = "";
  } else {
    var d = a.znak;
    0 < a.znak ? b = " - " : (b = " + ", a.znak = 1);
    b += a.show();
    a.znak = d;
  }
  return b;
}
function lineeq2(a, b) {
  var d = "";
  0 != a.ch && (1 == a.ch && 1 == a.zn ? 0 > a.znak && (d += "- ") : d += a.show(), d += formula("t"));
  if (0 != b.ch) {
    if ("" == d) {
      d += b.show();
    } else {
      var c = b.znak;
      0 > c ? (b.znak = 1, d += " - ") : d += " + ";
      d += b.show();
      b.znak = c;
    }
  }
  "" == d && (d = "0");
  return d;
}
function show_line_vector(a) {
  var b = new TfrRes;
  "" != a && b.add("<div class=vector>" + a + "</div> =&nbsp;");
  b.add("{");
  b.add(this.v[0].showtab());
  b.add(";&nbsp;");
  b.add(this.v[1].showtab());
  b.add(";&nbsp;");
  b.add(this.v[2].showtab());
  b.add("}");
  return b.show(" ");
}
function show_line_point(a) {
  var b = new TfrRes;
  "" != a && b.add(a + " =&nbsp;");
  b.add("(");
  b.add(this.k[0].showtab());
  b.add(",&nbsp;");
  b.add(this.k[1].showtab());
  b.add(",&nbsp;");
  b.add(this.k[2].showtab());
  b.add(")");
  return b.show(" ");
}
function M_Tv(a) {
  this.er = 0;
  this.vname = "";
  this.razmer = a;
  this.x = [];
  for (var b = 0;b < a;b++) {
    this.x[b] = new tfraction;
  }
  this.add = addvect;
}
function addvect(a, b, d) {
  for (var c = 0;c < this.razmer;c++) {
    this.x[c].newf(document.getElementById(a + (1 * b + 1 * c)).value), 0 != this.x[c].er && (this.er = 1);
  }
  this.vname = d;
}
function Tplane1() {
  this.v = [];
  for (i = 0;4 > i;i++) {
    this.v[i] = new tfraction;
  }
  this.er = 0;
  this.add = add_plane;
  this.show = show_plane;
  this.showv = show_line_vector;
}
function add_plane(a, b) {
  for (i = 0;4 > i;i++) {
    this.v[i].newf(document.getElementById(a + (1 * b + 1 * i)).value), 0 < this.v[i].er && (this.er = 1);
  }
  0 == this.v[0].ch && 0 == this.v[1].ch && 0 == this.v[2].ch && (this.er = 2);
}
function show_plane() {
  for (var a = ["x", "y", "z", ""], b = 0, d = new TfrRes, c = 0;4 > c;c++) {
    0 != this.v[c].ch && (0 == b ? 0 > this.v[c].znak && d.add("&nbsp;-&nbsp;") : 0 > this.v[c].znak ? d.add("&nbsp;-&nbsp;") : d.add("&nbsp;+&nbsp;"), 0 > this.v[c].znak ? (znak = -1, this.v[c].znak = 1) : znak = 1, p = 1 == this.v[c].ch && 1 == this.v[c].zn ? 3 != c ? "" : "1" : this.v[c].showtab(), d.add(p), d.add(formula(a[c])), this.v[c].znak = znak, b++);
  }
  d.add("&nbsp;=&nbsp;0");
  return d.show(" ");
}
function angl_plane_line(a) {

  var b = new Tline, d = new Tplane1, c = new TfrRes, e = new tfraction, f = new tfraction, g = new tfraction, h = new tfraction;
  b.form = document.getElementById(a + "_sl").value;
  1 == b.form ? b.add(a + "_", 1) : b.add(a + "_", 7);
  d.add(a + "_", 13);
  1 == b.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  2 == b.er && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  1 == d.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  2 == d.er && (setFocus("<font class=n>" + j3 + "</font>"), exit);
  t = j4 + b.show() + j5;
  t += d.show();
  t += j6 + b.showv("s");
  t += j7 + d.showv("q") + j8;
  c.add(formula("sin " + j9) + " =&nbsp;");
  c.add("| A \u00b7 <div class=formula>l</div> + B \u00b7 <div class=formula>m</div> + C \u00b7 <div class=formula>n</div> |", '\u221a<div class="sqrt">A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div> \u00b7 \u221a<div class="sqrt"><div class=formula>l</div><sup>2</sup> + <div class=formula>m</div><sup>2</sup> + <div class=formula>n</div><sup>2</sup></div>');
  c.add("&nbsp;=");
  t += c.show(" ");
  c.clear();
  c.add("=&nbsp;");
  c.add("| " + d.v[0].showzn() + " \u00b7 " + b.v[0].showzn() + " + " + d.v[1].showzn() + " \u00b7 " + b.v[1].showzn() + " + " + d.v[2].showzn() + " \u00b7 " + b.v[2].showzn() + " |", '\u221a<div class="sqrt">' + d.v[0].showzn() + "<sup>2</sup> + " + d.v[1].showzn() + "<sup>2</sup> + " + d.v[2].showzn() + '<sup>2</sup></div> \u00b7 \u221a<div class="sqrt">' + b.v[0].showzn() + "<sup>2</sup> + " + b.v[1].showzn() + "<sup>2</sup> + " + b.v[2].showzn() + "<sup>2</sup></div>");
  c.add("&nbsp;=");
  t += c.show(" ");
  c.clear();
  f = oms3(d.v[0], b.v[0]);
  t1 = "| " + f.show();
  e = oms3(d.v[1], b.v[1]);
  f = oms1(f, e);
  0 > e.znak ? (t1 += " - ", e.znak = 1) : t1 += " + ";
  t1 += e.show();
  e = oms3(d.v[2], b.v[2]);
  f = oms1(f, e);
  0 > e.znak ? (t1 += " - ", e.znak = 1) : t1 += " + ";
  t1 += e.show() + " |";
  f.znak = 1;
  g = oms3(d.v[0], d.v[0]);
  t2 = g.show();
  e = oms3(d.v[1], d.v[1]);
  g = oms1(g, e);
  t2 += " + " + e.show();
  e = oms3(d.v[2], d.v[2]);
  g = oms1(g, e);
  t2 += " + " + e.show();
  h = oms3(b.v[0], b.v[0]);
  t3 = h.show();
  e = oms3(b.v[1], b.v[1]);
  h = oms1(h, e);
  t3 += " + " + e.show();
  e = oms3(b.v[2], b.v[2]);
  h = oms1(h, e);
  t3 += " + " + e.show();
  e = oms3(g, h);
  c.clear();
  c.add("=&nbsp;");
  c.add(t1, '\u221a<div class="sqrt">' + t2 + '</div> \u00b7 \u221a<div class="sqrt">' + t3 + "</div>");
  c.add("&nbsp;=");
  t += c.show(" ");
  c.clear();
  c.add("=&nbsp;");
  c.add(f.show(), '\u221a<div class="sqrt">' + g.show() + '</div> \u00b7 \u221a<div class="sqrt">' + h.show() + "</div>");
  c.add("&nbsp;=");
  t += c.show(" ");
  c.clear();
  c.add("=&nbsp;");
  c.add(f.show(), '\u221a<div class="sqrt">' + e.show() + "</div>");
  f = oms3(f, f);
  f = oms4(f, e);
  c.add(sqrtanswer(f));
  t += c.show(" ");
  setFocus(t);
}
function qlength(a) {
  2 == psyze && qlength2(a);
  3 == psyze && qlength3(a);
}
function qlength3(a) {
  for (var b = [], d = 0, c = 1;7 > c;c++) {
    b[c] = new tfraction, b[c].newf(document.getElementById(a + c).value), 0 < b[c].er && d++;
  }
  a = new TfrRes;
  0 < d && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  a.add(j2 + "A(");
  a.add(b[1].showtab());
  a.add(";&nbsp;");
  a.add(b[2].showtab());
  a.add(";");
  a.add(b[3].showtab());
  a.add("), B(");
  a.add(b[4].showtab());
  a.add(";&nbsp;");
  a.add(b[5].showtab());
  a.add(";");
  a.add(b[6].showtab());
  a.add("):");
  d = a.show(" ");
  d = d + "<br><div class=formula>d</div> = \u221a<div class=sqrt>(<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div>)<sup>2</sup> + (<div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div>)<sup>2</sup> + (<div class=formula>z<sub>b</sub></div> - <div class=formula>z<sub>a</sub></div>)<sup>2</sup></div> = <br><br>" + ("= \u221a<div class=sqrt>(" + b[4].showzn() + " - " + b[1].showzn() + ")<sup>2</sup> + (" + b[5].showzn() + " - " + b[2].showzn() + 
  ")<sup>2</sup> + (" + b[6].showzn() + " - " + b[3].showzn() + ")<sup>2</sup></div> = <br><br>");
  b[4] = oms2(b[4], b[1]);
  b[5] = oms2(b[5], b[2]);
  b[6] = oms2(b[6], b[3]);
  d += "= \u221a<div class=sqrt>" + b[4].showzn() + "<sup>2</sup> + " + b[5].showzn() + "<sup>2</sup> + " + b[6].showzn() + "<sup>2</sup></div> = ";
  b[4] = oms3(b[4], b[4]);
  b[5] = oms3(b[5], b[5]);
  b[6] = oms3(b[6], b[6]);
  d += "\u221a<div class=sqrt>" + b[4].showzn() + " + " + b[5].showzn() + " + " + b[6].showzn() + "</div> =<br><br>";
  b[4] = oms1(b[4], b[5]);
  b[4] = oms1(b[4], b[6]);
  a.clear();
  a.add("=&nbsp;");
  a.add("\u221a<div class=sqrt>" + b[4].show() + "</div>");
  a.add(sqrtanswer(b[4]));
  d += a.show(" ");
  setFocus(d);
}
function copyright() {
  alert("");
}
function qlength2(a) {
  for (var b = [], d = 0, c = 1;3 > c;c++) {
    b[c] = new tfraction, b[c].newf(document.getElementById(a + c).value), 0 < b[c].er && d++;
  }
  for (c = 4;6 > c;c++) {
    b[c] = new tfraction, b[c].newf(document.getElementById(a + c).value), 0 < b[c].er && d++;
  }
  a = new TfrRes;
  0 < d && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  a.add(j2 + "A(");
  a.add(b[1].showtab());
  a.add(";&nbsp;");
  a.add(b[2].showtab());
  a.add("), B(");
  a.add(b[4].showtab());
  a.add(";&nbsp;");
  a.add(b[5].showtab());
  a.add("):");
  d = a.show(" ");
  d = d + "<br><div class=formula>d</div> = \u221a<div class=sqrt>(<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div>)<sup>2</sup> + (<div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div>)<sup>2</sup></div> = <br><br>" + ("= \u221a<div class=sqrt>(" + b[4].showzn() + " - " + b[1].showzn() + ")<sup>2</sup> + (" + b[5].showzn() + " - " + b[2].showzn() + ")<sup>2</sup></div> = <br><br>");
  b[4] = oms2(b[4], b[1]);
  b[5] = oms2(b[5], b[2]);
  d += "= \u221a<div class=sqrt>" + b[4].showzn() + "<sup>2</sup> + " + b[5].showzn() + "<sup>2</sup></div> = ";
  b[4] = oms3(b[4], b[4]);
  b[5] = oms3(b[5], b[5]);
  d += "\u221a<div class=sqrt>" + b[4].showzn() + " + " + b[5].showzn() + "</div> =<br><br>";
  b[4] = oms1(b[4], b[5]);
  a.clear();
  a.add("=&nbsp;");
  a.add("\u221a<div class=sqrt>" + b[4].show() + "</div>");
  a.add(sqrtanswer(b[4]));
  d += a.show(" ");
  setFocus(d);
}
function qcenter() {
  2 == psyze && qcenter2();
  3 == psyze && qcenter3();
}
function qtexcentr(a, b, d) {
  var c = new tfraction, c = oms1(b, d);
  a = "<table><tbody><tr>" + ('<td vAlign=center align=middle rowSpan=2><div class="formula">' + a + "<sub>c</sub></div> = </td>") + ('<td class=num><div class="formula">' + a + '<sub>a</sub></div> + <div class="formula">' + a + "<sub>b</sub></div></td>");
  a += "<td vAlign=center align=middle rowSpan=2> = </td>";
  a += "<td class=num>" + b.show() + " + " + d.showzn() + "</td>";
  a += "<td vAlign=center align=middle rowSpan=2> = </td>";
  a += "<td class=num>" + c.show() + "</td>";
  a += "<td vAlign=center align=middle rowSpan=2> = </td>";
  c.zn *= 2;
  c.simplify();
  a += "<td vAlign=center align=middle rowSpan=2>" + c.showtab() + "</td>";
  a += "</tr><tr><td class=denom>2</td><td class=denom>2</td><td class=denom>2</td></tr>";
  return a += "</tbody></table>";
}
function qtexcentr1(a, b) {
  var d = new tfraction, d = oms1(a, b);
  d.zn *= 2;
  d.simplify();
  return d.showtab();
}
function qcenter2() {
  var a = new tfraction, b = new tfraction, d = new tfraction, c = new tfraction;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  d.newf(document.getElementById("n4").value);
  c.newf(document.getElementById("n5").value);
  if (0 < a.er || 0 < b.er || 0 < d.er || 0 < c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var e = j4 + "<br>", e = e + qtexcentr("x", a, d), e = e + qtexcentr("y", b, c), f = new TfrRes;
  f.add(j3);
  f.add(qtexcentr1(a, d));
  f.add(",&nbsp;");
  f.add(qtexcentr1(b, c));
  f.add(").");
  e += f.show(" ");
  setFocus(e);
}
function nufsq() {
  alert("");
}
function qcenter3() {
  var a = new tfraction, b = new tfraction, d = new tfraction, c = new tfraction, e = new tfraction, f = new tfraction;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  d.newf(document.getElementById("n3").value);
  c.newf(document.getElementById("n4").value);
  e.newf(document.getElementById("n5").value);
  f.newf(document.getElementById("n6").value);
  if (0 < a.er || 0 < b.er || 0 < d.er || 0 < c.er || 0 < e.er || 0 < f.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var g = j4 + "<br>", g = g + qtexcentr("x", a, c), g = g + qtexcentr("y", b, e), g = g + qtexcentr("z", d, f), h = new TfrRes;
  h.add(j3);
  h.add("<br/>" + qtexcentr1(a, c));
  h.add("<br/>,&nbsp;");
  h.add("<br/>" + qtexcentr1(b, e));
  h.add("<br/>,&nbsp;");
  h.add("<br/>" + qtexcentr1(d, f));
  h.add("<br/>).");
  g += h.show(" ");
  setFocus(g);
}
function qline() {
  2 == psyze && qline2();
  3 == psyze && qline3();
}
function qline3() {
  var a = "", b = new M_Tv(3), d = new M_Tv(3);
  b.add("n", 1, "A");
  d.add("n", 4, "B");
  if (0 != b.er || 0 != d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  for (var c = new TfrRes, e = new Tline, f = 0;3 > f;f++) {
    e.v[f] = oms2(d.x[f], b.x[f]), e.k[f].equally(b.x[f]);
  }
  0 == e.v[0].ch && 0 == e.v[1].ch && 0 == e.v[2].ch && (setFocus("<font class=n>" + j5 + "</font>"), exit);
  a += "<center><b>" + j2 + "</b></center><br>" + j3;
  c.addfr("<div class=formula>x - x<sub>a</sub></div>", "<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div>");
  c.addstr("&nbsp;=&nbsp;");
  c.addfr("<div class=formula>y - y<sub>a</sub></div>", "<div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div>");
  c.addstr("&nbsp;=&nbsp;");
  c.addfr("<div class=formula>z - z<sub>a</sub></div>", "<div class=formula>z<sub>b</sub></div> - <div class=formula>z<sub>a</sub></div>");
  a += c.show(" ");
  c.clear();
  0 != e.v[0].ch && 0 != e.v[1].ch && 0 != e.v[2].ch ? (a += j6, c.addfr("<div class=formula>x</div> - " + b.x[0].showzn(), d.x[0].showzn() + " - " + b.x[0].showzn()), c.addstr("&nbsp;=&nbsp;"), c.addfr("<div class=formula>y</div> - " + b.x[1].showzn(), d.x[1].showzn() + " - " + b.x[1].showzn()), c.addstr("&nbsp;=&nbsp;"), c.addfr("<div class=formula>z</div> - " + b.x[2].showzn(), d.x[2].showzn() + " - " + b.x[2].showzn()), a += c.show(" ") + "<b>" + j4 + "</b>", c.clear(), e.form = 1, a += e.show()) : 
  (a += "<br>" + j7 + " ", 0 == e.v[0].ch ? a += "<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div> = 0" : 0 == e.v[1].ch ? a += "<div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div> = 0" : 0 == e.v[2].ch && (a += "<div class=formula>z<sub>b</sub></div> - <div class=formula>z<sub>a</sub></div> = 0"), a += j8);
  a += "<br><br><center><b>" + j9 + "</b></center><br>" + j10 + "<br>";
  a = a + '<table><tbody><tr><td rowSpan=3><img src="../../image/SS.png" width="10" height="60"/></td><td><div class=formula>x</div> = <div class=formula>l t</div> + <div class=formula>x</div><sub>1</sub></td></tr><tr><td><div class=formula>y</div> = <div class=formula>m t</div> + <div class=formula>y</div><sub>1</sub></td></tr><tr><td><div class=formula>z</div> = <div class=formula>n t</div> + <div class=formula>z</div><sub>1</sub></td></tr></tbody></table>' + (j11 + "<ul><li><div class=formula>{l; m; n}</div> - " + 
  j12 + " <div class=vector>AB</div>;</li><li>(<div class=formula>x</div><sub>1</sub>, <div class=formula>y</div><sub>1</sub>, <div class=formula>z</div><sub>1</sub>) - " + j13 + "</li></ul>");
  c.add("<div class=vector>AB</div> = {<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div>; <div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div>; <div class=formula>z<sub>b</sub></div> - <div class=formula>z<sub>a</sub></div>} = {");
  c.add(d.x[0].showtab());
  c.add("&nbsp;-&nbsp;");
  c.add(b.x[0].showtabzn());
  c.add(";&nbsp;");
  c.add(d.x[1].showtab());
  c.add("&nbsp;-&nbsp;");
  c.add(b.x[1].showtabzn());
  c.add(";&nbsp;");
  c.add(d.x[2].showtab());
  c.add("&nbsp;-&nbsp;");
  c.add(b.x[2].showtabzn());
  c.add("} = {");
  c.add(e.v[0].showtab());
  c.add(";&nbsp;");
  c.add(e.v[1].showtab());
  c.add(";&nbsp;");
  c.add(e.v[2].showtab());
  c.add("}");
  a += c.show(" ");
  a += "<br><b>" + j14 + "</b>";
  e.form = 2;
  a += e.show();
  setFocus(a);
}
function qline2() {
  var a = new tfraction, b = "", d = new M_Tv(2), c = new M_Tv(2);
  d.add("n", 1, "A");
  c.add("n", 4, "B");
  if (0 != d.er || 0 != c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  for (var e = new TfrRes, f = new Tline, a = 0;2 > a;a++) {
    f.v[a] = oms2(c.x[a], d.x[a]), f.k[a].equally(d.x[a]);
  }
  0 == f.v[0].ch && 0 == f.v[1].ch && (setFocus("<font class=n>" + j5 + "</font>"), exit);
  b += "<center><b>" + j2 + "</b></center><br>" + j3;
  e.addfr("<div class=formula>x - x<sub>a</sub></div>", "<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div>");
  e.addstr("&nbsp;=&nbsp;");
  e.addfr("<div class=formula>y - y<sub>a</sub></div>", "<div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div>");
  b += e.show(" ");
  e.clear();
  f.razmer = 2;
  0 != f.v[0].ch && 0 != f.v[1].ch ? (b += j6, e.addfr("<div class=formula>x</div> - " + d.x[0].showzn(), c.x[0].showzn() + " - " + d.x[0].showzn()), e.addstr("&nbsp;=&nbsp;"), e.addfr("<div class=formula>y</div> - " + d.x[1].showzn(), c.x[1].showzn() + " - " + d.x[1].showzn()), b += e.show(" ") + "<b>" + j4 + "</b>", e.clear(), f.form = 1, b += f.show(), b += j15, e.add(formula("y") + " =&nbsp;"), a = oms4(f.v[1], f.v[0]), 1 == a.ch && 1 == a.zn ? 0 > a.znak && e.add("-") : e.add(a.showtab()), 
  e.add(formula("x")), a = oms3(a, f.k[0]), a = oms2(f.k[1], a), 0 != a.ch && (0 < a.znak ? e.add("&nbsp;+&nbsp;") : (a.znak = 1, e.add("&nbsp;-&nbsp;")), e.add(a.showtab())), b += e.show(" ")) : (b += "<br>" + j7 + " ", 0 == f.v[0].ch ? b += "<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div> = 0" : 0 == f.v[1].ch && (b += "<div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div> = 0"), b += j8, b += "<br><br>" + j16, 0 == f.v[0].ch && (b += 
  "<b>OY</b>" + j17, e.add(formula("x") + " =&nbsp;"), e.add(f.k[0].showtab()), b += e.show(" "), e.clear()), 0 == f.v[1].ch && (b += "<b>OX</b>" + j17, e.add(formula("y") + " =&nbsp;"), e.add(f.k[1].showtab()), b += e.show(" "), e.clear()));
  b += "<br><br><center><b>" + j9 + "</b></center><br>" + j10 + "<br>";
  b = b + '<table><tbody><tr><td rowSpan=2><img src="../../image/SS.png" width="10" height="40"/></td><td><div class=formula>x</div> = <div class=formula>l t</div> + <div class=formula>x</div><sub>1</sub></td></tr><tr><td><div class=formula>y</div> = <div class=formula>m t</div> + <div class=formula>y</div><sub>1</sub></td></tr></tbody></table>' + (j11 + "<ul><li><div class=formula>{l; m;}</div> - " + j12 + " <div class=vector>AB</div>;</li><li>(<div class=formula>x</div><sub>1</sub>, <div class=formula>y</div><sub>1</sub>) - " + 
  j13 + "</li></ul>");
  e.add("<div class=vector>AB</div> = {<div class=formula>x<sub>b</sub></div> - <div class=formula>x<sub>a</sub></div>; <div class=formula>y<sub>b</sub></div> - <div class=formula>y<sub>a</sub></div>} = {");
  e.add(c.x[0].showtab());
  e.add("&nbsp;-&nbsp;");
  e.add(d.x[0].showtabzn());
  e.add(";&nbsp;");
  e.add(c.x[1].showtab());
  e.add("&nbsp;-&nbsp;");
  e.add(d.x[1].showtabzn());
  e.add("} = {");
  e.add(f.v[0].showtab());
  e.add(";&nbsp;");
  e.add(f.v[1].showtab());
  e.add("}");
  b += e.show(" ");
  b += "<br><b>" + j14 + "</b>";
  f.form = 2;
  b += f.show();
  setFocus(b);
}
function pdimension(a) {
  psyze = a;
  3 == a && (document.getElementById("v1").innerHTML = '<INPUT type="number" id=n1 maxLength=8 class="validate data" value=0>,<INPUT type="number" id=n2 maxLength=8 class="validate data" value=0>,<INPUT type="number" id=n3 maxLength=8 class="validate data" value=0>', document.getElementById("v2").innerHTML = '<INPUT type="number" id=n4 maxLength=8 class="validate data" value=0>,<INPUT type="number" id=n5 maxLength=8 class="validate data" value=0>,<INPUT type="number" id=n6 maxLength=8 class="validate data" value=0>');
  2 == a && (document.getElementById("v1").innerHTML = '<INPUT type="number" id=n1 maxLength=8 class="validate data" value=0>,<INPUT type="number" id=n2 maxLength=8 class="validate data" value=0>', document.getElementById("v2").innerHTML = '<INPUT type="number" id=n4 maxLength=8 class="validate data" value=0>,<INPUT type="number" id=n5 maxLength=8 class="validate data" value=0>');
}
function Tv4() {
  this.er = 0;
  this.a = new tfraction;
  this.b = new tfraction;
  this.c = new tfraction;
  this.d = new tfraction;
  this.add = addvect4;
}
function addvect4(a) {
  this.er = 1;
  this.a.newf(document.getElementById("n" + a).value);
  this.b.newf(document.getElementById("n" + (1 * a + 1)).value);
  this.c.newf(document.getElementById("n" + (1 * a + 2)).value);
  this.d.newf(document.getElementById("n" + (1 * a + 3)).value);
  0 == this.a.er && 0 == this.b.er && 0 == this.c.er && 0 == this.d.er && (this.er = 0);
  0 == this.a.ch && 0 == this.b.ch && 0 == this.c.ch && (this.er = 2);
}
function pplanet(a) {
  1 == a ? (document.getElementById("v2").style.display = "block", document.getElementById("v3").style.display = "block", document.getElementById("v4").style.display = "none") : (document.getElementById("v2").style.display = "none", document.getElementById("v3").style.display = "none", document.getElementById("v4").style.display = "block");
}
function slline3(a) {
  1 == a ? (document.getElementById("linet1").style.display = "block", document.getElementById("linet2").style.display = "none") : (document.getElementById("linet1").style.display = "none", document.getElementById("linet2").style.display = "block");
}
function qplane() {
  var a = document.getElementById("pt").value;
  new tfraction;
  var b = new TfrRes, d, c;
  d = j3 + "<br><br>";
  var e = new Tplane1, f = new M_Tv(3), g = new M_Tv(3);
  if (1 == a) {
    var h = new M_Tv(3);
    f.add("n", 1, "A");
    g.add("n", 4, "B");
    h.add("n", 7, "C");
    if (0 != f.er || 0 != g.er || 0 != h.er) {
      setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    d += '<TABLE align=center style="border-collapse: collapse;"><col style="BORDER-LEFT: white 1px solid;"><col width=10px><col><col width=10px><col style="BORDER-RIGHT: white 1px solid;"><col><TBODY><TR align=center><td><div class="formula">x</div>&nbsp;-&nbsp;<div class="formula">x</div><sub>1</sub></td><td></td><td><div class="formula">y</div>&nbsp;-&nbsp;<div class="formula">y</div><sub>1</sub></td><td></td><td><div class="formula">z</div>&nbsp;-&nbsp;<div class="formula">z</div><sub>1</sub></td><TD vAlign=center align=middle rowSpan=3>&nbsp;= 0</TD></tr><tr align=center><td><div class="formula">x</div><sub>2</sub>&nbsp;-&nbsp;<div class="formula">x</div><sub>1</sub></td><td></td><td><div class="formula">y</div><sub>2</sub>&nbsp;-&nbsp;<div class="formula">y</div><sub>1</sub></td><td></td><td><div class="formula">z</div><sub>2</sub>&nbsp;-&nbsp;<div class="formula">z</div><sub>1</sub></td></tr><tr align=center><td><div class="formula">x</div><sub>3</sub>&nbsp;-&nbsp;<div class="formula">x</div><sub>1</sub></td><td></td><td><div class="formula">y</div><sub>3</sub>&nbsp;-&nbsp;<div class="formula">y</div><sub>1</sub></td><td></td><td><div class="formula">z</div><sub>3</sub>&nbsp;-&nbsp;<div class="formula">z</div><sub>1</sub></td></tr></tbody></table><br><TABLE align=center style="border-collapse: collapse;">';
    d += '<col style="BORDER-LEFT: white 1px solid;"><col width=10px><col><col width=10px><col style="BORDER-RIGHT: white 1px solid;"><col><TBODY><TR align=center><td><div class="formula">x</div> - ' + f.x[0].showzn() + '</td><td></td><td><div class="formula">y</div> - ' + f.x[1].showzn() + '</td><td></td><td><div class="formula">z - </div>' + f.x[2].showzn() + "</td><TD vAlign=center align=middle rowSpan=3>&nbsp;= 0</TD></tr><tr align=center>";
    for (c = 0;3 > c;c++) {
      d += "<td>" + g.x[c].showzn() + " - " + f.x[c].showzn() + "</td>", 2 != c && (d += "<td></td>");
    }
    d += "</tr><tr align=center>";
    for (c = 0;3 > c;c++) {
      d += "<td>" + h.x[c].showzn() + " - " + f.x[c].showzn() + "</td>", 2 != c && (d += "<td></td>");
    }
    d += "</tr></tbody></table><br>";
    for (c = 0;3 > c;c++) {
      g.x[c] = oms2(g.x[c], f.x[c]), h.x[c] = oms2(h.x[c], f.x[c]);
    }
    d += '<TABLE align=center style="border-collapse: collapse;"><col style="BORDER-LEFT: white 1px solid;"><col width=10px><col><col width=10px><col style="BORDER-RIGHT: white 1px solid;"><col><TBODY><TR align=center><td><div class="formula">x - </div>' + f.x[0].showzn() + '</td><td></td><td><div class="formula">y - </div>' + f.x[1].showzn() + '</td><td></td><td><div class="formula">z - </div>' + f.x[2].showzn() + "</td><TD vAlign=center align=middle rowSpan=3>&nbsp;= 0</TD></tr><tr align=center>";
    for (c = 0;3 > c;c++) {
      d += "<td>" + g.x[c].show() + "</td>", 2 != c && (d += "<td></td>");
    }
    d += "</tr><tr align=center>";
    for (c = 0;3 > c;c++) {
      d += "<td>" + h.x[c].show() + "</td>", 2 != c && (d += "<td></td>");
    }
    d += "</tr></tbody></table><br>";
    b.addstr('(<div class="formula">x - </div>');
    b.addstr(f.x[0].showzn());
    b.addstr(")(");
    b.addstr(g.x[1].showzn());
    b.addstr("\u00b7");
    b.addstr(h.x[2].showzn());
    b.addstr("-");
    b.addstr(g.x[2].showzn());
    b.addstr("\u00b7");
    b.addstr(h.x[1].showzn());
    b.addstr(') - (<div class="formula">y - </div>');
    b.addstr(f.x[1].showzn());
    b.addstr(")(");
    b.addstr(g.x[0].showzn());
    b.addstr("\u00b7");
    b.addstr(h.x[2].showzn());
    b.addstr("-");
    b.addstr(g.x[2].showzn());
    b.addstr("\u00b7");
    b.addstr(h.x[0].showzn());
    b.addstr(') + (<div class="formula">z - </div>');
    b.addstr(f.x[2].showzn());
    b.addstr(")(");
    b.addstr(g.x[0].showzn());
    b.addstr("\u00b7");
    b.addstr(h.x[1].showzn());
    b.addstr("-");
    b.addstr(g.x[1].showzn());
    b.addstr("\u00b7");
    b.addstr(h.x[0].showzn());
    b.addstr(") = 0");
    d += b.show() + "<br>";
    b.clear();
    e.v[0] = oms2(oms3(g.x[1], h.x[2]), oms3(g.x[2], h.x[1]));
    e.v[1] = oms2(oms3(g.x[2], h.x[0]), oms3(g.x[0], h.x[2]));
    e.v[2] = oms2(oms3(g.x[0], h.x[1]), oms3(g.x[1], h.x[0]));
  }
  if (2 == a) {
    f.add("n", 1, "A");
    g.add("n", 10, "n");
    if (1 == f.er || 1 == g.er) {
      setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    d = j3 + '<br><br><div align=center>A(<div class="formula">x - x</div><sub>1</sub>) + B(<div class="formula">y - y</div><sub>1</sub>) + C(<div class="formula">z - z</div><sub>1</sub>) = 0</div><br>';
    for (c = 0;3 > c;c++) {
      e.v[c].equally(g.x[c]);
    }
  }
  b.addstr(e.v[0].showtabzn());
  b.addstr("(<div class=formula>x</div>&nbsp;-&nbsp;");
  b.addstr(f.x[0].showtabzn());
  b.addstr(")&nbsp;+&nbsp;");
  b.addstr(e.v[1].showtabzn());
  b.addstr("(<div class=formula>y</div>&nbsp;-&nbsp;");
  b.addstr(f.x[1].showtabzn());
  b.addstr(")&nbsp;+&nbsp;");
  b.addstr(e.v[2].showtabzn());
  b.addstr("(<div class=formula>z</div>&nbsp;-&nbsp;");
  b.addstr(f.x[2].showtabzn());
  b.addstr(") = 0");
  d += b.show() + "<br>";
  0 == e.v[0].ch && 0 == e.v[1].ch && 0 == e.v[2].ch ? d += j2 : (e.v[3] = oms1(oms1(oms3(f.x[0], e.v[0]), oms3(f.x[1], e.v[1])), oms3(f.x[2], e.v[2])), e.v[3].znak = -e.v[3].znak, d += "<center>" + e.show() + "</center>");
  setFocus(d);
}
function qp_plane() {
  var a = new tfraction, b = new tfraction, d = new Tplane1, c = new M_Tv(3);
  d.add("n_", 1);
  c.add("n", 5, "M");
  if (1 == c.er || 1 == d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  2 == d.er && (setFocus("<font class=n>" + j6 + "</font>"), exit);
  var e, f, g = new TfrRes;
  e = j3 + "M(" + c.x[0].show() + ", " + c.x[1].show() + ", " + c.x[2].show() + ")" + j4 + d.show() + j5 + "<br><br>";
  g.add(formula("d") + " =&nbsp;");
  g.add("|A\u00b7M<sub>" + formula("x") + "</sub> + B\u00b7M<sub>" + formula("y") + "</sub> + C\u00b7M<sub>" + formula("z") + "</sub> + D|", "\u221a<div class=sqrt>A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>");
  e += g.show(" ");
  g.clear();
  g.add(formula("d") + " =&nbsp;");
  g.add("|" + d.v[0].showzn() + "\u00b7" + c.x[0].showzn() + " + " + d.v[1].showzn() + "\u00b7" + c.x[1].showzn() + " + " + d.v[2].showzn() + "\u00b7" + c.x[2].showzn() + " + " + d.v[3].showzn() + "|", "\u221a<div class=sqrt>" + d.v[0].showzn() + "<sup>2</sup> + " + d.v[1].showzn() + "<sup>2</sup> + " + d.v[2].showzn() + "<sup>2</sup></div>");
  g.add("&nbsp;=&nbsp;");
  a = oms3(d.v[0], c.x[0]);
  f = "|" + a.show();
  b.equally(a);
  a = oms3(d.v[1], c.x[1]);
  b = oms1(b, a);
  0 > a.znak ? (f += " - ", a.znak = 1) : f += " + ";
  f += a.show();
  a = oms3(d.v[2], c.x[2]);
  b = oms1(b, a);
  0 > a.znak ? (f += " - ", a.znak = 1) : f += " + ";
  f += a.show();
  b = oms1(b, d.v[3]);
  0 > d.v[3].znak ? (f += " - ", d.v[3].znak = 1) : f += " + ";
  f += d.v[3].show() + "|";
  t2 = oms3(d.v[0], d.v[0]).show() + " + " + oms3(d.v[1], d.v[1]).show() + " + " + oms3(d.v[2], d.v[2]).show();
  g.add(f, "\u221a<div class=sqrt>" + t2 + "</div>");
  g.add("&nbsp;=");
  e += "<br>" + j2 + g.show(" ");
  a = oms1(oms1(oms3(d.v[0], d.v[0]), oms3(d.v[1], d.v[1])), oms3(d.v[2], d.v[2]));
  g.clear();
  b.znak = 1;
  g.add("=&nbsp;");
  g.add(b.show(), "\u221a<div class=sqrt>" + a.show() + "</div>");
  b = oms4(oms3(b, b), a);
  g.add(sqrtanswer(b, 3));
  e += g.show(" ");
  setFocus(e);
}
function qplane_plane() {
  var a = new Tplane1, b = new Tplane1;
  a.add("n_", 1);
  b.add("n_", 5);
  if (1 == a.er || 1 == b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (2 == a.er || 2 == b.er) {
    setFocus("<font class=n>" + j6 + "</font>"), exit;
  }
  t = j3 + "<br>" + a.show() + j4 + b.show();
  for (var d = new tfraction, c = new tfraction, e = new TfrRes, c = 0;3 > c;c++) {
    0 != b.v[c].ch && (d = oms4(a.v[c], b.v[c]), c = 3);
  }
  if (1 != d.ch || 1 != d.zn || 1 != d.znak) {
    t += j9 + d.show() + "<br>";
    for (c = 0;4 > c;c++) {
      b.v[c] = oms3(b.v[c], d);
    }
    t += b.show();
  }
  for (c = d = 0;3 > c;c++) {
    b.v[c].ch == a.v[c].ch && b.v[c].zn == a.v[c].zn && b.v[c].znak == a.v[c].znak || d++;
  }
  0 != d ? t += j8 : (t += j5, d = oms2(b.v[3], a.v[3]), d.znak = 1, t += "<table><tbody><tr><td vAlign=center align=middle rowSpan=2><div class=formula>d </div>=&nbsp;</td><td class=num>|D<sub>2</sub> - D<sub>1</sub>|</td></tr><tr><td class=denom>\u221a<div class=sqrt>A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div></td></tr></tbody></table>", e.add(formula("d") + " =&nbsp;"), e.add("|" + b.v[3].showzn() + " - " + a.v[3].showzn() + "|", "\u221a<div class=sqrt>" + a.v[0].showzn() + 
  "<sup>2</sup> + " + a.v[1].showzn() + "<sup>2</sup> + " + a.v[2].showzn() + "<sup>2</sup></div>"), e.add("&nbsp;=&nbsp;"), d = oms2(b.v[3], a.v[3]), b = "|" + d.show() + "|", c = oms3(a.v[0], a.v[0]).show() + " + " + oms3(a.v[1], a.v[1]).show() + " + " + oms3(a.v[2], a.v[2]).show(), e.add(b, "\u221a<div class=sqrt>" + c + "</div>"), e.add("&nbsp;="), t += j2 + "<br>" + e.show(" "), c = oms1(oms1(oms3(a.v[0], a.v[0]), oms3(a.v[1], a.v[1])), oms3(a.v[2], a.v[2])), e.clear(), d.znak = 1, e.add("=&nbsp;"), 
  e.add(d.show(), "\u221a<div class=sqrt>" + c.show() + "</div>"), d = oms4(oms3(d, d), c), e.add(sqrtanswer(d, 3)), t += e.show(" "));
  setFocus(t);
}
function qp_line2() {
  var a = new M_Tv(3), b = new M_Tv(2);
  a.add("n", 1, "l");
  b.add("n", 4, "M");
  if (1 == a.er || 1 == b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  0 == a.x[0].ch && 0 == a.x[1].ch && (setFocus("<font class=n>" + j6 + "</font>"), exit);
  var d = new tfraction, c = new tfraction, e = new TfrRes, f, g;
  g = new Tplane1;
  for (f = 0;2 > f;f++) {
    g.v[f].equally(a.x[f]);
  }
  g.v[3].equally(a.x[2]);
  f = j3 + "M(" + b.x[0].show() + ", " + b.x[1].show() + ")" + j4 + g.show() + j5;
  f += '<table><tbody><tr><td vAlign=center align=middle rowSpan=2><div class=formula>d</div> =&nbsp;</td><td class=num>|A\u00b7M<sub><div class="formula">x</div></sub> + B\u00b7M<sub><div class="formula">y</div></sub> + C|</td></tr><tr><td class=denom>\u221a<div class=sqrt>A<sup>2</sup> + B<sup>2</sup></div></td></tr></tbody></table>';
  e.add(formula("d") + " =&nbsp;");
  e.add("|" + a.x[0].showzn() + "\u00b7" + b.x[0].showzn() + " + " + a.x[1].showzn() + "\u00b7" + b.x[1].showzn() + " + " + a.x[2].showzn() + "|", "\u221a<div class=sqrt>" + a.x[0].showzn() + "<sup>2</sup> + " + a.x[1].showzn() + "<sup>2</sup></div>");
  e.add("&nbsp;=&nbsp;");
  d = oms3(a.x[0], b.x[0]);
  g = "|" + d.show();
  c.equally(d);
  d = oms3(a.x[1], b.x[1]);
  c = oms1(c, d);
  0 > d.znak ? (g += " - ", d.znak = 1) : g += " + ";
  g += d.show();
  d.equally(a.x[2]);
  c = oms1(c, a.x[2]);
  0 > a.x[2].znak ? (g += " - ", a.x[2].znak = 1) : g += " + ";
  g += a.x[2].show() + "|";
  b = oms3(a.x[0], a.x[0]).show() + " + " + oms3(a.x[1], a.x[1]).show();
  e.add(g, "\u221a<div class=sqrt>" + b + "</div>");
  e.add("&nbsp;=");
  f += "<br>" + j2 + e.show(" ");
  d = oms1(oms3(a.x[0], a.x[0]), oms3(a.x[1], a.x[1]));
  e.clear();
  c.znak = 1;
  e.add("=&nbsp;");
  e.add(c.show(), "\u221a<div class=sqrt>" + d.show() + "</div>");
  c = oms4(oms3(c, c), d);
  e.add(sqrtanswer(c, 3));
  f += e.show(" ");
  setFocus(f);
}
function qp_line3() {
  a2 = new tfraction;
  var a = new Tline, b = new M_Tv(3);
  b.add("n", 7, "M<sub>0</sub>");
  1 == document.getElementById("slline").value ? (a.add("n", 1), a.form = 1) : (a.add("n", 10), a.form = 2);
  if (1 == a.er || 1 == b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  2 == a.er && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  var d, c = new TfrRes;
  c.add(a.showv("s"));
  c.add(j4);
  d = j3 + c.show(" ");
  c.clear();
  c.add(a.showp("M<sub>1</sub>"));
  c.add(j5);
  d += c.show(" ") + "<br>" + j6 + "<br><br>";
  c.clear();
  c.add("<div class=vector>M<sub>0</sub>M<sub>1</sub></div> = {");
  c.add(a.k[0].showtab());
  c.add("&nbsp;-&nbsp;");
  c.add(b.x[0].showtabzn());
  c.add(";&nbsp;");
  c.add(a.k[1].showtab());
  c.add("&nbsp;-&nbsp;");
  c.add(b.x[1].showtabzn());
  c.add(";&nbsp;");
  c.add(a.k[2].showtab());
  c.add("&nbsp;-&nbsp;");
  c.add(b.x[2].showtabzn());
  c.add("} = {");
  for (i = 0;3 > i;i++) {
    a.k[i] = oms2(a.k[i], b.x[i]);
  }
  c.add(a.k[0].showtab());
  c.add(";&nbsp;");
  c.add(a.k[1].showtab());
  c.add(";&nbsp;");
  c.add(a.k[2].showtab());
  c.add("}");
  d += c.show(" ") + "<br>";
  c.clear();
  d += '<TABLE style="border-collapse: collapse;"><col style="BORDER-RIGHT: white 1px solid;"><col><col><col style="BORDER-RIGHT: white 1px solid;"><col><TBODY><tr align=center><TD vAlign=center align=middle rowSpan=3><div class="vector">M<sub>0</sub>M<sub>1</sub></div> \u00d7 <div class="vector">s</div> = </TD>';
  d += '<td><div class="formula">&nbsp;<b>i</b>&nbsp;</div></td><td><div class="formula">&nbsp;<b>j</b>&nbsp;</div></td><td><div class="formula">&nbsp;<b>k</b>&nbsp;</div></td>';
  d += "<TD vAlign=center align=middle rowSpan=3>&nbsp;=&nbsp;</TD></tr>";
  d += "<tr align=center><td>&nbsp;&nbsp;" + a.k[0].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.k[1].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.k[2].show() + "&nbsp;&nbsp;</td></tr>";
  d += "<tr align=center><td>&nbsp;&nbsp;" + a.v[0].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.v[1].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.v[2].show() + "&nbsp;&nbsp;</td></tr>";
  d += "</tbody></table>";
  c.add("=&nbsp;");
  c.add('<div class="formula"><b>i</b></div>&nbsp;');
  c.add("(");
  c.add(a.k[1].showtabzn());
  c.add("\u00b7");
  c.add(a.v[2].showtabzn());
  c.add("&nbsp;-&nbsp;");
  c.add(a.k[2].showtabzn());
  c.add("\u00b7");
  c.add(a.v[1].showtabzn());
  c.add(")");
  c.add("&nbsp;-&nbsp;");
  c.add('<div class="formula"><b>j</b></div>&nbsp;');
  c.add("(");
  c.add(a.k[0].showtabzn());
  c.add("\u00b7");
  c.add(a.v[2].showtabzn());
  c.add("&nbsp;-&nbsp;");
  c.add(a.k[2].showtabzn());
  c.add("\u00b7");
  c.add(a.v[0].showtabzn());
  c.add(")");
  c.add("&nbsp;+&nbsp;");
  c.add('<div class="formula"><b>k</b></div>&nbsp;');
  c.add("(");
  c.add(a.k[0].showtabzn());
  c.add("\u00b7");
  c.add(a.v[1].showtabzn());
  c.add("&nbsp;-&nbsp;");
  c.add(a.k[1].showtabzn());
  c.add("\u00b7");
  c.add(a.v[0].showtabzn());
  c.add(")");
  c.add("&nbsp;=");
  d += "<br>" + c.show(" ");
  c.clear();
  c.add("=&nbsp;");
  c.add('<div class="formula"><b>i</b></div>&nbsp;');
  c.add("(");
  c.add(oms3(a.k[1], a.v[2]).showtabzn());
  c.add("&nbsp;-&nbsp;");
  c.add(oms3(a.k[2], a.v[1]).showtabzn());
  c.add(")");
  c.add("&nbsp;-&nbsp;");
  c.add('<div class="formula"><b>j</b></div>&nbsp;');
  c.add("(");
  c.add(oms3(a.k[0], a.v[2]).showtabzn());
  c.add("&nbsp;-&nbsp;");
  c.add(oms3(a.k[2], a.v[0]).showtabzn());
  c.add(")");
  c.add("&nbsp;+&nbsp;");
  c.add('<div class="formula"><b>k</b></div>&nbsp;');
  c.add("(");
  c.add(oms3(a.k[0], a.v[1]).showtabzn());
  c.add("&nbsp;-&nbsp;");
  c.add(oms3(a.k[1], a.v[0]).showtabzn());
  c.add(")");
  c.add("&nbsp;=");
  d += "<br>" + c.show(" ");
  c.clear();
  b.x[0] = oms2(oms3(a.k[1], a.v[2]), oms3(a.k[2], a.v[1]));
  b.x[1] = oms2(oms3(a.k[2], a.v[0]), oms3(a.k[0], a.v[2]));
  b.x[2] = oms2(oms3(a.k[0], a.v[1]), oms3(a.k[1], a.v[0]));
  c.add("=&nbsp;");
  c.add('<div class="formula">{</div>');
  c.add(b.x[0].showtab());
  c.add(";&nbsp;");
  c.add(b.x[1].showtab());
  c.add(";&nbsp;");
  c.add(b.x[2].showtab());
  c.add('<div class="formula">}</div>');
  d += "<br>" + c.show(" ");
  c.clear();
  c.addstr("<div class=formula>d</div> =&nbsp;");
  c.addfr("|<div class=vector>M<sub>0</sub>M<sub>1</sub></div>\u00d7<div class=vector>s</div>|", "|<div class=vector>s</div>|");
  c.addstr("&nbsp;=&nbsp;");
  c.addfr("\u221a<div class=sqrt>" + b.x[0].showzn() + "<sup>2</sup> + " + b.x[1].showzn() + "<sup>2</sup> + " + b.x[2].showzn() + "<sup>2</sup></div>", "\u221a<div class=sqrt>" + a.v[0].showzn() + "<sup>2</sup> + " + a.v[1].showzn() + "<sup>2</sup> + " + a.v[2].showzn() + "<sup>2</sup></div>");
  c.addstr("&nbsp;=&nbsp;");
  a.k[0] = oms1(oms1(oms3(b.x[0], b.x[0]), oms3(b.x[1], b.x[1])), oms3(b.x[2], b.x[2]));
  a.k[1] = oms1(oms1(oms3(a.v[0], a.v[0]), oms3(a.v[1], a.v[1])), oms3(a.v[2], a.v[2]));
  c.addfr("\u221a<div class=sqrt>" + a.k[0].show() + "</div>", "\u221a<div class=sqrt>" + a.k[1].show() + "</div>");
  a2 = oms4(a.k[0], a.k[1]);
  c.add(sqrtanswer(a2, 3));
  d += "<br>" + c.show(" ");
  setFocus(d);
}
function qplane_angl() {
  var a = new Tplane1, b = new Tplane1;
  a.add("n", 1);
  b.add("n", 5);
  if (1 == a.er || 1 == b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  if (2 == a.er || 2 == b.er) {
    setFocus("<font class=n>" + j6 + "</font>"), exit;
  }
  var d;
  new tfraction;
  new tfraction;
  var c = new TfrRes;
  d = j3 + "<br>" + a.show() + j4 + "<br>" + b.show() + "<br><br>";
  d += '<table><tbody><tr><td vAlign=center align=middle rowSpan=2><div class="formula">cos&nbsp;\u03b1</div>&nbsp;=&nbsp;</td><td class=num>|A<sub>1</sub>\u00b7A<sub>2</sub>&nbsp;+&nbsp;B<sub>1</sub>\u00b7B<sub>2</sub>&nbsp;+&nbsp;C<sub>1</sub>\u00b7C<sub>2</sub>|</td></tr><tr><td class=denom>\u221a<div class=sqrt>A<sub>1</sub><sup>2</sup>&nbsp;+&nbsp;B<sub>1</sub><sup>2</sup>&nbsp;+&nbsp;C<sub>1</sub><sup>2</sup></div> \u221a<div class=sqrt>A<sub>2</sub><sup>2</sup>&nbsp;+&nbsp;B<sub>2</sub><sup>2</sup>&nbsp;+&nbsp;C<sub>2</sub><sup>2</sup></div></td></tr></tbody></table>';
  c.add('<div class="formula">cos&nbsp;\u03b1</div>&nbsp;=&nbsp;');
  c.add("|" + a.v[0].showzn() + "\u00b7" + b.v[0].showzn() + "&nbsp;+&nbsp;" + a.v[1].showzn() + "\u00b7" + b.v[1].showzn() + "&nbsp;+&nbsp;" + a.v[2].showzn() + "\u00b7" + b.v[2].showzn() + "|", "\u221a<div class=sqrt>" + a.v[0].showzn() + "<sup>2</sup>&nbsp;+&nbsp;" + a.v[1].showzn() + "<sup>2</sup>&nbsp;+&nbsp;" + a.v[2].showzn() + "<sup>2</sup></div> \u221a<div class=sqrt>" + b.v[0].showzn() + "<sup>2</sup>&nbsp;+&nbsp;" + b.v[1].showzn() + "<sup>2</sup>&nbsp;+&nbsp;" + b.v[2].showzn() + "<sup>2</sup></div>");
  c.add("&nbsp;=");
  d += c.show(" ");
  c.clear();
  c.add("=&nbsp;");
  c.add("|" + oms3(a.v[0], b.v[0]).showzn() + "&nbsp;+&nbsp;" + oms3(a.v[1], b.v[1]).showzn() + "&nbsp;+&nbsp;" + oms3(a.v[2], b.v[2]).showzn() + "|", "\u221a<div class=sqrt>" + oms3(a.v[0], a.v[0]).showzn() + "&nbsp;+&nbsp;" + oms3(a.v[1], a.v[1]).showzn() + "&nbsp;+&nbsp;" + oms3(a.v[2], a.v[2]).showzn() + "</div> \u221a<div class=sqrt>" + oms3(b.v[0], b.v[0]).showzn() + "&nbsp;+&nbsp;" + oms3(b.v[1], b.v[1]).showzn() + "&nbsp;+&nbsp;" + oms3(b.v[2], b.v[2]).showzn() + "</div>");
  c.add("=&nbsp;");
  a.v[3] = oms1(oms1(oms3(a.v[0], b.v[0]), oms3(a.v[1], b.v[1])), oms3(a.v[2], b.v[2]));
  a.v[3].znak = 1;
  b.v[3] = oms1(oms1(oms3(a.v[0], a.v[0]), oms3(a.v[1], a.v[1])), oms3(a.v[2], a.v[2]));
  a.v[0] = oms1(oms1(oms3(b.v[0], b.v[0]), oms3(b.v[1], b.v[1])), oms3(b.v[2], b.v[2]));
  c.add(a.v[3].show(), "\u221a<div class=sqrt>" + b.v[3].showzn() + "</div> \u221a<div class=sqrt>" + a.v[0].showzn() + "</div>");
  c.add("&nbsp;=");
  d += c.show(" ");
  c.clear();
  c.add("=&nbsp;");
  a.v[1] = oms3(b.v[3], a.v[0]);
  c.add(a.v[3].show(), "\u221a<div class=sqrt>" + a.v[1].showzn() + "</div>");
  a.v[2] = oms4(a.v[3], a.v[1]);
  c.add(sqrtanswer(a.v[2], 3));
  d += "<br>" + c.show(" ");
  setFocus(d);
}
;