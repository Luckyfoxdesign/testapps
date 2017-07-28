<?php

// список языков и имен файлов на разных языках
$sites = array(
"en" => "en.html",
"es" => "es.html",
"fr" => "fr.html",
"ru" => "ru.html",
);

  preg_match_all('/([a-z]{1,8}(?:-[a-z]{1,8})?)(?:;q=([0-9.]+))?/', strtolower($_SERVER["HTTP_ACCEPT_LANGUAGE"]), $matches); // Получаем массив $matches с соответствиями
  $langs = array_combine($matches[1], $matches[2]); // Создаём массив с ключами $matches[1] и значениями $matches[2]
  foreach ($langs as $n => $v)
    $langs[$n] = $v ? $v : 1; // Если нет q, то ставим значение 1
  arsort($langs); // Сортируем по убыванию q
  $default_lang = key($langs); // Берём 1-й ключ первого (текущего) элемента (он же максимальный по q)
  $lg = strtok($default_lang, '-'); // убираем то что идет после тире в языках вида "en-us, ru-ru"
  
  
include $sites[$lg]; // Выводим html
  
  
  
?>