var ListNegoc = {

  carregarLista    : function(){
                      //SE JÁ EXISTIR O CONTAINER PARA A LISTA USE-O, SENÃO CRIE UM NOVO//
                      var $areaNegoc = $("main").find("#area_negoc").length ? $("main").find("#area_negoc") : $("<section id='area_negoc' class='row table-responsive'></section>");

                      $("main").append($areaNegoc); //INSIRA NO DOM//

                      $areaNegoc.load("./includes/resultados.html");

                        console.log("lista");
                      },

   execHandlers    : function(){
                      $("main").on("click","#lista_negoc_btn",this.carregarLista);
                    }
}
