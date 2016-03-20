var ListNegoc = {
  cabecalhoLista   : $("<table id='tabela_negoc' class='table table-hover table-responsive tabela col-xs-12'> \
                       <thead class=''> \
                          <tr>\
                            <th>Cód. Merc.</th>\
                            <th>Tipo Merc.</th>\
                            <th>Nome</th>\
                            <th>Qtde.</th>\
                            <th>Preço</th>\
                            <th>Tipo Negoc.</th>\
                          </tr>\
                       </thead>\
                       <tbody>\
                       </tbody>"
                    ),
  carregarLista    : function(){
                      //SE JÁ EXISTIR O CONTAINER PARA A LISTA USE-O, SENÃO CRIE UM NOVO//
                      var $areaNegoc = $("main").find("#area_negoc").length ? $("main").find("#area_negoc") : $("<section id='area_negoc' class='row table-responsive'></section>");

                      $("main").append($areaNegoc);         //INSERE NO DOM//

                      $.ajax("./helpers/listar-negoc.php")  //REALIZA UMA CHAMADA AJAX//
                        .done(function(data){               //APÓS A CHAMADA TERMINADA...//
                          myJSON = JSON.parse(data);        //CONVERTE OS DADOS (JSON) RETORNADOS PARA UM OBJETO JAVASCRIPT//
                          if(myJSON['status'] === "erro"){  //VERIFICA SE O STATUS DA CONSULTA É DO TIPO 'erro'//
                            console.log("Houve um erro na consulta"); //POR ENQUANTO INFORMA O ERRO NO CONSOLE//
                          }else{
                            $areaNegoc.append(ListNegoc.cabecalhoLista);
                            var $tbody = $("#tabela_negoc").find("tbody") //ARMAZENA O ELEMENTO <tbody> EM UM ELEMENTO JQUERY//
                                .empty();                                 //REMOVE O CONTEÚDO ANTERIOR DA TABELA//

                            //ITERA A PROPRIEDADE msg DO OBJETO JSON//
                            for(var entrada in Object.keys(myJSON.msg)){
                            //PARA CADA ENTRADA RETORNADA(REPRESENTADA PELA VARIÁVEL 'entrada')...//
                              var $linhaHTML = $("<tr/>").addClass("linha")                           //CRIA UMA LINHA DE TABELA HTML COM A CLASSE 'linha'//
                                                         .attr("data-id",myJSON.msg[entrada]["ID"]);  //INSERE UM ATRIBUTO 'data-id' COM O ID DA ENTRADA(ID DA NEGOCIAÇÃO)//
                                  //CRIA E INSERE TODAS AS CÉLULAS DE UMA LINHA DA TABELA//
                                  $linhaHTML.append("<td class='cod_mercadoria'>"   + myJSON.msg[entrada]["codMercadoria"] + "</td>"),
                                  $linhaHTML.append("<td class='tipo_mercadoria'>"  + myJSON.msg[entrada]["tipoMercadoria"] + "</td>"),
                                  $linhaHTML.append("<td class='nome_mercadoria'>"  + myJSON.msg[entrada]["nome"] + "</td>"),
                                  $linhaHTML.append("<td class='qtd_mercadoria'>"   + myJSON.msg[entrada]["qtd"] + "</td>"),
                                  $linhaHTML.append("<td class='preco_mercadoria'>" + myJSON.msg[entrada]["preco"] + "</td>"),
                                  $linhaHTML.append("<td class='tipo_negociacao'>"  + myJSON.msg[entrada]["tipoNegociacao"] + "</td>");

                                  $tbody.append($linhaHTML); //INSERE A LINHA PROCESSADA DENTRO DE <tbody>//
                            }//FIM DO LAÇO 'for each'//
                          }//FIM DE 'else'//
                        });
                      },

   execHandlers    : function(){
                      $("main").on("click","#lista_negoc_btn",this.carregarLista);
                    }
}
