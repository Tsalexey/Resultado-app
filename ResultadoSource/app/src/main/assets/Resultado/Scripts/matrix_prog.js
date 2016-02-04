function mhigth(a) {
  mbh = mah = a;
  mresizeA();
  mresizeB();
}
function mhigthA(a) {
  mah = a;
  mresizeA();
}
function mhigthwidthA(a) {
  maw = mah = a;
  mresizeA();
}
function vhigthwidthA(a) {
  maw = mah = a;
  vresizeA();
}
function vhigthwidthA1(a) {
  maw = mah = a;
  vresizeA1();
}
function vhigthwidthA2(a) {
  maw = mah = a;
  vresizeA2();
}
function mhigthB(a) {
  mbh = a;
  mresizeB();
}
function mwidthA(a) {
  maw = a;
  mresizeA();
}
function mwidthB(a) {
  mbw = a;
  mresizeB();
}
function mwidth(a) {
  mbw = maw = a;
  mresizeA();
  mresizeB();
}
function mhigth1(a) {
  mah = a;
  mresizeA();
}
function mwidth1(a) {
  maw = a;
  mresizeA();
}
function mresizeA() {
  for (var a = "<table><TBODY>", b = 1;b <= mah;b++) {
    a += "<tr>";
    1 == b && (a += "<TD vAlign=center align=middle rowSpan=" + mah + "><b>A</b>&nbsp;=&nbsp;</TD><TD rowSpan=" + mah + '><img src="../../image/LS.GIF" width="5" height="' + 25 * mah + '"/>');
    for (var c = 1;c <= maw;c++) {
      a += '<TD><INPUT type="number" id=a_' + b + "_" + c + ' maxLength=8 class="validate data"></TD>';
    }
    1 == b && (a += "<TD rowSpan=" + mah + '><img src="../../image/RS.GIF" width="5" height="' + 25 * mah + '"/>');
    a += "</tr>";
  }
  a += "</TBODY></table>";
  document.getElementById("m1").innerHTML = a;
}
function vresizeA1() {
  vresizeA();
  for (var a = "", b = 1;b <= mah;b++) {
    a = b < mah ? a + ('<INPUT type="number" id=a_' + b + "_" + (1 * mah + 1) + ' maxLength=8 class="validate data">;') : a + ('<INPUT type="number" id=a_' + b + "_" + (1 * mah + 1) + ' maxLength=8 class="validate data">');
  }
  document.getElementById("v1").innerHTML = a;
}
function vresizeA() {
  for (var a = "<table><TBODY>", b = 1;b <= mah;b++) {
    for (var a = a + ('<tr><TD vAlign=center align=middle><div class="vector">a<sub>' + b + "</sub></div> = {</TD>"), c = 1;c <= maw;c++) {
      a = c < maw ? a + ('<TD><INPUT type="number" id=a_' + c + "_" + b + ' maxLength=8 class="validate data">;</TD>') : a + ('<TD><INPUT type="number" id=a_' + c + "_" + b + ' maxLength=8 class="validate data">}</TD>');
    }
    a += "</tr>";
  }
  a += "</TBODY></table>";
  document.getElementById("m1").innerHTML = a;
}
function vresizeA2() {
  for (var a = "<table align=center><TBODY>", b = 1;b <= mah;b++) {
    a += "<tr>";
    1 == b && (a += "<td rowSpan=" + mah + '><img src="../../image/SS.png" width="10" height="' + 25 * mah + '"/></td>');
    for (var c = 1;c <= maw;c++) {
      a = c < maw ? a + ('<TD vAlign=center align=middle><INPUT type="number" id=a_' + b + "_" + c + ' maxLength=8 class="validate data"></td><td><div class="formula">&nbsp;x<sub>' + c + "</sub>&nbsp;+&nbsp;</div></td>") : a + ('<TD vAlign=center align=middle><INPUT type="number" id=a_' + b + "_" + c + ' maxLength=8 class="validate data"></td><td><div class="formula">&nbsp;x<sub>' + c + "</sub>&nbsp;=&nbsp;</div></td>");
    }
    a += '<TD vAlign=center align=middle><INPUT type="number" id=a_' + b + "_" + c + ' maxLength=8 class="validate data"></td>';
    a += "</tr>";
  }
  a += "</TBODY></table>";
  document.getElementById("m1").innerHTML = a;
}
function mresizeB() {
  tt = "<table><TBODY>";
  for (var a = 1;a <= mbh;a++) {
    tt += "<tr>";
    1 == a && (tt += "<TD vAlign=center align=middle rowSpan=" + mbh + "><b>B</b>&nbsp;=&nbsp;</TD><TD rowSpan=" + mbh + '><img src="../../image/LS.GIF" width="5" height="' + 25 * mbh + '"/>');
    for (var b = 1;b <= mbw;b++) {
      tt += '<TD><INPUT type="number" id=b_' + a + "_" + b + ' maxLength=8 class="validate data"></TD>';
    }
    1 == a && (tt += "<TD rowSpan=" + mbh + '><img src="../../image/RS.GIF" width="5" height="' + 25 * mbh + '"/>');
    tt += "</tr>";
  }
  tt += "</TBODY></table>";
  document.getElementById("m2").innerHTML = tt;
}
function mcalc() {
  var a, b = new Mget("a");
  if (0 < b.error) {
    alert(j1), document.getElementById("res").innerHTML = "";
  } else {
    var c = new Mget("b");
    if (0 < c.error) {
      alert(j1), document.getElementById("res").innerHTML = "";
    } else {
      var e = new tfraction, d = new tfraction;
      e.newf(document.getElementById("k1").value);
      d.newf(document.getElementById("k2").value);
      if (0 != e.er || 0 != d.er) {
        alert(j1), UpdateMath("");
      } else {
        zn = 1 == document.getElementById("op").value ? " + " : " - ";
        a = new TfrRes;
        a.add(e.showtabzn());
        a.add(j2);
        a.add("<b>A</b>");
        a.add("&nbsp;" + zn + "&nbsp;");
        a.add(d.showtabzn());
        a.add(j2);
        a.add("<b>B</b>");
        a.add("&nbsp;=&nbsp;");
        for (var f = a.show() + "<br>", f = f + '<table style="border-collapse: collapse;"><TBODY>', g = 1;g <= mah;g++) {
          f += "<tr>";
          1 == g && (f += "<TD rowSpan=" + mah + ">=&nbsp;</td><TD rowSpan=" + mah + '><img src="' + ls + '" width="5" height="' + 19 * mah + '"/></td>');
          for (var m = 1;m <= maw;m++) {
            f += '<td style="TEXT-ALIGN: center;">&nbsp;' + e.showzn() + j2 + b.m[g][m].showzn() + zn + d.showzn() + j2 + c.m[g][m].showzn() + "&nbsp;</td>";
          }
          1 == g && (f += "<TD rowSpan=" + mah + '><img src="' + rs + '" width="5" height="' + 19 * mah + '"/></td><TD rowSpan=' + mah + ">&nbsp;=</td>");
          f += "</tr>";
        }
        f += '</TBODY></table><br><table style="border-collapse: collapse;"><TBODY>';
        for (g = 1;g <= mah;g++) {
          f += "<tr>";
          1 == g && (f += "<TD rowSpan=" + mah + ">=&nbsp;</td><TD rowSpan=" + mah + '><img src="' + ls + '" width="5" height="' + 19 * mah + '"/></td>');
          for (m = 1;m <= maw;m++) {
            a = " + " == zn ? oms1(oms3(e, b.m[g][m]), oms3(d, c.m[g][m])).show() : oms2(oms3(e, b.m[g][m]), oms3(d, c.m[g][m])).show(), f += '<td style="TEXT-ALIGN: center;">&nbsp;' + a + "&nbsp;</td>";
          }
          1 == g && (f += "<TD rowSpan=" + mah + '><img src="' + rs + '" width="5" height="' + 19 * mah + '"/></td>');
          f += "</tr>";
        }
        f += "</TBODY></table>";
        setFocus(f);
      }
    }
  }
}
function mtranspose() {
  var a = new Mget("a");
  if (0 < a.error) {
    alert(j1), document.getElementById("res").innerHTML = "";
  } else {
    for (var b = '<table style="border-collapse: collapse;"><TBODY>', c = 1;c <= maw;c++) {
      b += "<tr>";
      1 == c && (b += "<TD rowSpan=" + maw + "><b>A</b><sup>T</sup>&nbsp;=&nbsp;</td><TD rowSpan=" + maw + '><img src="' + ls + '" width="5" height="' + 19 * maw + '"/></td>');
      for (var e = 1;e <= mah;e++) {
        b += '<td style="TEXT-ALIGN: center;">&nbsp;' + a.m[e][c].show() + "&nbsp;</td>";
      }
      1 == c && (b += "<TD rowSpan=" + maw + '><img src="' + rs + '" width="5" height="' + 19 * maw + '"/></td>');
      b += "</tr>";
    }
    setFocus(b + "</TBODY></table>");
  }
}
function mmultiply() {
  if (maw != mbh) {
    alert(j3), document.getElementById("res").innerHTML = "";
  } else {
    var a = new Mget("a");
    if (0 < a.error) {
      alert(j1), document.getElementById("res").innerHTML = "";
    } else {
      var b = new Mget("b");
      if (0 < b.error) {
        alert(j1), document.getElementById("res").innerHTML = "";
      } else {
        var c = new TfrRes;
        c.add("<b>C</b>&nbsp;=&nbsp;<b>A</b>" + j2 + "<b>B</b>&nbsp;=&nbsp;");
        c.add('<table style="border-collapse: collapse;"><TBODY>' + showmatr1(a.m, mah, maw) + "</TBODY></table>");
        c.add(j2);
        c.add('<table style="border-collapse: collapse;"><TBODY>' + showmatr1(b.m, mbh, mbw) + "</TBODY></table>");
        c.add("&nbsp;=");
        for (var c = c.show() + "<br>", e = j4, d = new tfraction, f = new tfraction, c = c + '<table style="border-collapse: collapse;"><TBODY>', g = 1;g <= mah;g++) {
          c += "<tr>";
          1 == g && (c += "<TD rowSpan=" + mah + ">=&nbsp;</td><TD rowSpan=" + mah + '><img src="' + ls + '" width="5" height="' + 19 * mah + '"/></td>');
          for (var m = 1;m <= mbw;m++) {
            c1 = "C<sub>" + g + "," + m + "</sub> = ";
            c3 = c2 = "";
            d.newf("0");
            for (var l = d.d = 1;l <= mbh;l++) {
              f = oms3(a.m[g][l], b.m[l][m]), d = oms1(d, f), c1 += "A<sub>" + g + "," + l + "</sub> " + j2 + " B<sub>" + l + "," + m + "</sub>", c2 += a.m[g][l].showzn() + " " + j2 + " " + b.m[l][m].showzn(), c3 += f.showzn(), l < mbh && (c1 += " + ", c2 += " + ", c3 += " + ");
            }
            c += '<td style="TEXT-ALIGN: center;">&nbsp;' + d.show() + "&nbsp;</td>";
            e += c1 + " = <br>= " + c2 + " = " + c3 + " = " + d.show() + "<br><br>";
          }
          1 == g && (c += "<TD rowSpan=" + mah + '><img src="' + rs + '" width="5" height="' + 19 * mah + '"/></td>');
          c += "</tr>";
          e += "<br>";
        }
        setFocus(c + "</TBODY></table><br>" + e);
      }
    }
  }
}
function mdeterminant() {
  var a = new Mget("a");
  if (0 < a.error) {
    alert(j1), document.getElementById("res").innerHTML = "";
  } else {
    for (var b = '<col style="BORDER-LEFT: white 1px solid;">', c = 2;c < maw;c++) {
      b += "<col>";
    }
    var b = b + '<col style="BORDER-RIGHT: white 1px solid;">', e = new TfrRes;
    e.add("det&nbsp;<b>A</b>&nbsp;=&nbsp;");
    e.add('<table style="border-collapse: collapse;">' + b + "<TBODY>" + showmatr2(a.m, mah, maw) + "</TBODY></table>");
    e.add("&nbsp;=");
    for (var d = e.show(), b = '<col style="BORDER-LEFT: white 1px solid;">', c = 3;c < maw;c++) {
      b += "<col>";
    }
    b += '<col style="BORDER-RIGHT: white 1px solid;">';
    e.clear();
    e.add("=&nbsp;");
    if (2 < mah) {
      for (c = 1;c <= mah;c++) {
        e.add(a.m[1][c].showtabzn());
        e.add(j2);
        for (var f = '<table style="border-collapse: collapse;">' + b + "<TBODY>", g = 2;g <= mah;g++) {
          for (var f = f + "<tr>", m = 1;m <= maw;m++) {
            m != c && (f += '<td style="TEXT-ALIGN: center;">&nbsp;' + a.m[g][m].show() + "&nbsp;</td>");
          }
          f += "</tr>";
        }
        f += "</TBODY></table>";
        e.add(f);
        c < mah && c == 2 * Math.round(c / 2) && e.add("&nbsp;+&nbsp;");
        c < mah && c != 2 * Math.round(c / 2) && e.add("&nbsp;-&nbsp;");
      }
      e.add("&nbsp;=");
    } else {
      e.add(a.m[1][1].showtabzn()), e.add(j2), e.add(a.m[2][2].showtabzn()), e.add("&nbsp;-&nbsp;"), e.add(a.m[2][1].showtabzn()), e.add(j2), e.add(a.m[1][2].showtabzn());
    }
    d += "<br>" + e.show() + "<br>";
    e.clear();
    e.add("&nbsp;=");
    e.add(mdet(a.m, mah).showtab());
    setFocus(d + e.show());
  }
}
function mdet(a, b) {
  var c = new tfraction;
  if (1 == b) {
    return c.znak = a[1][1].znak, c.ch = a[1][1].ch, c.zn = a[1][1].zn, c.d = a[1][1].d, c;
  }
  if (2 == b) {
    return oms2(oms3(a[1][1], a[2][2]), oms3(a[2][1], a[1][2]));
  }
  for (var c = new tfraction, e = [], d = 1;d < b;d++) {
    e[d] = [];
    for (var f = 1;f < b;f++) {
      e[d][f] = new tfraction;
    }
  }
  for (var g = 1;g <= b;g++) {
    for (d = 2;d <= b;d++) {
      for (f = 1;f <= b;f++) {
        f < g && (e[d - 1][f] = a[d][f]), f > g && (e[d - 1][f - 1] = a[d][f]);
      }
    }
    c = g == 2 * Math.round(g / 2) ? oms2(c, oms3(a[1][g], mdet(e, b - 1))) : oms1(c, oms3(a[1][g], mdet(e, b - 1)));
  }
  return c;
}
function mrank() {
  document.getElementById("res").innerHTML = "";
  var a = new Mget("a");
  if (0 < a.error) {
    alert(j1);
  } else {
    var a = new vminv(a, mah, maw, maw, ""), b = a.res, b = b + ("<br>" + j10.replace(/{k}/g, a.rank));
    setFocus(b);
  }
}
function minverse() {
  document.getElementById("res").innerHTML = "";
  if (mah != maw) {
    setFocus(j10);
  } else {
    var a = new Mget("a");
    if (0 < a.error) {
      setFocus(j1);
    } else {
      if (0 == mdet(a.m, mah).ch) {
        setFocus(j11);
      } else {
        var b;
        new tfraction;
        a.inv();
        col = "<col>";
        for (b = 1;b < maw;b++) {
          col += "<col>";
        }
        col += '<col style="BORDER-RIGHT: white 1px solid;">';
        for (b = 1;b <= maw;b++) {
          col += "<col>";
        }
        col += "<col>";
        b = new vminv(a, mah, maw, 2 * maw, col);
        b = j13 + "<br>" + b.res;
        b += "<br>" + j14 + '<table style="border-collapse: collapse;"><TBODY>';
        for (i = 1;i <= mah;i++) {
          b += "<tr>";
          1 == i && (b += "<TD rowSpan=" + mah + "><b>A</b><sup>-1</sup> = </td><TD rowSpan=" + mah + '><img src="' + ls + '" width="5" height="' + 19 * mah + '"/></td>');
          for (j = 1 * maw + 1;j <= 2 * maw;j++) {
            b += '<td style="TEXT-ALIGN: center;">&nbsp;&nbsp;' + a.m[i][j].show() + "&nbsp;&nbsp;</td>";
          }
          1 == i && (b += "<TD rowSpan=" + mah + '><img src="' + rs + '" width="5" height="' + 19 * mah + '"/></td>');
          b += "</tr>";
        }
        setFocus(b + "</TBODY></table>");
      }
    }
  }
}
function vminv(a, b, c, e, d) {
  var f = new tfraction, g, m, l, n, p;
  p = '<table style="border-collapse: collapse;">' + d + "<TBODY>" + showmatr1(a.m, b, e) + "</TBODY></table>";
  this.rank = 0;
  for (g = 1;g <= b;g++) {
    l = 0;
    for (m = g;m <= c;m++) {
      for (n = g;n <= b;n++) {
        0 != a.m[n][m].ch && (l = n, kk = m, n = 1 * b + 1, m = 1 * c + 1);
      }
    }
    if (l != g && 0 < l) {
      for (m = 1;m <= e;m++) {
        f.equally(a.m[g][m]), a.m[g][m].equally(a.m[l][m]), a.m[l][m].equally(f);
      }
      m = j3;
      p += "<br>" + m.replace("{i}", g).replace("{j}", l);
      p += '<table style="border-collapse: collapse;">' + d + "<TBODY>" + showmatr1(a.m, b, e) + "</TBODY></table>";
    }
    if (0 < l) {
      if (1 != a.m[g][kk].ch || 1 != a.m[g][kk].zn || 1 != a.m[g][kk].znak) {
        f.equally(a.m[g][kk]);
        for (m = 1;m <= e;m++) {
          a.m[g][m] = oms4(a.m[g][m], f);
        }
        m = j2;
        p += "<br>" + m.replace("{i}", g).replace("{n}", f.show());
        p += '<table style="border-collapse: collapse;">' + d + "<TBODY>" + showmatr1(a.m, b, e) + "</TBODY></table>";
      }
      fl = 0;
      s2 = s1 = "";
      for (h1 = 1;h1 <= b;h1++) {
        h1 != g && 0 != a.m[h1][kk].ch && (fl++, 1 == fl ? (s1 += h1, s2 += a.m[h1][kk].show()) : (s1 += "; " + h1, s2 += "; " + a.m[h1][kk].show()));
      }
      if (0 < fl) {
        for (h1 = 1;h1 <= b;h1++) {
          if (h1 != g) {
            for (f.equally(a.m[h1][kk]), m = 1;m <= e;m++) {
              a.m[h1][m] = oms2(a.m[h1][m], oms3(a.m[g][m], f));
            }
          }
        }
        m = j4;
        p += "<br>" + m.replace("{n}", s1).replace("{k}", g).replace("{m}", s2);
        p += '<table style="border-collapse: collapse;">' + d + "<TBODY>" + showmatr1(a.m, b, e) + "</TBODY></table>";
      }
    }
    this.rank++;
    0 == l && (this.rank = g - 1, g = b + 1);
  }
  this.res = p;
}
function minverse2() {
  document.getElementById("res").innerHTML = "";
  maw = 1 * maw + 1;
  var a = new Mget("a");
  maw -= 1;
  if (0 < a.error) {
    setFocus(j1);
  } else {
    if (0 == mdet(a.m, mah).ch) {
      setFocus(j11);
    } else {
      var b, c;
      new tfraction;
      var e = "<col>";
      for (c = 1;c < maw;c++) {
        e += "<col>";
      }
      b = j13 + "<br><br>";
      for (c = 1;c <= maw;c++) {
        b += '<div class="formula">x<sub>' + c + "</sub></div> <div class=vector>a<sub>" + c + "</sub></div>", b = c < maw ? b + " + " : b + " = ";
      }
      b = b + "<div class=vector>b</div>" + ("<br><br>" + j10 + "<br>");
      e += '<col style="BORDER-RIGHT: white 1px solid;"><col><col>';
      c = new vminv(a, mah, maw, 1 * maw + 1, e);
      b += c.res;
      e = new TfrRes;
      e.add('<div class="vector">b</div');
      e.add("&nbsp;=&nbsp;");
      var d = "";
      for (c = 1;c <= maw;c++) {
        0 != a.m[c][maw + 1].show() && ("" != d && (-1 == a.m[c][maw + 1].znak ? (e.add("&nbsp;-&nbsp;"), a.m[c][maw + 1].znak = 1) : (e.add("&nbsp;+&nbsp;"), d += "1")), 1 != a.m[c][maw + 1].show() ? (d += "1", e.add(a.m[c][maw + 1].showtab())) : d += "1", e.add('<div class="vector">a<sub>' + c + "</sub></div>"));
      }
      b += "<br>" + j14 + e.show();
      setFocus(b);
    }
  }
}
function minverse3() {
  document.getElementById("res").innerHTML = "";
  var a = new Mget("a");
  if (0 < a.error) {
    setFocus(j1);
  } else {
    var b, c;
    new tfraction;
    b = j13 + "<br><br>";
    for (c = 1;c <= maw;c++) {
      b += '<div class="formula">x<sub>' + c + '</sub></div> <div class="vector">a<sub>' + c + "</sub></div>", b = c < maw ? b + " + " : b + " = ";
    }
    b = b + '<div class="vector">0</div>' + ("</div><br><br>" + j10 + "<br>");
    a = new vminv(a, mah, maw, maw, "");
    b += a.res;
    b = a.rank == maw ? b + (j14 + '<div class="formula">x<sub>i</sub> = 0</div>') : b + (j11 + ' <div class="formula">x<sub>i</sub> ' + j12 + " 0</div>");
    setFocus(b);
  }
}
function minverse4() {
  document.getElementById("res").innerHTML = "";
  maw = 1 * maw + 1;
  var a = new Mget("a");
  maw -= 1;
  if (0 < a.error) {
    setFocus(j1);
  } else {
    var b, c, e;
    new tfraction;
    col = "<col>";
    for (e = 1;e < maw;e++) {
      col += "<col>";
    }
    col += '<col style="BORDER-RIGHT: white 1px solid;">';
    b = j10 + "<br>";
    col += "<col><col>";
    var d = new vminv(a, mah, maw, maw + 1, col);
    b += d.res;
    b += j14 + "<br>";
    var f = "";
    for (c = d.rank + 1;c <= mah;c++) {
      0 !== a.m[c][maw + 1].show() && (f = j13 + " 0 " + j12 + " " + a.m[c][maw + 1].show());
    }
    if ("" == f) {
      f = "<table><TBODY>";
      for (c = 1;c <= d.rank;c++) {
        f += "<tr>";
        1 == c && (f += "<td rowSpan=" + d.rank + "><img src=" + ls1 + ' width="10" height="' + 20 * d.rank + '"/></td>');
        f += "<td>";
        t3 = "";
        for (e = 1;e <= maw;e++) {
          0 != a.m[c][e].show() && ("" != t3 && (t3 += " + "), t3 = 1 != a.m[c][e].show() ? t3 + (a.m[c][e].showzn() + "x<sub>" + e + "</sub>") : t3 + ("x<sub>" + e + "</sub>"));
        }
        f += t3 + " = " + a.m[c][e].show();
        f += "</td></tr>";
      }
      f += "</table></TBODY>";
    }
    setFocus(b + f);
  }
}
function copir1() {
  alert("");
}
function kramer() {
  document.getElementById("res").innerHTML = "";
  maw = 1 * maw + 1;
  var a = new Mget("a");
  maw -= 1;
  if (0 < a.error) {
    setFocus(j1);
    //alert(j1), UpdateMath("");
  } else {
    var b, c, e, d, f = new tfraction, g = [], m = [];
    for (c = 1;c <= maw;c++) {
      for (g[c] = [], m[c] = new tfraction, e = 1;e <= maw;e++) {
        g[c][e] = new tfraction;
      }
    }
    var l = '<col style="BORDER-LEFT: white 1px solid;">';
    for (e = 2;e < maw;e++) {
      l += "<col>";
    }
    var l = l + '<col style="BORDER-RIGHT: white 1px solid;">', n = new TfrRes;
    n.add(j2 + "&nbsp;=&nbsp;");
    n.add('<table style="border-collapse: collapse;">' + l + "<TBODY>" + showmatr2(a.m, mah, maw) + "</TBODY></table>");
    n.add("&nbsp;=&nbsp;");
    f = mdet(a.m, mah);
    n.add(f.showtab());
    b = n.show(" ");
    if (0 == f.ch) {
      setFocus(b + "<br>" + j3);
    } else {
      for (d = 1;d <= maw;d++) {
        for (c = 1;c <= maw;c++) {
          for (e = 1;e <= maw;e++) {
            g[c][e] = d != e ? a.m[c][e] : a.m[c][maw + 1];
          }
        }
        n.clear();
        n.add(j2 + "<sub>" + d + "</sub>&nbsp;=&nbsp;");
        n.add('<table style="border-collapse: collapse;">' + l + "<TBODY>" + showmatr2(g, mah, maw) + "</TBODY></table>");
        n.add("&nbsp;=&nbsp;");
        m[d] = mdet(g, mah);
        n.add(m[d].showtab());
        b += "<br>" + n.show(" ");
      }
      a = new TfrRes;
      for (d = 1;d <= maw;d++) {
        a.clear(), a.addstr("<div class=formula>x</div><sub>" + d + "</sub>&nbsp;=&nbsp;"), a.addfr(j2 + "<sub>" + d + "</sub>", j2), a.addstr("&nbsp;=&nbsp;"), a.addfr(m[d].show(), f.show()), m[d] = oms4(m[d], f), a.addstr("&nbsp;=&nbsp;"), a.addstr(m[d].showtab()), b += "<br>" + a.show(" ");
      }
      setFocus(b);
    }
  }
}
function minverse5() {
  document.getElementById("res").innerHTML = "";
  maw = 1 * maw + 1;
  var a = new Mget("a"), b;
  maw -= 1;
  if (0 < a.error){
    setFocus(j1);
  } else {
    var c, e, d, f, g, m = 0;
    d = new tfraction;
    var l = 1;
    c = j10 + "<br>";
    c += showeq(a, mah, maw);
    a.simplify(1, mah, 1, 1 * maw + 1);
    a.simpl && (c += j11 + "<br>" + showeq(a, mah, maw));
    m = 0;
    for (g = 1;g <= mah;g++) {
      e = 0;
      for (b = g;b <= maw;b++) {
        for (f = g;f <= mah;f++) {
          0 != a.m[f][b].ch && (e = f, l = b, f = mah + 1, b = maw + 1);
        }
      }
      if (e != g && 0 < e) {
        for (b = 1;b <= 1 * maw + 1;b++) {
          d.equally(a.m[g][b]), a.m[g][b].equally(a.m[e][b]), a.m[e][b].equally(d);
        }
        b = j3;
        c += b.replace("{i}", g).replace("{j}", e);
        c += showeq1(a, g, mah, maw);
      }
      if (0 < e) {
        if (1 != a.m[g][l].ch || 1 != a.m[g][l].zn || 1 != a.m[g][l].znak) {
          d.equally(a.m[g][l]);
          for (b = 1;b <= 1 * maw + 1;b++) {
            a.m[g][b] = oms4(a.m[g][b], d);
          }
          b = j2;
          c += b.replace("{i}", g).replace("{n}", d.show()).replace("{k}", l);
        } else {
          b = j4, c += b.replace("{k}", l), c += j15 + "x<sub>" + l + "</sub>" + j16;
        }
        c += showeq1(a, g, mah, maw);
        f = showeq2(a, g, mah, maw);
        b = 0;
        s2 = s1 = "";
        for (h1 = g + 1;h1 <= mah;h1++) {
          h1 != g && 0 != a.m[h1][l].ch && (b++, 1 == b ? (s1 += h1, s2 += a.m[h1][l].show()) : (s1 += ", " + h1, s2 += ", " + a.m[h1][l].show()));
        }
        if (0 < b) {
          for (h1 = g + 1;h1 <= mah;h1++) {
            if (h1 != g) {
              for (d.equally(a.m[h1][l]), b = 1;b <= 1 * maw + 1;b++) {
                a.m[h1][b] = oms2(a.m[h1][b], oms3(a.m[g][b], d));
              }
            }
          }
          b = j5;
          c += b.replace("{n}", s1).replace("{k}", g) + f + j9;
          c += showeq1(a, g, mah, maw);
        }
      }
      m++;
      0 == e && (m = g - 1, g = mah + 1);
    }
    mah == m && (c += j17);
    c += j14 + "<br>";
    e = "";
    for (g = m + 1;g <= mah;g++) {
      0 !== a.m[g][maw + 1].show() && (e = j13 + " 0 " + j12 + " " + a.m[g][maw + 1].show());
    }
    new vminv(a, mah, maw, maw + 1, "");
    if ("" == e) {
      e = "<table><TBODY>";
      for (g = 1;g <= m;g++) {
        e += "<tr>";
        1 == g && (e += "<td rowSpan=" + m + "><img src=" + ls1 + ' width="10" height="' + 20 * m + '"/></td>');
        e += "<td>";
        d = "";
        for (b = 1;b <= maw;b++) {
          0 != a.m[g][b].show() && ("" != d && (d += " + "), d = 1 != a.m[g][b].show() ? d + (a.m[g][b].showzn() + "x<sub>" + b + "</sub>") : d + ("x<sub>" + b + "</sub>"));
        }
        e += d + " = " + a.m[g][b].show();
        e += "</td></tr>";
      }
      e += "</table></TBODY>";
    }
    setFocus(c + e);
  }
}
function eq_matr() {
  document.getElementById("res").innerHTML = "";
  maw = 1 * maw + 1;
  var a = new Mget("a"), b = new TfrRes;
  maw -= 1;
  if (0 < a.error) {
    setFocus(j1);
  } else {
    var c, e, d, f, g, m = new tfraction, l = new tfraction, n = new TfrRes;
    g = '<col style="BORDER-LEFT: white 1px solid;">';
    for (d = 3;d < maw;d++) {
      g += "<col>";
    }
    g += '<col style="BORDER-RIGHT: white 1px solid;">';
    c = "<table><TBODY><tr><td><b>A</b>=</td><td><table><TBODY>" + showmatr1(a.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
    c += "<table><TBODY><tr><td><b>B</b>=</td><td>";
    f = "<table><TBODY>" + ("<tr><TD rowSpan=" + mah + '><img src="' + ls + '" width="5" height="' + 19 * mah + '"/></td><td align=center>' + a.m[1][maw + 1].show() + "</td><TD rowSpan=" + mah + '><img src="' + rs + '" width="5" height="' + 19 * mah + '"/></td></tr>');
    for (e = 2;e <= mah;e++) {
      f += "<tr><td align=center>" + a.m[e][maw + 1].show() + "</td></tr>";
    }
    f += "</TBODY></table>";
    c = c + (f + "</td></tr></TBODY></table>") + "<table><TBODY><tr><td><b>X</b>=</td><td><table><TBODY>";
    c += "<tr><TD rowSpan=" + mah + '><img src="' + ls + '" width="5" height="' + 19 * mah + '"/></td><td align=center><div class=formula>x</div><sub>1</sub></td><TD rowSpan=' + mah + '><img src="' + rs + '" width="5" height="' + 19 * mah + '"/></td></tr>';
    for (e = 2;e <= mah;e++) {
      c += "<tr><td align=center><div class=formula>x</div><sub>" + e + "</sub></td></tr>";
    }
    c += "</TBODY></table></td></tr></TBODY></table>";
    c += "<b>A</b>" + j4 + "<b>X</b> = <b>B</b><br><br>" + j3 + "<br><br><b>X</b> = <b>A</b><sup>-1</sup>" + j4 + "<b>B</b><br><br>" + j5;
    m = mdet(a.m, mah);
    c += "<br><br>det <b>A</b> = " + m.show() + "<br><br>";
    if (0 == m.ch) {
      c += "<b>" + j8 + "</b>" + j6;
    } else {
      c += j7 + "<br>";
      var p = new Mminor(mah - 1), q = new Mminor(mah);
      for (e = 1;e <= mah;e++) {
        for (d = 1;d <= maw;d++) {
          p.minor(a, mah, e, d), l = mdet(p.m, mah - 1), q.m[e][d].ch = l.ch, q.m[e][d].zn = l.zn, q.m[e][d].znak = l.znak, q.m[e][d].d = l.d, 2 * Math.round((e + d) / 2) != e + d && (q.m[e][d].znak *= -1), c += "<table><TBODY><tr><td>" + jf1 + "<sub>" + e + "," + d + "</sub> = (-1)<sup>" + e + "+" + d + '</sup></td><td><table style="border-collapse: collapse;">' + g + "<TBODY>" + showmatr2(p.m, mah - 1, maw - 1) + "</TBODY></table></td><td>&nbsp;=&nbsp;</td><td>" + q.m[e][d].showtab() + "</td></tr></TBODY></table><br>"
          ;
        }
      }
      c += "<br><table><TBODY><tr><td>" + jf2 + " = </td><td><table><TBODY>" + showmatr1(q.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
      q.tr();
      c += "<br><table><TBODY><tr><td>" + jf2 + "<sup>T</sup> = </td><td><table><TBODY>" + showmatr1(q.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
      for (e = 1;e <= mah;e++) {
        for (d = 1;d <= maw;d++) {
          q.m[e][d] = oms4(q.m[e][d], m);
        }
      }
      c += "<br>" + j9;
      b.addstr("<b>A</b><sup>-1</sup>&nbsp;=&nbsp;");
      b.addfr(jf2 + "<sup>T</sup>", "det <b>A</b>");
      b.addstr("&nbsp;=&nbsp;");
      c += "<br><table><TBODY><tr><td>" + b.show() + "</td><td><table><TBODY>" + showmatr1(q.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
      c += "<br>" + j10;
      c += "<br><table><TBODY><tr><td><b>X</b>&nbsp;=&nbsp;<b>A</b><sup>-1</sup>" + j4 + "<b>B</b>&nbsp;=&nbsp;</td><td><table><TBODY>" + showmatr1(q.m, mah, maw) + "</TBODY></table></td><td>" + j4 + "</td><td>" + f + "</td><td>&nbsp;=&nbsp;</td><td>";
      f = "<table><TBODY>";
      n.add("<b>" + j8 + "</b>&nbsp;");
      for (e = 1;e <= mah;e++) {
        n.add("x<sub>" + e + "</sub> =&nbsp;");
        m.ch = 0;
        m.zn = 1;
        m.znak = 1;
        f += "<tr>";
        1 == e && (f += "<TD rowSpan=" + mah + '><img src="' + ls + '" width="5" height="' + 19 * mah + '"/></td>');
        for (jj = 1;jj <= mah;jj++) {
          m = oms1(m, oms3(q.m[e][jj], a.m[jj][maw + 1]));
        }
        m.d = 1;
        f += "<td align=center>" + m.show() + "</td>";
        n.add(m.showtab());
        e < mah ? n.add(",&nbsp;") : n.add(".");
        1 == e && (f += "<TD rowSpan=" + mah + '><img src="' + rs + '" width="5" height="' + 19 * mah + '"/></td>');
        f += "</tr>";
      }
      c += f + "</TBODY></table></td></tr></TBODY></table>";
      c += "<br>" + n.show(" ");
    }
    setFocus(c);
  }
}
function minverse7() {
  document.getElementById("res").innerHTML = "";
  var a = new Mget("a");
  if (0 < a.error) {
    setFocus(j1);
  } else {
    var b, c, e, d, f = new tfraction, g = new TfrRes;
    d = '<col style="BORDER-LEFT: white 1px solid;">';
    for (e = 3;e < maw;e++) {
      d += "<col>";
    }
    d += '<col style="BORDER-RIGHT: white 1px solid;">';
    b = "<table><TBODY><tr><td><b>A</b>=</td><td><table><TBODY>" + showmatr1(a.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
    b += "<br><br>" + j5;
    f = mdet(a.m, mah);
    b += "<br><br>det <b>A</b> = " + f.show() + "<br><br>";
    if (0 == f.ch) {
      b += "<b>" + j8 + "</b>" + j6;
    } else {
      b += j7 + "<br>";
      var m = new Mminor(mah - 1), l = new Mminor(mah);
      b += "<ul>";
      for (c = 1;c <= mah;c++) {
        for (e = 1;e <= maw;e++) {
          m.minor(a, mah, c, e), l.m[c][e] = mdet(m.m, mah - 1), tt = j12, tt = tt.replace(/{k1}/g, "<sub>" + c + "," + e + "</sub>").replace("{k3}", c).replace("{k4}", e), b += "<li>", b += tt, b += "<table><TBODY><tr><td>" + jf2 + "<sub>" + c + "," + e + '</sub> =&nbsp;</td><td><table style="border-collapse: collapse;">' + d + "<TBODY>" + showmatr2(m.m, mah - 1, maw - 1) + "</TBODY></table></td><td>&nbsp;=&nbsp;</td><td>" + l.m[c][e].showtab() + "</td></tr></TBODY></table><br>", 2 * Math.round((c + 
          e) / 2) != c + e && (l.m[c][e].znak = -l.m[c][e].znak), g.clear(), g.add(jf1 + "<sub>" + c + "," + e + "</sub> = (-1)<sup>" + c + "+" + e + "</sup>M<sub>" + c + "," + e + "</sub> =&nbsp;"), g.add(l.m[c][e].showtab()), b += g.show(" ") + "<br><br></li>";
        }
      }
      b = b + "</ul>" + j13;
      b += "<br><table><TBODY><tr><td>" + jf3 + " = </td><td><table><TBODY>" + showmatr1(l.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
      l.tr();
      b += "<br><br>" + j14;
      b += "<br><table><TBODY><tr><td>" + jf3 + "<sup>T</sup> = </td><td><table><TBODY>" + showmatr1(l.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
      for (c = 1;c <= mah;c++) {
        for (e = 1;e <= maw;e++) {
          l.m[c][e] = oms4(l.m[c][e], f);
        }
      }
      b += "<br>" + j9;
      a = new TfrRes;
      a.addstr("<b>A</b><sup>-1</sup>&nbsp;=&nbsp;");
      a.addfr(jf3 + "<sup>T</sup>", "det <b>A</b>");
      a.addstr("&nbsp;=&nbsp;");
      b += "<br><table><TBODY><tr><td>" + a.show() + "</td><td><table><TBODY>" + showmatr1(l.m, mah, maw) + "</TBODY></table></td></tr></TBODY></table>";
    }
    setFocus(b);
  }
}
function Mminor(a) {
  this.m = [];
  this.hh = a;
  for (var b = 1;b <= a;b++) {
    this.m[b] = [];
    for (var c = 1;c <= a;c++) {
      this.m[b][c] = new tfraction;
    }
  }
  this.minor = matrminor;
  this.tr = trans;
}
function trans() {
  for (var a = new tfraction, b = 1;b <= this.hh;b++) {
    for (var c = b + 1;c <= this.hh;c++) {
      a.ch = this.m[b][c].ch, a.zn = this.m[b][c].zn, a.znak = this.m[b][c].znak, a.d = this.m[b][c].d, this.m[b][c].ch = this.m[c][b].ch, this.m[b][c].zn = this.m[c][b].zn, this.m[b][c].znak = this.m[c][b].znak, this.m[b][c].d = this.m[c][b].d, this.m[c][b].ch = a.ch, this.m[c][b].zn = a.zn, this.m[c][b].znak = a.znak, this.m[c][b].d = a.d;
    }
  }
}
function matrminor(a, b, c, e) {
  for (var d = 1;d <= b;d++) {
    for (var f = 1;f <= b;f++) {
      d < c && f < e && (this.m[d][f].ch = a.m[d][f].ch, this.m[d][f].zn = a.m[d][f].zn, this.m[d][f].znak = a.m[d][f].znak, this.m[d][f].d = a.m[d][f].d), d > c && f > e && (this.m[d - 1][f - 1].ch = a.m[d][f].ch, this.m[d - 1][f - 1].zn = a.m[d][f].zn, this.m[d - 1][f - 1].znak = a.m[d][f].znak, this.m[d - 1][f - 1].d = a.m[d][f].d), d < c && f > e && (this.m[d][f - 1].ch = a.m[d][f].ch, this.m[d][f - 1].zn = a.m[d][f].zn, this.m[d][f - 1].znak = a.m[d][f].znak, this.m[d][f - 1].d = a.m[d][f].d), 
      d > c && f < e && (this.m[d - 1][f].ch = a.m[d][f].ch, this.m[d - 1][f].zn = a.m[d][f].zn, this.m[d - 1][f].znak = a.m[d][f].znak, this.m[d - 1][f].d = a.m[d][f].d);
    }
  }
}
function Mget(a) {
  this.error = 0;
  this.m = [];
  "a" == a && (this.h = mah, this.w = maw);
  "b" == a && (this.h = mbh, this.w = mbw);
  for (var b = 1;b <= this.h;b++) {
    this.m[b] = [];
    for (var c = 1;c <= this.w;c++) {
      this.m[b][c] = new tfraction, this.m[b][c].newf(document.getElementById(a + "_" + b + "_" + c).value), 0 != this.m[b][c].er && (this.error = 1);
    }
  }
  this.inv = invert;
  this.simpl = !1;
  this.simplify = simplifym;
}
function simplifym(a, b, c, e) {
  var d, f, g;
  for (this.simpl = !1;a <= b;a++) {
    for (d = c;d <= e;d++) {
      if (1 != this.m[a][d].zn && 0 != this.m[a][d].zn) {
        for (this.simpl = !0, g = this.m[a][d].zn, f = c;f <= e;f++) {
          this.m[a][f].ch *= g, this.m[a][f].simplify();
        }
      }
    }
    g = this.m[a][c].ch;
    for (d = c;d <= e;d++) {
      g = nod(g, this.m[a][d].ch);
    }
    if (1 < g) {
      for (this.simpl = !0, d = c;d <= e;d++) {
        this.m[a][d].ch /= g;
      }
    }
  }
}
function invert() {
  for (var a = 1;a <= this.h;a++) {
    for (var b = 1;b <= this.w;b++) {
      var c = 1 * b + 1 * this.w;
      this.m[a][c] = new tfraction;
      a == b ? this.m[a][c].newf("1") : this.m[a][c].newf("0");
    }
  }
}
function showmatr(a, b, c) {
  for (var e = "", d = 1;d <= b;d++) {
    for (var f = 1;f <= c;f++) {
      e += a[d][f].showtex(), f < c && (e += " & ");
    }
    d < b && (e += "\\");
  }
  return e;
}
function showmatr1(a, b, c) {
  for (var e = "", d = 1;d <= b;d++) {
    e += "<tr>";
    1 == d && (e += "<TD rowSpan=" + b + '><img src="' + ls + '" width="5" height="' + 19 * b + '"/></td>');
    for (var f = 1;f <= c;f++) {
      e += '<td style="TEXT-ALIGN: center;">&nbsp;&nbsp;' + a[d][f].show() + "&nbsp;&nbsp;</td>";
    }
    1 == d && (e += "<TD rowSpan=" + b + '><img src="' + rs + '" width="5" height="' + 19 * b + '"/></td>');
    e += "</tr>";
  }
  return e;
}
function showmatr2(a, b, c) {
  for (var e = "", d = 1;d <= b;d++) {
    for (var e = e + "<tr>", f = 1;f <= c;f++) {
      e += '<td style="TEXT-ALIGN: center;">&nbsp;&nbsp;' + a[d][f].show() + "&nbsp;&nbsp;</td>";
    }
    e += "</tr>";
  }
  return e;
}
function showeq(a, b, c) {
  t2 = "<table><TBODY>";
  for (h = 1;h <= b;h++) {
    t2 += "<tr>";
    1 == h && (t2 += "<td rowSpan=" + b + "><img src=" + ls1 + ' width="10" height="' + 20 * b + '"/></td>');
    t2 += "<td>";
    t3 = "";
    for (w = 1;w <= c;w++) {
      0 != a.m[h][w].ch && ("" != t3 ? t3 = -1 == a.m[h][w].znak ? t3 + " - " : t3 + " + " : -1 == a.m[h][w].znak && (t3 += "- "), t3 = 1 != a.m[h][w].show() || -1 != a.m[h][w].show() ? t3 + (a.m[h][w].showabs() + "x<sub>" + w + "</sub>") : t3 + ("x<sub>" + w + "</sub>"));
    }
    t2 += t3 + " = " + a.m[h][w].show();
    t2 += "</td></tr>";
  }
  return t2 += "</table></TBODY>";
}
function showeq1(a, b, c, e) {
  var d, f, g, m, l, n;
  d = "<table><TBODY>";
  for (l = 1;l <= b;l++) {
    d += "<tr>";
    1 == l && (d += "<td rowSpan=" + c + "><img src=" + ls1 + ' width="10" height="' + 20 * c + '"/></td>');
    d += "<td>";
    f = "";
    for (n = m = 1;n <= e;n++) {
      0 != a.m[l][n].ch && (g = 1 == a.m[l][n].show() || -1 == a.m[l][n].show() ? "x<sub>" + n + "</sub>" : a.m[l][n].showabs() + "x<sub>" + n + "</sub>", "" != f ? -1 == a.m[l][n].znak ? 1 < m ? f += " + " + g : (f += " " + g, m++) : (f += " - " + g, m++) : f = -1 == a.m[l][n].znak ? f + ("- " + g + " =") : f + (g + " ="));
    }
    d += f;
    0 != a.m[l][n].ch && (d = -1 == a.m[l][n].znak ? d + " - " : d + " + ", d += a.m[l][n].showabs());
    d += "</td></tr>";
  }
  for (l;l <= c;l++) {
    d += "<tr>";
    1 == l && (d += "<td rowSpan=" + c + "><img src=" + ls1 + ' width="10" height="' + 20 * c + '"/></td>');
    d += "<td>";
    f = "";
    for (n = 1;n <= e;n++) {
      0 != a.m[l][n].ch && ("" != f ? f = -1 == a.m[l][n].znak ? f + " - " : f + " + " : -1 == a.m[l][n].znak && (f += "- "), f = 1 != a.m[l][n].show() || -1 != a.m[l][n].show() ? f + (a.m[l][n].showabs() + "x<sub>" + n + "</sub>") : f + ("x<sub>" + n + "</sub>"));
    }
    "" == f && (f = "0");
    d += f + " = " + a.m[l][n].show();
    d += "</td></tr>";
  }
  return d + "</table></TBODY>";
}
function showeq2(a, b, c, e) {
  var d, f, g, m, l, n;
  g = "<table><TBODY>";
  for (l = 1;l < b;l++) {
    g += "<tr>";
    1 == l && (g += "<td rowSpan=" + c + "><img src=" + ls1 + ' width="10" height="' + 20 * c + '"/></td>');
    g += "<td>";
    d = "";
    for (n = k = 1;n <= e;n++) {
      0 != a.m[l][n].ch && (f = 1 == a.m[l][n].show() || -1 == a.m[l][n].show() ? "x<sub>" + n + "</sub>" : a.m[l][n].showabs() + "x<sub>" + n + "</sub>", "" != d ? -1 == a.m[l][n].znak ? 1 < k ? d += " + " + f : (d += " " + f, k++) : (d += " - " + f, k++) : d = -1 == a.m[l][n].znak ? d + ("- " + f + " =") : d + (f + " ="));
    }
    g += d;
    0 != a.m[l][n].ch && (g = -1 == a.m[l][n].znak ? g + " - " : g + " + ", g += a.m[l][n].showabs());
    g += "</td></tr>";
  }
  g += "<tr>";
  1 == l && (g += "<td rowSpan=" + c + "><img src=" + ls1 + ' width="10" height="' + 20 * c + '"/></td>');
  g += "<td>";
  m = d = "";
  k = 1;
  kk = 0;
  for (n = 1;n <= e;n++) {
    0 != a.m[l][n].ch && (0 == kk && (kk = n), f = 1 == a.m[l][n].show() || -1 == a.m[l][n].show() ? "x<sub>" + n + "</sub>" : a.m[l][n].showabs() + "x<sub>" + n + "</sub>", "" != d ? -1 == a.m[l][n].znak ? 1 < k ? (m += " + " + f, d += " + " + f) : (d += " " + f, m += " " + f, k++) : (m += " - " + f, d += " - " + f, k++) : d = -1 == a.m[l][n].znak ? d + ("- " + f + " =") : d + (f + " ="));
  }
  g += d;
  0 != a.m[l][n].ch && (-1 == a.m[l][n].znak ? (g += " - ", m += " - ") : (g += " + ", m += " + "), g += a.m[l][n].showabs(), m += a.m[l][n].showabs());
  g += "</td></tr>";
  for (l = b + 1;l <= c;l++) {
    g += "<tr>";
    1 == l && (g += "<td rowSpan=" + c + "><img src=" + ls1 + ' width="10" height="' + 20 * c + '"/></td>');
    g += "<td>";
    d = "";
    for (n = 1;n <= e;n++) {
      0 != a.m[l][n].ch && ("" != d ? d = -1 == a.m[l][n].znak ? d + " - " : d + " + " : -1 == a.m[l][n].znak && (d += "- "), f = n == kk ? "(" + m + ")" : "x<sub>" + n + "</sub>", d = 1 != a.m[l][n].show() || -1 != a.m[l][n].show() ? d + (a.m[l][n].showabs() + f) : d + f);
    }
    "" == d && (d = "0");
    g += d + " = " + a.m[l][n].show();
    g += "</td></tr>";
  }
  return g + "</table></TBODY>";
}
;