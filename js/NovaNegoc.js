// ESSA CLASSE FUNCIONA COMO UM OBJETO GLOBAL//

/* ==== PROPIEDADES =====
   -- htmlModal
      ==> ARMAZENA O CÓDIGO HTML PARA UM MODAL DE NOVA NEGOCIAÇÃO.

  ===== MÉTODOS =====
   -- execHandlers()
      ==> ESSE MÉTODO SERÁ CHAMADO NO CARREGAMENTO PRINCIPAL DA PÁGINA.
          IRÁ INSERIR TODAS AS CAPTURAS DE EVENTOS REFERENTES AO PROCESSO DE INSERIR
          UMA NOVA NEGOCIAÇÃO
*/
var NovaNegoc = {
  htmlModal    : "",
  abrirModal   : function(){
                  // var that = this;
                  //CHECA SE O MODAL JÁ CONTÉM SEU CÓDIGO HTML//
                  if(!NovaNegoc.htmlModal.length){  //SE NÃO TIVER... INSIRA COM UMA CHAMADA AJAX//
                    $.ajax
                    console.log("modal vazio");
                  }
                  console.log(NovaNegoc);
                },
  execHandlers : function(){
                    //EVENTO PARA O CLIQUE NO BOTÃO DE 'NOVA NEGOCIAÇÃO'//
                    $("main").on("click","#nova_negoc_btn",this.abrirModal);
                }
}
