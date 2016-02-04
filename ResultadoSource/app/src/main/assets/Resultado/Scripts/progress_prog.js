
function index_change(a) {
  var c = document.getElementById("i" + a).value;
  "" == document.getElementById("i" + a).value && (c = "i", 2 == a && (c = "j"));
  document.getElementById("ii" + a).innerHTML = c;
}
function chr1(a) {
  pf1 = a;
  1 == a ? (document.getElementById("st1").style.display = "none", document.getElementById("st2").style.display = "block", document.getElementById("st3").style.display = "block") : (document.getElementById("st1").style.display = "block", document.getElementById("st2").style.display = "none", document.getElementById("st3").style.display = "none");
}
function chrs1(a) {
  pf1 = a;
  switch(a) {
    case 1:
      document.getElementById("st1").style.display = "block";
      document.getElementById("st2").style.display = "block";
      document.getElementById("st4").style.display = "none";
      document.getElementById("st5").style.display = "none";
      document.getElementById("st6").style.display = "none";
      document.getElementById("st7").style.display = "none";
      document.getElementById("st8").style.display = "none";
      break;
    case 2:
      document.getElementById("st1").style.display = "block";
      document.getElementById("st2").style.display = "none";
      document.getElementById("st4").style.display = "none";
      document.getElementById("st5").style.display = "none";
      document.getElementById("st6").style.display = "none";
      document.getElementById("st7").style.display = "block";
      document.getElementById("st8").style.display = "block";
      break;
    case 3:
      document.getElementById("st1").style.display = "none";
      document.getElementById("st2").style.display = "none";
      document.getElementById("st4").style.display = "block";
      document.getElementById("st5").style.display = "block";
      document.getElementById("st6").style.display = "none";
      document.getElementById("st7").style.display = "block";
      document.getElementById("st8").style.display = "block";
      break;
    case 4:
      document.getElementById("st1").style.display = "none", document.getElementById("st2").style.display = "none", document.getElementById("st4").style.display = "block", document.getElementById("st5").style.display = "block", document.getElementById("st6").style.display = "block", document.getElementById("st7").style.display = "none", document.getElementById("st8").style.display = "none";
  }
}
function ar_p() {
  var a = "", c = new TfrRes, f = new tfraction;
  f.newf(document.getElementById("nn").value);
  var d = new tfraction;
  d.newf(document.getElementById("i1").value);
  var b = new tfraction, e = new tfraction;
  e.newf(document.getElementById("ai1").value);
  var g = new tfraction;
  if (1 == pf1) {
    b.newf(document.getElementById("dd").value);
    if (0 != f.er || 0 != b.er || 0 != d.er || 0 != e.er) {
      setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (1 != f.zn || 1 != d.zn) {
      setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
  } else {
    g = new tfraction;
    g.newf(document.getElementById("i2").value);
    var k = new tfraction;
    k.newf(document.getElementById("ai2").value);
    if (0 != f.er || 0 != g.er || 0 != d.er || 0 != e.er || 0 != k.er) {
      setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (1 != f.zn || 1 != d.zn || 1 != g.zn) {
      setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    d.ch == g.ch && (setFocus("<font class=n>" + j3 + "</font>"), exit);
    var b = oms4(oms2(e, k), oms2(d, g)), a = "<div class=formula>a<sub>i</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>i</div> - 1)<div class=formula>d</div><br><div class=formula>a<sub>j</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>j</div> - 1)<div class=formula>d</div><br>" + ("<br>" + j4 + ":<br><br>"), a = a + "<div class=formula>a<sub>i</sub> - a<sub>j</sub></div> = (<div class=formula>i -j</div>)<div class=formula>d</div><br>", 
    h = new TfrRes;
    h.addstr("<div class=formula>d</div> =&nbsp;");
    h.addfr("<div class=formula>a<sub>i</sub> - a<sub>j</sub></div>", "<div class=formula>i - j</div>");
    a += h.show(" ") + "<br>";
    h.clear();
    h.addstr("<div class=formula>d</div> =&nbsp;");
    h.addfr(e.show() + " - " + k.show(), d.show() + " - " + g.show());
    h.addstr("&nbsp;=&nbsp;");
    h.addstr(b.showtab());
    a += h.show(" ") + "<br>";
  }
  g = oms1(oms3(oms2(f, d), b), e);
  a += "<div class=formula>a<sub>i</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>i</div> - 1)<div class=formula>d</div><br>";
  a += "<div class=formula>a<sub>n</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>n</div> - 1)<div class=formula>d</div><br>";
  a += "<br>" + j4 + ":<br><br>";
  a += "<div class=formula>a<sub>n</sub></div> = <div class=formula>a<sub>i</sub></div> + (<div class=formula>n - i</div>)<div class=formula>d</div><br>";
  c.add("<div class=formula>a</div><sub>" + f.show() + "</sub>");
  c.add("&nbsp;=&nbsp;");
  c.add(e.showtab());
  c.add(" + (");
  c.add(f.show());
  c.add(" - ");
  c.add(d.show());
  c.add(")");
  c.add(b.showtab());
  c.add("&nbsp;=&nbsp;");
  c.add(g.showtab());
  a += c.show(" ");
  setFocus(a);
}
function dop1(a, c, f) {
  var d = new tfraction, b = new TfrRes, e;
  e = "" + (j4 + "<br>");
  b.clear();
  b.addstr("<div class=formula>S<sub>n</sub></div> =&nbsp;");
  b.addfr("2<div class=formula>a</div><sub>1</sub> + (<div class=formula>n</div> -1)<div class=formula>d</div>", "2");
  b.addstr("&nbsp;" + mn + "&nbsp;");
  b.addstr("<div class=formula>n</div>");
  e += b.show() + j5;
  b.clear();
  b.addstr("<div class=formula>S</div><sub>" + c.show() + "</sub> =&nbsp;");
  b.addfr("2" + mn + a.showzn() + " + (" + c.showzn() + " - 1)" + f.showzn(), "2");
  b.addstr("&nbsp;" + mn + "&nbsp;");
  b.addstr(c.showzn());
  b.addstr("&nbsp;=&nbsp;");
  a.ch *= 2;
  d = oms3(oms2(oms1(a, oms3(c, f)), f), c);
  d.zn *= 2;
  d.simplify();
  b.addstr(d.showtab());
  return e += b.show();
}
function dop2(a, c, f, d) {
  var b = new TfrRes, e = new tfraction, g;
  g = "<div class=formula>a<sub>i</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>i</div> - 1)<div class=formula>d</div><br><div class=formula>a</div><sub>1</sub> = <div class=formula>a<sub>i</sub></div> - (<div class=formula>i</div> - 1)<div class=formula>d</div>";
  b.add("<div class=formula>a</div><sub>1</sub> =&nbsp;");
  b.add(a.showtab());
  b.add("&nbsp;- (");
  b.add(c.show());
  b.add("&nbsp;- 1)");
  b.add(d.showtab());
  b.add("&nbsp;=&nbsp;");
  e = oms1(oms2(a, oms3(c, d)), d);
  b.add(e.showtab());
  g += b.show(" ");
  return g += dop1(e, f, d);
}
function ar_p_summ() {
  var a = "", c = new tfraction, f = new tfraction, d = new tfraction, b = new TfrRes;
  f.newf(document.getElementById("nn").value);
  switch(pf1) {
    case 1:
      var e = new tfraction;
      e.newf(document.getElementById("ai3").value);
      c.newf(document.getElementById("ai4").value);
      if (0 != f.er || 0 != e.er || 0 != c.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
      }
      1 != f.zn && (setFocus("<font class=n>" + j2 + "</font>"), exit);
      d = oms3(oms1(c, e), f);
      d.zn *= 2;
      d.simplify();
      a += j4 + "<br>";
      b.clear();
      b.addstr("<div class=formula>S<sub>n</sub></div> =&nbsp;");
      b.addfr("<div class=formula>a</div><sub>1</sub> + <div class=formula>a<sub>n</sub></div>", "2");
      b.addstr("&nbsp;" + mn + "&nbsp;");
      b.addstr("<div class=formula>n</div>");
      a += b.show() + j5;
      b.clear();
      b.addstr("<div class=formula>S</div><sub>" + f.show() + "</sub> =&nbsp;");
      b.addfr(c.show() + " + " + e.show(), "2");
      b.addstr("&nbsp;" + mn + "&nbsp;");
      b.addstr(f.show());
      b.addstr("&nbsp;=&nbsp;");
      b.addstr(d.showtab());
      a += b.show();
      break;
    case 2:
      c.newf(document.getElementById("ai4").value);
      d = new tfraction;
      d.newf(document.getElementById("dd").value);
      if (0 != f.er || 0 != d.er || 0 != c.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
      }
      1 != f.zn && (setFocus("<font class=n>" + j2 + "</font>"), exit);
      a += dop1(c, f, d);
      break;
    case 3:
      c = new tfraction;
      c.newf(document.getElementById("i1").value);
      e = new tfraction;
      e.newf(document.getElementById("ai1").value);
      d = new tfraction;
      d.newf(document.getElementById("dd").value);
      if (0 != f.er || 0 != d.er || 0 != e.er || 0 != c.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
      }
      if (1 != f.zn || 1 != c.zn) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
      }
      a += dop2(e, c, f, d);
      break;
    case 4:
      new tfraction;
      c = new tfraction;
      c.newf(document.getElementById("i1").value);
      e = new tfraction;
      e.newf(document.getElementById("ai1").value);
      var g = new tfraction;
      g.newf(document.getElementById("i2").value);
      var k = new tfraction;
      k.newf(document.getElementById("ai2").value);
      new tfraction;
      if (0 != f.er || 0 != k.er || 0 != e.er || 0 != c.er || 0 != g.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
      }
      if (1 != f.zn || 1 != c.zn || 1 != g.zn) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
      }
      c.ch == g.ch && (setFocus("<font class=n>" + j3 + "</font>"), exit);
      d = oms4(oms2(e, k), oms2(c, g));
      a += "<div class=formula>a<sub>i</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>i</div> - 1)<div class=formula>d</div><br><div class=formula>a<sub>j</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>j</div> - 1)<div class=formula>d</div><br>";
      a += "<div class=formula>a<sub>i</sub> - a<sub>j</sub></div> = (<div class=formula>i -j</div>)<div class=formula>d</div><br>";
      b.addstr("<div class=formula>d</div> =&nbsp;");
      b.addfr("<div class=formula>a<sub>i</sub> - a<sub>j</sub></div>", "<div class=formula>i - j</div>");
      a += b.show(" ") + "<br>";
      b.clear();
      b.addstr("<div class=formula>d</div> =&nbsp;");
      b.addfr(e.show() + " - " + k.show(), c.show() + " - " + g.show());
      b.addstr("&nbsp;=&nbsp;");
      b.addstr(d.showtab());
      a += b.show("center") + "<br>";
      a += dop2(e, c, f, d);
  }
  setFocus(a);
}

function ge_p() {
  var a = "", c = new TfrRes, f = new tfraction;
  f.newf(document.getElementById("nn").value);
  var d = new tfraction;
  d.newf(document.getElementById("i1").value);
  var b = new tfraction, e = new tfraction;
  e.newf(document.getElementById("ai1").value);
  var g = new tfraction;
  if (1 == pf1) {
    b.newf(document.getElementById("dd").value);
    if (0 != f.er || 0 != b.er || 0 != d.er || 0 != e.er) {
      setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (1 != f.zn || 1 != d.zn) {
      setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
  } else {
    g = new tfraction;
    g.newf(document.getElementById("i2").value);
    var k = new tfraction;
    k.newf(document.getElementById("ai2").value);
    if (0 != f.er || 0 != g.er || 0 != d.er || 0 != e.er || 0 != k.er) {
      setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (1 != f.zn || 1 != d.zn || 1 != g.zn) {
      setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    d.ch == g.ch && (setFocus("<font class=n>" + j3 + "</font>"), exit);
    var b = oms4(oms2(e, k), oms2(d, g)), a = "<div class=formula>a<sub>i</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>i</div> - 1)<div class=formula>d</div><br><div class=formula>a<sub>j</sub></div> = <div class=formula>a</div><sub>1</sub> + (<div class=formula>j</div> - 1)<div class=formula>d</div><br>" + ("<br>" + j4 + ":<br><br>"), a = a + "<div class=formula>a<sub>i</sub> - a<sub>j</sub></div> = (<div class=formula>i -j</div>)<div class=formula>d</div><br>", 
    h = new TfrRes;
    h.addstr("<div class=formula>d</div> =&nbsp;");
    h.addfr("<div class=formula>a<sub>i</sub> - a<sub>j</sub></div>", "<div class=formula>i - j</div>");
    a += h.show("left") + "<br><br><br><br>";
    h.clear();
    h.addstr("<div class=formula>d</div> =&nbsp;");
    h.addfr(e.show() + " - " + k.show(), d.show() + " - " + g.show());
    h.addstr("&nbsp;=&nbsp;");
    h.addstr(b.showtab());
    a += h.show("left") + "<br><br><br><br>";
  }
  g = oms1(oms3(oms2(f, d), b), e);
  a += "<div class=formula>b<sub>i</sub></div> = <div class=formula>b</div><sub>1</sub> <div class=formula>q</div><sup><div class=formula>i</div> - 1</sup><br>";
  a += "<div class=formula>b<sub>n</sub></div> = <div class=formula>b</div><sub>1</sub> <div class=formula>q</div><sup><div class=formula>n</div> - 1</sup><br>";
  a += "<br>" + j4 + ":<br><br>";
  a += "<div class=formula>b<sub>n</sub></div> = <div class=formula>b<sub>i</sub></div> + <div class=formula>q</div><sup><div class=formula>n - i</div></sup><br>";
  c.add("<div class=formula>b</div><sub>" + f.show() + "</sub>");
  c.add("&nbsp;=&nbsp;");
  c.add(e.showtab());
  c.add("&nbsp;");
  c.add(b.show());
  c.add(f.show());
  c.add(" - ");
  c.add(d.show());
  c.add(")");
  c.add("&nbsp;=&nbsp;");
  c.add(g.showtab());
  a += c.show();
  setFocus(a);
}
;