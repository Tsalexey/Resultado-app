package com.tsarevalexey.resultado;

import android.app.Activity;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;

import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.AdapterView;
import android.widget.Toast;

import com.mikepenz.iconics.typeface.FontAwesome;
import com.mikepenz.materialdrawer.Drawer;
import com.mikepenz.materialdrawer.model.DividerDrawerItem;
import com.mikepenz.materialdrawer.model.PrimaryDrawerItem;
import com.mikepenz.materialdrawer.model.SecondaryDrawerItem;
import com.mikepenz.materialdrawer.model.SectionDrawerItem;
import com.mikepenz.materialdrawer.model.interfaces.Badgeable;
import com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
import com.mikepenz.materialdrawer.model.interfaces.Nameable;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;


public class MainActivity extends ActionBarActivity {

    private Drawer.Result drawerResult = null;
    private WebView vw;
    private String urlPage;
    private Map<String, String> map = new HashMap<String, String>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setMap(map);

        // Инициализируем Toolbar
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        // Инициализируем WebView
        vw = (WebView) findViewById(R.id.webView);
        vw.setVerticalScrollBarEnabled(false);
        vw.setHorizontalScrollBarEnabled(false);
        vw.getSettings().setJavaScriptEnabled(true);
        vw.getSettings().setDomStorageEnabled(true);
        vw.getSettings().setSupportZoom(false);
        vw.getSettings().setSupportMultipleWindows(false);
        vw.setWebViewClient(new MyWebViewClient());
        vw.setWebChromeClient(new WebChromeClient());
        vw.loadUrl("file:///android_asset/Resultado/html/index.html");


        // Инициализируем Navigation Drawer
        drawerResult = new Drawer()
                .withActivity(this)
                .withToolbar(toolbar)
                .withActionBarDrawerToggle(true)
                .withHeader(R.layout.drawer_header)
                .addDrawerItems(
                        new PrimaryDrawerItem().withName(R.string.drawer_item_inicio).withIdentifier(1),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_area).withIdentifier(1),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_area_de_superficie),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_combinatoria).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_convertidores).withIdentifier(1),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_ecuaciones),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_estadistica).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_formulas).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_fracciones),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_geometria).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_matrices),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_numeros_complejos).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_perimetro),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_porcentaje).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_progresiones),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_tablas).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_teoria_de_numeros),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_trigonometria).withIdentifier(2),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_vectores).withIdentifier(1),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_volumen).withIdentifier(1)
                )
                .withOnDrawerListener(new Drawer.OnDrawerListener() {
                    @Override
                    public void onDrawerOpened(View drawerView) {
                        // Скрываем клавиатуру при открытии Navigation Drawer
                        InputMethodManager inputMethodManager = (InputMethodManager) MainActivity.this.getSystemService(Activity.INPUT_METHOD_SERVICE);
                        inputMethodManager.hideSoftInputFromWindow(MainActivity.this.getCurrentFocus().getWindowToken(), 0);
                        //рисуем стрелочку
                        drawerResult.getActionBarDrawerToggle().setDrawerIndicatorEnabled(false);
                        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

                    }

                    @Override
                    public void onDrawerClosed(View drawerView) {
                        // рисуем гамбургер
                        getSupportActionBar().setDisplayHomeAsUpEnabled(false);
                        drawerResult.getActionBarDrawerToggle().setDrawerIndicatorEnabled(true);
                    }
                })
                .withOnDrawerItemClickListener(new Drawer.OnDrawerItemClickListener() {
                    @Override
                    // Обработка клика
                    public void onItemClick(AdapterView<?> parent, View view, int position, long id, IDrawerItem drawerItem) {
                        if (drawerItem instanceof Nameable) {
                            urlPage = getMyUrl(MainActivity.this.getString(((Nameable) drawerItem).getNameRes()));
                            vw.loadUrl("file:///android_asset/Resultado/html/" + urlPage + ".html");
                        }
                        if (drawerItem instanceof Badgeable) {
                            Badgeable badgeable = (Badgeable) drawerItem;
                            if (badgeable.getBadge() != null) {
                                // учтите, не делайте так, если ваш бейдж содержит символ "+"
                                try {
                                    int badge = Integer.valueOf(badgeable.getBadge());
                                    if (badge > 0) {
                                        drawerResult.updateBadge(String.valueOf(badge - 1), position);
                                    }
                                } catch (Exception e) {
                                    Log.d("test", "Не нажимайте на бейдж, содержащий плюс! :)");
                                }
                            }
                        }
                    }
                })
                .withOnDrawerItemLongClickListener(new Drawer.OnDrawerItemLongClickListener() {
                    @Override
                    // Обработка длинного клика, например, только для SecondaryDrawerItem
                    public boolean onItemLongClick(AdapterView<?> parent, View view, int position, long id, IDrawerItem drawerItem) {
                        if (drawerItem instanceof SecondaryDrawerItem) {
                            Toast.makeText(MainActivity.this, MainActivity.this.getString(((SecondaryDrawerItem) drawerItem).getNameRes()), Toast.LENGTH_SHORT).show();
                        }
                        return false;
                    }
                })
                .build();

    }

    @Override
    public void onBackPressed() {
        // Закрываем Navigation Drawer по нажатию системной кнопки "Назад" если он открыт
        if (drawerResult.isDrawerOpen()) {
            drawerResult.closeDrawer();
        }else{
            if(vw.canGoBack()){
                vw.goBack();
            }else{
                super.onBackPressed();
            }
        }
    }

    /*
    // Заглушка, работа с меню
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    // Заглушка, работа с меню
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
*/
    public String getMyUrl(String navigationDrawer){
        Iterator<Map.Entry<String,String>> iterator = map.entrySet().iterator();
        String url = "index";

        for (Map.Entry<String, String> pair : map.entrySet()){
            String key = pair.getKey();
            String value = pair.getValue();
            if(key.equals(navigationDrawer)){
                url = value;
                break;
            }
        }
        return url;
    }

    public Map<String, String> setMap( Map<String,String> map ){
        map.put("Inicio", "index");
        map.put("Area", "Area/circulo");
        map.put("Area de superficie", "Area_de_superficie/cilindro");
        map.put("Combinatoria", "Combinatoria/combinaciones");
        map.put("Convertidores", "Convertidores/area");
        map.put("Ecuaciones", "Ecuaciones/bicuadradas");
        map.put("Estadistica", "Estadistica/varianza");
        map.put("Formulas", "Formulas/logaritmos");
        map.put("Fracciones", "Fracciones/comparacion");
        map.put("Geometria", "Geometria/angulo_entre_planos");
        map.put("Matrices", "Matrices/determinante");
        map.put("Numeros complejos", "Numeros_complejos/convertidor");
        map.put("Perimetro", "Perimetro/circulo");
        map.put("Porcentaje", "Porcentaje/porcentaje1");
        map.put("Progresiones", "Progresiones/progresion_aritmetica");
        map.put("Tablas", "Tablas/cuadrados");
        map.put("Teoria de numeros", "Teoria_de_numeros/mcm");
        map.put("Trigonometria", "Trigonometria/cos");
        map.put("Vectores", "Vectores/angulo_entre_vectores");
        map.put("Volumen", "Volumen/cilindro");
        return map;
    }
}