<?php
function __autoload($class){
  require_once("./classes/{$class}.php");

}

echo "<pre>start</br>";


$connection = DB::connect();

$select = new SelectSQL("negociacoes");
// print_r($select);
$select->convertToStr();

//INSERIR UMA CONSULTA/QUERY NO PDO//
$query = $connection->query($select);

// BUSCAR OS RESULTADOS E ARMAZENÁ-LOS EM UM ARRAY//
$resultados = $query->fetchAll(PDO::FETCH_ASSOC);
// print_r($resultados);

// echo $resultados_json = json_encode($resultados)
$entrada1 = array("null","'4'","'mercadoria 03'","'nome 03'","'7'","'10.44'","'negocio 03'");
$entrada2 = array("null","'266'","'mercadoria 04'","'nome 04'","'17193'","'77.98'","'negocio 04'");
$insert = new InsertSQL("`negociacoes`","`ID`,`codMercadoria`,`tipoMercadoria`,`nome`,`qtd`,`preco`,`tipoNegociacao`",array($entrada1,$entrada2));
echo $insert->convertToStr();

//RODAR A INSERÇÃO DOS DADOS//
$query = $connection->query($insert);

print_r($query);

//VERIFICAR O RESULTADO//
$linhas = $query->rowCount();
//SE UM ZERO OU UM NÚMERO MENOR FOR RETORNADO, SIGNFICA QUE HOUVE UM ERRO//
if($linhas <= 0){
  echo "error";
}

?>
