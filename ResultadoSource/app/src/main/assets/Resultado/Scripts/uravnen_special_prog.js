
function solve_qe() {
  var b, e, l, h, a = new TfrRes, f = new TfrRes, g = new TfrRes;
  b = document.getElementById("ae").value;
  e = document.getElementById("be").value;
  l = document.getElementById("ce").value;
  "-" == b && (b = -1);
  "-" == e && (e = -1);
  "-" == l && (l = -1);
  var d = new tfraction, c = new tfraction, m = new tfraction, k = new tfraction;
  d.newf(b);
  c.newf(e);
  m.newf(l);
  if (0 != d.er || 0 != c.er || 0 != m.er) {
    setFocus("<font class=n>" + j3 + "</font>"), exit;
  }
  0 == d.ch && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  h = eq2(d, c, m, "x", 1) + "<br>";
  k = oms3(d, m);
  k.ch *= 4;
  k.simplify();
  k = oms2(oms3(c, c), k);
  a.clear();
  a.add(d0 + " =&nbsp;" + c.showzn() + "<sup>2</sup>&nbsp;-&nbsp;4" + j5 + d.showzn() + j5 + m.showzn());
  a.add("&nbsp;=&nbsp;");
  a.add(k.showtab());
  h += a.show() + "<br>";
  if (0 > k.znak) {
    h += j6;
  } else {
    if (0 == k.ch) {
      f.addstr("<div class=formula>x</div> =&nbsp;"), c.znak = -c.znak, f.addfr(c.show(), "2" + j5 + d.showzn()), d.ch *= 2, d.simplify(), c = oms4(c, d), f.addstr("&nbsp;=&nbsp;"), f.addstr(c.showtab()), h += f.show() + "<br>";
    } else {
      c.znak = -c.znak;
      f.clear();
      f.addstr("<div class=formula>x</div><sub>1</sub> =&nbsp;");
      f.addfr(c.show() + " - \u221a<div class=sqrt>" + k.show() + "</div>", "2" + j5 + d.showzn());
      g.clear();
      g.addstr("<div class=formula>x</div><sub>2</sub> =&nbsp;");
      g.addfr(c.show() + " + \u221a<div class=sqrt>" + k.show() + "</div>", "2" + j5 + d.showzn());
      d.ch *= 2;
      d.simplify();
      b = mysqrt(k.ch);
      e = mysqrt(k.zn);
      if (1 == k.ch && 1 == k.zn || b == k.ch && e == k.zn) {
        k.ch = Math.sqrt(k.ch), k.zn = Math.sqrt(k.zn), m = oms4(oms1(c, k), d), d = oms4(oms2(c, k), d), f.addstr("&nbsp;=&nbsp;"), f.addstr(d.showtab()), g.addstr("&nbsp;=&nbsp;"), g.addstr(m.showtab());
      } else {
        if (1 != b || 1 != e) {
          l = (c.znak * c.ch / c.zn - Math.sqrt(k.ch / k.zn)) * d.zn * d.znak / d.ch;
          a = (c.znak * c.ch / c.zn + Math.sqrt(k.ch / k.zn)) * d.zn * d.znak / d.ch;
          m = k.ch * k.zn / (b * e);
          k.ch = Math.sqrt(b);
          k.zn = Math.sqrt(k.zn * k.zn / e);
          k = oms4(k, d);
          c = oms4(c, d);
          f.addstr("&nbsp;=&nbsp;");
          g.addstr("&nbsp;=&nbsp;");
          0 != c.ch ? (f.addstr(c.showtab()), g.addstr(c.showtab()), 0 > k.znak ? (f.addstr("&nbsp;+&nbsp;"), g.addstr("&nbsp;-&nbsp;")) : (f.addstr("&nbsp;-&nbsp;"), g.addstr("&nbsp;+&nbsp;"))) : 0 > k.znak ? g.addstr("&nbsp;-") : f.addstr("&nbsp;-");
          k.znak = 1;
          if (1 != k.ch || 1 != k.zn) {
            f.addstr(k.showtab()), g.addstr(k.showtab());
          }
          f.addstr("\u221a<div class=sqrt>" + m + "</div>");
          g.addstr("\u221a<div class=sqrt>" + m + "</div>");
          f.addstr(j10 + l.toPrecision(5));
          g.addstr(j10 + a.toPrecision(5));
        } else {
          l = (c.znak * c.ch / c.zn - Math.sqrt(k.ch / k.zn)) * d.zn * d.znak / d.ch, b = (c.znak * c.ch / c.zn + Math.sqrt(k.ch / k.zn)) * d.zn * d.znak / d.ch, f.addstr(j10 + l.toPrecision(5)), g.addstr(j10 + b.toPrecision(5));
        }
      }
      h += f.show() + "<br>";
      h += g.show() + "<br>";
    }
  }
  setFocus(h);
}
function eq2(b, e, l, h, a) {
  var f = new TfrRes;
  0 > b.znak && 1 == b.ch && 1 == b.zn ? f.add("-") : 1 == b.ch && 1 == b.zn || f.add(b.showtab());
  f.add("<div class=formula>" + h + "</div><sup>" + 2 * a + "</sup>");
  if (0 != e.ch) {
    0 > e.znak ? f.add("&nbsp;-&nbsp;") : f.add("&nbsp;+&nbsp;");
    if (1 != e.ch || 1 != e.zn) {
      b = e.znak, e.znak = 1, f.add(e.showtab()), e.znak = b;
    }
    1 == a && (a = "");
    f.add("<div class=formula>" + h + "</div><sup>" + a + "</sup>");
  }
  0 != l.ch && (0 > l.znak ? f.add("&nbsp;-&nbsp;") : f.add("&nbsp;+&nbsp;"), b = l.znak, l.znak = 1, f.add(l.showtab()), l.znak = b);
  f.add("&nbsp;=&nbsp;0");
  return f.show();
}
function rot2(b, e) {
  var l = new TfrRes;
  l.clear();
  l.add("<div class=formula>x</div><sub>" + e + "</sub>&nbsp=&nbsp\u221a<div class=sqrt>" + b.show() + "</div>");
  l.add(sqrtanswer(b));
  var h = l.show();
  l.clear();
  l.add("<div class=formula>x</div><sub>" + (1 * e + 1) + "</sub>&nbsp=&nbsp-\u221a<div class=sqrt>" + b.show() + "</div>");
  l.add(sqrtanswer(b, 1));
  return h += l.show();
}
function solve_biqe() {
  var b, e, l, h = new TfrRes, a = new TfrRes, f = new TfrRes, g = new tfraction, d = new tfraction;
  e = new tfraction;
  var c = new tfraction;
  ae = "-" == document.getElementById("ae").value ? -1 : document.getElementById("ae").value;
  g.newf(ae);
  ae = "-" == document.getElementById("be").value ? -1 : document.getElementById("be").value;
  d.newf(ae);
  ae = "" == document.getElementById("ce").value ? 0 : document.getElementById("ce").value;
  e.newf(ae);
  if (0 != g.er || 0 != d.er || 0 != e.er) {
    setFocus("<font class=n>" + j3 + "</font>"), exit;
  }
  0 == g.ch && (setFocus("<font class=n>" + j2 + "</font>"), exit);
  c = oms3(g, e);
  c.ch *= 4;
  c.simplify();
  c = oms2(oms3(d, d), c);
  b = eq2(g, d, e, "x", 2) + "<br>" + j7 + "<br><br>";
  h.clear();
  b += eq2(g, d, e, "y", 1) + "<br>" + j8 + "<br><br>";
  b += d0 + " = " + d.showzn() + "<sup>2</sup> - 4" + j5 + g.showzn() + j5 + e.showzn() + " = " + c.show() + "<br><br>";
  0 > c.znak ? b += j6 : 0 == c.ch ? (a.addstr("<div class=formula>y</div> =&nbsp;"), d.znak = -d.znak, a.addfr(d.show(), "2" + j5 + g.showzn()), g.ch *= 2, g.simplify(), d = oms4(d, g), a.addstr("&nbsp;=&nbsp;"), a.addstr(d.showtab()), b += a.show() + "<br>", 0 == d.ch ? b += "<div class=formula>x</div><sup>2</sup> = 0<br><br>" + j10 + "<div class=formula>x</div> = 0." : 0 > d.znak ? b += j9 : (h.clear(), h.add("<div class=formula>x</div><sup>2</sup> =&nbsp"), h.add(d.showtab()), b += h.show() + 
  "<br>", b += rot2(d, 1))) : (d.znak = -d.znak, a.clear(), a.addstr("<div class=formula>y</div><sub>1</sub> =&nbsp;"), a.addfr(d.show() + " - \u221a<div class=sqrt>" + c.show() + "</div>", "2" + j5 + g.showzn()), f.addstr("<div class=formula>y</div><sub>2</sub> =&nbsp;"), f.addfr(d.show() + " + \u221a<div class=sqrt>" + c.show() + "</div>", "2" + j5 + g.showzn()), e = Math.sqrt(c.ch), l = Math.sqrt(c.zn), e == Math.round(e) && l == Math.round(l) ? (a.addstr("&nbsp;=&nbsp;"), f.addstr("&nbsp;=&nbsp;"), 
  c.ch = e, c.zn = l, e = oms2(d, c), g.ch *= 2, g.simplify(), e = oms4(e, g), c = oms1(d, c), c = oms4(c, g), a.addstr(e.showtab()), f.addstr(c.showtab()), b += a.show() + f.show() + "<br>", h.clear(), h.add("<div class=formula>x</div><sup>2</sup> =&nbsp"), h.add(e.showtab()), b += h.show(), h.clear(), h.add("<div class=formula>x</div><sup>2</sup> =&nbsp"), h.add(c.showtab()), b += h.show() + "<br>", 0 == e.ch ? (b += "<div class=formula>x</div><sub>1</sub> = 0<br>", 0 < c.znak && (b += rot2(c, 
  2))) : 0 == c.ch ? (b += "<div class=formula>x</div><sub>1</sub> = 0<br>", 0 < e.znak && (b += rot2(e, 2))) : 0 < e.znak && 0 < c.znak ? (b += rot2(e, 1), b += rot2(c, 3)) : b = 0 < c.znak ? b + rot2(c, 1) : 0 < e.znak ? b + rot2(e, 1) : b + j12) : 0 == d.ch ? (a.addstr("&nbsp;=&nbsp;"), f.addstr("&nbsp;=&nbsp;"), c.ch = c.ch * g.zn * g.zn, c.zn = 4 * c.zn * g.ch * g.ch, c.simplify(), 0 > g.znak ? f.addstr("-") : a.addstr("-"), e = sqrtfrtab(c), "" == e && (e = j4 + "<div class=sqrt>" + c.show() + 
  "</div>"), a.addstr(e), f.addstr(e), b += a.show() + f.show() + "<br>", h.clear(), h.add("<div class=formula>x</div><sup>2</sup> =&nbsp"), h.add(e), b += h.show(), h.clear(), h.add("<div class=formula>x</div><sup>2</sup> =&nbsp-"), h.add(e), b += h.show() + "<br>", h.clear(), h.add("<div class=formula>x</div><sub>1</sub>"), h.add("&nbsp=&nbsp"), h.add("("), h.add(e), h.add(")<sup>1/2</sup>"), h.add(j11 + Math.sqrt(Math.sqrt(c.ch / c.zn)).toPrecision(5)), b += h.show(), h.clear(), h.add("<div class=formula>x</div><sub>2</sub>"), 
  h.add("&nbsp=&nbsp-"), h.add("("), h.add(e), h.add(")<sup>1/2</sup>"), h.add(j11 + "-" + Math.sqrt(Math.sqrt(c.ch / c.zn)).toPrecision(5)), b += h.show()) : (e = g.znak * (d.znak * d.ch / d.zn - Math.sqrt(c.ch / c.zn)) * g.zn / (2 * g.ch), l = g.znak * (d.znak * d.ch / d.zn + Math.sqrt(c.ch / c.zn)) * g.zn / (2 * g.ch), a.addstr(j11 + e.toPrecision(5)), f.addstr(j11 + l.toPrecision(5)), b += a.show() + f.show() + "<br>", g.ch *= 2, g.simplify(), a.clear(), a.addstr("<div class=formula>x</div><sup>2</sup> =&nbsp;"), 
  a.addfr(d.show() + " - \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), f.clear(), f.addstr("<div class=formula>x</div><sup>2</sup> =&nbsp;"), f.addfr(d.show() + " + \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), b += a.show() + f.show() + "<br>", 0 < e && 0 < l ? (a.clear(), a.addstr("<div class=formula>x</div><sub>1</sub> =&nbsp;"), a.addstr("("), a.addfr(d.show() + " - \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), a.addstr(")<sup>1/2</sup>"), a.addstr(j11 + 
  Math.sqrt(e).toPrecision(5)), b += a.show(), a.clear(), a.addstr("<div class=formula>x</div><sub>2</sub> =&nbsp;"), a.addstr("-("), a.addfr(d.show() + " - \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), a.addstr(")<sup>1/2</sup>"), a.addstr(j11 + "-" + Math.sqrt(e).toPrecision(5)), b += a.show(), a.clear(), a.addstr("<div class=formula>x</div><sub>3</sub> =&nbsp;"), a.addstr("("), a.addfr(d.show() + " + \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), a.addstr(")<sup>1/2</sup>"), 
  a.addstr(j11 + Math.sqrt(l).toPrecision(5)), b += a.show(), a.clear(), a.addstr("<div class=formula>x</div><sub>4</sub> =&nbsp;"), a.addstr("-("), a.addfr(d.show() + " + \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), a.addstr(")<sup>1/2</sup>"), a.addstr(j11 + "-" + Math.sqrt(l).toPrecision(5)), b += a.show()) : 0 < l ? (a.clear(), a.addstr("<div class=formula>x</div><sub>1</sub> =&nbsp;"), a.addstr("("), a.addfr(d.show() + " + \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), 
  a.addstr(")<sup>1/2</sup>"), a.addstr(j11 + Math.sqrt(l).toPrecision(5)), b += a.show(), a.clear(), a.addstr("<div class=formula>x</div><sub>2</sub> =&nbsp;"), a.addstr("-("), a.addfr(d.show() + " + \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), a.addstr(")<sup>1/2</sup>"), a.addstr(j11 + "-" + Math.sqrt(l).toPrecision(5)), b += a.show()) : 0 < e ? (a.clear(), a.addstr("<div class=formula>x</div><sub>1</sub> =&nbsp;"), a.addstr("("), a.addfr(d.show() + " - \u221a<div class=sqrt>" + 
  c.show() + "</div>", g.showzn()), a.addstr(")<sup>1/2</sup>"), a.addstr(j11 + Math.sqrt(e).toPrecision(5)), b += a.show(), a.clear(), a.addstr("<div class=formula>x</div><sub>2</sub> =&nbsp;"), a.addstr("-("), a.addfr(d.show() + " - \u221a<div class=sqrt>" + c.show() + "</div>", g.showzn()), a.addstr(")<sup>1/2</sup>"), a.addstr(j11 + "-" + Math.sqrt(e).toPrecision(5)), b += a.show()) : b += j12));
  setFocus(b);
}
function solve_q3e() {
  var b = new tfraction, e = new tfraction, l = new tfraction, h = new tfraction, a = new tfraction, f = new tfraction, f = new tfraction;
  new tfraction;
  var a = new tfraction, g = "";
  b.newf(document.getElementById("ae").value);
  e.newf(document.getElementById("be").value);
  l.newf(document.getElementById("ce").value);
  h.newf(document.getElementById("de").value);
  0 == b.er && 0 == e.er && 0 == l.er && 0 == h.er && (f = oms4(oms3(oms3(e, e), e), oms3(oms3(b, b), b)), f.ch *= 2, f.zn *= 27, f.simplify(), a = oms4(oms3(e, l), oms3(b, b)), a.zn *= 3, a.simplify(), f = oms2(f, a), f = oms1(f, oms4(h, b)), g += "<br>q = 2b^3/27a^3 - bc/3a^2 + d/a = " + f.show(), a = oms4(oms3(e, e), oms3(b, b)), a.zn *= 3, a.simplify(), a = oms2(oms4(l, b), a), g += "<br>p = - b^2/3a^2 + c/a = " + a.show(), a = oms3(oms3(a, a), a), a.zn *= 27, a.simplify, f = oms3(f, f), f.zn *= 
  4, f.simplify, a = oms1(a, f), g += "<br>Q = (p/3)^3 + (q/2)^2 = " + a.show(), setFocus(g));
}
;