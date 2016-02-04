
function vcube() {
  document.getElementById("res").innerHTML = "";
  var a = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  if (0 != a.er) {
    setFocus("<font class=n>" + j1 + "</font>");
  } else {
    if (-1 == a.znak) {
      setFocus("<font class=n>" + j2 + "</font>");
    } else {
      var c = new TfrRes, b = oms3(a, a);
      b.ch *= 6;
      b.simplify();
      c.add(jf1 + ' = 6 <div class="formula">a</div><sup>2</sup> =&nbsp;');
      c.add("6" + mn + a.showzn() + "<sup>2</sup> =&nbsp;");
      c.add(b.showtab());
      setFocus(c.show());
    }
  }
}
function vparallelepiped1() {
  document.getElementById("res").innerHTML = "";
  var a = new tfraction, b = new tfraction, c = new tfraction, d = new tfraction;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  c.newf(document.getElementById("n3").value);
  if (0 != a.er || 0 != b.er || 0 != c.er) {
    setFocus("<font class=n>" + j1 + "</font>");
  } else {
    if (-1 == a.znak || -1 == b.znak || -1 == c.znak) {
      setFocus("<font class=n>" + j2 + "</font>");
    } else {
      var e = new TfrRes, d = oms1(oms1(oms3(a, b), oms3(a, c)), oms3(c, b));
      d.ch *= 2;
      d.simplify();
      e.add(jf1 + ' = 2(<div class="formula">a' + mn + 'b</div> + <div class="formula">a' + mn + 'h</div> + <div class="formula">b' + mn + "h</div>) =&nbsp;");
      e.add("2(" + a.showzn() + mn + b.showzn() + " + " + a.showzn() + mn + c.showzn() + " + " + b.showzn() + mn + c.showzn() + ") =&nbsp;");
      e.add(d.showtab());
      setFocus(e.show());
    }
  }
}
function vsphere() {
  document.getElementById("res").innerHTML = "";
  var a = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  if (0 != a.er) {
    setFocus("<font class=n>" + j1 + "</font>");
  } else {
    if (-1 == a.znak) {
      setFocus("<font class=n>" + j2 + "</font>");
    } else {
      var c = new TfrRes, b = oms3(a, a);
      b.ch *= 4;
      b.simplify();
      c.add(jf1 + ' = 4 <div class="formula">' + j3 + " R</div><sup>2</sup> =&nbsp;");
      c.add('4 <div class="formula">' + j3 + "</div> " + a.showzn() + "<sup>2</sup> =&nbsp;");
      c.add(b.showtab());
      c.add("<div class=formula>" + j3 + "</div>");
      setFocus(c.show());
    }
  }
}
function vcone() {
  document.getElementById("res").innerHTML = "";
  var a = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  if (0 != a.er || 0 != b.er) {
    setFocus("<font class=n>" + j1 + "</font>");
  } else {
    if (-1 == a.znak || -1 == b.znak) {
      setFocus("<font class=n>" + j2 + "</font>");
    } else {
      var c = new tfraction, d = new TfrRes, c = oms3(a, b);
      d.add(jf1 + " = <div class=formula>" + j3 + " R l</div> = <div class=formula>" + j3 + "</div>" + mn);
      d.add(a.showtab());
      d.add(mn);
      d.add(b.showtab());
      d.add("&nbsp;=&nbsp;");
      d.add(c.showtab());
      d.add("<div class=formula>" + j3 + "</div>");
      var e = j5 + "<br><br>" + d.show(), c = oms1(oms3(a, a), oms3(a, b));
      d.clear();
      d.add(jf1 + " = <div class=formula>" + j3 + " R </div>(<div class=formula>R</div> + <div class=formula>l</div>) = <div class=formula>" + j3 + "</div>" + a.show() + "(" + a.show() + " + " + b.show() + ") =&nbsp;");
      d.add(c.showtab());
      d.add("<div class=formula>" + j3 + "</div>");
      e += "<br><br>" + j6 + "<br><br>" + d.show();
      setFocus(e);
    }
  }
}
function vcylinder() {
  document.getElementById("res").innerHTML = "";
  var a = new tfraction, b = new tfraction;
  a.newf(document.getElementById("n1").value);
  b.newf(document.getElementById("n2").value);
  if (0 != a.er || 0 != b.er) {
    setFocus("<font class=n>" + j1 + "</font>");
  } else {
    if (-1 == a.znak || -1 == b.znak) {
      setFocus("<font class=n>" + j2 + "</font>");
    } else {
      var c = new tfraction, d = new TfrRes, c = oms3(a, b);
      c.ch *= 2;
      c.simplify();
      d.add(jf1 + " = 2 <div class=formula>" + j3 + " R h</div> = 2<div class=formula>" + j3 + "</div>" + mn);
      d.add(a.showtab());
      d.add(mn);
      d.add(b.showtab());
      d.add("&nbsp;=&nbsp;");
      d.add(c.showtab());
      d.add("<div class=formula>" + j3 + "</div>");
      var e = j5 + "<br><br>" + d.show(), c = oms1(oms3(a, a), oms3(a, b));
      c.ch *= 2;
      c.simplify();
      d.clear();
      d.add(jf1 + " = 2 <div class=formula>" + j3 + " R </div>(<div class=formula>R</div> + <div class=formula>h</div>) = 2<div class=formula>" + j3 + "</div>" + a.show() + "(" + a.show() + " + " + b.show() + ") =&nbsp;");
      d.add(c.showtab());
      d.add("<div class=formula>" + j3 + "</div>");
      e += "<br><br>" + j6 + "<br><br>" + d.show();
      setFocus(e);
    }
  }
}
;