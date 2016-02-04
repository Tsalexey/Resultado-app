

function setFocus1() {
}
function permutation() {
  var d, a, b;
  a = document.getElementById("c1").value;
  if (isNaN(a)) {
    b = "<font class=n>" + j2 + "</font>";
  } else {
    if (1 > a) {
      b = "<font class=n>" + j2 + "</font>";
    } else {
      for (d = b = 1;d <= a;d++) {
        b *= d;
      }
      b = "<div align=left>" + j1 + "</div><br><br>P<sub>" + a + "</sub> = " + a + "! = " + b;
    }
  }
  setFocus(b);
}
function kpermutation() {
  var d, a, b, e, f = new TfrRes;
  a = document.getElementById("c1").value;
  b = document.getElementById("c2").value;
  if (isNaN(a) || isNaN(b)) {
    e = "<font class=n>" + j2 + "</font>";
  } else {
    if (1 * a < 1 * b) {
      e = "<font class=n>" + j4 + "</font>";
    } else {
      if (1 > a || 1 > b) {
        e = "<font class=n>" + j5 + "</font>";
      } else {
        e = 1;
        for (d = a - b + 1;d <= a;d++) {
          e *= d;
        }
        d = j3;
        f.addstr(d.replace("{n}", a).replace("{k}", b));
        f.addstr("&nbsp;=&nbsp;");
        f.addfr(a + "!", "(" + a + " - " + b + ")!");
        f.addstr("&nbsp;=&nbsp;");
        f.addfr(a + "!", a - b + "!");
        f.addstr("&nbsp;=&nbsp;" + e);
        d = j1;
        e = "<div align=left>" + d.replace("{n}", a).replace("{k}", b) + "</div><br>" + f.show();
      }
    }
  }
  setFocus(e);
}
function combination() {
  var d, a, b, e, f, g = new TfrRes;
  a = document.getElementById("c1").value;
  b = document.getElementById("c2").value;
  e = a - b > 1 * b ? b : a - b;
  if (isNaN(a) || isNaN(b)) {
    f = "<font class=n>" + j2 + "</font>";
  } else {
    if (1 * a < 1 * b) {
      f = "<font class=n>" + j4 + "</font>";
    } else {
      if (1 > a || 1 > b) {
        f = "<font class=n>" + j5 + "</font>";
      } else {
        f = 1;
        for (d = a - e + 1;d <= a;d++) {
          f *= d;
        }
        for (d = 1;d <= e;d++) {
          f = Math.round(f / d);
        }
        d = j3;
        g.addstr(d.replace("{n}", a).replace("{k}", b));
        g.addstr("&nbsp;=&nbsp;");
        g.addfr(a + "!", "(" + a + " - " + b + ")! " + b + "!");
        g.addstr("&nbsp;=&nbsp;");
        g.addfr(a + "!", a - b + "! " + b + "!");
        g.addstr("&nbsp;=&nbsp;" + f);
        d = j1;
        f = "<div align=left>" + d.replace("{n}", a).replace("{k}", b) + "</div><br>" + g.show();
      }
    }
  }
  setFocus(f);
}
function mwidth(d) {
  var a, b, e;
  if (0 == d) {
    a = "";
  } else {
    a = j1 + "<table><tbody><tr><td><div class=formula style='color: white;'>x<sub>i</sub></div></td>";
    b = "<tr><td><div class=formula style='color: white;'>p<sub>i</sub></div></td>";
    for (e = 1;e <= d;e++) {
      a += '<td><INPUT type="number" id=x' + e + ' maxLength=6 class="validate data"></td>';
	  b += '<td><INPUT type="number" id=p' + e + ' maxLength=6 class="validate data"></td>';
    }
    a += "</tr>" + b + "</tr></tbody></table>";
  }
  document.getElementById("st").innerHTML = a;
}
function expected_value() {
  var d, a, b, e;
  x = [];
  p = [];
  c = new tfraction;
  c1 = new tfraction;
  d = document.getElementById("msize").value;
  if (1 > d || 12 < 1 * d) {
    b = j4;
  } else {
    d *= 1;
    e = b = 0;
    for (a = 1;a <= d;a++) {
      x[a] = new tfraction, p[a] = new tfraction, x[a].newf(document.getElementById("x" + a).value), p[a].newf(document.getElementById("p" + a).value), b += x[a].er + p[a].er, 0 > p[a].znak && e++, c = oms1(c, p[a]);
    }
    if (0 < b) {
      b = "<font class=n>" + j2 + "</font>";
    } else {
      if (0 < e) {
        b = "<font class=n>" + j3 + "</font>";
      } else {
        if (1 != c.ch || 1 != c.zn) {
          b = "<font class=n>" + j5 + "</font>";
        } else {
          e = new TfrRes;
          var f = new TfrRes;
          b = " <div class=formula>" + jf1 + "</div>[<div class=formula>X</div>] = <div class=formula>x</div><sub>1</sub><div class=formula>p</div><sub>1</sub>";
          e.addstr("=&nbsp;");
          e.addstr(x[1].showtabzn());
          e.addstr(mn);
          e.addstr(p[1].showtabzn());
          c = oms3(x[1], p[1]);
          f.addstr("=&nbsp;");
          f.addstr(c.showtab());
          for (a = 2;a <= d;a++) {
            b += " + <div class=formula>x</div><sub>" + a + "</sub><div class=formula>p</div><sub>" + a + "</sub>", e.addstr("&nbsp;+&nbsp;"), e.addstr(x[a].showtabzn()), e.addstr(mn), e.addstr(p[a].showtabzn()), c1 = oms3(x[a], p[a]), c = oms1(c, c1), 0 < c1.znak ? f.addstr("&nbsp;+&nbsp;") : f.addstr("&nbsp;-&nbsp;"), c1.znak = 1, f.addstr(c1.showtab());
          }
          e.addstr("&nbsp;=&nbsp;");
          f.addstr("&nbsp;=&nbsp;");
          f.addstr(c.showtab());
          b += " =<br><br>" + e.show() + "<br>" + f.show();
        }
      }
    }
  }
  setFocus(b);
}
function variance() {
     var _0x95e5x8, _0x95e5x4, _0x95e5xa, _0x95e5xf, _0x95e5x16, _0x95e5x11, _0x95e5x12, _0x95e5x17;
    x = new Array();
    p = new Array();
    c = new tfraction;
    c1 = new tfraction;
    c2 = new tfraction;
    c3 = new tfraction;
    _0x95e5x8 = document['getElementById']('msize')['value'];
    if ((_0x95e5x8 < 1) || (1 * _0x95e5x8 > 12)) {
        _0x95e5xa = j4;
    } else {
        _0x95e5x8 = _0x95e5x8 * 1;
        _0x95e5x11 = 0;
        _0x95e5x12 = 0;
        for (_0x95e5x4 = 1; _0x95e5x4 <= _0x95e5x8; _0x95e5x4++) {
            x[_0x95e5x4] = new tfraction;
            p[_0x95e5x4] = new tfraction;
            x[_0x95e5x4]['newf'](document['getElementById']('x' + _0x95e5x4)['value']);
            p[_0x95e5x4]['newf'](document['getElementById']('p' + _0x95e5x4)['value']);
            _0x95e5x11 += x[_0x95e5x4]['er'] + p[_0x95e5x4]['er'];
            if (p[_0x95e5x4]['znak'] < 0) {
                _0x95e5x12++;
            };
            c = oms1(c, p[_0x95e5x4]);
        };
        if (_0x95e5x11 > 0) {
            _0x95e5xa = '<font class=n>' + j2 + '</font>';
        } else {
            if (_0x95e5x12 > 0) {
                _0x95e5xa = '<font class=n>' + j3 + '</font>';
            } else {
                if ((c['ch'] != 1) || (c['zn'] != 1)) {
                    _0x95e5xa = '<font class=n>' + j5 + '</font>';
                } else {
                    var _0x95e5x13 = new TfrRes();
                    var _0x95e5x14 = new TfrRes();
                    var _0x95e5x18 = new TfrRes();
                    var _0x95e5x19 = new TfrRes();
                    _0x95e5xa = '<div class=formula>' + jf2 + '</div>[<div class=formula>X</div>] = <div class=formula>x</div><sub>1</sub><div class=formula>p</div><sub>1</sub>';
                    _0x95e5x13['addstr']('=&nbsp;');
                    _0x95e5x13['addstr'](x[1]['showtabzn']());
                    _0x95e5x13['addstr'](mn);
                    _0x95e5x13['addstr'](p[1]['showtabzn']());
                    c = oms3(x[1], p[1]);
                    _0x95e5x14['addstr']('=&nbsp;');
                    _0x95e5x14['addstr'](c['showtab']());
                    _0x95e5xf = '<div class=formula>' + jf2 + '</div>[<div class=formula>X</div><sup>2</sup>] = <div class=formula>x</div><sub>1</sub><sup>2</sup><div class=formula>p</div><sub>1</sub>';
                    _0x95e5x16 = '=&nbsp;(' + x[1]['show']() + ')<sup>2</sup>' + mn + p[1]['showzn']();
                    c2 = oms3(x[1], c);
                    _0x95e5x18['addstr']('=&nbsp;');
                    _0x95e5x18['addstr'](c2['showtab']());
                    for (_0x95e5x4 = 2; _0x95e5x4 <= _0x95e5x8; _0x95e5x4++) {
                        _0x95e5xa += ' + <div class=formula>x</div><sub>' + _0x95e5x4 + '</sub><div class=formula>p</div><sub>' + _0x95e5x4 + '</sub>';
                        _0x95e5x13['addstr']('&nbsp;+&nbsp;');
                        _0x95e5x13['addstr'](x[_0x95e5x4]['showtabzn']());
                        _0x95e5x13['addstr'](mn);
                        _0x95e5x13['addstr'](p[_0x95e5x4]['showtabzn']());
                        c1 = oms3(x[_0x95e5x4], p[_0x95e5x4]);
                        c = oms1(c, c1);
                        if (c1['znak'] > 0) {
                            _0x95e5x14['addstr']('&nbsp;+&nbsp;');
                        } else {
                            _0x95e5x14['addstr']('&nbsp;-&nbsp;');
                        };
                        _0x95e5x17 = c1['znak'];
                        c1['znak'] = 1;
                        _0x95e5x14['addstr'](c1['showtab']());
                        _0x95e5xf += ' + <div class=formula>x</div><sub>' + _0x95e5x4 + '</sub><sup>2</sup><div class=formula>p</div><sub>' + _0x95e5x4 + '</sub>';
                        _0x95e5x16 += ' + (' + x[_0x95e5x4]['show']() + ')<sup>2</sup>' + mn + p[_0x95e5x4]['showzn']();
                        c1['znak'] = _0x95e5x17;
                        c3 = oms3(x[_0x95e5x4], c1);
                        c2 = oms1(c2, c3);
                        _0x95e5x18['addstr']('&nbsp;+&nbsp;');
                        _0x95e5x18['addstr'](c3['showtab']());
                    };
                    _0x95e5x13['addstr']('&nbsp;=&nbsp;');
                    _0x95e5x14['addstr']('&nbsp;=&nbsp;');
                    _0x95e5x14['addstr'](c['showtab']());
                    _0x95e5x18['addstr']('&nbsp;=&nbsp;');
                    _0x95e5x18['addstr'](c2['showtab']());
                    _0x95e5xa += ' =<br><br>' + _0x95e5x13['show']() + '<br>' + _0x95e5x14['show']() + '<br><br><br>' + _0x95e5xf + ' =<br><br>' + _0x95e5x16 + ' =<br><br>' + _0x95e5x18['show']();
                    _0x95e5xa += '<br><br><br><div class=formula>' + jf1 + '</div> = <div class=formula>' + jf2 + '[X</div><sup>2</sup><div class=formula>]</div> - (<div class=formula>' + jf2 + '[X]</div>)<sup>2</sup> = <br><br> = ' + c2['showzn']() + ' - (' + c['show']() + ')<sup>2</sup> =<br><br>';
                    c = oms3(c, c);
                    _0x95e5x19['addstr']('=&nbsp;');
                    _0x95e5x19['addstr'](c2['showtab']());
                    _0x95e5x19['addstr']('&nbsp;-&nbsp;');
                    _0x95e5x19['addstr'](c['showtab']());
                    c = oms2(c2, c);
                    _0x95e5x19['addstr']('&nbsp;=&nbsp;');
                    _0x95e5x19['addstr'](c['showtab']());
                    _0x95e5xa += _0x95e5x19['show']();
                };
            };
        };
    };
    setFocus(_0x95e5xa);
}