
function setFocus1() {
}
function deriv() {
  n1 = document.getElementById("n1").value;
  document.getElementById("res").innerHTML = j2;
  setFocus1();
  "" == n1 && (document.getElementById("res").innerHTML = j1, setFocus1(), exit);
  var a = nerdamer("diff(" + n1 + ",x)");
  nerdamer("diff(" + n1 + ",x)");
  var b = new TfrRes;
  b.addfr("d", "d<div class=formula>x</div>");
  b.addstr("(");
  b.addstr(n1);
  b.addstr(")&nbsp;=&nbsp;");
  b.addstr(a.text());
  document.getElementById("res").innerHTML = b.show();
  setFocus1();
}
function limit() {
  document.getElementById("i0").value = document.getElementById("n0").value;
  document.getElementById("i1").value = document.getElementById("n1").value;
  document.getElementById("res").style.display = "block";
  jQuery("#wolframAlphaWidgetForm65328").submit();
}
function selectv(a) {
  document.getElementById("n0").value = a;
}
function derivch(a) {
  document.getElementById("st1").innerHTML = a;
  document.getElementById("st2").innerHTML = a;
  switch(a) {
    case "1":
      dk = "1st";
      break;
    case "2":
      dk = "2nd";
      break;
    case "3":
      dk = "3rd";
      break;
    case "4":
      dk = "4th";
      break;
    case "5":
      dk = "5th";
      break;
    case "6":
      dk = "6th";
      break;
    case "7":
      dk = "7th";
      break;
    case "8":
      dk = "8th";
      break;
    case "9":
      dk = "9th";
      break;
    case "10":
      dk = "10th";
  }
}
function deriv1() {
  document.getElementById("i0").value = dk;
  document.getElementById("i1").value = document.getElementById("n1").value;
  jQuery("#wolframAlphaWidgetForm65344").submit();
}
function int1() {
  document.getElementById("i0").value = document.getElementById("n1").value;
  document.getElementById("res").style.display = "block";
  jQuery("#wolframAlphaWidgetForm65324").submit();
}
function change_boxes() {
  for (var a = document.getElementsByClassName("waWidgetFooter"), b = a.length;b--;) {
    a[b].style.display = "none";
  }
  a = document.getElementsByClassName("wolframAlphaWidgetOutput");
  for (b = a.length;b--;) {
    a[b].style.height = "100%";
  }
}
function int2() {
  document.getElementById("i0").value = document.getElementById("n1").value;
  document.getElementById("i1").value = document.getElementById("n3").value;
  document.getElementById("i2").value = document.getElementById("n2").value;
  document.getElementById("res").style.display = "block";
  jQuery("#wolframAlphaWidgetForm65326").submit();
}
;