

function setFocus(a) {
  document.getElementById("res").innerHTML = "<div align=left><b>" + RResh + "</b></div><br>" + a + "<br><br><div align=right></div>";
  document.getElementById("res").className = "ramka";
  
}
function setFocus2(a) {
  document.getElementById("res").innerHTML = '<img align=right src="../../../images/strela.png" onclick=focus1() alt="\u041a \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0443"/><div align=left><b>' + RResh + "</b></div><br>" + a + "<br><br><div align=right></div>";
  document.getElementById("res").className = "ramka";
}
function focus1() {
}
function tfraction() {
  this.znak = 1;
  this.ch = 0;
  this.zn = 1;
  this.er = this.d = 0;
  this.equally = fr_equally;
  this.isdecimal = fr_isdecimal;
  this.showtex = showfractiontex;
  this.showtexzn = showfractiontexzn;
  this.show = showfraction;
  this.showabs = showfractionabs;
  this.showzn = showfractionzn;
  this.showtab = showfractiontab;
  this.showtabzn = showfractiontabzn;
  this.simplify = fsimplify;
  this.shznak = showznak;
  this.newf = fnew;
}
function fr_equally(a) {
  this.znak = a.znak;
  this.ch = a.ch;
  this.zn = a.zn;
  this.d = a.d;
  this.er = a.er;
}
function fr_isdecimal() {
  for (var a = this.zn;a / 2 == Math.round(a / 2);) {
    a /= 2;
  }
  for (;a / 5 == Math.round(a / 5);) {
    a /= 5;
  }
  return 1 == a ? !0 : !1;
}
function showfractiontex() {
  if (0 == this.ch) {
    return 0;
  }
  if (0 == this.zn) {
    return "infinity";
  }
  if (1 == this.zn) {
    return this.znak * this.ch;
  }
  if (1 == this.d) {
    var a = this.zn, c, b;
    for (b = c = 0;a / 2 == Math.round(a / 2);) {
      c++, a /= 2;
    }
    for (;a / 5 == Math.round(a / 5);) {
      b++, a /= 5;
    }
    if (1 == a) {
      return this.znak * this.ch / this.zn;
    }
  }
  return this.shznak() + "\frac{" + this.ch + "}{" + this.zn + "}";
}
function showfractiontexzn() {
  return-1 == this.znak ? "(" + this.showtex() + ")" : this.showtex();
}
function provercainput(a) {
  var c = new tfraction;
  c.newf(a.value);
  a.style.background = 0 < c.er ? "#ffdddd" : "#ffffff";
}
function copyright() {
  alert("");
}
function showfractiontab() {
  if (0 == this.ch) {
    return 0;
  }
  if (0 == this.zn) {
    return "?";
  }
  if (1 == this.zn) {
    return this.znak * this.ch;
  }
  if (1 == this.d) {
    var a = this.zn, c, b;
    for (b = c = 0;a / 2 == Math.round(a / 2);) {
      c++, a /= 2;
    }
    for (;a / 5 == Math.round(a / 5);) {
      b++, a /= 5;
    }
    if (1 == a) {
      return exponent_nomber(this.znak * this.ch / this.zn);
    }
  }
  return'<table cellSpacing=0 cellPadding=0 border=0 style="TEXT-ALIGN: center"><tbody><tr><td class=int rowSpan=2>' + this.shznak() + "</td><td class=num>" + this.ch + "</td></tr><tr><td class=denom>" + this.zn + "</td></tr></tbody></table>";
}
function showfractiontabzn() {
  if (0 == this.ch) {
    return 0;
  }
  if (0 == this.zn) {
    return "?";
  }
  if (1 == this.zn) {
    return-1 == this.znak ? "(" + this.znak * this.ch + ")" : this.ch;
  }
  if (1 == this.d) {
    var a = this.zn, c, b;
    for (b = c = 0;a / 2 == Math.round(a / 2);) {
      c++, a /= 2;
    }
    for (;a / 5 == Math.round(a / 5);) {
      b++, a /= 5;
    }
    if (1 == a) {
      return-1 == this.znak ? "(" + exponent_nomber(this.znak * this.ch / this.zn) + ")" : this.ch / this.zn;
    }
  }
  return-1 == this.znak ? '<TABLE cellSpacing=0 cellPadding=0 border=0 style="TEXT-ALIGN: center"><TBODY><TR><td class=int rowSpan=2>(</td><TD class=int rowSpan=2>' + this.shznak() + "</TD><TD class=num>" + this.ch + "</TD><td class=int rowSpan=2>)</td></TR><TR><TD class=denom>" + this.zn + "</TD></TR></TBODY></TABLE>" : '<table cellSpacing=0 cellPadding=0 border=0 style="TEXT-ALIGN: center"><tbody><tr><td class=int rowSpan=2>' + this.shznak() + "</td><td class=num>" + 
  this.ch + "</td></tr><tr><td class=denom>" + this.zn + "</td></tr></tbody></table>";
}
function showfraction() {
  if (0 == this.ch) {
    return 0;
  }
  if (0 == this.zn) {
    return "?";
  }
  if (1 == this.zn) {
    return this.znak * this.ch;
  }
  if (1 == this.d) {
    var a = this.zn, c, b;
    for (b = c = 0;a / 2 == Math.round(a / 2);) {
      c++, a /= 2;
    }
    for (;a / 5 == Math.round(a / 5);) {
      b++, a /= 5;
    }
    if (1 == a) {
      return exponent_nomber(this.znak * this.ch / this.zn);
    }
  }
  return this.shznak() + this.ch + "/" + this.zn;
}
function showfractionabs() {
  if (0 == this.ch) {
    return 0;
  }
  if (0 == this.zn) {
    return "?";
  }
  if (1 == this.zn) {
    return this.ch;
  }
  if (1 == this.d) {
    var a = this.zn, c, b;
    for (b = c = 0;a / 2 == Math.round(a / 2);) {
      c++, a /= 2;
    }
    for (;a / 5 == Math.round(a / 5);) {
      b++, a /= 5;
    }
    if (1 == a) {
      return exponent_nomber(this.ch / this.zn);
    }
  }
  return "(" + this.ch + "/" + this.zn + ")";
}
function showfractionzn() {
  return 1 != this.zn || -1 == this.znak ? "(" + this.show() + ")" : this.show();
}
function fsimplify() {
  var a = nod(this.ch, this.zn);
  1 != a && (this.ch /= a, this.zn /= a);
}
function showznak() {
  return 1 == this.znak ? "" : "-";
}
function exponent_nomber(a) {
  var c, b, d = 0;
  c = a;
  b = "";
  0 > c && (c = -c, b = "-");
  if (-1 < c.toString().search("e")) {
    var e = c.toString().split("e"), d = 1
  }
  -1 < c.toString().search("E") && (e = c.toString().split("E"), d = 1);
  if (0 == d || 0 < 1 * e[1]) {
    return a;
  }
  e[0] = e[0].replace(".", ",");
  if (-1 == e[0].search(",")) {
    d = b + "0.";
    for (c = 1;c < -1 * e[1];c++) {
      d += "0";
    }
    return d += e[0];
  }
  if (-1 != e[0].search(",")) {
    var f = e[0].split(",")
  }
  e[0] = f[0] + f[1];
  if (f[1].length < -1 * e[1]) {
    d = b + "0.";
    for (c = 1;c < -1 * e[1] - f[1].length;c++) {
      d += "0";
    }
    return d += e[0];
  }
  return a;
}
function fnew(a) {
  this.znak = 1;
  this.ch = 0;
  this.zn = 1;
  var c = this.d = 0;
  isNaN(a) && (a = 0 < a.search(".") ? a.replace(".", ",") : a.replace(",", "."));
  if (!isNaN(a) && "" != a) {
    this.d = 1;
    if (a == Math.round(a)) {
      this.ch = a, this.zn = 1;
    } else {
      var b = -1 < a.search(".") ? a.split(".") : a.split(",");
      this.zn = ten_st(b[1].length);
      this.ch = b[0] + b[1];
    }
    c = 1;
  }
  0 < a.search("/") && (b = a.split("/"), 2 == b.length && (isNaN(b[0]) && (0 < b[1].search(".") ? b[1] = b[1].replace(".", ",") : b[1] = b[1].replace(",", ".")), isNaN(b[0]) && (0 < b[0].search(".") ? b[0] = b[0].replace(".", ",") : b[0] = b[0].replace(",", ".")), isNaN(b[0]) || "" == b[0] || isNaN(b[1]) || "" == b[1] || (b[0] == Math.round(b[0]) ? (this.ch = b[0], this.zn = 1) : (a = -1 < b[0].search(".") ? b[0].split(".") : b[0].split(","), this.zn = ten_st(a[1].length), this.ch = a[0] + a[1]), 
  b[1] == Math.round(b[1]) ? this.zn *= b[1] : (a = -1 < b[1].search(".") ? b[1].split(".") : b[1].split(","), this.ch *= ten_st(a[1].length), this.zn *= a[0] * ten_st(a[1].length) + 1 * a[1]), c = 1)));
  0 == c && (this.er = 1);
  0 > this.ch && (this.ch = -this.ch, this.znak = -this.znak);
  0 > this.zn && (this.zn = -this.zn, this.znak = -this.znak);
}
function TfrRes() {
  this.d = this.n = "";
  this.add = addall;
  this.addb = addallbegin;
  this.add1 = addtdtotable1;
  this.addfr = addfrac;
  this.addstr = addstring;
  this.addfrb = addfracbegin;
  this.addstrb = addstringbegin;
  this.clear = frclear;
  this.show = showfttable;
}
function addfracbegin(a, c) {
  this.n = "<td class=num>" + a + "</td>" + this.n;
  this.d = "<td class=denom>" + c + "</td>" + this.d;
}
function addstringbegin(a) {
  this.n = "<td class=int rowSpan=2>" + a + "</td>" + this.n;
}
function addfrac(a, c) {
  this.n += "<td class=num>" + a + "</td>";
  this.d += "<td class=denom>" + c + "</td>";
}
function addstring(a) {
  this.n += "<td class=int rowSpan=2>" + a + "</td>";
}
function frclear() {
  this.d = this.n = "";
}
function addall(a, c) {
  c ? this.addfr(a, c) : this.addstr(a);
}
function addallbegin(a, c) {
  c ? this.addfrb(a, c) : this.addstrb(a);
}
function addtdtotable1(a) {
  this.n += a;
}
function showfttable(a) {
  a || (a = "center");
  return "<table align=" + a + "><tbody><tr>" + this.n + "</tr><rt>" + this.d + "</tr></tbody></table>";
}
function ten_st(a) {
  for (var c = 1, b = 1;b <= a;b++) {
    c *= 10;
  }
  return c;
}
function sqrtfr(a) {
  var c = mysqrt(a.ch), b = mysqrt(a.zn);
  if (1 == a.ch && 1 == a.zn) {
    return " 1";
  }
  if (0 == a.ch && 0 != a.zn) {
    return " 0";
  }
  if (1 < c || 1 < b) {
    var d = a.ch * a.zn / (c * b), e = new tfraction;
    e.ch = a.ch;
    e.zn = a.zn;
    e.d = a.d;
    e.ch = Math.sqrt(c);
    e.zn = Math.sqrt(e.zn * e.zn / b);
    e.d = 1;
    if (1 == d) {
      return e.showtex();
    }
    c = e.showtex();
    return isNaN(c) ? 1 != e.ch ? "\frac{" + e.ch + "sqrt{" + d + "}}{" + e.zn + "}" : "\frac{sqrt{" + d + "}}{" + e.zn + "}" : c + "sqrt{" + d + "}";
  }
  return 1 < a.zn ? "\frac{sqrt{" + a.ch * a.zn + "}}{" + a.zn + "}" : "";
}
function sqrtfrtab(a, c) {
  if (1 == a.ch && 1 == a.zn) {
    return " 1";
  }
  if (0 == a.ch && 0 != a.zn) {
    return " 0";
  }
  if (0 != a.ch && 0 == a.zn) {
    return " ?";
  }
  var b = mysqrt(a.ch), d = mysqrt(a.zn), e = new TfrRes;
  if (1 < b || 1 < d) {
    var f = a.ch * a.zn / (b * d), g = new tfraction;
    g.ch = Math.sqrt(b);
    g.zn = Math.sqrt(a.zn * a.zn / d);
    g.d = 1;
    if (1 == f) {
      return 2 == c ? g.show() : g.showtab();
    }
    b = 1 == g.ch ? "" : g.ch;
    if (1 != g.zn) {
      if (2 == c) {
        return b + "\u221a<div class=sqrt>" + f + "</div>/" + g.zn;
      }
      e.addfr(b + "\u221a<div class=sqrt>" + f + "</div>", g.zn);
      return e.show();
    }
    return b + "\u221a<div class=sqrt>" + f + "</div>";
  }
  if (1 < a.zn) {
    if (2 == c) {
      return "\u221a<div class=sqrt>" + a.ch * a.zn + "</div>/" + a.zn;
    }
    e.addfr("\u221a<div class=sqrt>" + a.ch * a.zn + "</div>", a.zn);
    return e.show();
  }
  return c ? "\u221a<div class=sqrt>" + a.ch + "</div>" : "";
}
function oms(a, c) {
  var b = new tfraction;
  b.ch = 0;
  b.zn = 1;
  b.simplify();
  if (1 == a.d || 1 == c.d) {
    b.d = 1;
  }
  return b;
}
function oms(a, c) {
  var b = new tfraction;
  b.ch = a.znak * a.ch * c.zn + c.znak * c.ch * a.zn;
  b.zn = c.zn * a.zn;
  0 > b.ch && (b.ch = -b.ch, b.znak = -1);
  b.simplify();
  1 == a.d && 1 == c.d && (b.d = 1);
  return oms(a, c);
}
function oms1(a, c) {
  var b = new tfraction, d, e, f;
  d = nod(a.zn, c.zn);
  e = a.zn / d;
  f = c.zn / d;
  b.zn = e * f * d;
  b.ch = a.znak * a.ch * f + c.znak * c.ch * e;
  0 > b.ch && (b.ch = -b.ch, b.znak = -1);
  b.simplify();
  1 == a.d && 1 == c.d && (b.d = 1);
  return b;
}
function oms2(a, c) {
  var b = new tfraction, d, e, f;
  d = nod(a.zn, c.zn);
  e = a.zn / d;
  f = c.zn / d;
  b.zn = e * f * d;
  b.ch = a.znak * a.ch * f - c.znak * c.ch * e;
  0 > b.ch && (b.ch = -b.ch, b.znak = -1);
  b.simplify();
  1 == a.d && 1 == c.d && (b.d = 1);
  return b;
}
function oms3(a, c) {
  var b = new tfraction, d, e;
  d = nod(a.ch, c.zn);
  e = a.ch / d;
  d = c.zn / d;
  b.ch = e;
  b.zn = d;
  d = nod(c.ch, a.zn);
  e = c.ch / d;
  d = a.zn / d;
  b.ch *= e;
  b.zn *= d;
  b.znak = a.znak * c.znak;
  b.simplify();
  1 == a.d && 1 == c.d && (b.d = 1);
  return b;
}
function oms4(a, c) {
  var b = new tfraction, d, e;
  d = nod(a.ch, c.ch);
  e = a.ch / d;
  d = c.ch / d;
  b.ch = e;
  b.zn = d;
  d = nod(c.zn, a.zn);
  e = c.zn / d;
  d = a.zn / d;
  b.ch *= e;
  b.zn *= d;
  b.znak = a.znak * c.znak;
  b.simplify();
  1 == a.d && 1 == c.d && (b.d = 1);
  return b;
}
function frtest() {
  var a = new tfraction;
  a.newf("1/2");
  var c = new tfraction;
  c.newf("1/2");
  alert(a.showtex());
  alert(c.showtex());
  var b = new tfraction, b = oms1(a, c);
  alert(b.showtex());
  c.newf("1.45");
  alert(c.showtex());
  c.d = 0;
  alert(c.showtex());
}
function rtyv() {
  alert("");
}
function nod(a, c) {
  var b, d, e;
  d = Math.max(a, c);
  e = Math.min(a, c);
  for (b = d - e * Math.floor(d / e);0 < b;) {
    d = e, e = b, b = d - e * Math.floor(d / e);
  }
  0 == e && (e = 1);
  return e;
}
function mysqrt(a) {
  var c, b = 1, d = a;
  for (c = 2;c <= Math.sqrt(d);c++) {
    a = d / (c * c), a == Math.round(a) && (b = b * c * c, d /= c * c, c--);
  }
  return b;
}
function s_detect() {
  return!1;
}
function formula(a) {
  return "<div class=formula>" + a + "</div>";
}
function sqrtanswer(a, c) {
  var b = new TfrRes, d = "", e;
  1 == c && (c = !1, d = "-");
  2 == c && (c = !0, d = "-");
  0 === c && (c = !0);
  3 == c ? (e = sqrtfrtab(a, 1), c = !1) : e = sqrtfrtab(a);
  "" != e && (b.addstr("&nbsp;=&nbsp;"), b.addstr(d), b.addstr(e));
  0 == a.ch || c || (Math.sqrt(a.ch) != Math.round(Math.sqrt(a.ch)) || Math.sqrt(a.zn) != Math.round(Math.sqrt(a.zn)) ? (b.addstr("&nbsp;\u2248&nbsp;"), b.addstr(d), b.addstr(Math.sqrt(a.ch / a.zn))) : a.isdecimal() ? 1 != a.d && a.isdecimal() && 1 != a.zn && (b.addstr("&nbsp;=&nbsp;"), b.addstr(d), b.addstr(Math.sqrt(a.ch) / Math.sqrt(a.zn))) : (b.addstr("&nbsp;\u2248&nbsp;"), b.addstr(d), b.addstr(Math.sqrt(a.ch / a.zn))));
  return b.show(" ");
}
function magax() {
  return!1;
}
;