
    $(function() {
      var offset = $("#right_bloc").offset();
      var offset1 = $("#msend").offset();
      var topPadding = 5;
      var td_h=offset1.top-offset.top;
      var rbl_h=$("#right_bloc").css("height");
      rbl_h=rbl_h.substr(0, rbl_h.length-2);
      $(window).scroll(function() {
        if (($(window).scrollTop() > offset.top)&&($(window).scrollTop() - offset.top + topPadding<td_h-rbl_h)) {
          $("#right_bloc").css("marginTop", $(window).scrollTop() - offset.top + topPadding);
        }
        else if($(window).scrollTop() <= offset.top) {$("#right_bloc").css("marginTop", 0);};
      });
    });

  var mah=3;
  var maw=3;
  var ls="../../image/LS.GIF";
  var rs="../../image/RS.GIF";
  var j1="Asegu&#769;rese de haber introducido la expresio&#769;n correctamente, y de haber completado todos los campos. Puede introducir nu&#769;meros o fracciones."
  var j2="<b>Solucio&#769;n</b>:"
  var j3="significa"
  var j4=" &sdot; "
  var j5="Hallemos el determinante de la matriz <b>A</b>."
  var j6="Dado que el determinante es igual a cero,<br />el sistema no tiene solucio&#769;n."
  var j7="El determinante de la matriz <b>A</b> no es cero,<br />por lo que la matriz inversa <b>A</b><sup>-1</sup> existe.<br />Para hallar la matriz inversa,<br />calcule los menores y<br/ >cofactores de la matriz <b>A</b>."
  var j8="Respuesta:"
  var j9="Hallar la matriz inversa."
  var j10="Hallar la solución."
  var j11="&times;"
  var j12="<br />Hallamos el menor M{k1} y<br />el cofactor A{k1}.<br />En la matriz <b>A</b>, tachamos<br />la fila {k3} y la columna {k4}.<br />"
  var j13="Escribimos la matriz adjunta (matriz de cofactores):<br>"
  var j14="Matriz adjunta traspuesta:<br>"
  var jf1="A"
  var jf2="M"
  var jf3="<b>C</b><sup>*</sup>"
