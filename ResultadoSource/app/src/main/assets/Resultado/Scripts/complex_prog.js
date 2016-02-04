
var ii = "<div class=formula>i</div>";
function tcomplex() {
  this.re = new tfraction;
  this.im = new tfraction;
  this.er = 0;
  this.show = showcomplex;
  this.showstr = showcomplexstr;
}
function showcomplex() {
  var b = new TfrRes;
  0 == this.re.ch && 0 == this.im.ch ? b.add("0") : 0 == this.re.ch ? (b.add(this.im.showtab()), b.add(ii)) : 0 == this.im.ch ? b.add(this.re.showtab()) : (b.add(this.re.showtab()), 0 < this.im.znak && b.add("+"), b.add(this.im.showtab()), b.add(ii));
  return b.show();
}
function showcomplexstr() {
  var b = "";
  0 == this.re.ch && 0 == this.im.ch ? b += "0" : 0 == this.re.ch ? (b += this.im.show(), b += ii) : 0 == this.im.ch ? b += this.re.show() : (b += this.re.show(), 0 < this.im.znak && (b += "+"), b += this.im.show(), b += ii);
  return b;
}
function calculation() {
  var b = new tfraction, c = new tfraction, h = new tfraction, d = new tfraction, e = new tfraction, g = new tfraction, k = new tfraction, f;
  b.newf(document.getElementById("r1").value);
  c.newf(document.getElementById("r2").value);
  d.newf(document.getElementById("i1").value);
  e.newf(document.getElementById("i2").value);
  var a = new TfrRes;
  f = new TfrRes;
  var l = document.getElementById("Op").value;
  if (0 < b.er || 0 < c.er || 0 < d.er || 0 < e.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  switch(l) {
    case "+":
      h = oms1(b, c);
      g = oms1(d, e);
      0 == b.ch && 0 == d.ch ? a.add("0") : 0 == b.ch ? (a.add(d.showtab()), a.add(ii)) : 0 == d.ch ? a.add(b.showtab()) : (a.add(b.showtab()), 0 < d.znak && a.add("+"), a.add(d.showtab()), a.add(ii));
      a.add("&nbsp+&nbsp");
      0 == c.ch && 0 == e.ch ? a.add("0") : 0 == c.ch ? (a.add(e.showtab()), a.add(ii)) : 0 == e.ch ? a.add(c.showtab()) : (a.add(c.showtab()), 0 < e.znak && a.add("+"), a.add(e.showtab()), a.add(ii));
      a.add("&nbsp=&nbsp");
      0 == b.ch && 0 == c.ch && 0 == d.ch && 0 == e.ch ? a.add("0") : 0 == b.ch && 0 == d.ch ? 0 == c.ch ? (a.add(e.showtab()), a.add(ii)) : 0 == e.ch ? a.add(c.showtab()) : (a.add(c.showtab()), 0 < e.znak && a.add("+"), a.add(e.showtab()), a.add(ii)) : 0 == c.ch && 0 == e.ch ? 0 == b.ch ? (a.add(d.showtab()), a.add(ii)) : 0 == d.ch ? a.add(b.showtab()) : (a.add(b.showtab()), 0 < d.znak && a.add("+"), a.add(d.showtab()), a.add(ii)) : 0 == b.ch && 0 == c.ch ? (a.add("("), a.add(d.showtab()), 0 < e.znak && 
      a.add("+"), a.add(e.showtab()), a.add(")" + ii), a.add("&nbsp=&nbsp"), 0 == g.ch ? a.add("0") : (a.add(g.showtab()), a.add(ii))) : 0 == d.ch && 0 == e.ch ? a.add(h.showtab()) : 0 == d.ch || 0 == e.ch ? (0 != h && (a.add(h.showtab()), 0 < g.znak && a.add("+")), a.add(g.showtab()), a.add(ii)) : (0 != h.ch && (a.add(h.showtab()), a.add("+")), a.add("("), a.add(d.showtab()), 0 < e.znak && a.add("+"), a.add(e.showtab()), a.add(")" + ii), a.add("&nbsp=&nbsp"), 0 != h.ch && (a.add(h.showtab()), 0 < 
      g.znak && 0 != g.ch && a.add("+")), 0 != g.ch && (a.add(g.showtab()), a.add(ii)));
      break;
    case "-":
      h = oms2(b, c);
      g = oms2(d, e);
      0 == b.ch && 0 == d.ch ? a.add("0") : 0 == b.ch ? (a.add(d.showtab()), a.add(ii)) : 0 == d.ch ? a.add(b.showtab()) : (a.add(b.showtab()), 0 < d.znak && a.add("+"), a.add(d.showtab()), a.add(ii));
      a.add("&nbsp-&nbsp(");
      0 == c.ch && 0 == e.ch ? a.add("0") : 0 == c.ch ? (a.add(e.showtab()), a.add(ii)) : 0 == e.ch ? a.add(c.showtab()) : (a.add(c.showtab()), 0 < e.znak && a.add("+"), a.add(e.showtab()), a.add(ii));
      a.add(")&nbsp=&nbsp");
      e.znak = -e.znak;
      c.znak = -c.znak;
      0 == b.ch && 0 == c.ch && 0 == d.ch && 0 == e.ch ? a.add("0") : 0 == b.ch && 0 == d.ch ? 0 == h.ch ? (a.add(g.showtab()), a.add(ii)) : 0 == g.ch ? a.add(h.showtab()) : (a.add(h.showtab()), 0 < g.znak && a.add("+"), a.add(g.showtab()), a.add(ii)) : 0 == c.ch && 0 == e.ch ? 0 == h.ch ? (a.add(g.showtab()), a.add(ii)) : 0 == g.ch ? a.add(h.showtab()) : (a.add(h.showtab()), 0 < g.znak && a.add("+"), a.add(g.showtab()), a.add(ii)) : 0 == b.ch && 0 == c.ch ? (a.add("("), a.add(d.showtab()), 0 < e.znak && 
      a.add("+"), a.add(e.showtab()), a.add(")" + ii), a.add("&nbsp=&nbsp"), 0 == g.ch ? a.add("0") : (a.add(g.showtab()), a.add(ii))) : 0 == d.ch && 0 == e.ch ? a.add(h.showtab()) : 0 == d.ch || 0 == e.ch ? (0 != h && (a.add(h.showtab()), 0 < g.znak && a.add("+")), a.add(g.showtab()), a.add(ii)) : (0 != h.ch && (a.add(h.showtab()), a.add("+")), a.add("("), a.add(d.showtab()), 0 < e.znak && a.add("+"), a.add(e.showtab()), a.add(")" + ii), a.add("&nbsp=&nbsp"), 0 != h.ch && (a.add(h.showtab()), 0 < 
      g.znak && 0 != g.ch && a.add("+")), 0 != g.ch && (a.add(g.showtab()), a.add(ii)));
      break;
    case "*":
      h = oms2(oms3(b, c), oms3(d, e));
      g = oms1(oms3(b, e), oms3(d, c));
      a.add("(");
      0 == b.ch && 0 == d.ch ? a.add("0") : 0 == b.ch ? (a.add(d.showtab()), a.add(ii)) : 0 == d.ch ? a.add(b.showtab()) : (a.add(b.showtab()), 0 < d.znak && a.add("+"), a.add(d.showtab()), a.add(ii));
      a.add(")&nbsp" + mn + "&nbsp(");
      0 == c.ch && 0 == e.ch ? a.add("0") : 0 == c.ch ? (a.add(e.showtab()), a.add(ii)) : 0 == e.ch ? a.add(c.showtab()) : (a.add(c.showtab()), 0 < e.znak && a.add("+"), a.add(e.showtab()), a.add(ii));
      a.add(")");
      0 == b.ch && 0 == d.ch || 0 == c.ch && 0 == e.ch ? a.add("&nbsp;=&nbsp;0") : (0 == b.ch ? 0 != c.ch && 0 != e.ch && (a.add("&nbsp=&nbsp"), f = d.znak, 0 > f * c.znak && a.add("-"), d.znak = 1, c.znak = 1, a.add(d.showtab()), a.add(mn), a.add(c.showtab()), a.add(ii), 0 > f * e.znak ? a.add("-") : a.add("+"), e.znak = 1, a.add(d.showtab()), a.add(mn), a.add(e.showtab()), a.add(ii + "<sup>2</sup>")) : 0 == d.ch ? 0 != c.ch && 0 != e.ch && (a.add("&nbsp=&nbsp"), f = b.znak, 0 > f * c.znak && a.add("-"), 
      b.znak = 1, c.znak = 1, a.add(b.showtab()), a.add(mn), a.add(c.showtab()), 0 > f * e.znak ? a.add("-") : a.add("+"), e.znak = 1, a.add(b.showtab()), a.add(mn), a.add(e.showtab()), a.add(ii)) : 0 == c.ch ? (a.add("&nbsp=&nbsp"), f = e.znak, 0 > f * b.znak && a.add("-"), b.znak = 1, e.znak = 1, a.add(b.showtab()), a.add(mn), a.add(e.showtab()), a.add(ii), 0 > f * d.znak ? a.add("-") : a.add("+"), d.znak = 1, a.add(d.showtab()), a.add(mn), a.add(e.showtab()), a.add(ii + "<sup>2</sup>")) : 0 == 
      e.ch ? (a.add("&nbsp=&nbsp"), f = c.znak, 0 > f * b.znak && a.add("-"), b.znak = 1, c.znak = 1, a.add(b.showtab()), a.add(mn), a.add(c.showtab()), 0 > f * d.znak ? a.add("-") : a.add("+"), d.znak = 1, a.add(d.showtab()), a.add(mn), a.add(c.showtab()), a.add(ii)) : (a.add("&nbsp=&nbsp("), f = b.znak * c.znak, 0 > f && a.add("-"), f = b.znak, b.znak = 1, a.add(b.showtab()), b.znak = f, a.add(mn), f = c.znak, c.znak = 1, a.add(c.showtab()), c.znak = f, 0 < d.znak * e.znak ? a.add("+") : a.add("-"), 
      f = d.znak, d.znak = 1, a.add(d.showtab()), d.znak = f, a.add(mn), f = e.znak, e.znak = 1, a.add(e.showtab()), e.znak = f, a.add(ii + "<sup>2</sup>)&nbsp;+&nbsp;("), f = b.znak * e.znak, 0 > f && a.add("-"), b.znak = 1, a.add(b.showtab()), a.add(mn), a.add(e.showtab()), 0 < d.znak * c.znak ? a.add("+") : a.add("-"), d.znak = 1, a.add(d.showtab()), a.add(mn), e.znak = 1, a.add(e.showtab()), a.add(")" + ii)), a.add("&nbsp=&nbsp"), 0 == h.ch && 0 == g.ch ? a.add("0") : (0 != h.ch && (a.add(h.showtab()), 
      0 != g.ch && 0 < g.znak && a.add("+")), 0 != g.ch && (a.add(g.showtab()), a.add(ii))));
      break;
    case "/":
      h = new tcomplex, g = new tcomplex, l = new tcomplex, h.re = b, h.im = d, g.re = c, g.im = e, l.re = c, l.im.ch = e.ch, l.im.zn = e.zn, l.im.d = e.d, l.im.znak = -e.znak, f.addfr(h.showstr(), g.showstr()), f.addstr("="), f.addfr("(" + h.showstr() + ")(" + l.showstr() + ")", "(" + g.showstr() + ")(" + l.showstr() + ")"), h = oms1(oms3(b, c), oms3(d, e)), g = oms2(oms3(d, c), oms3(b, e)), k = oms1(oms3(c, c), oms3(e, e)), l.re = h, l.im = g, f.addstr("="), f.addfr(l.showstr(), k.show()), f.addstr("="), 
      l.re = oms4(l.re, k), l.im = oms4(l.im, k), f.addstr(l.show()), a.add(f.show());
  }
  setFocus(a.show());
}
function modul() {
  var b = new tfraction, c = new tfraction;
  new tfraction;
  b.newf(document.getElementById("r1").value);
  c.newf(document.getElementById("i1").value);
  var h = new TfrRes;
  if (0 < b.er || 0 < c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var d = new tcomplex;
  d.re = b;
  d.im = c;
  h.add("|");
  h.add(d.show());
  h.add("|&nbsp;=&nbsp;");
  0 == b.ch && 0 == c.ch ? h.add("0") : 0 == b.ch ? (c.znak = 1, h.add(c.showtab())) : 0 == c.ch ? (b.znak = 1, h.add(b.showtab())) : (h.add("("), h.add("(" + b.show() + ")<sup>2</sup> + (" + c.show() + ")<sup>2</sup>"), h.add(")<sup>1/2</sup> = "), c = oms1(oms3(b, b), oms3(c, c)), h.add("(" + c.show() + ")<sup>1/2</sup>"));
  setFocus(h.show());
}
function chcomplecs(b) {
  ztype = b;
  for (i = 1;3 >= i;i++) {
    document.getElementById("v" + i).style.display = "none";
  }
  document.getElementById("v" + b).style.display = "block";
}

function form_converter() {
  var b = new tfraction, c = new tfraction, h = new tfraction, d = new tfraction, e = new tfraction, g = new tfraction, k = new TfrRes, f = new TfrRes;
  b.newf(document.getElementById("r1" + ztype).value);
  c.newf(document.getElementById("i1" + ztype).value);
  if (0 < b.er || 0 < c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  0 == b.ch && 0 == c.ch && (setFocus("<font class=n>" + j5 + "</font>"), exit);
  if (1 == ztype) {
    e = new tcomplex;
    e.re = b;
    e.im = c;
    k.add("<div class=formula>z</div>&nbsp;=&nbsp;");
    k.add(e.show());
    t = k.show(" ") + "<br>" + j2;
    h = oms3(b, b);
    d = oms3(c, c);
    e = oms1(h, d);
    t += "<br><br><div class=formula>r</div> = \u221a<div class=sqrt><div class=formula>x</div><sup>2</sup> + <div class=formula>y</div><sup>2</sup></div><br><br>";
    k.clear();
    k.add("<div class=formula>r</div> = \u221a<div class=sqrt>" + b.showzn() + "<sup>2</sup> + " + c.showzn() + "<sup>2</sup></div> =&nbsp;");
    k.add("\u221a<div class=sqrt>" + h.show() + "&nbsp;+&nbsp;" + d.show() + "</div>&nbsp;=&nbsp;");
    k.add("\u221a<div class=sqrt>" + e.show() + "<div>");
    k.add(sqrtanswer(e, 0));
    t += k.show(" ");
    t += "<br><table><tbody><tr>";
    t += "<td rowSpan=5>" + op2 + "&nbsp=&nbsp</td><td rowSpan=5><img src=" + ls + ' width="30" height="240"/></td>';
    t += "<td><table><tbody><tr><td rowSpan=2>" + op3 + '</td><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;"><div class=formula>y</div></td><td rowSpan=2>,</td></tr><tr><td><div class=formula>x</div></td></tr></tbody></table></td>';
    t += "<td rowSpan=5>&nbsp;&nbsp;&nbsp;</td><td>" + j6 + " <div class=formula>x</div> &gt; 0</td></tr>";
    t += "<tr><td><table><tbody><tr><td rowSpan=2>" + op4 + " + " + op3 + '</td><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;"><div class=formula>y</div></td><td rowSpan=2>,</td></tr><tr><td><div class=formula>x</div></td></tr></tbody></table></td><td>' + j6 + " <div class=formula>x</div> &lt; 0, <div class=formula>y</div> &ge; 0</td></tr>";
    t += "<tr><td><table><tbody><tr><td rowSpan=2>- " + op4 + " + " + op3 + '</td><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;"><div class=formula>y</div></td><td rowSpan=2>,</td></tr><tr><td><div class=formula>x</div></td></tr></tbody></table></td><td>' + j6 + " <div class=formula>x</div> &lt; 0, <div class=formula>y</div> &lt; 0</td></tr>";
    t += '<tr><td><table><tbody><tr><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;">' + op4 + "</td><td rowSpan=2>,</td></tr><tr><td>2</td></tr></tbody></table></td><td>" + j6 + " <div class=formula>x</div> = 0, <div class=formula>y</div> &gt; 0</td></tr>";
    t += '<tr><td><table><tbody><tr><td rowSpan=2>-</td><td style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;">' + op4 + "</td><td rowSpan=2>.</td></tr><tr><td>2</td></tr></tbody></table></td><td>" + j6 + " <div class=formula>x</div> = 0, <div class=formula>y</div> &lt; 0</td></tr>";
    t += "</tbody></table><br>";
    k.clear();
    angl1 = h = "";
    0 == b.ch && 0 < c.znak ? (f.addfr(op4, "2"), angl1 = op4 + "/2") : 0 == b.ch && 0 > c.znak ? (f.addstr("-"), f.addfr(op4, "2"), angl1 = "-" + op4 + "/2") : 0 < b.znak && 0 == c.ch ? (f.addstr(op4), angl1 = op4) : 0 > b.znak && 0 == c.ch ? (f.addstr("-" + op4), angl1 = "-" + op4) : 0 < b.znak && 0 < c.znak ? (g = oms4(c, b), f.addstr(op3 + "("), f.addfr(c.show(), b.show()), f.addstr(")"), h = f.show(" "), f.clear(), g.ch == g.zn ? (f.addfr(op4, "4"), angl1 = op4 + "/4") : (f.addstr(op3 + "("), 
    f.addstr(g.showtab()), f.addstr(")"), angl1 = op3 + "(" + g.show() + ")")) : 0 < b.znak && 0 > c.znak ? (g = oms4(c, b), f.addstr(op3 + "("), f.addfr(c.show(), b.show()), f.addstr(")"), h = f.show(" "), f.clear(), g.znak = -g.znak, g.ch == g.zn ? (f.addstr("-"), f.addfr(op4, "4"), angl1 = "-" + op4 + "/4") : (f.addstr("-" + op3 + "("), f.addstr(g.showtab()), f.addstr(")"), angl1 = "-" + op3 + "(" + g.show() + ")"), g.znak = -g.znak) : 0 > b.znak && 0 < c.znak ? (g = oms4(c, b), f.addstr(op4 + 
    "+" + op3 + "("), f.addfr(c.show(), b.show()), f.addstr(")"), h = f.show(" "), f.clear(), g.znak = -g.znak, g.ch == g.zn ? (f.addfr("3" + op4, "4"), angl1 = "3" + op4 + "/4") : (f.addstr(op4 + "-" + op3 + "("), f.addstr(g.showtab()), f.addstr(")"), angl1 = op4 + "-" + op3 + "(" + g.show() + ")"), g.znak = -g.znak) : 0 > b.znak && 0 > c.znak && (g = oms4(c, b), f.addstr("-" + op4 + "+" + op3 + "("), f.addfr(c.show(), b.show()), f.addstr(")"), h = f.show(" "), f.clear(), g.ch == g.zn ? (f.addstr("-"), 
    f.addfr("3" + op4, "4"), angl1 = "-3" + op4 + "/4") : (f.addstr("-" + op4 + "+" + op3 + "("), f.addstr(g.showtab()), f.addstr(")"), angl1 = "-" + op4 + "+" + op3 + "(" + g.show() + ")"));
    k.clear();
    k.add(op2);
    "" != h && (k.add("&nbsp;=&nbsp;"), k.add(h));
    if (g.ch != c.ch || g.zn != b.ch || 1 != c.zn || 1 != b.zn || 1 == g.ch || 1 == g.zn) {
      k.add("&nbsp;=&nbsp;"), k.add(f.show(" "));
    }
    t += k.show(" ");
    t += "<br>" + j7 + "<br><br>" + j4 + "<br><br>";
    k.clear();
    k.add("<div class=formula>z</div>&nbsp;=&nbsp;");
    k.add(sqrtfrtab(e, 1));
    k.add("(cos(");
    k.add(f.show(" "));
    k.add(")&nbsp;+&nbsp;" + ii + "&nbsp;sin(");
    k.add(f.show(" "));
    k.add("))");
    t += k.show(" ") + "<br><br>" + j3 + "<br><br>";
    k.clear();
    k.add("<div class=formula>z</div>&nbsp;=&nbsp;");
    k.add(sqrtfrtab(e, 1));
    k.add("<div class=formula>e</div><sup>" + ii + angl1 + "</sup>");
    t += k.show(" ");
  }
  setFocus(t);
}

function root() {
  var b = new tfraction, c = new tfraction, h = new tfraction;
  new tfraction;
  b.newf(document.getElementById("r1").value);
  c.newf(document.getElementById("i1").value);
  var d = new TfrRes;
  if (0 < b.er || 0 < c.er) {
    setFocus("<font class=n>" + j1 + "</font>"), exit;
  }
  var e = new tcomplex;
  e.re = b;
  e.im = c;
  d.add("<div class=formula>z</div>&nbsp;=&nbsp;");
  d.add(e.show());
  t = d.show();
  t += "<br>" + j2;
  t += "<br><br><center><div class=formula>z</div> = <div class=formula>z</div>(cos <div class=formula>" + j4 + "</div>+ <b><div class=formula>i</div></b> sin <div class=formula>" + j4 + "</div>)</center>";
  d.clear();
  d.add("<div class=formula>x</div>&nbsp;=&nbsp;Re(<div class=formula>z</div>)&nbsp;=&nbsp;");
  d.add(b.showtab());
  d.add(";&nbsp;&nbsp;&nbsp;");
  d.add("<div class=formula>y</div>&nbsp;=&nbsp;Im(<div class=formula>z</div>)&nbsp;=&nbsp;");
  d.add(c.showtab());
  t += d.show();
  h = oms1(oms3(b, b), oms3(c, c));
  t += "<br><div class=formula>r</div> = (<div class=formula>x</div><sup>2</sup> + <div class=formula>y</div><sup>2</sup>)<sup>1/2</sup>";
  t += "<br><div class=formula>r</div> = (" + b.showzn() + "<sup>2</sup> + " + c.showzn() + "<sup>2</sup>)<sup>1/2</sup> = (" + h.showzn() + ")<sup>1/2</sup>";
  d.clear();
  d.add("|");
  d.add(e.show());
  d.add("|&nbsp;=&nbsp;");
  0 == b.ch && 0 == c.ch ? d.add("0") : 0 == b.ch ? (c.znak = 1, d.add(c.showtab())) : 0 == c.ch ? (b.znak = 1, d.add(b.showtab())) : (d.add("("), d.add("(" + b.show() + ")<sup>2</sup> + (" + c.show() + ")<sup>2</sup>"), d.add(")<sup>1/2</sup> = "), oms1(oms3(b, b), oms3(c, c)), d.add("(" + c.show() + ")<sup>1/2</sup>"));
  setFocus(t);
}
;