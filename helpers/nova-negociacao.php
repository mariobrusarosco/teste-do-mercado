<?php
  //FUNÇÃO PARA CARREGAR AUTOMATICAMENTE AS CLASSES INSTANCIADAS//
  function __autoload($classe){
    require_once("../classes/{$classe}.php");
  }

//VERIFICA SE ALGUMA VARIÁVEL ESTÁ ARMAZENADA EM VARIÁVEL GLOBAL $_POST//
// SOMENTE SE ALGO FOR PASSADO O CÓDIGO CONTINUARÁ//
if(empty($_POST) || !isset($_POST)){
  //EXIBE UM OBJETO JSON INFORMANDO O QUE OCORREU DE ERRADO//
  echo json_encode(
                    array(
                          "status" => "erro",
                          "msg"    => "Nenhum dado foi passado pelo método 'POST'"
                        )
                  );
  return false; //ENCERRA O CÓDIGO//
}else{
  //SE HOUVER DADOS PASSADOS PELO MÉTODO 'POST'...//

  //ARMAZENA OS PARÂMETROS PASSADOS//
  $codigoMercadoria = "'{$_POST['codigoMercadoria']}'";
  $tipoMercadoria   = "'{$_POST['tipoMercadoria']}'";
  $nomeMercadoria   = "'{$_POST['nomeMercadoria']}'";
  $qtdMercadoria    = "'{$_POST['qtdMercadoria']}'";
  $precoMercadoria  = "'{$_POST['precoMercadoria']}'";
  $tipoNegocio      = "'{$_POST['tipoNegocio']}'";

  try{
    //INICIA UMA CONEXÃO COM O BANCO DE DADOS//
    $conexao = DB::connect();
    //CRIA UM ARRAY CONTENDO OS VALORES A SEREM INSERIDOS NO BANCO DE DADOS. ESSE ARRAY PRECISA SER PASSADO COM TERCEIRO PARÂMETRO NO
    //CONSTRUTOR DA CLASSE InsertSQL. PASSE UM VALOR NULL PARA O PRIMEIRO CAMPO A SER INSERIDO, PORQUE ELE É UM ID DE CADA NEGOCIAÇÃO
    //E É GERADO AUTOMATICAMENTE PELO 'AUTO_INCREMENT' DO MYSQL
    $entrada = array("'null'",$codigoMercadoria,$tipoMercadoria,$nomeMercadoria,$qtdMercadoria,$precoMercadoria,$tipoNegocio);
    //CRIA UMA DECLARÃO SQL DE 'INSERT'//
    //ps. O PHP DO SERVIDOR QUE ESTOU USANDO EXIGE UM ` ENTRE ALGUMAS STRINGS!!!!!//
    $insert = new InsertSQL("`negociacoes`","`ID`,`codMercadoria`,`tipoMercadoria`,`nome`,`qtd`,`preco`,`tipoNegociacao`",array($entrada));
    //CONVERTE ESSA DECLARAÇÃO PARA UMA STRING. ESSA STRING SERÁ PASSADA PARA UM MÉTODO query($string) DE UM PDO////
    $insert->convertToStr();
    //REALIZA A CONSULTA/QUERY NO PDO//
    $query = $conexao->query($insert);
    //VERIFICA O RESULTADO DA INSERÇÃO//
    $retorno = $query->rowCount();
    //SE UM ZERO OU UM NÚMERO MENOR FOR RETORNADO, SIGNFICA QUE HOUVE UM ERRO//
    if($retorno <= 0){
      //EXIBE UM OBJETO JSON INFORMANDO O QUE OCORREU DE ERRADO//
      echo json_encode(
                        array(
                              "status" => "erro",
                              "msg"    => "Erro ocorrido: {$e->getMessage()}"
                             )
                      );
      return false; //ENCERRA O CÓDIGO//
    }//FIM DE if($retorno <= 0)//

    //EXIBE UM OBJETO JSON INFORMANDO QUE A INSERÇÃO OCORREU SEM ERROS//
    echo json_encode(
                      array(
                            "status" => "sucesso",
                            "msg"    => "Negociação Inserida com Sucesso!"
                           )
                    );

    return true; //ENCERRA O CÓDIGO//

  }catch(Exception $e){
    echo json_encode(
                      array(
                            "status" => "erro",
                            "msg"    => "Erro ocorrido: {$e->getMessage()}"
                           )
                    );
  }
}

?>
