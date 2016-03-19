// ESSA CLASSE FUNCIONA COMO UM OBJETO GLOBAL//

//MÉTODOS
  //
  // execHandlers()//
    // ESSE MÉTODO SERÁ CHAMADO NO CARREGAMENTO PRINCIPAL DA PÁGINA.
    // IRÁ INSERIR TODAS AS CAPTURAS DE EVENTOS REFERENTES AO PROCESSO DE INSERIR
    // UMA NOVA NEGOCIAÇÃO

var NovaNegoc = {
  abrirModal   : function(){
                  console.log("works");
                },
  execHandlers : function(){
                    //EVENTO PARA O CLIQUE NO BOTÃO DE 'NOVA NEGOCIAÇÃO'//
                    $("main").on("click","#nova_negoc_btn",this.abrirModal);
                    // $("main").on("click","#nova_negoc_btn",function(){
                    //
                    // })
                }
}
