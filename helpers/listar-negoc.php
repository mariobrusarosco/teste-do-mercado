<?php

//FUNÇÃO PARA CARREGAR AUTOMATICAMENTE QUALQUER CLASSE INSTANCIADA//
function __autoload($classe){
  require_once("../classes/{$classe}.php");
}

//INICIAR UMA CONEXÃO COM BANCO DE DADOS, CHAMANDO UM MÉTODO ESTÁTICO//
$conexao = DB::connect();

echo "<pre>";
$select = new SelectSQL("negociacoes");
// print_r($select);
$select->convertToStr();

//INSERIR UMA CONSULTA/QUERY NO PDO//
$query = $conexao->query($select);

// BUSCAR OS RESULTADOS E ARMAZENÁ-LOS EM UM ARRAY//
$resultados = $query->fetchAll(PDO::FETCH_ASSOC);
// print_r($resultados);

// echo $resultados_json = json_encode($resultados);


$entrada1 = array('null',"'1'","'mercadoria 01'","'nome 01'","'50'","'145.78'","'negocio 01'");
$entrada2 = array('null',"'28'","'mercadoria 02'","'nome 02'","'1250'","'15.2'","'negocio 02'");
$insert = new InsertSQL("`negociacoes`","`ID`,`codMercadoria`,`tipoMercadoria`,`nome`,`qtd`,`preco`,`tipoNegociacao`",array($entrada1,$entrada2));
// print_r($insert);
$insert->convertToStr();

$query = $conexao->query($insert);

//VERIFICAR O RESULTADO//
$linhas = $query->rowCount();
//SE UM ZERO OU UM NÚMERO MENOR FOR RETORNADO, SIGNFICA QUE HOUVE UM ERRO//
if($linhas <= 0){
  echo "error";
}else{
  echo $linhas;
}

?>
