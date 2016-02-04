
function M_Tv(a) {
  this.er = 0;
  this.vname = "";
  this.razmer = a;
  this.x = [];
  for (var c = 0;c < a;c++) {
    this.x[c] = new tfraction;
  }
  this.add = addv;
}
function addv(a, c, b) {
  for (var d = 0;d < this.razmer;d++) {
    this.x[d].newf(document.getElementById(a + (1 * c + 1 * d)).value), 0 != this.x[d].er && (this.er = 1);
  }
  this.vname = b;
}
function p_to_v_calk() {
  var a = new M_Tv(vsyze), c = new M_Tv(vsyze);
  a.add("n", 1, vector_point_name("p", 1, "A"));
  c.add("n", 4, vector_point_name("p", 2, "B"));
  if (0 < a.er || 0 < c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var b = new TfrRes, d = "<div class=vector>" + a.vname + c.vname + "</div>&nbsp;=&nbsp;{" + c.vname + '<div class="formula"><sub>x</sub></div> - ' + a.vname + '<div class="formula"><sub>x</sub></div>; ' + c.vname + '<div class="formula"><sub>y</sub></div> - ' + a.vname + '<div class="formula"><sub>y</sub></div>';
  3 == vsyze && (d += "; " + c.vname + '<div class="formula"><sub>z</sub></div> - ' + a.vname + '<div class="formula"><sub>z</sub></div>');
  d += "}&nbsp;=<br><br>";
  b.add("=&nbsp;{");
  b.add(c.x[0].showtab());
  b.add("&nbsp;-&nbsp;");
  b.add(a.x[0].showtabzn());
  b.add(";&nbsp;");
  b.add(c.x[1].showtab());
  b.add("&nbsp;-&nbsp;");
  b.add(a.x[1].showtabzn());
  3 == vsyze && (b.add(";&nbsp;"), b.add(c.x[2].showtab()), b.add("&nbsp;-&nbsp;"), b.add(a.x[2].showtabzn()));
  b.add("}&nbsp;=");
  d += b.show(" ") + "<br>";
  b.clear();
  b.add("=&nbsp;{");
  b.add(oms2(c.x[0], a.x[0]).showtab());
  b.add(";&nbsp;");
  b.add(oms2(c.x[1], a.x[1]).showtab());
  3 == vsyze && (b.add(";&nbsp;"), b.add(oms2(c.x[2], a.x[2]).showtab()));
  b.add("}");
  d += b.show(" ") + "<br>";
  b.addb(j2 + " <div class=vector>" + a.vname + c.vname + "</div>&nbsp;");
  d += b.show(" ");
  setFocus(d);
}
function select2_3(a, c) {
  var b;
  vsyze = a;
  if (3 == a) {
    for (b = 1;b <= c;b++) {
      document.getElementById("v" + b).style.display = "inline";
    }
  }
  if (2 == a) {
    for (b = 1;b <= c;b++) {
      document.getElementById("v" + b).style.display = "none";
    }
  }
}
function vector_v_p_select(a, c) {
  2 == a && (document.getElementById("vect" + c).style.display = "none", document.getElementById("points" + c).style.display = "block");
  1 == a && (document.getElementById("vect" + c).style.display = "block", document.getElementById("points" + c).style.display = "none");
}
function vectorf_0(a) {
  vform = a;
  vector_v_p_select(a, "");
}
function vectorf_1(a) {
  vform1 = a;
  vector_v_p_select(a, 1);
}
function vectorf_2(a) {
  vform2 = a;
  vector_v_p_select(a, 2);
}
function vector_ch_name(a, c, b, d, e) {
  c = 1 == c ? vector_point_name("p", 3 * a - 2, b) : vector_point_name("p", 3 * a - 1, d) + vector_point_name("p", 3 * a, e);
  document.getElementById("vn" + a).innerHTML = c;
}
function vector_point_name(a, c, b) {
  a = document.getElementById(a + c).value;
  if ("" == a || " " == a || "  " == a) {
    a = b;
  }
  2 == a.length && (a = a[0] + "<sub>" + a[1] + "</sub>");
  return a;
}
function vector_ch_show_0(a) {
  vectorf_0(a);
  vector_ch_name(1, a, "a", "A", "B");
}
function vector_ch_show_1(a) {
  vectorf_1(a);
  vector_ch_name(2, a, "b", "C", "D");
}
function vector_ch_show_2(a) {
  vectorf_2(a);
  vector_ch_name(3, a, "c", "E", "F");
}
function p_to_v_changename(a, c) {
  2 == c.length && (c = c[0] + "<sub>" + c[1] + "</sub>");
  document.getElementById("p1_" + a).innerHTML = c;
}
function showvect(a, c) {
  var b = new TfrRes;
  b.add("<div class=vector>" + a.vname + c.vname + "</div>&nbsp;=&nbsp;{");
  b.add(c.x[0].showtab());
  b.add("&nbsp;-&nbsp;");
  b.add(a.x[0].showtabzn());
  b.add(";&nbsp;");
  b.add(c.x[1].showtab());
  b.add("&nbsp;-&nbsp;");
  b.add(a.x[1].showtabzn());
  3 == vsyze && (b.add(";&nbsp;"), b.add(c.x[2].showtab()), b.add("&nbsp;-&nbsp;"), b.add(a.x[2].showtabzn()));
  for (var d = 0;d < vsyze;d++) {
    a.x[d] = oms2(c.x[d], a.x[d]);
  }
  a.vname += c.vname;
  b.add("}&nbsp;=&nbsp;{");
  b.add(a.x[0].showtab());
  b.add(";&nbsp;");
  b.add(a.x[1].showtab());
  3 == vsyze && (b.add(";&nbsp;"), b.add(a.x[2].showtab()));
  b.add("}");
  return b.show(" ");
}
function len_show(a, c) {
  for (var b = new TfrRes, d = [], e, f = 0;f < vsyze;f++) {
    d[f] = new tfraction, d[f].equally(a.x[f]);
  }
  var g = "|<div class=vector>" + a.vname + "</div>|&nbsp;=&nbsp;\u221a<div class=sqrt><div class=formula>" + a.vname + "<sub>x</sub></div><sup>2</sup>&nbsp;+&nbsp;<div class=formula>" + a.vname + "<sub>y</sub></div><sup>2</sup>";
  3 == vsyze && (g += "&nbsp;+&nbsp;<div class=formula>" + a.vname + "<sub>z</sub></div><sup>2</sup>");
  g += "</div>&nbsp;=&nbsp;\u221a<div class=sqrt>" + a.x[0].showzn() + "<sup>2</sup>&nbsp;+&nbsp;" + a.x[1].showzn() + "<sup>2</sup>";
  3 == vsyze && (g += "&nbsp;+&nbsp;" + a.x[2].showzn() + "<sup>2</sup>");
  for (f = 0;f < vsyze;f++) {
    d[f] = oms3(d[f], d[f]);
  }
  g += "</div>&nbsp;=<br><br>";
  e = "=&nbsp;\u221a<div class=sqrt>" + d[0].show() + "&nbsp;+&nbsp;" + d[1].show();
  3 == vsyze && (e += "&nbsp;+&nbsp;" + d[2].show());
  for (f = 1;f < vsyze;f++) {
    d[0] = oms1(d[0], d[f]);
  }
  e += "</div> = \u221a<div class=sqrt>" + d[0].show() + "</div>";
  b.add(e);
  c ? b.add(sqrtanswer(d[0])) : b.add(sqrtanswer(d[0], 0));
  return g + b.show(" ");
}
function len_calc(a) {
  for (var c = [], b = 0;b < vsyze;b++) {
    c[b] = new tfraction, c[b].equally(a.x[b]);
  }
  for (b = 0;b < vsyze;b++) {
    c[b] = oms3(c[b], c[b]);
  }
  for (b = 1;b < vsyze;b++) {
    c[0] = oms1(c[0], c[b]);
  }
  return c[0];
}
function vlength() {
  var a = "", c = new M_Tv(vsyze), a = a + v1_show(c, j2 + "<br><br>");
  0 < c.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  a += j3 + "<br><br>" + len_show(c, 1);
  setFocus(a);
}
function copyright() {
}
function vcos_dop(a, c, b, d, e) {
  var f = d.znak, g = new TfrRes;
  g.add("<div class=formula>cos " + a + "</div>&nbsp;=&nbsp;");
  g.add("<div class=formula>" + b + "<sub>" + c + "</sub></div>", "|<div class=vector>" + b + "</div>|");
  g.add("&nbsp;=&nbsp;");
  g.add(d.show(), sqrtfrtab(e, 2));
  d = oms4(oms3(d, d), e);
  0 < f ? g.add(sqrtanswer(d, 3)) : g.add(sqrtanswer(d, 1));
  return g.show(" ");
}
function vcos() {
  var a = "", c = new tfraction, b = new M_Tv(vsyze), a = a + v1_show(b, j2 + "<br><br>");
  0 < b.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  a += j3 + "<br><br>" + len_show(b);
  c = len_calc(b);
  a += "<br>" + j4 + "<br>" + vcos_dop("\u03b1", "x", b.vname, b.x[0], c);
  a += "<br>" + vcos_dop("\u03b2", "y", b.vname, b.x[1], c);
  3 == vsyze && (a += "<br>" + vcos_dop("\u03b3", "z", b.vname, b.x[2], c));
  setFocus(a);
}
function vcalc() {
  var a = "";
  new tfraction;
  var c = new M_Tv(vsyze), b = new M_Tv(vsyze), a = a + v1_show(c, j3 + "<br><br>"), a = "" == a ? a + v2_show(b, j3 + "<br><br>") : a + v2_show(b, "");
  if (0 < c.er || 0 < b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var d = new tfraction;
  d.newf(document.getElementById("k1").value);
  var e = new tfraction;
  e.newf(document.getElementById("k2").value);
  if (0 < d.er || 0 < e.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  kk1 = d.showtabzn();
  kk2 = e.showtabzn();
  kk1 = 1 == kk1 ? "" : "<td class=int rowSpan=2>" + kk1 + "</td><td class=int rowSpan=2>" + j2 + "</td>";
  kk2 = 1 == kk2 ? "" : "<td class=int rowSpan=2>" + kk2 + "</td><td class=int rowSpan=2>" + j2 + "</td>";
  var f = new TfrRes;
  f.add1(kk1);
  f.add('<div class="vector">' + c.vname + "</div>");
  zn = 1 == document.getElementById("op").value ? "&nbsp;+&nbsp;" : "&nbsp;-&nbsp;";
  f.add(zn);
  f.add1(kk2);
  f.add('<div class="vector">' + b.vname + "</div>");
  f.add("&nbsp;=&nbsp;{");
  f.add1(kk1);
  f.add('<div class="formula">' + c.vname + "<sub>x</sub></div>");
  f.add(zn);
  f.add1(kk2);
  f.add('<div class="formula">' + b.vname + "<sub>x</sub></div>;&nbsp;");
  f.add1(kk1);
  f.add('<div class="formula">' + c.vname + "<sub>y</sub></div>");
  f.add(zn);
  f.add1(kk2);
  f.add('<div class="formula">' + b.vname + "<sub>y</sub></div>");
  3 == vsyze && (f.add(";&nbsp;"), f.add1(kk1), f.add('<div class="formula">' + c.vname + "<sub>z</sub></div>"), f.add(zn), f.add1(kk2), f.add('<div class="formula">' + b.vname + "<sub>z</sub></div>"));
  f.add("}&nbsp;=");
  a += j4 + "<br><br>" + f.show(" ");
  f.clear();
  f.add("=&nbsp;{");
  f.add1(kk1);
  f.add(c.x[0].showtabzn());
  f.add(zn);
  f.add1(kk2);
  f.add(b.x[0].showtabzn());
  f.add(";&nbsp;");
  f.add1(kk1);
  f.add(c.x[1].showtabzn());
  f.add(zn);
  f.add1(kk2);
  f.add(b.x[1].showtabzn());
  3 == vsyze && (f.add(";&nbsp;"), f.add1(kk1), f.add(c.x[2].showtabzn()), f.add(zn), f.add1(kk2), f.add(b.x[2].showtabzn()));
  f.add("}&nbsp;=&nbsp;{");
  1 == document.getElementById("op").value ? (f.add(oms1(oms3(c.x[0], d), oms3(b.x[0], e)).showtab()), f.add(";&nbsp;"), f.add(oms1(oms3(c.x[1], d), oms3(b.x[1], e)).showtab()), 3 == vsyze && (f.add(";&nbsp;"), f.add(oms1(oms3(c.x[2], d), oms3(b.x[2], e)).showtab()))) : (f.add(oms2(oms3(c.x[0], d), oms3(b.x[0], e)).showtab()), f.add(";&nbsp;"), f.add(oms2(oms3(c.x[1], d), oms3(b.x[1], e)).showtab()), 3 == vsyze && (f.add(";&nbsp;"), f.add(oms2(oms3(c.x[2], d), oms3(b.x[2], e)).showtab())));
  f.add("}");
  a += f.show(" ");
  setFocus(a);
}
function vmultint() {
  var a = "", c = new tfraction;
  c.newf(document.getElementById("mn").value);
  0 < c.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  var b = new M_Tv(vsyze), a = a + v1_show(b, j3 + "<br><br>");
  0 < b.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
  var d = new TfrRes;
  d.add(c.showtab());
  d.add('&nbsp;\u00b7&nbsp;<div class="vector">' + b.vname + "</div>&nbsp;=&nbsp;{");
  d.add(c.showtabzn());
  d.add("&nbsp;\u00b7&nbsp;<div class=formula>" + b.vname + "<sub>x</sub></div>&nbsp;;&nbsp;");
  d.add(c.showtabzn());
  d.add("&nbsp;\u00b7&nbsp;<div class=formula>" + b.vname + "<sub>y</sub></div>");
  3 == vsyze && (d.add(";&nbsp;"), d.add(c.showtabzn()), d.add("&nbsp;\u00b7&nbsp;<div class=formula>" + b.vname + "<sub>z</sub></div>"));
  d.add("}");
  a += d.show(" ");
  a += vmultint_show(c, b);
  setFocus(a);
}
function vmultint_show(a, c) {
  var b = new TfrRes;
  b.clear();
  b.add(a.showtab());
  b.add('&nbsp;\u00b7&nbsp;<div class="vector">' + c.vname + "</div>&nbsp;=&nbsp;{");
  b.add(a.showtabzn());
  b.add("&nbsp;\u00b7&nbsp;");
  b.add(c.x[0].showtabzn());
  b.add(";&nbsp;");
  b.add(a.showtabzn());
  b.add("&nbsp;\u00b7&nbsp;");
  b.add(c.x[1].showtabzn());
  3 == vsyze && (b.add(";&nbsp;"), b.add(a.showtabzn()), b.add("&nbsp;\u00b7&nbsp;"), b.add(c.x[2].showtabzn()));
  b.add("}&nbsp;=&nbsp;{");
  b.add(oms3(c.x[0], a).showtabzn());
  b.add(";&nbsp;");
  b.add(oms3(c.x[1], a).showtabzn());
  3 == vsyze && (b.add(";&nbsp;"), b.add(oms3(c.x[2], a).showtabzn()));
  b.add("}");
  return b.show(" ");
}
function tnfs() {
}
function vmult() {
  var a = "";
  new tfraction;
  var c = new M_Tv(vsyze), b = new M_Tv(vsyze), a = a + v1_show(c, j3 + "<br><br>"), a = "" == a ? a + v2_show(b, j3 + "<br><br>") : a + v2_show(b, "");
  if (0 < c.er || 0 < b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  a += j4 + "<br><br>" + scalarshow(c, b);
  setFocus(a);
}
function scalar_calc(a, c) {
  for (var b = [], d = 0, d = 0;d < vsyze;d++) {
    b[d] = new tfraction, b[d].equally(a.x[d]);
  }
  for (var e = [], d = 0;d < vsyze;d++) {
    e[d] = new tfraction, e[d].equally(c.x[d]);
  }
  for (d = 0;d < vsyze;d++) {
    b[d] = oms3(b[d], e[d]);
  }
  for (d = 1;d < vsyze;d++) {
    b[0] = oms1(b[0], b[d]);
  }
  return b[0];
}
function scalarshow(a, c) {
  for (var b = [], d = 0, d = 0;d < vsyze;d++) {
    b[d] = new tfraction, b[d].equally(a.x[d]);
  }
  for (var e = [], d = 0;d < vsyze;d++) {
    e[d] = new tfraction, e[d].equally(c.x[d]);
  }
  var f = new TfrRes, g = '<div class="vector">' + a.vname + '</div>&nbsp;\u00b7&nbsp;<div class="vector">' + c.vname + "</div>&nbsp;=&nbsp;<div class=formula>" + a.vname + "<sub>x</sub></div>&nbsp;\u00b7&nbsp;<div class=formula>" + c.vname + "<sub>x</sub></div>&nbsp;+&nbsp;<div class=formula>" + a.vname + "<sub>y</sub></div>&nbsp;\u00b7&nbsp;<div class=formula>" + c.vname + "<sub>y</sub></div>";
  3 == vsyze && (g += "&nbsp;+&nbsp;<div class=formula>" + a.vname + "<sub>z</sub></div>&nbsp;\u00b7&nbsp;<div class=formula>" + c.vname + "<sub>z</sub></div>");
  f.add('<div class="vector">' + a.vname + '</div>&nbsp;\u00b7&nbsp;<div class="vector">' + c.vname + "</div>&nbsp;=&nbsp;");
  f.add(a.x[0].showtabzn());
  f.add("&nbsp;\u00b7&nbsp;");
  f.add(c.x[0].showtabzn());
  f.add("&nbsp;+&nbsp;");
  f.add(a.x[1].showtabzn());
  f.add("&nbsp;\u00b7&nbsp;");
  f.add(c.x[1].showtabzn());
  3 == vsyze && (f.add("&nbsp;+&nbsp;"), f.add(a.x[2].showtabzn()), f.add("&nbsp;\u00b7&nbsp;"), f.add(c.x[2].showtabzn()));
  for (d = 0;d < vsyze;d++) {
    b[d] = oms3(b[d], e[d]);
  }
  f.add("&nbsp;=&nbsp;");
  f.add(b[0].showtab());
  d = b[1].znak;
  0 > b[1].znak ? (b[1].znak = 1, f.add("&nbsp;-&nbsp;")) : f.add("&nbsp;+&nbsp;");
  f.add(b[1].showtab());
  b[1].znak = d;
  3 == vsyze && (d = b[2].znak, 0 > b[2].znak ? (b[2].znak = 1, f.add("&nbsp;-&nbsp;")) : f.add("&nbsp;+&nbsp;"), f.add(b[2].showtab()), b[2].znak = d);
  f.add("&nbsp;=&nbsp;");
  for (d = 1;d < vsyze;d++) {
    b[0] = oms1(b[0], b[d]);
  }
  f.add(b[0].showtab());
  return g + f.show(" ");
}
function v1_show(a, c) {
  var b = "";
  1 == vform && a.add("n", 1, vector_point_name("p", 1, "a"));
  if (2 == vform) {
    var d = new M_Tv(vsyze);
    a.add("n", 4, vector_point_name("p", 2, "A"));
    d.add("n", 7, vector_point_name("p", 3, "B"));
    if (0 < a.er || 0 < d.er) {
      a.er = 1;
    }
    b += c + showvect(a, d) + "<br>";
  }
  return b;
}
function v2_show(a, c) {
  var b = "";
  1 == vform1 && a.add("n", 10, vector_point_name("p", 4, "b"));
  if (2 == vform1) {
    var d = new M_Tv(vsyze);
    a.add("n", 13, vector_point_name("p", 5, "C"));
    d.add("n", 16, vector_point_name("p", 6, "D"));
    if (0 < a.er || 0 < d.er) {
      a.er = 1;
    }
    b += c + showvect(a, d) + "<br>";
  }
  return b;
}
function v3_show(a, c) {
  var b = "";
  1 == vform2 && a.add("n", 19, vector_point_name("p", 7, "\u0441"));
  if (2 == vform2) {
    var d = new M_Tv(vsyze);
    a.add("n", 22, vector_point_name("p", 8, "E"));
    d.add("n", 25, vector_point_name("p", 9, "F"));
    if (0 < a.er || 0 < d.er) {
      a.er = 1;
    }
    b += c + showvect(a, d) + "<br>";
  }
  return b;
}
function vangl() {
  var a = "", c = new tfraction, b = new tfraction, d = new tfraction, e = new M_Tv(vsyze), f = new M_Tv(vsyze), a = a + v1_show(e, j3 + "<br><br>"), a = "" == a ? a + v2_show(f, j3 + "<br><br>") : a + v2_show(f, "");
  if (0 < e.er || 0 < f.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  c = scalar_calc(e, f);
  b = len_calc(e);
  d = len_calc(f);
  a += j5 + "<br><br>" + scalarshow(e, f) + "<br>";
  a += j4 + "<br><br>" + len_show(e) + "<br>" + len_show(f) + "<br>";
  a += j6 + "<br><br><table><tbody><tr><td class=int rowSpan=2><div class=formula>cos \u03b1</div>&nbsp;=&nbsp;</td><td class=num><div class=vector>" + e.vname + "</div> \u00b7 <div class=vector>" + f.vname + "</div></td><tr><td>|<div class=vector>" + e.vname + "</div>||<div class=vector>" + f.vname + "</div>|</td></tr></tbody></table>";
  e = new TfrRes;
  e.add("<div class=formula>cos \u03b1</div>&nbsp;=&nbsp;");
  e.add(c.show(), sqrtfrtab(b, 2) + "&nbsp;\u00b7&nbsp;" + sqrtfrtab(d, 2));
  f = c.znak;
  c = oms4(oms3(c, c), oms3(b, d));
  0 < f ? e.add(sqrtanswer(c, 3)) : e.add(sqrtanswer(c, 1));
  a += e.show(" ");
  setFocus(a);
}
function vprojection(a) {
  var c = "", b = new tfraction, d = new tfraction, e = new M_Tv(vsyze), f = new M_Tv(vsyze), c = c + v1_show(e, j4 + "<br><br>");
  "" == c ? v2_show(f, j4 + "<br><br>") : v2_show(f, "");
  if (0 < e.er || 0 < f.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var g = new TfrRes, c = "";
  0 < a ? (g.addstr("<div class=formula>" + j3 + "</div> <sub><div class=vector>" + f.vname + "</div></sub><div class=vector>" + e.vname + "</div> =&nbsp;"), g.addfr("<div class=vector>" + e.vname + "</div> " + j2 + " <div class=vector>" + f.vname + "</div>", "|<div class=vector>" + f.vname + "</div>|<sup>2</sup>"), g.addstr("<div class=vector>" + f.vname + "</div>"), c += g.show(" ") + "<br>", g.clear(), g.addstr("|<div class=formula>" + j3 + "</div> <sub><div class=vector>" + f.vname + 
  "</div></sub><div class=vector>" + e.vname + "</div>| =&nbsp;")) : g.addstr("<div class=formula>" + j3 + "</div> <sub><div class=vector>" + f.vname + "</div></sub><div class=vector>" + e.vname + "</div> =&nbsp;");
  g.addfr("<div class=vector>" + e.vname + "</div> " + j2 + " <div class=vector>" + f.vname + "</div>", "|<div class=vector>" + f.vname + "</div>|");
  c += g.show(" ") + "<br>";
  g.clear();
  b = scalar_calc(e, f);
  d = len_calc(f);
  c += j6 + "<br><br>" + scalarshow(e, f) + "<br>";
  c += j5 + "<br><br>" + len_show(f) + "<br>";
  0 < a ? (g.addstr("<div class=formula>" + j3 + "</div> <sub><div class=vector>" + f.vname + "</div></sub><div class=vector>" + e.vname + "</div> =&nbsp;"), g.addfr(b.show(), d.show()), g.addstr("{"), g.addstr(f.x[0].showtab()), g.addstr(";&nbsp;"), g.addstr(f.x[1].showtab()), 3 == vsyze && (g.addstr(";&nbsp;"), g.addstr(f.x[2].showtab())), g.addstr("} = {"), g.addstr(oms4(oms3(f.x[0], b), d).showtab()), g.addstr(";&nbsp;"), g.addstr(oms4(oms3(f.x[1], b), d).showtab()), 3 == vsyze && (g.addstr(";&nbsp;"), 
  g.addstr(oms4(oms3(f.x[2], b), d).showtab())), g.addstr("}"), c += g.show(" ") + "<br>", g.clear(), g.addstr("|<div class=formula>" + j3 + "</div> <sub><div class=vector>" + f.vname + "</div></sub><div class=vector>" + e.vname + "</div>| =&nbsp;")) : g.addstr("<div class=formula>" + j3 + "</div> <sub><div class=vector>" + f.vname + "</div></sub><div class=vector>" + e.vname + "</div> =&nbsp;");
  g.add(b.show(), sqrtfrtab(d, 2));
  a = b.znak;
  b = oms4(oms3(b, b), d);
  0 < a ? g.add(sqrtanswer(b, 3)) : g.add(sqrtanswer(b, 1));
  c += g.show(" ");
  setFocus(c);
}
function vmultv() {
  var a = "", c = new M_Tv(vsyze), b = new M_Tv(vsyze), a = a + v1_show(c, j2 + "<br><br>"), a = "" == a ? a + v2_show(b, j2 + "<br><br>") : a + v2_show(b, "");
  if (0 < c.er || 0 < b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  a += show_v_mult(c, b);
  setFocus(a);
}
function show_v_mult(a, c) {
  var b = new tfraction, d = '<table style="border-collapse: collapse;"><col style="BORDER-RIGHT: white 1px solid;"><col><col><col style="BORDER-RIGHT: white 1px solid;"><tbody><tr align=center><td vAlign=center align=middle rowSpan=3><div class="vector">' + a.vname + '</div>&nbsp;\u00d7&nbsp;<div class="vector">' + c.vname + '</div>&nbsp;=&nbsp;</td><td><div class="formula">&nbsp;<b>i</b>&nbsp;</div></td><td><div class="formula">&nbsp;<b>j</b>&nbsp;</div></td><td><div class="formula">&nbsp;<b>k</b>&nbsp;</div></td></tr><tr align=center><td>&nbsp;&nbsp;<div class=formula>' + 
  a.vname + "<sub>x</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class=formula>" + a.vname + "<sub>y</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class=formula>" + a.vname + "<sub>z</sub></div>&nbsp;&nbsp;</td></tr><tr align=center><td>&nbsp;&nbsp;<div class=formula>" + c.vname + "<sub>x</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class=formula>" + c.vname + "<sub>y</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class=formula>" + c.vname + "<sub>z</sub></div>&nbsp;&nbsp;</td></tr></tbody></table><br>", 
  d = d + ('<br><table style="border-collapse: collapse;"><col style="BORDER-RIGHT: white 1px solid;"><col><col><col style="BORDER-RIGHT: white 1px solid;"><col><tbody><tr align=center><td vAlign=center align=middle rowSpan=3><div class="vector">' + a.vname + '</div>&nbsp;\u00d7&nbsp;<div class="vector">' + c.vname + '</div>&nbsp;=&nbsp;</td><td><div class="formula">&nbsp;<b>i</b>&nbsp;</div></td><td><div class="formula">&nbsp;<b>j</b>&nbsp;</div></td><td><div class="formula">&nbsp;<b>k</b>&nbsp;</div></td><td vAlign=center align=middle rowSpan=3>&nbsp;=&nbsp;</td></tr><tr align=center><td>&nbsp;&nbsp;' + 
  a.x[0].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.x[1].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.x[2].show() + "&nbsp;&nbsp;</td></tr><tr align=center><td>&nbsp;&nbsp;" + c.x[0].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + c.x[1].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + c.x[2].show() + "&nbsp;&nbsp;</td></tr></tbody></table>"), e = new TfrRes;
  e.add("=&nbsp;");
  e.add('<div class="formula"><b>i</b></div>&nbsp;');
  e.add("(");
  e.add(a.x[1].showtabzn());
  e.add("\u00b7");
  e.add(c.x[2].showtabzn());
  e.add("&nbsp;-&nbsp;");
  e.add(a.x[2].showtabzn());
  e.add("\u00b7");
  e.add(c.x[1].showtabzn());
  e.add(")");
  e.add("&nbsp;-&nbsp;");
  e.add('<div class="formula"><b>j</b></div>&nbsp;');
  e.add("(");
  e.add(a.x[0].showtabzn());
  e.add("\u00b7");
  e.add(c.x[2].showtabzn());
  e.add("&nbsp;-&nbsp;");
  e.add(a.x[2].showtabzn());
  e.add("\u00b7");
  e.add(c.x[0].showtabzn());
  e.add(")");
  e.add("&nbsp;+&nbsp;");
  e.add('<div class="formula"><b>k</b></div>&nbsp;');
  e.add("(");
  e.add(a.x[0].showtabzn());
  e.add("\u00b7");
  e.add(c.x[1].showtabzn());
  e.add("&nbsp;-&nbsp;");
  e.add(a.x[1].showtabzn());
  e.add("\u00b7");
  e.add(c.x[0].showtabzn());
  e.add(")");
  e.add("&nbsp;=");
  d += "<br>" + e.show(" ");
  e.clear();
  e.add("=&nbsp;");
  e.add('<div class="formula"><b>i</b></div>&nbsp;');
  e.add("(");
  e.add(oms3(a.x[1], c.x[2]).showtab());
  b = oms3(a.x[2], c.x[1]);
  0 > b.znak ? (e.add("&nbsp;+&nbsp;"), b.znak = 1) : e.add("&nbsp;-&nbsp;");
  e.add(b.showtab());
  e.add(")");
  e.add("&nbsp;-&nbsp;");
  e.add('<div class="formula"><b>j</b></div>&nbsp;');
  e.add("(");
  e.add(oms3(a.x[0], c.x[2]).showtab());
  b = oms3(a.x[2], c.x[0]);
  0 > b.znak ? (e.add("&nbsp;+&nbsp;"), b.znak = 1) : e.add("&nbsp;-&nbsp;");
  e.add(b.showtab());
  e.add(")");
  e.add("&nbsp;+&nbsp;");
  e.add('<div class="formula"><b>k</b></div>&nbsp;');
  e.add("(");
  e.add(oms3(a.x[0], c.x[1]).showtab());
  b = oms3(a.x[1], c.x[0]);
  0 > b.znak ? (e.add("&nbsp;+&nbsp;"), b.znak = 1) : e.add("&nbsp;-&nbsp;");
  e.add(b.showtab());
  e.add(")");
  e.add("&nbsp;=");
  d += "<br>" + e.show(" ");
  e.clear();
  e.add("=&nbsp;");
  e.add('<div class="formula">{</div>');
  e.add(oms2(oms3(a.x[1], c.x[2]), oms3(a.x[2], c.x[1])).showtab());
  e.add(";&nbsp;");
  e.add(oms2(oms3(a.x[2], c.x[0]), oms3(a.x[0], c.x[2])).showtab());
  e.add(";&nbsp;");
  e.add(oms2(oms3(a.x[0], c.x[1]), oms3(a.x[1], c.x[0])).showtab());
  e.add('<div class="formula">}</div>');
  return d += "<br>" + e.show(" ");
}
function vmults() {
  var a = "", c = new M_Tv(vsyze), b = new M_Tv(vsyze), d = new M_Tv(vsyze), a = a + v1_show(c, j2 + "<br><br>"), a = "" == a ? a + v2_show(b, j2 + "<br><br>") : a + v2_show(b, ""), a = "" == a ? a + v3_show(d, j2 + "<br><br>") : a + v3_show(d, "");
  if (0 < c.er || 0 < b.er || 0 < d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  a += show_m_mult(c, b, d);
  setFocus(a);
}
function show_m_mult(a, c, b) {
  var d = new tfraction, e = new tfraction, f = '<TABLE style="border-collapse: collapse;"><col style="BORDER-RIGHT: white 1px solid;"><col><col><col style="BORDER-RIGHT: white 1px solid;"><TBODY><tr align=center><td vAlign=center align=middle rowSpan=3><div class="vector">' + a.vname + '</div> \u00b7 (<div class="vector">' + c.vname + '</div> \u00d7 <div class="vector">' + b.vname + '</div>)&nbsp;=&nbsp;</td><td>&nbsp;&nbsp;<div class="formula">' + a.vname + '<sub>x</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class="formula">' + 
  a.vname + '<sub>y</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class="formula">' + a.vname + '<sub>z</sub></div>&nbsp;&nbsp;</td></tr><tr align=center><td>&nbsp;&nbsp;<div class="formula">' + c.vname + '<sub>x</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class="formula">' + c.vname + '<sub>y</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class="formula">' + c.vname + '<sub>z</sub></div>&nbsp;&nbsp;</td></tr><tr align=center><td>&nbsp;&nbsp;<div class="formula">' + b.vname + '<sub>x</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class="formula">' + 
  b.vname + '<sub>y</sub></div>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;<div class="formula">' + b.vname + "<sub>z</sub></div>&nbsp;&nbsp;</td></tr></tbody></table>", f = f + ('<br><TABLE style="border-collapse: collapse;"><col style="BORDER-RIGHT: white 1px solid;"><col><col><col style="BORDER-RIGHT: white 1px solid;"><col><TBODY><tr align=center><td vAlign=center align=middle rowSpan=3><div class="vector">' + a.vname + '</div> \u00b7 (<div class="vector">' + c.vname + '</div> \u00d7 <div class="vector">' + 
  b.vname + "</div>)&nbsp;=&nbsp;</td><td>&nbsp;&nbsp;" + a.x[0].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.x[1].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + a.x[2].show() + "&nbsp;&nbsp;</td><td vAlign=center align=middle rowSpan=3>&nbsp;=&nbsp;</td></tr><tr align=center><td>&nbsp;&nbsp;" + c.x[0].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + c.x[1].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + c.x[2].show() + "&nbsp;&nbsp;</td></tr><tr align=center><td>&nbsp;&nbsp;" + b.x[0].show() + 
  "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + b.x[1].show() + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + b.x[2].show() + "&nbsp;&nbsp;</td></tr></tbody></table>"), g = new TfrRes;
  g.add("=&nbsp;");
  g.add(a.x[0].showtabzn());
  g.add("\u00b7");
  g.add(c.x[1].showtabzn());
  g.add("\u00b7");
  g.add(b.x[2].showtabzn());
  g.add("&nbsp;+&nbsp;");
  g.add(a.x[1].showtabzn());
  g.add("\u00b7");
  g.add(c.x[2].showtabzn());
  g.add("\u00b7");
  g.add(b.x[0].showtabzn());
  g.add("&nbsp;+&nbsp;");
  g.add(a.x[2].showtabzn());
  g.add("\u00b7");
  g.add(c.x[0].showtabzn());
  g.add("\u00b7");
  g.add(b.x[1].showtabzn());
  g.add("&nbsp;-&nbsp;");
  g.add(a.x[2].showtabzn());
  g.add("\u00b7");
  g.add(c.x[1].showtabzn());
  g.add("\u00b7");
  g.add(b.x[0].showtabzn());
  g.add("&nbsp;-&nbsp;");
  g.add(a.x[1].showtabzn());
  g.add("\u00b7");
  g.add(c.x[0].showtabzn());
  g.add("\u00b7");
  g.add(b.x[2].showtabzn());
  g.add("&nbsp;-&nbsp;");
  g.add(a.x[0].showtabzn());
  g.add("\u00b7");
  g.add(c.x[2].showtabzn());
  g.add("\u00b7");
  g.add(b.x[1].showtabzn());
  g.add("&nbsp;=");
  f += "<br>" + g.show(" ");
  g.clear();
  g.add("=&nbsp;");
  e = oms3(oms3(a.x[0], c.x[1]), b.x[2]);
  g.add(e.showtab());
  d = oms3(oms3(a.x[1], c.x[2]), b.x[0]);
  e = oms1(e, d);
  0 > d.znak ? (g.add("&nbsp;-&nbsp;"), d.znak = 1) : g.add("&nbsp;+&nbsp;");
  g.add(d.showtab());
  d = oms3(oms3(a.x[2], c.x[0]), b.x[1]);
  e = oms1(e, d);
  0 > d.znak ? (g.add("&nbsp;-&nbsp;"), d.znak = 1) : g.add("&nbsp;+&nbsp;");
  g.add(d.showtab());
  d = oms3(oms3(a.x[2], c.x[1]), b.x[0]);
  e = oms2(e, d);
  0 > d.znak ? (g.add("&nbsp;+&nbsp;"), d.znak = 1) : g.add("&nbsp;-&nbsp;");
  g.add(d.showtab());
  d = oms3(oms3(a.x[1], c.x[0]), b.x[2]);
  e = oms2(e, d);
  0 > d.znak ? (g.add("&nbsp;+&nbsp;"), d.znak = 1) : g.add("&nbsp;-&nbsp;");
  g.add(d.showtab());
  d = oms3(oms3(a.x[0], c.x[2]), b.x[1]);
  e = oms2(e, d);
  0 > d.znak ? (g.add("&nbsp;+&nbsp;"), d.znak = 1) : g.add("&nbsp;-&nbsp;");
  g.add(d.showtab());
  g.add("&nbsp;=&nbsp;");
  g.add(e.showtab());
  return f + "<br>" + g.show(" ");
}
function vcolinearity() {
  var a = "", c = new tfraction, b = new M_Tv(vsyze), d = new M_Tv(vsyze), a = a + v1_show(b, j2 + "<br><br>"), a = "" == a ? a + v2_show(d, j2 + "<br><br>") : a + v2_show(d, "");
  if (0 < b.er || 0 < d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var e = new TfrRes, f, g, h = 0;
  for (f = 0;f < vsyze;f++) {
    0 == d.x[f].ch && h++;
  }
  if (0 == h) {
    e.addfr('<div class="formula">' + b.vname + "<sub>x</sub></div>", '<div class="formula">' + d.vname + "<sub>x</sub></div>"), e.addstr("&nbsp;=&nbsp;"), e.addfr(b.x[0].show(), d.x[0].show()), a += e.show(), e.clear(), e.addfr('<div class="formula">' + b.vname + "<sub>y</sub></div>", '<div class="formula">' + d.vname + "<sub>y</sub></div>"), e.addstr("&nbsp;=&nbsp;"), e.addfr(b.x[1].show(), d.x[1].show()), a += e.show(), 3 == vsyze && (e.clear(), e.addfr('<div class="formula">' + b.vname + 
    "<sub>z</sub></div>", '<div class="formula">' + d.vname + "<sub>z</sub></div>"), e.addstr("&nbsp;=&nbsp;"), e.addfr(b.x[2].show(), d.x[2].show()), a += e.show()), e.clear(), e.addstr(j4 + "&nbsp;"), 0 == oms2(oms3(b.x[0], d.x[1]), oms3(d.x[0], b.x[1])).ch ? (e.addfr('<div class="formula">' + b.vname + "<sub>x</sub></div>", '<div class="formula">' + d.vname + "<sub>x</sub></div>"), e.addstr("&nbsp;=&nbsp;"), e.addfr('<div class="formula">' + b.vname + "<sub>y</sub></div>", '<div class="formula">' + 
    d.vname + "<sub>y</sub></div>"), 2 == vsyze ? e.addstr("&nbsp;" + j5) : 0 == oms2(oms3(b.x[1], d.x[2]), oms3(b.x[2], d.x[1])).ch ? (e.addstr("&nbsp;=&nbsp;"), e.addfr('<div class="formula">' + b.vname + "<sub>z</sub></div>", '<div class="formula">' + d.vname + "<sub>z</sub></div>"), e.addstr("&nbsp;" + j5)) : (e.clear(), e.addstr(j4 + "&nbsp;"), e.addfr('<div class="formula">' + b.vname + "<sub>x</sub></div>", '<div class="formula">' + d.vname + "<sub>x</sub></div>"), e.addstr("&nbsp;\u2260&nbsp;"), 
    e.addfr('<div class="formula">' + b.vname + "<sub>z</sub></div>", '<div class="formula">' + d.vname + "<sub>z</sub></div>"), e.addstr("&nbsp;" + j3))) : (e.addfr('<div class="formula">' + b.vname + "<sub>x</sub></div>", '<div class="formula">' + d.vname + "<sub>x</sub></div>"), e.addstr("&nbsp;\u2260&nbsp;"), e.addfr('<div class="formula">' + b.vname + "<sub>y</sub></div>", '<div class="formula">' + d.vname + "<sub>y</sub></div>"), e.addstr("&nbsp;" + j3)), a += e.show(" ");
  } else {
    if (h == vsyze) {
      a += j6;
    } else {
      h = -1;
      for (f = 0;f < vsyze;f++) {
        0 != b.x[f].ch && (h = f, f = vsyze);
      }
      if (-1 == h) {
        a += j6;
      } else {
        0 == h ? g = "x" : 1 == h ? g = "y" : 2 == h && (g = "z");
        e.clear();
        e.add("<div class=formula>" + b.vname + "<sub>" + g + "</sub></div> =&nbsp;");
        e.add(b.x[h].showtab());
        a += j7 + "<br>" + e.show(" ");
        e.clear();
        e.add("<div class=formula>n</div> =&nbsp;");
        e.add("<div class=formula>" + d.vname + "<sub>" + g + "</sub></div>", "<div class=formula>" + b.vname + "<sub>" + g + "</sub></div>");
        e.addstr("&nbsp;=&nbsp;");
        e.add(d.x[h].show(), b.x[h].show());
        c = oms4(d.x[h], b.x[h]);
        e.addstr("&nbsp;=&nbsp;");
        e.add(c.showtab());
        a += e.show(" ");
        a += vmultint_show(c, b);
        for (f = h = 0;f < vsyze;f++) {
          0 != oms2(oms3(b.x[f], c), d.x[f]).ch && h++;
        }
        e.clear();
        e.add(j4 + "&nbsp");
        0 == h ? (e.add(c.showtab()), e.add("<div class=vector>" + b.vname + "</div> = <div class=vector>" + d.vname + "</div>, " + j5)) : (e.add(c.showtab()), e.add("<div class=vector>" + b.vname + "</div> \u2260 <div class=vector>" + d.vname + "</div>, " + j8));
        a += e.show(" ");
      }
    }
  }
  setFocus(a);
}
function vorthogonality() {
  var a = "", c = new M_Tv(vsyze), b = new M_Tv(vsyze), a = a + v1_show(c, j2 + "<br><br>"), a = "" == a ? a + v2_show(b, j2 + "<br><br>") : a + v2_show(b, "");
  if (0 < c.er || 0 < b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  a += j5 + "<br><br>" + scalarshow(c, b) + "<br>";
  a = 0 == scalar_calc(c, b).ch ? a + j3 : a + j4;
  setFocus(a);
}
function vcoplanarity() {
  var a = "", c = new M_Tv(vsyze), b = new M_Tv(vsyze), d = new M_Tv(vsyze), e = new tfraction, a = a + v1_show(c, j2 + "<br><br>"), a = "" == a ? a + v2_show(b, j2 + "<br><br>") : a + v2_show(b, ""), a = "" == a ? a + v3_show(d, j2 + "<br><br>") : a + v3_show(d, "");
  if (0 < c.er || 0 < b.er || 0 < d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  a += j2 + "<br><br>" + show_m_mult(c, b, d) + "<br>";
  e = oms2(oms2(oms2(oms1(oms1(oms3(oms3(c.x[0], b.x[1]), d.x[2]), oms3(oms3(c.x[1], b.x[2]), d.x[0])), oms3(oms3(c.x[2], b.x[0]), d.x[1])), oms3(oms3(c.x[2], b.x[1]), d.x[0])), oms3(oms3(c.x[1], b.x[0]), d.x[2])), oms3(oms3(c.x[0], b.x[2]), d.x[1]));
  a = 0 == e.ch ? a + j4 : a + j5;
  setFocus(a);
}
function v_tr_show(a, c, b) {
  var d = "";
  1 == vform && (a.add("n", 1, "a"), c.add("n", 4, "b"));
  if (2 == vform) {
    var e = new M_Tv(vsyze);
    a.add("n", 7, "A");
    e.add("n", 10, "B");
    if (0 < a.er || 0 < e.er) {
      a.er = 1;
    }
    d += b + showvect(a, e) + "<br>";
    c.add("n", 7, "A");
    e.add("n", 13, "C");
    if (0 < c.er || 0 < e.er) {
      c.er = 1;
    }
    d += showvect(c, e) + "<br>";
  }
  return d;
}
function varea() {
  var a = "", c = new M_Tv(vsyze), b = new M_Tv(vsyze), d = new M_Tv(vsyze), e = new tfraction, f = new TfrRes, a = a + v_tr_show(c, b, j2 + "<br><br>");
  if (0 < c.er || 0 < b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  f.add(j3 + "&nbsp;=&nbsp;");
  f.add("1", "2");
  f.add("|<div class=vector>" + c.vname + "</div> \u00d7 <div class=vector>" + b.vname + "</div>|");
  a += f.show(" ");
  a += "<br>" + j4 + "<br><br><div class=vector>c</div> = <div class=vector>" + c.vname + "</div> \u00d7 <div class=vector>" + b.vname + "</div><br><br>" + show_v_mult(c, b);
  d.vname = "c";
  d.x[0] = oms2(oms3(c.x[1], b.x[2]), oms3(c.x[2], b.x[1]));
  d.x[1] = oms2(oms3(c.x[2], b.x[0]), oms3(c.x[0], b.x[2]));
  d.x[2] = oms2(oms3(c.x[0], b.x[1]), oms3(c.x[1], b.x[0]));
  a += "<br>" + j5 + "<br><br>" + len_show(d);
  e = len_calc(d);
  f.clear();
  f.add(j3 + "&nbsp;=&nbsp;");
  f.add("1", "2");
  f.add(sqrtfrtab(e, 1));
  e.zn *= 4;
  e.simplify();
  f.add(sqrtanswer(e, 3));
  a += "<br><br>" + j6 + "<br>" + f.show(" ");
  setFocus(a);
}
function varea1() {
  var a = "", c = new M_Tv(vsyze), b = new M_Tv(vsyze), d = new M_Tv(vsyze), e = new tfraction, f = new TfrRes, a = a + v_tr_show(c, b, j2 + "<br><br>");
  if (0 < c.er || 0 < b.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  a += j3 + "&nbsp;=&nbsp;|<div class=vector>" + c.vname + "</div> \u00d7 <div class=vector>" + b.vname + "</div>|";
  a += "<br>" + j4 + "<br><br><div class=vector>c</div> = <div class=vector>" + c.vname + "</div> \u00d7 <div class=vector>" + b.vname + "</div><br><br>" + show_v_mult(c, b);
  d.vname = "c";
  d.x[0] = oms2(oms3(c.x[1], b.x[2]), oms3(c.x[2], b.x[1]));
  d.x[1] = oms2(oms3(c.x[2], b.x[0]), oms3(c.x[0], b.x[2]));
  d.x[2] = oms2(oms3(c.x[0], b.x[1]), oms3(c.x[1], b.x[0]));
  a += "<br>" + j5 + "<br><br>" + len_show(d);
  e = len_calc(d);
  f.clear();
  f.add(j3);
  f.add(sqrtanswer(e, 3));
  a += "<br><br>" + j6 + "<br>" + f.show(" ");
  setFocus(a);
}
function v_pir_show(a, c, b, d) {
  var e = "";
  1 == vform && (a.add("n", 1, "a"), c.add("n", 4, "b"), b.add("n", 7, "c"));
  if (2 == vform) {
    var f = new M_Tv(vsyze);
    a.add("n", 10, "A");
    c.add("n", 10, "A");
    b.add("n", 10, "A");
    f.add("n", 13, "B");
    if (0 < a.er || 0 < f.er) {
      a.er = 1;
    }
    e += d + showvect(a, f) + "<br>";
    f.add("n", 16, "C");
    if (0 < c.er || 0 < f.er) {
      c.er = 1;
    }
    e += showvect(c, f) + "<br>";
    f.add("n", 19, "D");
    if (0 < b.er || 0 < f.er) {
      b.er = 1;
    }
    e += showvect(b, f) + "<br>";
  }
  return e;
}
function vvolume() {
  var a = "", c = new M_Tv(vsyze), b = new M_Tv(vsyze), d = new M_Tv(vsyze), e = new tfraction, f = new TfrRes, a = a + v_pir_show(c, b, d, j2);
  if (0 < c.er || 0 < b.er || 0 < d.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  f.add(j3 + "&nbsp;=&nbsp;");
  f.add("1", "6");
  f.add("|<div class=vector>" + c.vname + "</div> \u00b7 [<div class=vector>" + b.vname + "</div> \u00d7 <div class=vector>" + d.vname + "</div>]|");
  a += f.show(" ");
  a += j4 + show_m_mult(c, b, d);
  c1 = oms3(oms3(c.x[0], b.x[1]), d.x[2]);
  e = oms3(oms3(c.x[1], b.x[2]), d.x[0]);
  c1 = oms1(c1, e);
  e = oms3(oms3(c.x[2], b.x[0]), d.x[1]);
  c1 = oms1(c1, e);
  e = oms3(oms3(c.x[2], b.x[1]), d.x[0]);
  c1 = oms2(c1, e);
  e = oms3(oms3(c.x[1], b.x[0]), d.x[2]);
  c1 = oms2(c1, e);
  e = oms3(oms3(c.x[0], b.x[2]), d.x[1]);
  c1 = oms2(c1, e);
  c1.znak = 1;
  f.clear();
  f.add(j3 + "&nbsp;=&nbsp;");
  f.add("1", "6");
  f.add(c1.showtab());
  c1.zn *= 6;
  c1.simplify();
  f.add("&nbsp;=&nbsp;");
  f.add(c1.showtab());
  a += "<br><br>" + j5 + "<br>" + f.show(" ");
  setFocus(a);
}
;