
function str1() {
    document.getElementById("res").innerHTML = "";

    var e = new tfraction, 
        c = new tfraction, 
        a = new tfraction, 
        b = new tfraction, 
        d = new tfraction;

    e.newf(document.getElementById("n1").value);
    c.newf(document.getElementById("n2").value);
    a.newf(document.getElementById("n3").value);

    if (0 != e.er || 0 != c.er || 0 != a.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
    }

    b = oms1(oms1(e, c), a);
    b.zn *= 2;
    b.simplify();

    if (-1 == e.znak || -1 == c.znak || -1 == a.znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }

    if (-1 == oms2(b, e).znak || -1 == oms2(b, c).znak || -1 == oms2(b, a).znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }

    var d = oms3(oms3(oms3(b, oms2(b, e)), oms2(b, c)), oms2(b, a)), 
        k = new TfrRes, 
        f = new TfrRes;

    f.addfr("<div class=formula>a</div> + <div class=formula>b</div> + <div class=formula>c</div>", "2");
    k.add("<div class=formula>" + jf2 + "</div> =&nbsp;");
    k.add(f.show());
    f.clear();
    f.addfr("1", "2");
    k.add("&nbsp;=&nbsp;");
    k.add(f.show());
    k.add("(");
    k.add(e.showtab());
    k.add("&nbsp;+&nbsp;");
    k.add(c.showtab());
    k.add("&nbsp;+&nbsp;");
    k.add(a.showtab());
    k.add(") = &nbsp;");
    k.add(b.showtab());

    f = k.show() + "<br>";
    f += jf1 + " = " + MQ + "<div class=sqrt><div class=formula>" + jf2 + "</div>(<div class=formula>" + jf2 + " - a</div>)(<div class=formula>" + jf2 + " - b</div>)(<div class=formula>" + jf2 + " - c</div>)</div> = <br><br>";
    f += "= " + MQ + "<div class=sqrt>" + b.showzn() + "(" + b.show() + " - " + e.show() + ")(" + b.show() + " - " + c.show() + ")(" + b.show() + " - " + a.show() + ")</div> =";
  
    k.clear();
    k.add("&nbsp;=&nbsp;" + MQ + "<div class=sqrt>" + b.showzn() + mn + oms2(b, e).showzn() + mn + oms2(b, c).showzn() + mn + oms2(b, a).showzn() + "</div>");
    k.add("&nbsp;=&nbsp;" + MQ + "<div class=sqrt>" + d.show() + "</div>");
    k.add(sqrtanswer(d));

    f += "<br><br>" + k.show();
    setFocus(f);
}

function c_sc(e) {
    1 == e && (document.getElementById("st").innerHTML = j3, document.getElementById("st1").innerHTML = "a");
    2 == e && (document.getElementById("st").innerHTML = j4, document.getElementById("st1").innerHTML = "d");
}

function c_sc4(e) {
    switch(e) {
        case "1":
            document.getElementById("sst1").innerHTML = 'a =';
            document.getElementById("sst2").innerHTML = 'b =';
            document.getElementById("sst3").innerHTML = 'c =';
            document.getElementById("st3").style.display = "block";
            document.getElementById("st4").style.display = "none";
            break;
        case "2":
            document.getElementById("sst1").innerHTML = '<div class="sel"> <select id="vform1" onchange=c_sc5(this.value)  class="browser-default""><option value="1" selected="true" class="my-option">a</option><option value="2" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>';
            document.getElementById("sst2").innerHTML = '<div class=sel><select id="vform2" onchange=c_sc6(this.value)  class="browser-default""><option value="2" selected="true" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>';
            document.getElementById("sst3").innerHTML = '<div id=st5 class="formula">' + j5 + " =</div>";
            document.getElementById("st3").style.display = "block";
            document.getElementById("st4").style.display = "none";
            break;
        case "3":
            document.getElementById("sst1").innerHTML = '<div class=sel><select id="vform1" onchange=c_sc7(this.value)  class="browser-default""><option value="1" selected="true" class="my-option">a</div></option><option value="2" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>';
            document.getElementById("sst2").innerHTML = '<div class="formula" id=st5>h<sub>a</sub> =</div>';
            document.getElementById("st3").style.display = "none";
            document.getElementById("st4").style.display = "none";
            break;
        case "4":
            document.getElementById("sst1").innerHTML = '<div class="formula">a =</div>';
            document.getElementById("sst2").innerHTML = '<div class="formula">b =</div>';
            document.getElementById("sst3").innerHTML = '<div class="formula">c =</div>';
            document.getElementById("sst4").innerHTML = '<div class="formula">R =</div>';
            document.getElementById("st3").style.display = "block";
            document.getElementById("st4").style.display = "block";
            break;
        case "5":
            document.getElementById("sst1").innerHTML = '<div class="formula">a =</div>';
            document.getElementById("sst2").innerHTML = '<div class="formula">b =</div>';
            document.getElementById("sst3").innerHTML = '<div class="formula">c =</div>';
            document.getElementById("sst4").innerHTML = '<div class="formula">r =</div>';
            document.getElementById("st3").style.display = "block";
            document.getElementById("st4").style.display = "block";
            break;
        case "6":
            document.getElementById("sst1").innerHTML = '<div class="formula">' + jf2 + " =</div>";
            document.getElementById("sst2").innerHTML = '<div class="formula">r =</div>';
            document.getElementById("st3").style.display = "none";
            document.getElementById("st4").style.display = "none";
            break;
        case "7":
            document.getElementById("sst1").innerHTML = '<div class=sel><select  class="browser-default" id="vform1" onchange=c_sc8(this.value) "><option value="1" selected="true" class="my-option">a</div></option><option value="2" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>';
            document.getElementById("sst2").innerHTML = '<div class=sel><select  class="browser-default" id="vform2" "><option value="2" selected="true" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>';
            document.getElementById("sst3").innerHTML = '<div class=sel><select  class="browser-default" id="vform3" "><option value="1" selected="true" class="my-option">' + j3 + '</div></option><option value="2" class="my-option">' + j4 + '</option><option value="3" class="my-option">' + j5 + "</option></select></div>";
            document.getElementById("st3").style.display = "block";
            document.getElementById("st4").style.display = "none";
            break;
        case "8":
            document.getElementById("sst1").innerHTML = '<div class=sel><select  class="browser-default" id="vform1" "><option value="1" selected="true" class="my-option">a</div></option><option value="2" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>';
            document.getElementById("sst2").innerHTML = '<div class=sel><select  class="browser-default" id="vform2" onchange=c_sc9(this.value) "><option value="1" selected="true" class="my-option">' + j3 + '</div></option><option value="2" class="my-option">' + j4 + '</option><option value="3" class="my-option">' + j5 + "</option></select></div>";
            document.getElementById("sst3").innerHTML = '<div class=sel><select  class="browser-default" id="vform3" "><option value="2" selected="true" class="my-option">' + j4 + '</option><option value="3" class="my-option">' + j5 + "</option></select></div>";
            document.getElementById("st3").style.display = "block";
            document.getElementById("st4").style.display = "none";
            break;
        case "9":
            document.getElementById("sst1").innerHTML = '<div class="formula">R</div>', document.getElementById("sst2").innerHTML = '<div class=sel><select  class="browser-default" id="vform2" onchange=c_sc9(this.value)"><option value="1" selected="true" class="my-option">' + j3 + '</div></option><option value="2" class="my-option">' + j4 + '</option><option value="3" class="my-option">' + j5 + "</option></select></div>", document.getElementById("sst3").innerHTML = '<div class=sel><select id="vform3" class="browser-default"><option value="2" selected="true" class="my-option">' +
            j4 + '</option><option value="3" class="my-option">' + j5 + "</option></select></div>", document.getElementById("st3").style.display = "block", document.getElementById("st4").style.display = "none";
    }
}

function c_sc5(e) {
    var c = document.getElementById("vform2").value;
    "1" == e && (document.getElementById("sst2").innerHTML = '<div class=sel><select id="vform2" onchange=c_sc6(this.value) class="browser-default"><option value="2" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>');
    "2" == e && (document.getElementById("sst2").innerHTML = '<div class=sel><select id="vform2" onchange=c_sc6(this.value) class="browser-default"><option value="1" class="my-option">a</option><option value="3" class="my-option">c</option></select></div>');
    "3" == e && (document.getElementById("sst2").innerHTML = '<div class=sel><select id="vform2" onchange=c_sc6(this.value) class="browser-default"><option value="1" class="my-option">a</option><option value="2" class="my-option">b</option></select></div>');
    e == c && (c = 1 == e ? 2 : 1);
    document.getElementById("vform2").value = c;
    if ("1" == e && "2" == c || "1" == c && "2" == e) {
        document.getElementById("st5").innerHTML = j5;
    }
    if ("1" == e && "3" == c || "1" == c && "3" == e) {
        document.getElementById("st5").innerHTML = j4;
    }
    if ("2" == e && "3" == c || "2" == c && "3" == e) {
        document.getElementById("st5").innerHTML = j3;
    }
}

function c_sc6(e) {
    var c = document.getElementById("vform1").value;
    if ("1" == e && "2" == c || "1" == c && "2" == e) {
        document.getElementById("st5").innerHTML = j5;
    }
    if ("1" == e && "3" == c || "1" == c && "3" == e) {
        document.getElementById("st5").innerHTML = j4;
    }
    if ("2" == e && "3" == c || "2" == c && "3" == e) {
        document.getElementById("st5").innerHTML = j3;
    }
}

function c_sc7(e) {
    switch(e) {
        case "1":
            document.getElementById("st5").innerHTML = "h<sub>a</sub>";
            break;
        case "2":
            document.getElementById("st5").innerHTML = "h<sub>b</sub>";
            break;
        case "3":
            document.getElementById("st5").innerHTML = "h<sub>c</sub>";
    }
}

function c_sc8(e) {
    var c = document.getElementById("vform2").value;
    "1" == e && (document.getElementById("sst2").innerHTML = '<div class=sel><select id="vform2" class="browser-default"><option value="2" class="my-option">b</option><option value="3" class="my-option">c</option></select></div>');
    "2" == e && (document.getElementById("sst2").innerHTML = '<div class=sel><select id="vform2" class="browser-default"><option value="1" class="my-option">a</option><option value="3" class="my-option">c</option></select></div>');
    "3" == e && (document.getElementById("sst2").innerHTML = '<div class=sel><select id="vform2" class="browser-default"><option value="1" class="my-option">a</option><option value="2" class="my-option">b</option></select></div>');
    e == c && (c = 1 == e ? 2 : 1);
    document.getElementById("vform2").value = c;
}

function c_sc9(e) {
    var c = document.getElementById("vform3").value;
    1 == e && (document.getElementById("sst3").innerHTML = '<div class=sel><select id="vform3" class="browser-default"><option value="2" selected="true" class="my-option">' + j4 + '</option><option value="3" class="my-option">' + j5 + "</option></select></div>");
    2 == e && (document.getElementById("sst3").innerHTML = '<div class=sel><select id="vform3" class="browser-default"><option value="1" selected="true" class="my-option">' + j3 + '</option><option value="3" class="my-option">' + j5 + "</option></select></div>");
    3 == e && (document.getElementById("sst3").innerHTML = '<div class=sel><select id="vform3" class="browser-default"><option value="1" selected="true" class="my-option">' + j3 + '</option><option value="2" class="my-option">' + j4 + "</option></select></div>");
    e == c && (c = 1 == e ? 2 : 1);
    document.getElementById("vform3").value = c;
}

function str2() {
    var e = new tfraction, c = new tfraction, a = new tfraction, b = new tfraction;
    e.newf(document.getElementById("n1").value);
    c.newf(document.getElementById("n2").value);
    a.newf(document.getElementById("n3").value);
    if (0 != e.er || 0 != c.er || 0 != a.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    b = oms3(e, c);
    b.zn *= 2;
    b.simplify();
    if (-1 == e.znak || -1 == c.znak || -1 == a.znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    180 <= a.ch / a.zn && (setFocus("<font class=n>" + j2 + "</font>"), exit);
    var d = new TfrRes;
    d.addstr("sin&nbsp;");
    d.addstr(a.showtab());
    var k = d.show();
    d.clear();
    var f = Math.sin(3141592 * a.ch / (18E7 * a.zn));
    30 != a.ch && 150 != a.ch || 1 != a.zn ? 60 != a.ch && 120 != a.ch || 1 != a.zn ? 45 != a.ch && 135 != a.ch || 1 != a.zn ? 90 == a.ch && 1 == a.zn && (k = "", f = 1) : (b.zn *= 2, k = MQ + "<div class=sqrt>2</div>", f = Math.sqrt(2)) : (b.zn *= 2, k = MQ + "<div class=sqrt>3</div>", f = Math.sqrt(3)) : (b.zn *= 2, f = 1, k = "");
    b.simplify();
    var l = document.getElementById("vform1").value, g = document.getElementById("vform2").value, m, p, n;
    if (1 == g && 2 == l || 1 == l && 2 == g) {
        m = j5, p = "a", n = "b";
    }
    if (1 == g && 3 == l || 1 == l && 3 == g) {
        m = j4, p = "a", n = "c";
    }
    if (2 == g && 3 == l || 2 == l && 3 == g) {
        m = j3, p = "b", n = "c";
    }
    d.add(jf1 + " =&nbsp;");
    d.addfr("1", "2");
    d.add('<div class="formula">' + p + " " + mn + " " + n + " sin " + m + "</div> =&nbsp;");
    d.addfr("1", "2");
    d.addstr(mn);
    d.addstr(e.showtab());
    d.addstr(mn);
    d.addstr(c.showtab());
    d.addstr(mn + "sin&nbsp;");
    d.addstr(a.showtab());
    d.addstr("&nbsp;=&nbsp;");
    d.addstr(b.showtab());
    d.addstr(k);
    1 == f && b.isdecimal() ? 1 != b.d && b.isdecimal() && 1 != b.zn && (d.addstr("&nbsp;=&nbsp;"), d.addstr(b.ch / b.zn)) : (d.addstr(j6), d.addstr(b.ch * f / b.zn));
    setFocus(d.show());
}

function str() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction, a = new tfraction, b = new tfraction, d = new tfraction, k = new tfraction;
    switch(document.getElementById("vform").value) {
        case "1":
            str1();
            exit;
            break;
        case "2":
            str2();
            exit;
            break;
        case "3":
            e.newf(document.getElementById("n1").value);
            c.newf(document.getElementById("n2").value);
            if (0 != e.er || 0 != c.er) {
                setFocus("<font class=n>" + j1 + "</font>"), exit;
            }
            d = oms3(e, c);
            d.zn *= 2;
            d.simplify();
            if (-1 == e.znak || -1 == c.znak) {
                setFocus("<font class=n>" + j2 + "</font>"), exit;
            }
            var f = document.getElementById("vform1").value, l;
            1 == f && (l = "a");
            2 == f && (l = "b");
            3 == f && (l = "c");
            var g = new TfrRes;
            g.add(jf1 + " =&nbsp;");
            g.addfr("1", "2");
            g.add("&nbsp;" + mn + ' <div class="formula">' + l + " " + mn + " h<sub>" + l + "</sub></div> =&nbsp;");
            g.addfr("1", "2");
            g.addstr(mn);
            g.addstr(e.showtab());
            g.addstr(mn);
            g.addstr(c.showtab());
            g.addstr("&nbsp;=&nbsp;");
            g.add(d.showtab());
            d.isdecimal() ? 1 != d.d && d.isdecimal() && 1 != d.zn && (g.addstr("&nbsp;=&nbsp;"), g.addstr(d.ch / d.zn)) : (g.addstr(j6), g.addstr(d.ch / d.zn));
            setFocus(g.show());
            break;
        case "4":
            e.newf(document.getElementById("n1").value);
            c.newf(document.getElementById("n2").value);
            a.newf(document.getElementById("n3").value);
            b.newf(document.getElementById("n4").value);
            if (0 != e.er || 0 != c.er || 0 != a.er || 0 != b.er) {
                setFocus("<font class=n>" + j1 + "</font>"), exit;
            }
            d = oms4(oms3(oms3(e, c), a), b);
            d.zn *= 4;
            d.simplify();
            if (-1 == e.znak || -1 == c.znak || -1 == a.znak || -1 == b.znak) {
                setFocus("<font class=n>" + j2 + "</font>"), exit;
            }
            g = new TfrRes;
            g.addstr(jf1 + " =&nbsp;");
            g.addfr("<div class=formula>a \u00b7 b \u00b7 \u0441</div>", "4R");
            g.addstr("&nbsp;=&nbsp;");
            g.addfr(e.showzn() + " " + mn + " " + c.showzn() + " " + mn + " " + a.showzn(), "4 " + mn + " " + b.showzn());
            g.addstr("&nbsp;=&nbsp;");
            g.add(d.showtab());
            d.isdecimal() ? 1 != d.d && d.isdecimal() && 1 != d.zn && (g.addstr("&nbsp;=&nbsp;"), g.addstr(d.ch / d.zn)) : (g.addstr(j6), g.addstr(d.ch / d.zn));
            setFocus(g.show());
            break;
        case "5":
            e.newf(document.getElementById("n1").value);
            c.newf(document.getElementById("n2").value);
            a.newf(document.getElementById("n3").value);
            b.newf(document.getElementById("n4").value);
            if (0 != e.er || 0 != c.er || 0 != a.er || 0 != b.er) {
                setFocus("<font class=n>" + j1 + "</font>"), exit;
            }
            d = oms3(oms1(oms1(e, c), a), b);
            d.zn *= 2;
            d.simplify();
            if (-1 == e.znak || -1 == c.znak || -1 == a.znak || -1 == b.znak) {
                setFocus("<font class=n>" + j2 + "</font>"), exit;
            }
            g = new TfrRes;
            g.addstr(jf1 + " =&nbsp;");
            g.addfr("1", "2");
            g.addstr("(<div class=formula>a</div> + <div class=formula>b</div> + <div class=formula>c</div>) " + mn + " <div class=formula>r</div>");
            g.add("&nbsp;=&nbsp;");
            g.addfr("1", "2");
            g.add("(");
            g.add(e.showtab());
            g.add("&nbsp;+&nbsp;");
            g.add(c.showtab());
            g.add("&nbsp;+&nbsp;");
            g.add(a.showtab());
            g.add(")");
            g.add("&nbsp;" + mn + "&nbsp;");
            g.add(b.showtab());
            g.add("&nbsp;=&nbsp;");
            g.add(d.showtab());
            d.isdecimal() ? 1 != d.d && d.isdecimal() && 1 != d.zn && (g.addstr("&nbsp;=&nbsp;"), g.addstr(d.ch / d.zn)) : (g.addstr(j6), g.addstr(d.ch / d.zn));
            setFocus(g.show());
            break;
        case "6":
            e.newf(document.getElementById("n1").value);
            c.newf(document.getElementById("n2").value);
            if (0 != e.er || 0 != c.er) {
                setFocus("<font class=n>" + j1 + "</font>"), exit;
            }
            d = oms3(e, c);
            if (-1 == e.znak || -1 == c.znak) {
                setFocus("<font class=n>" + j2 + "</font>"), exit;
            }
            g = new TfrRes;
            g.add(jf1 + " = <div class=formula>" + jf2 + " " + mn + " r</div>");
            g.add("&nbsp;=&nbsp;");
            g.add(e.showtab());
            g.add("&nbsp;" + mn + "&nbsp;");
            g.add(c.showtab());
            g.add("&nbsp;=&nbsp;");
            g.add(d.showtab());
            d.isdecimal() ? 1 != d.d && d.isdecimal() && 1 != d.zn && (g.addstr("&nbsp;=&nbsp;"), g.addstr(d.ch / d.zn)) : (g.addstr(j6), g.addstr(d.ch / d.zn));
            setFocus(g.show());
            break;
        case "7":
            e.newf(document.getElementById("n1").value);
            c.newf(document.getElementById("n2").value);
            a.newf(document.getElementById("n3").value);
            var m = new tfraction;
            new tfraction;
            d = new tfraction;
            if (0 != e.er || 0 != c.er || 0 != a.er) {
                setFocus("<font class=n>" + j1 + "</font>"), exit;
            }
            if (-1 == e.znak || -1 == c.znak || -1 == a.znak) {
                setFocus("<font class=n>" + j2 + "</font>"), exit;
            }
            180 <= a.ch / a.zn && (setFocus("<font class=n>" + j2 + "</font>"), exit);
            var f = document.getElementById("vform1").value, p = document.getElementById("vform2").value, n = document.getElementById("vform3").value, q = l = "", k = "", r, s;
            if (1 == f || 1 == p) {
                l = "a";
            }
            "" == l ? (l = "b", q = "c") : q = 2 == f || 2 == p ? "b" : "c";
            1 == n && (k = j3);
            2 == n && (k = j4);
            3 == n && (k = j5);
            if ("a" == l && "b" == q && k == j5 || "a" == l && "c" == q && k == j4 || "b" == l && "c" == q && k == j3) {
                str2();
            } else {
                g = new TfrRes;
                "a" == l && "b" == q && (ccc = "c", jja = k == j3 ? "b" : "a");
                "a" == l && "c" == q && (ccc = "b", jja = k == j3 ? "c" : "a");
                "b" == l && "c" == q && (ccc = "a", jja = k == j2 ? "c" : "b");
                jjb = jja == l ? q : l;
                1 == f && ("a" == jja ? (m = e, bb1 = c) : (m = c, bb1 = e));
                2 == f && ("b" == jja ? (m = e, bb1 = c) : (m = c, bb1 = e));
                3 == f && ("c" == jja ? (m = e, bb1 = c) : (m = c, bb1 = e));
                g.addstr("sin&nbsp;");
                g.addstr(a.showtab());
                g.show();
                g.clear();
                d.ch = m.ch;
                d.zn = m.zn;
                l = Math.sin(3141592 * a.ch / (18E7 * a.zn));
                30 != a.ch && 150 != a.ch || 1 != a.zn ? 60 != a.ch && 120 != a.ch || 1 != a.zn ? 45 != a.ch && 135 != a.ch || 1 != a.zn ? 90 == a.ch && 1 == a.zn && (l = 1) : (d.zn *= 2, l = Math.sqrt(2)) : (d.zn *= 2, l = Math.sqrt(3)) : (d.zn *= 2, l = 1);
                d.simplify();
                h = "<div class= formula>h<sub>" + ccc + "</sub></div>";
                b = j9 + "<br><br>";
                g.addstr(h + " = <div class= formula>" + jja + mn + "sin " + k + "</div> =&nbsp;");
                g.addstr(m.showtab());
                g.addstr("sin&nbsp;");
                g.addstr(a.showtab());
                1 == l && (g.addstr("&nbsp;=&nbsp;"), g.addstr(d.showtab()));
                1 == l && d.isdecimal() ? 1 != d.d && d.isdecimal() && 1 != d.zn && (g.addstr("&nbsp;=&nbsp;"), g.addstr(d.ch / d.zn)) : (g.addstr(j6), g.addstr(d.ch * l / d.zn));
                hv = d.ch * l / d.zn;
                b += g.show() + "<br>";
                g.clear();
                if (0 >= e.ch / e.zn - hv || 0 >= c.ch / c.zn - hv) {
                    setFocus("<font class=n>" + j2 + "</font>"), exit;
                }
                e = j10;
                b = 90 < a.ch / a.zn ? b + e.replace("{1}", "<div class=formula>" + k + "</div> &gt; 90") : b + e.replace("{1}", "<div class=formula>" + k + "</div> &#8804; 90");
                b += "<br><br><div class= formula>" + ccc + "</div> = " + MQ + "<div class=sqrt><div class=formula>" + jjb + "</div><sup>2</sup> - " + h + "<sup>2</sup></div>";
                90 < a.ch / a.zn ? (b += " - ", cv = Math.sqrt(bb1.ch * bb1.ch / (bb1.zn * bb1.zn) - hv * hv) - Math.sqrt(m.ch * m.ch / (m.zn * m.zn) - hv * hv)) : (b += " + ", cv = Math.sqrt(bb1.ch * bb1.ch / (bb1.zn * bb1.zn) - hv * hv) + Math.sqrt(m.ch * m.ch / (m.zn * m.zn) - hv * hv));
                b += MQ + "<div class=sqrt><div class=formula>" + jja + "</div><sup>2</sup> - " + h + "<sup>2</sup></div>" + j6 + cv;
                g.addstr(jf1 + " = &nbsp;");
                g.addfr("1", "2");
                g.addstr("<div class=formula>" + ccc + "</div> " + mn + h + j6 + cv * hv / 2);
                b += g.show();
                setFocus(b);
            }
            break;
        case "8":
            e.newf(document.getElementById("n1").value);
            c.newf(document.getElementById("n2").value);
            a.newf(document.getElementById("n3").value);
            if (0 != e.er || 0 != c.er || 0 != a.er) {
                setFocus("<font class=n>" + j1 + "</font>"), exit;
            }
            if (-1 == e.znak || -1 == c.znak || -1 == a.znak) {
                setFocus("<font class=n>" + j2 + "</font>"), exit;
            }
            var k = "", t, f = document.getElementById("vform1").value, p = document.getElementById("vform2").value, n = document.getElementById("vform3").value;
            if (1 == p || 1 == n) {
                k = j3;
            }
            "" == k ? (k = j4, r = j5, s = j3) : 2 == p || 2 == n ? (r = j4, s = j5) : (r = j5, s = j4);
            d.ch = 180;
            d.zn = 1;
            d = oms2(oms2(d, c), a);
            g = new TfrRes;
            g.add("<div class=formula>" + s + "</div> = 180 - <div class=formula>" + k + "</div> - <div class=formula>" + r + "</div>");
            g.add("&nbsp;=&nbsp;");
            g.add(d.showtab());
            b = g.show() + j7;
            1 == f && (l = "a", q = "b", m = j5, r = j3, s = j4, t = 1 == p ? Math.sin(3141592 * a.ch / (18E7 * a.zn)) * Math.sin(3141592 * d.ch / (18E7 * d.zn)) / Math.sin(3141592 * c.ch / (18E7 * c.zn)) : 1 == n ? Math.sin(3141592 * c.ch / (18E7 * c.zn)) * Math.sin(3141592 * d.ch / (18E7 * d.zn)) / Math.sin(3141592 * a.ch / (18E7 * a.zn)) : Math.sin(3141592 * c.ch / (18E7 * c.zn)) * Math.sin(3141592 * a.ch / (18E7 * a.zn)) / Math.sin(3141592 * d.ch / (18E7 * d.zn)));
            2 == f && (l = "b", q = "a", m = j5, r = j4, s = j3, t = 2 == p ? Math.sin(3141592 * a.ch / (18E7 * a.zn)) * Math.sin(3141592 * d.ch / (18E7 * d.zn)) / Math.sin(3141592 * c.ch / (18E7 * c.zn)) : 2 == n ? Math.sin(3141592 * c.ch / (18E7 * c.zn)) * Math.sin(3141592 * d.ch / (18E7 * d.zn)) / Math.sin(3141592 * a.ch / (18E7 * a.zn)) : Math.sin(3141592 * c.ch / (18E7 * c.zn)) * Math.sin(3141592 * a.ch / (18E7 * a.zn)) / Math.sin(3141592 * d.ch / (18E7 * d.zn)));
            3 == f && (l = "c", q = "b", m = j3, r = j5, s = j4, t = 3 == p ? Math.sin(3141592 * a.ch / (18E7 * a.zn)) * Math.sin(3141592 * d.ch / (18E7 * d.zn)) / Math.sin(3141592 * c.ch / (18E7 * c.zn)) : 3 == n ? Math.sin(3141592 * c.ch / (18E7 * c.zn)) * Math.sin(3141592 * d.ch / (18E7 * d.zn)) / Math.sin(3141592 * a.ch / (18E7 * a.zn)) : Math.sin(3141592 * c.ch / (18E7 * c.zn)) * Math.sin(3141592 * a.ch / (18E7 * a.zn)) / Math.sin(3141592 * d.ch / (18E7 * d.zn)));
            f = new TfrRes;
            f.addfr("<div class=formula>a</div>", "<div class=formula>sin " + j3 + "</div>");
            f.addstr("&nbsp;=&nbsp;");
            f.addfr("<div class=formula>b</div>", "<div class=formula>sin " + j4 + "</div>");
            f.addstr("&nbsp;=&nbsp;");
            f.addfr("<div class=formula>c</div>", "<div class=formula>sin " + j5 + "</div>");
            b += f.show() + j8;
            f.clear();
            f.addstr(jf1 + " =&nbsp;");
            f.addfr("1", "2");
            f.addstr("<div class=formula>" + l + " " + mn + " " + q + " sin " + m + "</div>");
            f.addstr("&nbsp;=&nbsp;");
            f.addfr("<div class=formula>" + l + "</div><sup>2</sup> <div class=formula>sin " + s + " sin " + m + "</div>", "2 <div class=formula>sin " + r + "</div>");
            f.addstr(j6 + e.ch / e.zn * (e.ch / e.zn) * t / 2);
            b += f.show();
            setFocus(b);
            break;
        case "9":
            e.newf(document.getElementById("n1").value);
            c.newf(document.getElementById("n2").value);
            a.newf(document.getElementById("n3").value);
            if (0 != e.er || 0 != c.er || 0 != a.er) {
                setFocus("<font class=n>" + j1 + "</font>"), exit;
            }
            if (-1 == e.znak || -1 == c.znak || -1 == a.znak) {
                setFocus("<font class=n>" + j2 + "</font>"), exit;
            }
            k = "";
            p = document.getElementById("vform2").value;
            n = document.getElementById("vform3").value;
            if (1 == p || 1 == n) {
                k = j3;
            }
            "" == k ? (k = j4, r = j5, s = j3) : 2 == p || 2 == n ? (r = j4, s = j5) : (r = j5, s = j4);
            d.ch = 180;
            d.zn = 1;
            d = oms2(oms2(d, c), a);
            g = new TfrRes;
            f = new TfrRes;
            g.add("<div class=formula>" + s + "</div> = 180 - <div class=formula>" + k + "</div> - <div class=formula>" + r + "</div>&nbsp;=&nbsp;");
            g.add(d.showtab());
            b = g.show() + j7;
            g.clear();
            f.addfr("<div class=formula>a</div>", "<div class=formula>sin " + j3 + "</div>");
            f.addstr("&nbsp;=&nbsp;");
            f.addfr("<div class=formula>b</div>", "<div class=formula>sin " + j4 + "</div>");
            f.addstr("&nbsp;=&nbsp;");
            f.addfr("<div class=formula>c</div>", "<div class=formula>sin " + j5 + "</div>");
            f.addstr("&nbsp;=&nbsp;2<div class=formula>R</div>");
            b += f.show() + j8;
            f.clear();
            f.addstr(jf1 + " =&nbsp;");
            f.addfr("<div class=formula>a " + mn + " b " + mn + " c</div>", "4<div class=formula> R</div>");
            f.addstr("&nbsp;=&nbsp;");
            f.addfr("8<div class=formula> R</div><sup>3</sup><div class=formula> sin " + j3 + " sin " + j4 + " sin " + j5 + "</div>", "4<div class=formula> R</div>");
            f.addstr("&nbsp;=&nbsp;");
            f.addstr("2<div class=formula> R</div><sup>2</sup><div class=formula> sin " + j3 + " sin " + j4 + " sin " + j5 + "</div>");
            b += f.show();
            f.clear();
            k = oms3(e, e);
            k.ch *= 2;
            k.simplify();
            g.add(jf1 + " =&nbsp;");
            g.add(k.showtab());
            g.add("&nbsp;<div class=formula> sin</div>&nbsp;");
            g.add(c.showtab());
            g.add("&nbsp;<div class=formula> sin</div>&nbsp;");
            g.add(a.showtab());
            g.add("&nbsp;<div class=formula> sin</div>&nbsp;");
            g.add(d.showtab());
            g.add(j6);
            g.add(k.ch / k.zn * Math.sin(3141592 * d.ch / (18E7 * d.zn)) * Math.sin(3141592 * c.ch / (18E7 * c.zn)) * Math.sin(3141592 * a.ch / (18E7 * a.zn)));
            b += g.show();
            setFocus(b);
    }
}

function quadrilateral_select(e) {
    q_type = e;
    for (i = 1;3 >= i;i++) {
        i != e ? document.getElementById("st" + i).style.display = "none" : document.getElementById("st" + i).style.display = "block";
    }
}

function squadrilateral() {
    switch(q_type) {
        case "1":
            s_diagonal();
            break;
        case "2":
            s_side();
            break;
        case "3":
            s_radius();
    }
}

function s_diagonal() {
    document.getElementById("res").innerHTML = "";
    var e = 1, c = new tfraction, a = [];
    for (i = 1;4 > i;i++) {
        a[i] = new tfraction;
        a[i].newf(document.getElementById("d" + i).value);
        if (0 < a[i].er) {
            setFocus("<font class=n>" + j1 + "</font>");
            return;
        }
        if (0 > a[i].znak || 0 == a[i].ch) {
            setFocus("<font class=n>" + j2 + "</font>");
            return;
        }
    }
    e = "";
    if (180 < a[3].ch / a[3].zn) {
        setFocus("<font class=n>" + j2 + "</font>");
    } else {
        var b = new TfrRes, c = oms3(a[1], a[2]);
        c.zn *= 2;
        b.addstr("sin&nbsp;");
        b.addstr(a[3].showtab());
        var d = b.show(), k = Math.sin(3141592 * a[3].ch / (18E7 * a[3].zn));
        30 != a[3].ch && 150 != a[3].ch || 1 != a[3].zn ? 60 != a[3].ch && 120 != a[3].ch || 1 != a[3].zn ? 45 != a[3].ch && 135 != a[3].ch || 1 != a[3].zn ? 90 == a[3].ch && 1 == a[3].zn && (d = "", k = 1) : (c.zn *= 2, d = MQ + "<div class=sqrt>2</div>", k = Math.sqrt(2)) : (c.zn *= 2, d = MQ + "<div class=sqrt>3</div>", k = Math.sqrt(3)) : (c.zn *= 2, k = 1, d = "");
        c.simplify();
        b.clear();
        b.addstr(jf1 + "&nbsp;=&nbsp;");
        b.addfr("1", "2");
        b.addstr("<div class=formula>d</div><sub>1</sub>" + mn + "<div class=formula>d</div><sub>2</sub> sin <div class=formula>" + j3 + "</div>&nbsp;=&nbsp;");
        b.addfr("1", "2");
        b.addstr(a[1].showtab());
        b.addstr(mn);
        b.addstr(a[2].showtab());
        b.addstr(mn + "sin&nbsp;");
        b.addstr(a[3].showtab());
        b.addstr("&nbsp;=&nbsp;");
        b.addstr(c.showtab());
        b.addstr(d);
        1 == k && c.isdecimal() ? 1 != c.d && c.isdecimal() && 1 != c.zn && (b.addstr("&nbsp;=&nbsp;"), b.addstr(c.ch / c.zn)) : (b.addstr(j5), b.addstr(c.ch * k / c.zn));
        e += b.show();
        setFocus(e);
    }
}

function s_radius() {
    document.getElementById("res").innerHTML = "";
    var e = 1, c = new tfraction, a = [];
    for (i = 1;3 > i;i++) {
        a[i] = new tfraction;
        a[i].newf(document.getElementById("r" + i).value);
        if (0 < a[i].er) {
            setFocus("<font class=n>" + j1 + "</font>");
            return;
        }
        if (0 > a[i].znak || 0 == a[i].ch) {
            setFocus("<font class=n>" + j2 + "</font>");
            return;
        }
    }
    var e = "", c = oms3(a[1], a[2]), b = new TfrRes;
    b.addstr(jf1 + "&nbsp;=&nbsp;");
    b.addstr("<div class=formula>" + jf2 + "</div>" + mn + "<div class=formula>r</div>&nbsp;=&nbsp;");
    b.addstr(a[1].showtab());
    b.addstr(mn);
    b.addstr(a[2].showtab());
    b.addstr("&nbsp;=&nbsp;");
    b.addstr(c.showtab());
    c.isdecimal() ? 1 != c.d && c.isdecimal() && 1 != c.zn && (b.addstr("&nbsp;=&nbsp;"), b.addstr(c.ch / c.zn)) : (b.addstr(j5), b.addstr(c.ch / c.zn));
    e += b.show();
    setFocus(e);
}
function s_side() {
    document.getElementById("res").innerHTML = "";
    var e = 1, c = new tfraction, a = new tfraction, b = new tfraction, d = new tfraction, k = [];
    for (i = 1;7 > i;i++) {
        k[i] = new tfraction;
        k[i].newf(document.getElementById("a" + i).value);
        if (0 < k[i].er) {
            setFocus("<font class=n>" + j1 + "</font>");
            return;
        }
        if (0 > k[i].znak || 0 == k[i].ch) {
            setFocus("<font class=n>" + j2 + "</font>");
            return;
        }
    }
    e = "";
    if (180 < k[6].ch / k[6].zn) {
        setFocus("<font class=n>" + j2 + "</font>");
    } else {
        if (180 < k[5].ch / k[5].zn) {
            setFocus("<font class=n>" + j2 + "</font>");
        } else {
            var f = new TfrRes, b = oms1(k[1], oms1(k[2], oms1(k[3], k[4])));
            b.zn *= 2;
            b.simplify();
            c = oms3(oms2(b, k[1]), oms3(oms2(b, k[2]), oms3(oms2(b, k[3]), oms2(b, k[4]))));
            if (0 > c.znak || 0 > c.ch / c.zn) {
                setFocus("<font class=n>" + j2 + "</font>");
            } else {
                a = oms3(k[1], oms3(k[2], oms3(k[3], k[4])));
                d = oms1(k[5], k[6]);
                d.zn *= 2;
                d.simplify();
                var l = "cos<sup>2</sup>&nbsp;" + d.showzn(), g = Math.cos(3141592 * d.ch / (18E7 * d.zn)), g = g * g;
                30 != d.ch && 150 != d.ch || 1 != d.zn ? 60 != d.ch && 120 != d.ch || 1 != d.zn ? 45 != d.ch && 135 != d.ch || 1 != d.zn ? 90 == d.ch && 1 == d.zn && (l = "", g = 0) : (a.zn *= 2, l = "", g = 1) : (a.zn *= 4, l = "", g = 1) : (a.zn *= 4, a.ch *= 3, l = "", g = 1);
                a.simplify();
                f.clear();
                f.addstr(jf1 + "&nbsp;=&nbsp;");
                f.addstr(MQ + "<div class=sqrt>(<div class=formula>" + jf2 + " - a</div>)(<div class=formula>" + jf2 + " - b</div>)(<div class=formula>" + jf2 + " - c</div>)(<div class=formula>" + jf2 + " - d</div>) - <div class=formula>abcd</div> cos<sup>2</sup> <div class=formula>" + j6 + "</div></div>");
                e += f.show() + "<br>";
                f.clear();
                f.addstr("<div class=formula>" + jf2 + "</div>&nbsp;=&nbsp;");
                f.addfr("<div class=formula>a</div> + <div class=formula>b</div> + <div class=formula>c</div> + <div class=formula>d</div>", "2");
                f.addstr("&nbsp;=&nbsp;");
                f.addfr("1", "2");
                f.addstr("(");
                f.addstr(k[1].showtab());
                f.addstr("&nbsp;+&nbsp;");
                f.addstr(k[2].showtab());
                f.addstr("&nbsp;+&nbsp;");
                f.addstr(k[3].showtab());
                f.addstr("&nbsp;+&nbsp;");
                f.addstr(k[4].showtab());
                f.addstr(")");
                f.addstr("&nbsp;=&nbsp;");
                f.addstr(b.showtab());
                e += f.show() + "<br>";
                f.clear();
                f.addstr("<div class=formula>" + j6 + "</div>&nbsp;=&nbsp;");
                f.addfr("<div class=formula>" + j3 + "</div> + <div class=formula>" + j4 + "</div>", "2");
                f.addstr("&nbsp;=&nbsp;");
                f.addfr("1", "2");
                f.addstr("(");
                f.addstr(k[5].showtab());
                f.addstr("&nbsp;+&nbsp;");
                f.addstr(k[6].showtab());
                f.addstr(")");
                f.addstr("&nbsp;=&nbsp;");
                f.addstr(d.showtab());
                e += f.show() + "<br>";
                f.clear();
                f.addstr(jf1 + "&nbsp;=&nbsp;");
                f.addstr("\u221a<div class=sqrt>(" + b.show() + "&nbsp;-&nbsp;" + k[1].show() + ")(" + b.show() + "&nbsp;-&nbsp;" + k[2].show() + ")(" + b.show() + "&nbsp;-&nbsp;" + k[3].show() + ")(" + b.show() + "&nbsp;-&nbsp;" + k[4].show() + ")&nbsp;-&nbsp;" + k[1].showzn() + mn + k[2].showzn() + mn + k[3].showzn() + mn + k[4].showzn() + "&nbsp;cos<sup>2</sup>&nbsp;" + d.showzn() + "</div>&nbsp;=");
                e += f.show() + "<br>";
                f.clear();
                f.addstr("=&nbsp;");
                f.addstr("\u221a<div class=sqrt>" + c.show() + "&nbsp;-&nbsp;" + a.show() + "&nbsp;" + l + "</div>");
                i = (c.ch * a.zn - a.ch * g * c.zn) / (c.zn * a.zn);
                0 > i ? setFocus("<font class=n>" + j2 + "</font>") : ("" != l ? (f.addstr(j5), f.addstr(Math.sqrt(i))) : (a.ch *= g, c = oms2(c, a), f.addstr("&nbsp;=&nbsp;"), f.addstr("\u221a<div class=sqrt>" + c.show() + "</div>"), f.addstr(sqrtanswer(c))), e += f.show(), setFocus(e));
            }
        }
    }
}
function c_sc1(e) {
    1 == e && (document.getElementById("st").innerHTML = j3, document.getElementById("st1").innerHTML = "r");
    2 == e && (document.getElementById("st").innerHTML = j4, document.getElementById("st1").innerHTML = "d");
}
function scircle() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction;
    e.newf(document.getElementById("n1").value);
    0 != e.er && (setFocus("<font class='n'>" + j1 + "</font>"), exit);
    -1 == e.znak && (setFocus("<font class='n'>" + j2 + "</font>"), exit);
    var a = new TfrRes, c = oms3(e, e);
    1 == document.getElementById("vform").value ? (a.addstr(jf1 + ' = <div class="formula">' + j5 + " r</div><sup>2</sup> =&nbsp;"), a.addstr('<div class="formula">' + j5 + "</div>"), a.addstr(e.showzn()), a.addstr("<sup>2</sup> =&nbsp;")) : 2 == document.getElementById("vform").value && (a.addstr(jf1 + " =&nbsp;"), a.addfr("1", "4"), a.addstr('<div class="formula">' + j5 + " d</div><sup>2</sup> =&nbsp;"), a.addfr("1", "4"), a.addstr('<div class="formula">' + j5 + "</div>"), a.addstr(e.showzn()), a.addstr("<sup>2</sup> =&nbsp;"), c.zn *= 4, c.simplify());
    a.addstr(c.showtab());
    a.addstr('&nbsp;<div class="formula">' + j5 + "</div>");
    a.addstr(j6 + 3141592 * c.ch / (1E6 * c.zn));
    setFocus(a.show());
}
function c_sc3(e) {
    1 == e && (st1 = "a =", st2 = j3 +" =");
    2 == e && (st1 = "a =", st2 = "h =");
    3 == e && (st1 = "d<sub>1</sub>=", st2 = "d<sub>2</sub>=");
    document.getElementById("st1").innerHTML = st1;
    document.getElementById("st2").innerHTML = st2;
}
function sdiamond() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction, a = new tfraction;
    e.newf(document.getElementById("n1").value);
    c.newf(document.getElementById("n2").value);
    if (0 != e.er || 0 != c.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (-1 == e.znak || -1 == c.znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    var b = new TfrRes;
    if (1 == document.getElementById("vform").value) {
        if (180 < c.ch / c.zn) {
            setFocus("<font class=n>" + j2 + "</font>");
            return;
        }
        a = oms3(e, e);
        b.addstr('<div class="formula">sin</div>&nbsp;');
        b.addstr(c.showtab());
        var d = b.show(), k = Math.sin(3141592 * c.ch / (18E7 * c.zn));
        30 != c.ch && 150 != c.ch || 1 != c.zn ? 60 != c.ch && 120 != c.ch || 1 != c.zn ? 45 != c.ch && 135 != c.ch || 1 != c.zn ? 90 == c.ch && 1 == c.zn && (d = "", k = 1) : (a.zn *= 2, d = MQ + "<div class=sqrt>2</div>", k = Math.sqrt(2)) : (a.zn *= 2, d = MQ + "<div class=sqrt>3</div>", k = Math.sqrt(3)) : (a.zn *= 2, k = 1, d = "");
        a.simplify();
        b.clear();
        b.addstr(jf1 + ' = <div class="formula">a<sup>2</sup> sin ' + j3 + "</div> =&nbsp;");
        b.addstr(e.showzn());
        b.addstr('<sup>2</sup> <div class="formula">sin</div>&nbsp;');
        b.addstr(c.showtab());
        b.addstr("&nbsp;=&nbsp;");
        b.addstr(a.showtab());
        b.addstr(d);
        1 == k && a.isdecimal() ? 1 != a.d && a.isdecimal() && 1 != a.zn && (b.addstr("&nbsp;=&nbsp;"), b.addstr(a.ch / a.zn)) : (b.addstr(j4), b.addstr(a.ch * k / a.zn));
    }
    a = oms3(e, c);
    2 == document.getElementById("vform").value && ((b.addstr(jf1 + ' = <div class="formula">a ' + mn + " h</div> =&nbsp;"), b.addstr(e.showtab()), b.addstr("&nbsp;" + mn + "&nbsp;"), b.addstr(c.showtab()), b.addstr("&nbsp;=&nbsp;"), b.addstr(a.showtab()), a.isdecimal()) ? 1 != a.d && a.isdecimal() && 1 != a.zn && (b.addstr("&nbsp;=&nbsp;"), b.addstr(a.ch / a.zn)) : (b.addstr(j4), b.addstr(a.ch / a.zn)));
    3 == document.getElementById("vform").value && ((a.zn *= 2, a.simplify(), b.addstr(jf1 + " =&nbsp;"), b.addfr("1", "2"), b.addstr("<div class=formula>d</div><sub>1</sub> " + mn + ' <div class="formula">d</div><sub>2</sub></div>'), b.addstr("&nbsp;=&nbsp;"), b.addfr("1", "2"), b.addstr("&nbsp;" + mn + "&nbsp;"), b.addstr(e.showtab()), b.addstr("&nbsp;" + mn + "&nbsp;"), b.addstr(c.showtab()), b.addstr("&nbsp;=&nbsp;"), b.addstr(a.showtab()), a.isdecimal()) ? 1 != a.d && a.isdecimal() && 1 != a.zn &&
                                                    (b.addstr("&nbsp;=&nbsp;"), b.addstr(a.ch / a.zn)) : (b.addstr(j4), b.addstr(a.ch / a.zn)));
    setFocus(b.show());
}
function sovals() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction, a = new tfraction;
    e.newf(document.getElementById("n1").value);
    c.newf(document.getElementById("n2").value);
    if (0 != e.er || 0 != c.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (-1 == e.znak || -1 == c.znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    var b = new TfrRes, a = oms3(e, c);
    b.addstr(jf1 + ' = <div class="formula">' + j3 + " a b</div> =&nbsp;");
    b.addstr('<div class="formula">' + j3 + "</div>");
    b.addstr(e.showtab());
    b.addstr("&nbsp;" + mn + "&nbsp;");
    b.addstr(c.showtab());
    b.addstr("&nbsp;=&nbsp;");
    b.addstr(a.showtab());
    b.addstr('&nbsp;<div class="formula">' + j3 + "</div>");
    b.addstr(j4 + 3141592 * a.ch / (1E6 * a.zn));
    setFocus(b.show());
}
function copir1() {
    alert("");
}
function c_sc2(e) {
    1 == e && (document.getElementById("st2").innerHTML = "b", document.getElementById("st3").style.display = "block");
    2 == e && (document.getElementById("st2").innerHTML = "h", document.getElementById("st3").style.display = "none");
}
function sparallelogram() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction, a = new tfraction;
    e.newf(document.getElementById("n1").value);
    c.newf(document.getElementById("n2").value);
    if (0 != e.er || 0 != c.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (-1 == e.znak || -1 == c.znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    var a = oms3(e, c), b = new TfrRes;
    if (1 == document.getElementById("vform").value) {
        var d = new tfraction;
        d.newf(document.getElementById("n3").value);
        0 != d.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
        if (180 < c.ch / c.zn || -1 == d.znak) {
            setFocus("<font class=n>" + j2 + "</font>");
            return;
        }
        b.addstr('<div class="formula">sin</div>&nbsp;');
        b.addstr(d.showtab());
        var k = b.show(), f = Math.sin(3141592 * d.ch / (18E7 * d.zn));
        30 != d.ch && 150 != d.ch || 1 != d.zn ? 60 != d.ch && 120 != d.ch || 1 != d.zn ? 45 != d.ch && 135 != d.ch || 1 != d.zn ? 90 == d.ch && 1 == d.zn && (k = "", f = 1) : (a.zn *= 2, k = MQ + "<div class=sqrt>2</div>", f = Math.sqrt(2)) : (a.zn *= 2, k = MQ + "<div class=sqrt>3</div>", f = Math.sqrt(3)) : (a.zn *= 2, f = 1, k = "");
        a.simplify();
        b.clear();
        b.addstr(jf1 + ' = <div class="formula">a<sup>2</sup> sin ' + j3 + "</div> =&nbsp;");
        b.addstr(e.showzn());
        b.addstr("&nbsp;" + mn + "&nbsp;");
        b.addstr(c.showtab());
        b.addstr('&nbsp;<div class="formula">sin</div>&nbsp;');
        b.addstr(d.showtab());
        b.addstr("&nbsp;=&nbsp;");
        b.addstr(a.showtab());
        b.addstr(k);
        1 == f && a.isdecimal() ? 1 != a.d && a.isdecimal() && 1 != a.zn && (b.addstr("&nbsp;=&nbsp;"), b.addstr(a.ch / a.zn)) : (b.addstr(j4), b.addstr(a.ch * f / a.zn));
    }
    2 == document.getElementById("vform").value && ((b.addstr(jf1 + ' = <div class="formula">a ' + mn + " h</div> =&nbsp;"), b.addstr(e.showtab()), b.addstr("&nbsp;" + mn + "&nbsp;"), b.addstr(c.showtab()), b.addstr("&nbsp;=&nbsp;"), b.addstr(a.showtab()), a.isdecimal()) ? 1 != a.d && a.isdecimal() && 1 != a.zn && (b.addstr("&nbsp;=&nbsp;"), b.addstr(a.ch / a.zn)) : (b.addstr(j4), b.addstr(a.ch / a.zn)));
    setFocus(b.show());
}
function srect1() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction, a = new tfraction;
    e.newf(document.getElementById("n1").value);
    c.newf(document.getElementById("n2").value);
    if (0 != e.er || 0 != c.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    if (-1 == e.znak || -1 == c.znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    var b = new TfrRes, a = oms3(e, c);
    b.add(jf1 + ' = <div class="formula">a</div> ' + mn + ' <div class="formula">b</div> =&nbsp;');
    b.add(e.showtab());
    b.add("&nbsp;" + mn + "&nbsp;");
    b.add(c.showtab());
    b.add("&nbsp;=&nbsp;");
    b.add(a.showtab());
    a.isdecimal() ? 1 != a.d && a.isdecimal() && 1 != a.zn && (b.add("&nbsp;=&nbsp;"), b.add(a.ch / a.zn)) : (b.add(j4), b.add(a.ch / a.zn));
    setFocus(b.show());
}
function square() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction;
    e.newf(document.getElementById("n1").value);
    0 != e.er && (setFocus("<font class=n>" + j1 + "</font>"), exit);
    -1 == e.znak && (setFocus("<font class=n>" + j2 + "</font>"), exit);
    var a = new TfrRes, c = oms3(e, e);
    1 == document.getElementById("vform").value && (a.addstr(jf1 + ' = <div class="formula">a</div><sup>2</sup> =&nbsp;'), a.addstr(e.showzn() + "<sup>2</sup> =&nbsp;"));
    2 == document.getElementById("vform").value && (c.zn *= 2, c.simplify(), a.addstr(jf1 + " =&nbsp;"), a.addfr("1", "2"), a.addstr('&nbsp<div class="formula">d</div><sup>2</sup> =&nbsp;'), a.addfr("1", "2"), a.addstr(e.showzn() + "<sup>2</sup> =&nbsp;"));
    a.addstr(c.showtab());
    c.isdecimal() ? 1 != c.d && c.isdecimal() && 1 != c.zn && (a.addstr("&nbsp;=&nbsp;"), a.addstr(c.ch / c.zn)) : (a.addstr(j5), a.addstr(c.ch / c.zn));
    setFocus(a.show());
}
function strapezium() {
    document.getElementById("res").innerHTML = "";
    var e = new tfraction, c = new tfraction, a = new tfraction, b = new tfraction;
    e.newf(document.getElementById("n1").value);
    c.newf(document.getElementById("n2").value);
    a.newf(document.getElementById("n3").value);
    if (0 != e.er || 0 != c.er || 0 != a.er) {
        setFocus("<font class=n>" + j1 + "</font>"), exit;
    }
    b = oms3(oms1(e, c), a);
    b.zn *= 2;
    b.simplify();
    if (-1 == e.znak || -1 == c.znak || -1 == a.znak) {
        setFocus("<font class=n>" + j2 + "</font>"), exit;
    }
    var d = new TfrRes;
    d.addstr(jf1 + " = &nbsp;");
    d.addfr('<div class="formula">a</div> + <div class="formula">b</div>', "2");
    d.addstr("&nbsp;" + mn + "&nbsp;");
    d.addstr('<div class="formula">h</div> =&nbsp;');
    d.addfr(e.show() + " + " + c.show(), "2");
    d.addstr("&nbsp;" + mn + "&nbsp;");
    d.addstr(a.showtab());
    d.addstr("&nbsp;=&nbsp;");
    d.addstr(b.showtab());
    b.isdecimal() ? 1 != b.d && b.isdecimal() && 1 != b.zn && (d.addstr("&nbsp;=&nbsp;"), d.addstr(b.ch / b.zn)) : (d.addstr(j4), d.addstr(b.ch / b.zn));
    setFocus(d.show());
}
;