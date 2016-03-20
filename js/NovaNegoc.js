// ESSA CLASSE FUNCIONA COMO UM OBJETO GLOBAL//

/* ==== PROPIEDADES =====
   -- htmlNovoModal
      ==> ARMAZENA O CÓDIGO HTML PARA UM MODAL DE NOVA NEGOCIAÇÃO.
        //AQUI PROVAVELMETE EXISTE UM JEITO MELHOR DO QUE ESSE. DESSE JEITO O BROWSER VAI FAZER UM REQUISIÇÃO A MAIS SÓ PARA UM PEQUENO PEDAÇO DE HTML//

  ===== MÉTODOS =====
   -- execHandlers()
      ==> ESSE MÉTODO SERÁ CHAMADO NO CARREGAMENTO PRINCIPAL DA PÁGINA.
          IRÁ INSERIR TODAS AS CAPTURAS DE EVENTOS REFERENTES AO PROCESSO DE INSERIR
          UMA NOVA NEGOCIAÇÃO
*/
var NovaNegoc = {
  validarNegoc   : function(){
                      var dadosValidos = true,                                        //ESSA VARIÁVEL SERVE PARA CONTROLAR O STATUS DA VALIDAÇÃO//
                          msgRetorno   = "",                                          //MENSAGEM PARA EXPLICAR STATUS DA VALIDAÇÃO;
                                $modal = $("main").children("#modal_nova_negoc"),     //SELECIONA O MODAL DE UMA NOVA NEGOCIAÇÃO//
                                $form  = $("#form_nova_negoc"),                       //SELECIONA O FORMULÁRIO//
                       dadosFornecidos = [];

                              //  console.log(dadosFornecidos);
                      // ====> EU USO .serialize() ou .serializeArray() MAS ESTAVA DANDO ERRO E PRA NÃO ME ATRASAR FIZ DE OUTRO JEITO//
                      // ====> var dadosFornecidos = $("#form_nova_negoc").serializeArray();

                        // dadosFornecidos.push({"nome":"mario"});
                        // dadosFornecidos.push({"nome":"carol"});

                      $("main").find("form").find(".form-control").each(function(){   //SELECIONA O <form>, BUSCA CADA ITEM COM A CLASSE .form-control//
                        //PARA CADA UM DELES//
                            if(!$(this).val().length){                                //SE ALGUM CAMPO ESTIVER VAZIO//
                              dadosValidos = false;                                   //A ENTRADA NÃO DEVE SER ACEITA. STATUS ALTERADO PARA 'FALSO'//
                              msgRetorno   = "Por favor, preencha todos os campos";   //EXPLICAR O MOTIVO DE ERRO//
                            }
                      });
                      // ARMAZENA OS VALORES DA NOVA NEGOCIAÇÃO PARA PASSA-LOS NA CHAMADA AJAX//
                                        var codigoMercadoria = $form.find("#codigo_mercadoria_form").val(),
                                              tipoMercadoria = $form.find("#tipo_mercadoria_form").val(),
                                              nomeMercadoria = $form.find("#nome_mercadoria_form").val(),
                                              qtdMercadoria  = $form.find("#qtd_mercadoria_form").val(),
                                             precoMercadoria = $form.find("#preco_mercadoria_form").val(),
                                                 tipoNegocio = $form.find("#tipo_negocio_form").val();


                      $.ajax({                                              //INICIA UMA CHAMADA AJAX//
                          'url'    : './helpers/nova-negociacao.php',       // URL BUSCADA//
                          'method' : 'POST',                                // MÉTODO DE ENVIO DOS DADOS//
                          'data'   : {                                      // PARÂMETROS PASSADOS//
                                        "codigoMercadoria"  : codigoMercadoria,
                                        "tipoMercadoria"    : tipoMercadoria,
                                        "nomeMercadoria"    : nomeMercadoria,
                                        "qtdMercadoria"     : qtdMercadoria,
                                        "precoMercadoria"   : precoMercadoria,
                                        "tipoNegocio"       : tipoNegocio
                                     }
                      }).done(function(data){                               //APÓS A CHAMADA TERMINADA...//
                        //*** ANÁLISE DOS DADOS RETORNADOS PELO SERVIDOR ***//
                        console.log(data);
                      })
                      return [dadosValidos,msgRetorno];  //UM ARRAY COM UM VALOR BOOLEANO E UMA MENSAGEM EXPLICANDO O STATUS DA VALIDAÇÃO//
                    },

  salvarNegoc    : function(){
                    var $node = $(this),                                            //ARMAZENA O BOTÃO PARA SALVAR A NEGOCIAÇÃO//
                       $modal = $("main").children("#modal_nova_negoc"),            //SELECIONA O MODAL DE UMA NOVA NEGOCIAÇÃO//
                    validacao = NovaNegoc.validarNegoc();                           //ARMAZENA O RESULTADO DA VALIDAÇÃO. UM ARRAY COM UM VALOR BOOLEANO E UMA MENSAGEM EXPLICANDO O STATUS DA VALIDAÇÃO

                    $modal.find(".alert").each(function(){ $(this).remove();});     //SE JÁ EXISTIR UM ALERT, ELE SERÁ REMOVIDO//

                    // console.log(NovaNegoc.validarNegoc());
                    //VALIDA OS DADOS. VERIFICAR O PRIMEIRO ITEM DO ARRAY, QUE É UM VALOR BOOLEANO INDICANTO O RESULTADO DA VALIDAÇÃO//
                    if(validacao[0]){                                //SE FOR 'true' OS DADOS SERÃO ACEITOS//
                        document.querySelector("form").reset();                     //ZERA OS CAMPOS DO FORMULÁRIO, PARA QUE O USUÁRIO NÃO PRECISE APAGAR O VALOR ANTIGO//
                        $modal.modal("hide");                                       //ESCONDER O MODAL PARA EXIBIR UMA MENSAGEM DE SUCESSO AO USUÁRIO//
                        $("#modal_alertas").modal("show");                          //EXIBIR UMA MENSAGEM COM O STATUS DA INSERÇÃO AO USUÁRIO//
                    }else{  //SE FOR 'false' OS DADOS NÃO SERÃO ACEITOS//
                      //INSERE NO MODAL UM AVISO DE ERROR NA INSERÇÃO, ANTES DO BOTÃO DE SALVAR E FECHAR//
                      $("<div class='alert alert-danger text-center'>" + validacao[1]+ "</div>").insertBefore($node.prev());
                    }

                  },
  execHandlers  : function(){
                    //EVENTO PARA O CLIQUE NO BOTÃO DE 'NOVA NEGOCIAÇÃO'//
                    // $("main").on("click","#nova_negoc_btn",this.abrirModal);

                    $("main").on("click","#salvar_nova_negoc",this.salvarNegoc);
                }
}
