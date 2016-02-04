

function ctchang(c) {
  document.getElementById("sek").style.display = "table-row";
  document.getElementById("min").style.display = "table-row";
  document.getElementById("cas").style.display = "table-row";
  document.getElementById("den").style.display = "table-row";
  document.getElementById("ned").style.display = "table-row";
  switch(c) {
    case "1":
      document.getElementById("sek").style.display = "none";
      ct = 1;
      break;
    case "2":
      document.getElementById("min").style.display = "none";
      ct = 2;
      break;
    case "3":
      document.getElementById("cas").style.display = "none";
      ct = 3;
      break;
    case "4":
      document.getElementById("den").style.display = "none";
      ct = 4;
      break;
    case "5":
      document.getElementById("ned").style.display = "none", ct = 5;
  }
  ctinput();
}
function ctinput() {
  document.getElementById("sek1").innerHTML = 0;
  document.getElementById("min1").innerHTML = 0;
  document.getElementById("cas1").innerHTML = 0;
  document.getElementById("den1").innerHTML = 0;
  document.getElementById("ned1").innerHTML = 0;
  var c = new tfraction, a = new tfraction, b = new tfraction;
  a.d = 1;
  b.d = 1;
  c.newf(document.getElementById("inp").value);
  if (0 == c.er) {
    switch(ct) {
      case 1:
        a.ch = c.ch;
        a.zn = 60 * c.zn;
        a.simplify();
        document.getElementById("min1").innerHTML = a.showtab();
        a.zn *= 60;
        a.simplify();
        document.getElementById("cas1").innerHTML = a.showtab();
        a.zn *= 24;
        a.simplify();
        document.getElementById("den1").innerHTML = a.showtab();
        a.zn *= 7;
        a.simplify();
        document.getElementById("ned1").innerHTML = a.showtab();
        break;
      case 2:
        b.ch = 60 * c.ch;
        b.zn = c.zn;
        b.simplify();
        document.getElementById("sek1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 60 * c.zn;
        a.simplify();
        document.getElementById("cas1").innerHTML = a.showtab();
        a.zn *= 24;
        a.simplify();
        document.getElementById("den1").innerHTML = a.showtab();
        a.zn *= 7;
        a.simplify();
        document.getElementById("ned1").innerHTML = a.showtab();
        break;
      case 3:
        b.zn = c.zn;
        b.ch = 60 * c.ch;
        b.simplify();
        document.getElementById("min1").innerHTML = b.showtab();
        b.ch *= 60;
        b.simplify();
        document.getElementById("sek1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 24 * c.zn;
        a.simplify();
        document.getElementById("den1").innerHTML = a.showtab();
        a.zn *= 7;
        a.simplify();
        document.getElementById("ned1").innerHTML = a.showtab();
        break;
      case 4:
        b.zn = c.zn;
        b.ch = 24 * c.ch;
        b.simplify();
        document.getElementById("cas1").innerHTML = b.showtab();
        b.ch *= 60;
        b.simplify();
        document.getElementById("min1").innerHTML = b.showtab();
        b.ch *= 60;
        b.simplify();
        document.getElementById("sek1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 7 * c.zn;
        a.simplify();
        document.getElementById("ned1").innerHTML = a.showtab();
        break;
      case 5:
        b.zn = c.zn, b.ch = 7 * c.ch, b.simplify(), document.getElementById("den1").innerHTML = b.showtab(), b.ch *= 24, b.simplify(), document.getElementById("cas1").innerHTML = b.showtab(), b.ch *= 60, b.simplify(), document.getElementById("min1").innerHTML = b.showtab(), b.ch *= 60, b.simplify(), document.getElementById("sek1").innerHTML = b.showtab();
    }
  }
}
function clchang(c) {
  document.getElementById("mm").style.display = "table-row";
  document.getElementById("cm").style.display = "table-row";
  document.getElementById("dm").style.display = "table-row";
  document.getElementById("m").style.display = "table-row";
  document.getElementById("km").style.display = "table-row";
  switch(c) {
    case "1":
      document.getElementById("mm").style.display = "none";
      ct = 1;
      break;
    case "2":
      document.getElementById("cm").style.display = "none";
      ct = 2;
      break;
    case "3":
      document.getElementById("dm").style.display = "none";
      ct = 3;
      break;
    case "4":
      document.getElementById("m").style.display = "none";
      ct = 4;
      break;
    case "5":
      document.getElementById("km").style.display = "none", ct = 5;
  }
  clinput();
}
function clinput() {
  document.getElementById("mm1").innerHTML = 0;
  document.getElementById("cm1").innerHTML = 0;
  document.getElementById("dm1").innerHTML = 0;
  document.getElementById("m1").innerHTML = 0;
  document.getElementById("km1").innerHTML = 0;
  var c = new tfraction, a = new tfraction, b = new tfraction;
  a.d = 1;
  b.d = 1;
  c.newf(document.getElementById("inp").value);
  if (0 == c.er) {
    switch(ct) {
      case 1:
        a.ch = c.ch;
        a.zn = 10 * c.zn;
        a.simplify();
        document.getElementById("cm1").innerHTML = a.showtab();
        a.zn *= 10;
        a.simplify();
        document.getElementById("dm1").innerHTML = a.showtab();
        a.zn *= 10;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        a.zn *= 1E3;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 2:
        b.ch = 10 * c.ch;
        b.zn = c.zn;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 10 * c.zn;
        a.simplify();
        document.getElementById("dm1").innerHTML = a.showtab();
        a.zn *= 10;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        a.zn *= 1E3;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 3:
        b.zn = c.zn;
        b.ch = 10 * c.ch;
        b.simplify();
        document.getElementById("cm1").innerHTML = b.showtab();
        b.ch *= 10;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 10 * c.zn;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        a.zn *= 1E3;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 4:
        b.zn = c.zn;
        b.ch = 10 * c.ch;
        b.simplify();
        document.getElementById("dm1").innerHTML = b.showtab();
        b.ch *= 10;
        b.simplify();
        document.getElementById("cm1").innerHTML = b.showtab();
        b.ch *= 10;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 1E3 * c.zn;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 5:
        b.zn = c.zn, b.ch = 1E3 * c.ch, b.simplify(), document.getElementById("m1").innerHTML = b.showtab(), b.ch *= 10, b.simplify(), document.getElementById("dm1").innerHTML = b.showtab(), b.ch *= 10, b.simplify(), document.getElementById("cm1").innerHTML = b.showtab(), b.ch *= 10, b.simplify(), document.getElementById("mm1").innerHTML = b.showtab();
    }
  }
}
function cmchang(c) {
  document.getElementById("gr").style.display = "table-row";
  document.getElementById("kg").style.display = "table-row";
  document.getElementById("c").style.display = "table-row";
  document.getElementById("t").style.display = "table-row";
  switch(c) {
    case "1":
      document.getElementById("gr").style.display = "none";
      ct = 1;
      break;
    case "2":
      document.getElementById("kg").style.display = "none";
      ct = 2;
      break;
    case "3":
      document.getElementById("c").style.display = "none";
      ct = 3;
      break;
    case "4":
      document.getElementById("t").style.display = "none", ct = 4;
  }
  cminput();
}
function cminput() {
  document.getElementById("gr1").innerHTML = 0;
  document.getElementById("kg1").innerHTML = 0;
  document.getElementById("c1").innerHTML = 0;
  document.getElementById("t1").innerHTML = 0;
  var c = new tfraction, a = new tfraction, b = new tfraction;
  a.d = 1;
  b.d = 1;
  c.newf(document.getElementById("inp").value);
  if (0 == c.er) {
    switch(ct) {
      case 1:
        a.ch = c.ch;
        a.zn = 1E3 * c.zn;
        a.simplify();
        document.getElementById("kg1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("c1").innerHTML = a.showtab();
        a.zn *= 10;
        a.simplify();
        document.getElementById("t1").innerHTML = a.showtab();
        break;
      case 2:
        b.ch = 1E3 * c.ch;
        b.zn = c.zn;
        b.simplify();
        document.getElementById("gr1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 100 * c.zn;
        a.simplify();
        document.getElementById("c1").innerHTML = a.showtab();
        a.zn *= 10;
        a.simplify();
        document.getElementById("t1").innerHTML = a.showtab();
        break;
      case 3:
        b.zn = c.zn;
        b.ch = 100 * c.ch;
        b.simplify();
        document.getElementById("kg1").innerHTML = b.showtab();
        b.ch *= 1E3;
        b.simplify();
        document.getElementById("gr1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 10 * c.zn;
        a.simplify();
        document.getElementById("t1").innerHTML = a.showtab();
        break;
      case 4:
        b.zn = c.zn, b.ch = 10 * c.ch, b.simplify(), document.getElementById("c1").innerHTML = b.showtab(), b.ch *= 100, b.simplify(), document.getElementById("kg1").innerHTML = b.showtab(), b.ch *= 1E3, b.simplify(), document.getElementById("gr1").innerHTML = b.showtab();
    }
  }
}
function cvchang(c) {
  document.getElementById("ml").style.display = "table-row";
  document.getElementById("l").style.display = "table-row";
  document.getElementById("mm").style.display = "table-row";
  document.getElementById("cm").style.display = "table-row";
  document.getElementById("dm").style.display = "table-row";
  document.getElementById("m").style.display = "table-row";
  switch(c) {
    case "1":
      document.getElementById("ml").style.display = "none";
      ct = 1;
      break;
    case "2":
      document.getElementById("l").style.display = "none";
      ct = 2;
      break;
    case "3":
      document.getElementById("mm").style.display = "none";
      ct = 3;
      break;
    case "4":
      document.getElementById("cm").style.display = "none";
      ct = 4;
      break;
    case "5":
      document.getElementById("dm").style.display = "none";
      ct = 5;
      break;
    case "6":
      document.getElementById("m").style.display = "none", ct = 6;
  }
  cvinput();
}
function cvinput() {
  document.getElementById("ml1").innerHTML = 0;
  document.getElementById("l1").innerHTML = 0;
  document.getElementById("mm1").innerHTML = 0;
  document.getElementById("cm1").innerHTML = 0;
  document.getElementById("dm1").innerHTML = 0;
  document.getElementById("m1").innerHTML = 0;
  var c = new tfraction, a = new tfraction, b = new tfraction;
  a.d = 1;
  b.d = 1;
  c.newf(document.getElementById("inp").value);
  if (0 == c.er) {
    switch(ct) {
      case 1:
        document.getElementById("cm1").innerHTML = c.showtab();
        b.ch = 1E3 * c.ch;
        b.zn = c.zn;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 1E3 * c.zn;
        a.simplify();
        document.getElementById("l1").innerHTML = a.showtab();
        document.getElementById("dm1").innerHTML = a.showtab();
        a.zn *= 1E3;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        break;
      case 2:
        document.getElementById("dm1").innerHTML = c.showtab();
        b.zn = c.zn;
        b.ch = 1E3 * c.ch;
        b.simplify();
        document.getElementById("cm1").innerHTML = b.showtab();
        document.getElementById("ml1").innerHTML = b.showtab();
        b.ch *= 1E3;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 1E3 * c.zn;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        break;
      case 3:
        a.ch = c.ch;
        a.zn = 1E3 * c.zn;
        a.simplify();
        document.getElementById("mm1").innerHTML = a.showtab();
        document.getElementById("ml1").innerHTML = a.showtab();
        a.zn *= 1E3;
        a.simplify();
        document.getElementById("dm1").innerHTML = a.showtab();
        document.getElementById("l1").innerHTML = a.showtab();
        a.zn *= 1E3;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        break;
      case 4:
        document.getElementById("ml1").innerHTML = c.showtab();
        b.ch = 1E3 * c.ch;
        b.zn = c.zn;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 1E3 * c.zn;
        a.simplify();
        document.getElementById("l1").innerHTML = a.showtab();
        document.getElementById("dm1").innerHTML = a.showtab();
        a.zn *= 1E3;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        break;
      case 5:
        document.getElementById("l1").innerHTML = c.showtab();
        b.zn = c.zn;
        b.ch = 1E3 * c.ch;
        b.simplify();
        document.getElementById("cm1").innerHTML = b.showtab();
        document.getElementById("ml1").innerHTML = b.showtab();
        b.ch *= 1E3;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 1E3 * c.zn;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        break;
      case 6:
        b.zn = c.zn, b.ch = 1E3 * c.ch, b.simplify(), document.getElementById("dm1").innerHTML = b.showtab(), document.getElementById("l1").innerHTML = b.showtab(), b.ch *= 1E3, b.simplify(), document.getElementById("cm1").innerHTML = b.showtab(), document.getElementById("ml1").innerHTML = b.showtab(), b.ch *= 1E3, b.simplify(), document.getElementById("mm1").innerHTML = b.showtab();
    }
  }
}
function cachang(c) {
  document.getElementById("mm").style.display = "table-row";
  document.getElementById("cm").style.display = "table-row";
  document.getElementById("dm").style.display = "table-row";
  document.getElementById("m").style.display = "table-row";
  document.getElementById("ga").style.display = "table-row";
  document.getElementById("km").style.display = "table-row";
  switch(c) {
    case "1":
      document.getElementById("mm").style.display = "none";
      ct = 1;
      break;
    case "2":
      document.getElementById("cm").style.display = "none";
      ct = 2;
      break;
    case "3":
      document.getElementById("dm").style.display = "none";
      ct = 3;
      break;
    case "4":
      document.getElementById("m").style.display = "none";
      ct = 4;
      break;
    case "5":
      document.getElementById("ga").style.display = "none";
      ct = 5;
      break;
    case "6":
      document.getElementById("km").style.display = "none", ct = 6;
  }
  cainput();
}
function cainput() {
  document.getElementById("mm1").innerHTML = 0;
  document.getElementById("cm1").innerHTML = 0;
  document.getElementById("dm1").innerHTML = 0;
  document.getElementById("m1").innerHTML = 0;
  document.getElementById("ga1").innerHTML = 0;
  document.getElementById("km1").innerHTML = 0;
  var c = new tfraction, a = new tfraction, b = new tfraction;
  a.d = 1;
  b.d = 1;
  c.newf(document.getElementById("inp").value);
  if (0 == c.er) {
    switch(ct) {
      case 1:
        a.ch = c.ch;
        a.zn = 100 * c.zn;
        a.simplify();
        document.getElementById("cm1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("dm1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        a.zn *= 1E4;
        a.simplify();
        document.getElementById("ga1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 2:
        b.zn = c.zn;
        b.ch = 100 * c.ch;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 100 * c.zn;
        a.simplify();
        document.getElementById("dm1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        a.zn *= 1E4;
        a.simplify();
        document.getElementById("ga1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 3:
        b.zn = c.zn;
        b.ch = 100 * c.ch;
        b.simplify();
        document.getElementById("cm1").innerHTML = b.showtab();
        b.ch *= 100;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 100 * c.zn;
        a.simplify();
        document.getElementById("m1").innerHTML = a.showtab();
        a.zn *= 1E4;
        a.simplify();
        document.getElementById("ga1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 4:
        b.zn = c.zn;
        b.ch = 100 * c.ch;
        b.simplify();
        document.getElementById("dm1").innerHTML = b.showtab();
        b.ch *= 100;
        b.simplify();
        document.getElementById("cm1").innerHTML = b.showtab();
        b.ch *= 100;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 1E4 * c.zn;
        a.simplify();
        document.getElementById("ga1").innerHTML = a.showtab();
        a.zn *= 100;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 5:
        b.zn = c.zn;
        b.ch = 1E4 * c.ch;
        b.simplify();
        document.getElementById("m1").innerHTML = b.showtab();
        b.ch *= 100;
        b.simplify();
        document.getElementById("dm1").innerHTML = b.showtab();
        b.ch *= 100;
        b.simplify();
        document.getElementById("cm1").innerHTML = b.showtab();
        b.ch *= 100;
        b.simplify();
        document.getElementById("mm1").innerHTML = b.showtab();
        a.ch = c.ch;
        a.zn = 100 * c.zn;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 6:
        b.zn = c.zn, b.ch = 100 * c.ch, b.simplify(), document.getElementById("ga1").innerHTML = b.showtab(), b.ch *= 1E4, b.simplify(), document.getElementById("m1").innerHTML = b.showtab(), b.ch *= 100, b.simplify(), document.getElementById("dm1").innerHTML = b.showtab(), b.ch *= 100, b.simplify(), document.getElementById("cm1").innerHTML = b.showtab(), b.ch *= 100, b.simplify(), document.getElementById("mm1").innerHTML = b.showtab();
    }
  }
}
function cvelchang(c) {
  document.getElementById("m").style.display = "table-row";
  document.getElementById("km").style.display = "table-row";
  switch(c) {
    case "1":
      document.getElementById("m").style.display = "none";
      ct = 1;
      break;
    case "2":
      document.getElementById("km").style.display = "none", ct = 2;
  }
  cvelinput();
}
function cvelinput() {
  document.getElementById("m1").innerHTML = 0;
  document.getElementById("km1").innerHTML = 0;
  var c = new tfraction, a = new tfraction;
  a.d = 1;
  c.newf(document.getElementById("inp").value);
  if (0 == c.er) {
    switch(ct) {
      case 1:
        a.ch = 36 * c.ch;
        a.zn = 10 * c.zn;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 2:
        a.zn = 36 * c.zn, a.ch = 10 * c.ch, a.simplify(), document.getElementById("m1").innerHTML = a.showtab();
    }
  }
}
function canglchang(c) {
  document.getElementById("gr").style.display = "table-row";
  document.getElementById("r").style.display = "table-row";
  switch(c) {
    case "1":
      document.getElementById("gr").style.display = "none";
      ct = 1;
      break;
    case "2":
      document.getElementById("r").style.display = "none", ct = 2;
  }
  cvelinput();
}
function ccanglchanginput() {
  document.getElementById("m1").innerHTML = 0;
  document.getElementById("km1").innerHTML = 0;
  var c = new tfraction, a = new tfraction;
  a.d = 1;
  c.newf(document.getElementById("inp").value);
  if (0 == c.er) {
    switch(ct) {
      case 1:
        a.ch = 36 * c.ch;
        a.zn = 10 * c.zn;
        a.simplify();
        document.getElementById("km1").innerHTML = a.showtab();
        break;
      case 2:
        a.zn = 36 * c.zn, a.ch = 10 * c.ch, a.simplify(), document.getElementById("m1").innerHTML = a.showtab();
    }
  }
}
;