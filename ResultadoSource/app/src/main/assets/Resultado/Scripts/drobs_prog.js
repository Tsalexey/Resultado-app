
function setFocus(a) {
  document.getElementById("res").innerHTML = "<div align=left><b>" + RResh + "</b></div><br>" + a + "<br><br><div align=right></div>";
  document.getElementById("res").className = "ramka";
}
function nod(a, c) {
  var f, d, e;
  d = Math.max(a, c);
  e = Math.min(a, c);
  for (f = d - e * Math.floor(d / e);0 < f;) {
    d = e, e = f, f = d - e * Math.floor(d / e);
  }
  0 == e && (e = 1);
  return e;
}
function nok(a, c) {
  var f = nod(a, c);
  return f = a / f * c;
}
function TfrRes() {
  this.d = this.n = "";
  this.addfr = addfrac;
  this.addstr = addstring;
  this.clear = frclear;
  this.show = showfttable;
}
function addfrac(a, c) {
  this.n += '<td nowrap style="BORDER-BOTTOM: white 1px solid; TEXT-ALIGN: center;">' + a + "</td>";
  this.d += '<td nowrap style="TEXT-ALIGN: center;">' + c + "</td>";
}
function addstring(a) {
  this.n += "<td nowrap vAlign=center align=middle rowSpan=2>" + a + "</td>";
}
function frclear() {
  this.d = this.n = "";
}
function showfttable(a) {
  a || (a = "center");
  return "<table align=" + a + "><tbody><tr>" + this.n + "</tr><rt>" + this.d + "</tr></tbody></table>";
}
function Tfr(a) {
  this.n = document.getElementById("n" + a).value;
  this.d = document.getElementById("d" + a).value;
  this.c = document.getElementById("c" + a).value;
  this.zn = 1;
  this.zn1 = "";
  this.er = 0;
  "-" == this.c && (this.c = 0, this.zn = -1);
  "" == this.c && (this.c = 0);
  if (isNaN(this.n) || isNaN(this.d) || isNaN(this.c)) {
    this.er = 1, alert(j2), retutn;
  }
  if (this.n != Math.round(this.n) || this.d != Math.round(this.d) || this.c != Math.round(this.c)) {
    this.er = 1, alert(j2), retutn;
  }
  if (isNaN(this.n) || isNaN(this.d) || isNaN(this.c)) {
    this.er = 1, alert(j2), retutn;
  }
  if ("" == this.n && "" == this.d) {
    this.n = 0, this.d = 1;
  } else {
    if ("" == this.n || "" == this.d) {
      this.er = 2, alert(j1), retutn;
    }
  }
  0 == this.c && 0 == this.n && (this.er = 1, alert(j1), retutn);
  0 != this.c && (0 > this.n || 0 > this.d) ? (alert(j3), this.er = 3) : (0 > this.c && (this.c = -this.c, this.zn = -1), 0 > this.n && (this.n = -this.n, this.zn = -this.zn), 0 > this.d && (this.d = -this.d, this.zn = -this.zn), -1 == this.zn && (this.zn1 = "-"), 0 == this.c && (this.c = ""));
}
function TfrS(a) {
  this.n = document.getElementById("n" + a).value;
  this.d = document.getElementById("d" + a).value;
  this.c = document.getElementById("c" + a).value;
  this.zn = 1;
  this.zn1 = "";
  this.er = 0;
  isNaN(this.n) && (0 < this.n.search(".") ? this.n = this.n.replace(".", ",") : this.n = this.n.replace(",", "."));
  isNaN(this.d) && (0 < this.d.search(".") ? this.d = this.d.replace(".", ",") : this.d = this.d.replace(",", "."));
  if (isNaN(this.n) || isNaN(this.d)) {
    this.er = 1, alert(j2), retutn;
  }
  if ("" == this.n || "" == this.d) {
    this.er = 2, alert(j1), retutn;
  }
  "-" == this.c && (this.c = 0, this.zn = -1);
  "" == this.c && (this.c = 0);
  0 != this.c && (0 > this.n || 0 > this.d) ? (alert(j3), this.er = 3) : (0 > this.c && (this.c = -this.c, this.zn = -1), 0 > this.n && (this.n = -this.n, this.zn = -this.zn), 0 > this.d && (this.d = -this.d, this.zn = -this.zn), isNaN(this.n) && (this.er = 1, alert(j1), retutn), -1 == this.zn && (this.zn1 = "-"), 0 == this.c && (this.c = ""));
}
function Tfr1() {
  this.zn = 1;
  this.zn1 = "";
  this.er = 0;
  this.c = this.d = this.n = "";
}
function clearf() {
  document.getElementById("res").innerHTML = "";
  document.getElementById("Ac").innerHTML = "";
  document.getElementById("An").innerHTML = "";
  document.getElementById("Ad").innerHTML = "";
}
function printfr(a, c) {
  setFocus("<table align=center><tbody><tr>" + a.n + "</tr><rt>" + a.d + "</tr></tbody></table>");
}
function printfr1(a, c) {
  setFocus(a);
}
function transform() {
  clearf();
  var a = new Tfr(1);
  if (!(0 < a.er)) {
    if (0 > a.n - a.d) {
      alert(j4);
    } else {
      var c = new TfrRes;
      c.addstr(a.zn1 + a.c);
      c.addfr(a.n, a.d);
      c.addstr("&nbsp;=&nbsp;");
      var f = nod(a.n, a.d);
      if (1 < f) {
        c.addstr(a.zn1 + a.c);
        a.d == f ? c.addfr(a.n / f + mn + f, a.d) : c.addfr(a.n / f + mn + f, a.d / f + mn + f);
        c.addstr("&nbsp;=&nbsp;");
        a.d /= f;
        a.n /= f;
        if (1 == a.d) {
          a.c = 1 * a.c + 1 * a.n;
          c.addstr(a.zn1 + a.c);
          a.n = "";
          a.d = "";
          printfr(c, a);
          return;
        }
        c.addstr(a.zn1 + a.c);
        c.addfr(a.n, a.d);
        c.addstr("&nbsp;=&nbsp;");
      }
      f = Math.floor(a.n / a.d);
      a.n = 1 * a.n - f * a.d;
      c.addstr(a.zn1 + a.c);
      c.addfr(a.n + "+" + f + mn + a.d, a.d);
      c.addstr("&nbsp;=&nbsp;");
      a.c = 1 * a.c + 1 * f;
      c.addstr(a.zn1 + a.c);
      c.addfr(a.n, a.d);
      printfr(c, a);
    }
  }
}
function transform1() {
  clearf();
  var a = new Tfr(1);
  if (!(0 < a.er)) {
    if (0 == a.c) {
      alert(j4);
    } else {
      var c = new TfrRes;
      c.addstr(a.zn1 + a.c);
      c.addfr(a.n, a.d);
      c.addstr("&nbsp;=&nbsp;");
      c.addstr(a.zn1);
      c.addfr(a.n + "+" + a.c + mn + a.d, a.d);
      c.addstr("&nbsp;=&nbsp;");
      a.n = a.c * a.d + 1 * a.n;
      c.addstr(a.zn1);
      c.addfr(a.n, a.d);
      a.c = "";
      printfr(c, a);
    }
  }
}
function simplify() {
  clearf();
  var a = new TfrS(1);
  if (!(0 < a.er)) {
    var c = new TfrRes;
    if (0 == a.n) {
      c.addstr(a.n), a.c = a.n, a.n = "", a.d = "";
    } else {
      var f = 0, d = 0, e = 0, g = 0;
      a.n != Math.round(a.n) && (f = -1 < a.n.search(".") ? a.n.split(".") : a.n.split(","), e = f[1].length, f = 0 == f[0] ? f[1] : f[0] + f[1]);
      a.d != Math.round(a.d) && (d = -1 < a.d.search(".") ? a.d.split(".") : a.d.split(","), g = d[1].length, d = 0 == d[0] ? d[1] : d[0] + d[1]);
      0 == f && (f = a.n);
      0 == d && (d = a.d);
      if (0 < e || 0 < g) {
        e > g && (d *= ten_st(e - g)), g > e && (f *= ten_st(g - e));
      }
      e = nod(f, d);
      if (1 == e) {
        c.addstr(j4);
      } else {
        for (var h = g = "", l = f, n = 2;1 < l;) {
          dd = l / n, dd == Math.round(dd) ? (g = "" == g ? g + n : g + (mn + n), l /= n) : n++;
        }
        "" == g && (g = 1);
        l = d;
        for (n = 2;1 < l;) {
          dd = l / n, dd == Math.round(dd) ? (h = "" == h ? h + n : h + (mn + n), l /= n) : n++;
        }
        "" == h && (h = 1);
        c.addstr(a.zn1);
        c.addfr(a.n, a.d);
        c.addstr("&nbsp;=&nbsp;");
        a.n != f && (c.addstr(a.zn1), c.addfr(f, d), c.addstr("&nbsp;=&nbsp;"), a.n = f, a.d = d);
        c.addstr(a.zn1);
        c.addfr(g, h);
        c.addstr("&nbsp;=&nbsp;");
        a.n /= e;
        a.d /= e;
        c.addstr(a.zn1);
        1 == a.d ? (c.addstr(a.n), a.c = a.n, a.n = "", a.d = "") : c.addfr(a.n, a.d);
      }
    }
    printfr(c, a);
  }
}
function compar() {
  document.getElementById("res").innerHTML = "";
  var a = new Tfr(1), c = new Tfr(2), f = a.n, d = a.d, e = a.zn1, g = a.c, h = c.n, l = c.d, n = c.zn1, p = c.c;
  if (!(0 < a.er || 0 < c.er)) {
    var k = new TfrRes, m = "";
    k.addstr(a.zn1 + a.c);
    k.addfr(a.n, a.d);
    k.addstr("&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;&nbsp;&nbsp;&nbsp;" + c.zn1 + c.c);
    k.addfr(c.n, c.d);
    m += "<table align=center><tbody><tr>" + k.n + "</tr><rt>" + k.d + "</tr></tbody></table>";
    k.clear();
    if (0 < a.c || 0 < c.c) {
      m += "<p>" + a3 + "</p>", k.addstr(a.zn1), 0 < a.c ? k.addfr(a.c + mn + a.d + "+" + a.n, a.d) : k.addfr(a.n, a.d), k.addstr("&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;&nbsp;&nbsp;&nbsp;" + c.zn1), 0 < c.c ? k.addfr(c.c + mn + c.d + "+" + c.n, c.d) : k.addfr(c.n, c.d), m += "<table align=center><tbody><tr>" + k.n + "</tr><rt>" + k.d + "</tr></tbody></table>", k.clear(), k.addstr(a.zn1), a.n = a.c * a.d + 1 * a.n, a.c = "", k.addfr(a.n, a.d), k.addstr("&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;&nbsp;&nbsp;&nbsp;" + 
      c.zn1), c.n = c.c * c.d + 1 * c.n, c.c = 0, k.addfr(c.n, c.d), m += "<table align=center><tbody><tr>" + k.n + "</tr><rt>" + k.d + "</tr></tbody></table>", k.clear();
    }
    a.d != c.d && (dd = nod(a.d, c.d), a.d /= dd, c.d /= dd, m += "<p>" + a4 + "</p>", k.addstr(a.zn1), 1 < c.d ? k.addfr(a.n + mn + c.d, a.d * dd + mn + c.d) : k.addfr(a.n, a.d * dd), k.addstr("&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;&nbsp;&nbsp;&nbsp;" + c.zn1), 1 < a.d ? k.addfr(c.n + mn + a.d, c.d * dd + mn + a.d) : k.addfr(c.n, c.d * dd), m += "<table align=center><tbody><tr>" + k.n + "</tr><rt>" + k.d + "</tr></tbody></table>", k.clear(), k.addstr(a.zn1), a.n *= c.d, c.n *= a.d, a.d = a.d * dd * c.d, 
    c.d = a.d, k.addfr(a.n, a.d), k.addstr("&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;&nbsp;&nbsp;&nbsp;" + c.zn1), k.addfr(c.n, c.d), m += "<table align=center><tbody><tr>" + k.n + "</tr><rt>" + k.d + "</tr></tbody></table>", k.clear());
    m += "<p>" + a5 + "</p>";
    zn = a.n * a.zn == c.n * c.zn ? "=" : a.n * a.zn < c.n * c.zn ? "<" : ">";
    m += "<p align=center>" + a.n * a.zn + "&nbsp;&nbsp;&nbsp;" + zn + "&nbsp;&nbsp;&nbsp;" + c.n * c.zn + ", ";
    m += a6 + "</p>";
    k.addstr(e + g);
    k.addfr(f, d);
    k.addstr("&nbsp;&nbsp;&nbsp;&nbsp;" + zn + "&nbsp;&nbsp;&nbsp;&nbsp;" + n + p);
    k.addfr(h, l);
    m += "<table align=center><tbody><tr>" + k.n + "</tr><rt>" + k.d + "</tr></tbody></table>";
    k.clear;
    setFocus(m);
  }
}
function solve() {
  document.getElementById("res").style.display = "none";
  0 == mwidth && (mwidth = document.getElementById("mmblok").offsetWidth);
  clearf();
  var a = new Tfr(1), c = new Tfr(2);
  if (!(0 < a.er || 0 < c.er)) {
    var f = new TfrRes, d = document.getElementById("Op").value;
    f.addstr(a.zn1 + a.c);
    0 < a.n && f.addfr(a.n, a.d);
    f.addstr("&nbsp;" + d + "&nbsp;");
    "-" == c.zn1 && f.addstr("(" + c.zn1);
    f.addstr(c.c);
    0 < c.n && f.addfr(c.n, c.d);
    "-" == c.zn1 && f.addstr(")");
    f.addstr("&nbsp;=&nbsp;");
    "-" == d && "-" == c.zn1 && (d = "+", c.zn1 = "", c.zn = 1);
    "+" == d && "-" == c.zn1 && (d = "-", c.zn1 = "", c.zn = 1);
    d != mn && ":" != d || "-" != c.zn1 || (a.zn = -a.zn, c.zn = 1, c.zn1 = "", a.zn1 = 0 > a.zn ? "-" : "");
    if (0 == a.n || 0 == c.n) {
      0 == a.n && (a.n = a.c, a.c = "", a.d = 1), 0 == c.n && (c.n = c.c, c.c = "", c.d = 1), f.addstr(a.zn1 + a.c), f.addfr(a.n, a.d), f.addstr("&nbsp;" + d + "&nbsp;"), f.addstr(c.c), f.addfr(c.n, c.d), f.addstr("&nbsp;=&nbsp;");
    }
    frcalkend(a, c, d, f);
  }
}
function solve1() {
  document.getElementById("res").style.display = "none";
  0 == mwidth && (mwidth = document.getElementById("mmblok").offsetWidth);
  clearf();
  var a = new Tfr(2);
  if (!(0 < a.er)) {
    var c = new TfrRes, f = new Tfr1, d = document.getElementById("Op").value, e = document.getElementById("c1").value;
    isNaN(e) && (e = 0 < e.search(".") ? e.replace(".", ",") : e.replace(",", "."));
    if (isNaN(e)) {
      alert(j2);
    } else {
      if (Math.round(e) != e) {
        var g = -1 < e.search(".") ? e.split(".") : e.split(",");
        f.d = ten_st(g[1].length);
        f.n = 0 == g[0] ? g[1] : g[0] + g[1];
      } else {
        f.n = e, f.d = 1;
      }
      f.c = "";
      0 > e ? (e = -e, f.zn = -1, f.zn1 = "-", f.n = -f.n) : (f.zn = 1, f.zn1 = "");
      1 == jj1 ? (c.addstr(f.zn1 + e), c.addstr("&nbsp;" + d + "&nbsp;"), "-" == a.zn1 ? (c.addstr("(" + a.zn1 + a.c), c.addfr(a.n, a.d), c.addstr(")")) : (c.addstr(a.c), c.addfr(a.n, a.d))) : (c.addstr(a.zn1 + a.c), c.addfr(a.n, a.d), c.addstr("&nbsp;" + d + "&nbsp;"), "-" == f.zn1 ? c.addstr("(" + f.zn1 + e + ")") : c.addstr(e));
      c.addstr("&nbsp;=&nbsp;");
      1 != jj1 && (jj1 = f.n, f.n = a.n, a.n = jj1, jj1 = f.d, f.d = a.d, a.d = jj1, jj1 = f.c, f.c = a.c, a.c = jj1, jj1 = f.zn1, f.zn1 = a.zn1, a.zn1 = jj1, jj1 = f.zn, f.zn = a.zn, a.zn = jj1, jj1 = 2);
      "-" == d && "-" == a.zn1 && (d = "+", a.zn1 = "", a.zn = 1);
      "+" == d && "-" == a.zn1 && (d = "-", a.zn1 = "", a.zn = 1);
      d != mn && ":" != d || "-" != a.zn1 || (f.zn = -f.zn, a.zn = 1, a.zn1 = "", f.zn1 = 0 > f.zn ? "-" : "");
      c.addstr(f.zn1 + f.c);
      c.addfr(f.n, f.d);
      c.addstr("&nbsp;" + d + "&nbsp;");
      c.addstr(a.c);
      c.addfr(a.n, a.d);
      c.addstr("&nbsp;=&nbsp;");
      frcalkend(f, a, d, c);
    }
  }
}
function frcalkend(a, c, f, d) {
  var e = new TfrRes, g = new TfrRes, h = "";
  if (0 < c.c || 0 < a.c) {
    e.clear();
    e.addstr(a.zn1);
    0 < a.c ? e.addfr(a.c + mn + a.d + " + " + a.n, a.d) : e.addfr(a.n, a.d);
    e.addstr("&nbsp;" + f + "&nbsp;");
    0 < c.c ? e.addfr(c.c + mn + c.d + " + " + c.n, c.d) : e.addfr(c.n, c.d);
    e.addstr("&nbsp;=&nbsp;");
    g.n = d.n + e.n;
    g.d = d.d + e.d;
    document.getElementById("res").innerHTML = g.show();
    document.getElementById("res").style.display = "block";
    var l = document.getElementById("res").offsetWidth;
    document.getElementById("res").style.display = "none";
    0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d);
    a.n = a.c * a.d + 1 * a.n;
    c.n = c.c * c.d + 1 * c.n;
    a.c = "";
    c.c = "";
    e.clear();
    e.addstr(a.zn1);
    e.addfr(a.n, a.d);
    e.addstr("&nbsp;" + f + "&nbsp;");
    e.addfr(c.n, c.d);
    e.addstr("&nbsp;=&nbsp;");
    g.n = d.n + e.n;
    g.d = d.d + e.d;
    document.getElementById("res").innerHTML = g.show();
    document.getElementById("res").style.display = "block";
    l = document.getElementById("res").offsetWidth;
    document.getElementById("res").style.display = "none";
    0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d);
  }
  switch(f) {
    case "+":
    ;
    case "-":
      a.d != c.d && (dd = nod(a.d, c.d), a.d /= dd, c.d /= dd, e.clear(), e.addstr(a.zn1), 1 < c.d ? e.addfr(a.n + mn + c.d, a.d * dd + mn + c.d) : e.addfr(a.n, a.d * dd), e.addstr("&nbsp;" + f + "&nbsp;"), 1 < a.d ? e.addfr(c.n + mn + a.d, c.d * dd + mn + a.d) : e.addfr(c.n, c.d * dd), e.addstr("&nbsp;=&nbsp;"), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, 
      document.getElementById("res").style.display = "none", 0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d), e.clear(), e.addstr(a.zn1), a.n *= c.d, c.n *= a.d, a.d = a.d * dd * c.d, c.d = a.d, e.addfr(a.n, a.d), e.addstr("&nbsp;" + f + "&nbsp;"), e.addfr(c.n, c.d), e.addstr("&nbsp;=&nbsp;"), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = 
      "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d));
      e.clear();
      e.addfr(a.zn * a.n + " " + f + " " + c.n, c.d);
      e.addstr("&nbsp;=&nbsp;");
      g.n = d.n + e.n;
      g.d = d.d + e.d;
      document.getElementById("res").innerHTML = g.show();
      document.getElementById("res").style.display = "block";
      l = document.getElementById("res").offsetWidth;
      document.getElementById("res").style.display = "none";
      0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d);
      a.n = "+" == f ? a.zn * a.n + 1 * c.n : a.zn * a.n - c.n;
      0 > a.n ? (a.n = -a.n, a.zn1 = "-", a.zn = -1) : (a.zn1 = "", a.zn = 1);
      e.clear();
      e.addstr(a.zn1);
      e.addfr(a.n, a.d);
      g.n = d.n + e.n;
      g.d = d.d + e.d;
      document.getElementById("res").innerHTML = g.show();
      document.getElementById("res").style.display = "block";
      l = document.getElementById("res").offsetWidth;
      document.getElementById("res").style.display = "none";
      0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d);
      break;
    case mn:
      e.clear();
      e.addstr(a.zn1);
      e.addfr(a.n + mn + c.n, a.d + mn + c.d);
      e.addstr("&nbsp;=&nbsp;");
      g.n = d.n + e.n;
      g.d = d.d + e.d;
      document.getElementById("res").innerHTML = g.show();
      document.getElementById("res").style.display = "block";
      l = document.getElementById("res").offsetWidth;
      document.getElementById("res").style.display = "none";
      0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d);
      a.n *= c.n;
      a.d *= c.d;
      e.clear();
      e.addstr(a.zn1);
      e.addfr(a.n, a.d);
      g.n = d.n + e.n;
      g.d = d.d + e.d;
      document.getElementById("res").innerHTML = g.show();
      document.getElementById("res").style.display = "block";
      l = document.getElementById("res").offsetWidth;
      document.getElementById("res").style.display = "none";
      0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d);
      break;
    case ":":
      e.clear(), e.addstr(a.zn1), e.addfr(a.n, a.d), e.addstr(mn), e.addfr(c.d, c.n), e.addstr("&nbsp;=&nbsp;"), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d), e.clear(), e.addstr(a.zn1), 
      e.addfr(a.n + mn + c.d, a.d + mn + c.n), e.addstr("&nbsp;=&nbsp;"), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d), a.n *= c.d, a.d *= c.n, e.clear(), e.addstr(a.zn1), 
      e.addfr(a.n, a.d), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (h += d.show() + "<br>", d.clear(), d.addstr("&nbsp;=&nbsp;"), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d);
  }
  dd = nod(a.n, a.d);
  a.n /= dd;
  a.d /= dd;
  0 == a.n || 1 == a.d ? (e.clear(), e.addstr("&nbsp;=&nbsp;"), e.addstr(a.zn * a.n), 0 == a.n && (a.zn1 = ""), a.c = a.n, a.d = "", a.n = "", g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (d.addstr("&nbsp;=&nbsp;"), h += d.show() + "<br>" + e.show()) : h += g.show()) : (1 != dd && (e.clear(), 
  e.addstr("&nbsp;=&nbsp;" + a.zn1), e.addfr(a.n + mn + dd, a.d + mn + dd), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (d.addstr("&nbsp;=&nbsp;"), h += d.show() + "<br>", d.clear(), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d), e.clear(), e.addstr("&nbsp;=&nbsp;" + a.zn1), e.addfr(a.n, 
  a.d), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (d.addstr("&nbsp;=&nbsp;"), h += d.show() + "<br>", d.clear(), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d)), a.n > a.d ? (a.c = Math.floor(a.n / a.d), a.n -= a.c * a.d, e.clear(), e.addstr("&nbsp;=&nbsp;" + a.zn1), e.addfr(a.n + 
  " + " + a.c + mn + a.d, a.d), g.n = d.n + e.n, g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (d.addstr("&nbsp;=&nbsp;"), h += d.show() + "<br>", d.clear(), d.n += e.n, d.d += e.d) : (d.n = g.n, d.d = g.d), e.clear(), e.addstr("&nbsp;=&nbsp;"), e.addstr(a.zn1 + a.c), e.addfr(a.n, a.d), g.n = d.n + e.n, 
  g.d = d.d + e.d, document.getElementById("res").innerHTML = g.show(), document.getElementById("res").style.display = "block", l = document.getElementById("res").offsetWidth, document.getElementById("res").style.display = "none", 0 > mwidth - l ? (d.addstr("&nbsp;=&nbsp;"), h += d.show() + "<br>" + e.show()) : h += g.show()) : h += d.show());
  document.getElementById("res").style.display = "block";
  printfr1(h, a);
}
function ten_st(a) {
  for (i = b = 1;i <= a;i++) {
    b *= 10;
  }
  return b;
}
function transform2() {
  clearf();
  var a = new TfrRes, c = new Tfr1, f = document.getElementById("c1").value;
  isNaN(f) && (f = 0 < f.search(".") ? f.replace(".", ",") : f.replace(",", "."));
  if (isNaN(f)) {
    alert(j2);
  } else {
    if ("" == f) {
      alert(j1);
    } else {
      if (Math.round(f) == f) {
        alert(j3);
      } else {
        var d = -1 < f.search(".") ? f.split(".") : f.split(",");
        c.d = ten_st(d[1].length);
        c.n = d[1];
        c.c = d[0];
        0 > f ? (f = -f, c.zn = -1, c.zn1 = "-", c.c = -c.c) : (c.zn = 1, c.zn1 = "");
        0 == c.c && (c.c = "");
        a.addstr(c.zn1 + f);
        a.addstr(" = " + c.zn1 + c.c);
        a.addfr(c.n, c.d);
        dd = nod(c.n, c.d);
        c.n /= dd;
        c.d /= dd;
        1 != dd && (a.addstr(" = " + c.zn1 + c.c), a.addfr(c.n + mn + dd, c.d + mn + dd), a.addstr(" = " + c.zn1 + c.c), a.addfr(c.n, c.d));
        printfr(a, c);
      }
    }
  }
}
function mult() {
  var a, c, f, d;
  a = document.getElementById("n1").value;
  if (isNaN(a) || "" == a) {
    document.getElementById("res").innerHTML = "";
  } else {
    if (1 == a) {
      alert(a1);
    } else {
      var e = "", g = "", h = a;
      d = 2;
      for (f = 0;1 < a;) {
        c = a / d, c == Math.round(c) ? (g += "<tr><td align=right>" + a + "&nbsp;&nbsp;</td><td>&nbsp;&nbsp;" + d + "</td></tr>", e = "" == e ? e + d : e + (" " + mn + " " + d), a /= d, f++) : d++;
      }
      e = 1 == f ? e + a2 : '<table align=center style="border-collapse: collapse;"><COL style="BORDER-RIGHT: white 1px solid;"><COL><tbody>' + (g + "<tr><td align=right>1&nbsp;&nbsp;</td><td></td></tr>") + "</tbody></table><br>" + h + " = " + e;
      setFocus(e);
    }
  }
}
function nod_nok() {
  var a, c, f;
  a = document.getElementById("n1").value;
  c = document.getElementById("n2").value;
  isNaN(a) || isNaN(c) ? (document.getElementById("d1").innerHTML = "", document.getElementById("d2").innerHTML = "") : "" == a || "" == c ? (document.getElementById("d1").innerHTML = "", document.getElementById("d2").innerHTML = "") : (f = nod(a, c), a = nok(a, c), document.getElementById("d1").innerHTML = a, document.getElementById("d2").innerHTML = f);
}
function chfr(a) {
  var c = new TfrRes;
  "1" == a ? (c.addstr('<INPUT type="number" id=c1 class=frc tabIndex=1 maxLength=6>'), c.addstr("<SELECT tabIndex=2 id=Op class=browser-default><OPTION value=+ selected class=my-option>+</OPTION><OPTION value=- class=my-option>-</OPTION><OPTION value=" + mn + " class=my-option>*</OPTION><OPTION value=: class=my-option>:</OPTION></SELECT>"), c.addstr('<INPUT  type="number" id=c2 class=frc tabIndex=3 maxLength=6>'), c.addfr('<INPUT type="number" id=n2 class=frc tabIndex=4 maxLength=6>', '<INPUT type="number" id=d2 class=frc tabIndex=5 maxLength=6>'), c.addstr("<div id=Ac></div>"), c.addstr("<div align=center id=An></div> <div align=center id=Ad></div>"), jj1 = 1) : (c.addstr('<INPUT type="number" id=c2 class=frc tabIndex=1 maxLength=6>'), c.addfr('<INPUT type="number" id=n2 class=frc tabIndex=2 maxLength=6>', '<INPUT  type="number" id=d2 class=frc tabIndex=3 maxLength=6>'), c.addstr('<SELECT tabIndex=4 id=Op class=browser-default><OPTION value="+" selected class=my-option>+</OPTION><OPTION value="-" class=my-option>-</OPTION><OPTION value=' + mn + " class=my-option>*</OPTION><OPTION value=: class=my-option>:</OPTION></SELECT>" ) , 
  c.addstr('<INPUT type="number" id=c1 class=frc tabIndex=5 maxLength=6>'), c.addstr("<div id=Ac></div>"), c.addstr("<div align=center id=An></div><div align=center id=Ad></div>"), jj1 = 2);
  document.getElementById("frtabl").innerHTML = c.show();
}
;