var ListNegoc = {

  carregarLista   :  function(){
                      //ALTERAR AS CLASSES DE CSS DO CABEÇALHO DA PÁGINA//
                      var $cabecalho = $("header");                                             //CABEÇALHO DA PÁGINA//
                                logo = $cabecalho.children("#logo_vale_mobi").children("div"),   //<div> CONTENDO O LOGO//
                            barraNav = $cabecalho.children("nav"),               //<nav> BARRA DE NAVEGAÇÃO//
                        btnNovaNegoc = barraNav.find("div:first-child"),   //<div> CONTENDO O BOTÃO DE NOVA NEGOCIAÇÃO//
                      //  btnListNegoc = ;                                   //<div> CONTENDO O  BOTÃO DE LISTAGEM DE NEGOCIAÇÕES//
                      $cabecalho.find("#logo_vale_mobi div,nav div");

                      console.log($cabecalho.find("#logo_vale_mobi div,nav div"));

                      //INSERIR A TABELA DE NEGOCIAÇÕES EMBAIXO DA BARRA DE NAVEGAÇÃO//
                    },

   execHandlers    : function(){
                      $("main").on("click","#lista_negoc_btn",ListNegoc.carregarLista);
                    }
}
