<?php

//FUNÇÃO PARA CARREGAR AUTOMATICAMENTE QUALQUER CLASSE INSTANCIADA//
function __autoload($classe){
  require_once("../classes/{$classe}.php");
}

try{
  //INICIAR UMA CONEXÃO COM BANCO DE DADOS, CHAMANDO UM MÉTODO ESTÁTICO//
  $conexao = DB::connect();
  //CRIAR UMA DECLARAÇÃO SQL PARA SELECIONAR DADOS. PASSAR UMA STRING COM O NOME DA TABELA DESEJADA//
  $select = new SelectSQL("negociacoes");
  //CONVERTER ESSA DECLARAÇÃO EM UMA STRING. ESSA STRING SERÁ PASSADA PARA UM MÉTODO query($string) DE UM PDO//
  $select->convertToStr();
  //REALIZAR A CONSULTA/QUERY NO PDO//
  $query = $conexao->query($select);
  // BUSCAR OS RESULTADOS E ARMAZENÁ-LOS EM UM ARRAY//
  $resultados = $query->fetchAll(PDO::FETCH_ASSOC);
  //EXIBE UM OBJETO JSON. ELE SERÁ USADO EM UMA CHAMADA AJAX NO CÓDIGO DE JAVASCRIPT//
  echo json_encode(
                    array(
                            "status" => "sucesso",
                            "msg"    => $resultados
                         )
                  );
}catch(Exception $e){
  //CASO OCORRA UM ERRO, EXIBE UM OUTRO OBJETO JSON, QUE TAMBÉM SERÁ USADO EM UMA CHAMADA AJAX NO CÓDIGO JAVASCRIPT//
  echo json_encode(
                    array(
                          "status" => "erro",
                          "msg"    => "Erro ocorrido: {$e->getMessage()}",
                        )
                  );
}//FIM DE 'catch'//

?>
