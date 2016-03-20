<?php

//FUNÇÃO PARA CARREGAR AUTOMATICAMENTE QUALQUER CLASSE INSTANCIADA//
function __autoload($classe){
  require_once("../classes/{$classe}.php");
}



?>
