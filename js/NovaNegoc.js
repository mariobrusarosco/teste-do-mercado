// ESSA 'CLASSE' FUNCIONA COMO UM OBJETO GLOBAL//

/* ==== PROPIEDADES =====
   -- .....
      ==> ......

  ===== MÉTODOS =====
    -- campoZerado()
       ==> ESSE MÉTODO RECEBE UM PARÂMETRO. RETORNA 'TRUE' SE O PARÂMETRO FOR MENOR DO QUE ZERO E 'FALSE' SE NÃO FOR.

    -- campoVazio()
       ==> ESSE MÉTODO RECEBE UM PARÂMETRO. RETORNA 'TRUE' SE O PARÂMETRO ESTIVER VAZIO E 'FALSE' SE NÃO ESTIVER.

    -- validarNegoc()
       ==> ESSE MÉTODO SERÁ CHAMADO PARA VALIDAR UMA NOVA ENTRADA DE NEGOCIAÇÃO E IRÁ ITERAR SOBRE OS CAMPOS DE UM FORMULÁRIO
           ** TRẼS CAMPOS SÓ ACEITAM NÚMEROS:  'CÓDIGO DA MERCADORIA', 'QUANTIDADE DA MERCADORIA', 'PREÇO DA MERCADORIA'.
           ** NENHUM CAMPO PODE SER PASSADO EM BRANCO. HÁ DOIS CAMPOS QUE SÃO AUTOMATICAMENTE SELECINADOS:  'TIPO DE MERCADORIA', 'TIPO DE NEGÓCIO'.
           ** MÉTODO DE RETORNO: UM ARRAY CONTENDO:
                * UM VALOR BOOLEANO PARA INDICAR SE A VALIDAÇÃO FOI BEM SUCEDIDA OU NÃO
                * UMA MENSAGEM COM UM DOS POSSÍVEIS ERROS. CONFORME O USUÁRIO FOR CORRIGINDO OS ERROS DE PREENCHIMENTO
                  DOS CAMPOS, OS AVISOS DESSES ERROR VÃO SUMINDO, ATÉ QUE NÃO RESTE MAIS NENHUM.
                    ... (return [dadosValidos,msgRetorno])....

    -- salvarNegoc()
       ==> ESSE MÉTODO É ACIONADO QUANDO O USUÁRIO CLICA NO BOTÃO DE SALVAR 'NOVA NEGOCIAÇÃO'
           ** REMOVE TODOS OS ALERTAS ANTERIORES QUE ESTIVEREM NO MODAL DE 'NOVA NEGOCIAÇÃO'
           ** CHAMA O MÉTODO validarNegoc(). SE A VALIDAÇÃO OCORREU, OS VALORES DOS CAMPOS SERÃO ARMAZENADOS E PASSADOS
            COMO PARÊMETROS PARA UMA CHAMADA AJAX.
           ** ESSA CHAMADA RETORNA UM OBJETO JSON COM DUAS PROPRIEDADES: *status E *msg.
           ** EM CASO DE SUCESSO, UM MODAL DE ALERTAS QUE ESTÁ 'ESCONDIDO' RECEBE UM ALERTA DE 'SUCESSO'
           ** O MODAL DE 'NOVA NEGOCIAÇÃO' É 'ESCONDIDO'.
           ** O MODAL DE ALERTAS É EXIBIDO
           ** (EM BREVE) UMA NOVA BUSCA É FEITA ATRÁS DESSE MODAL DE ALERTAS

   -- execHandlers()
      ==> ESSE MÉTODO SERÁ CHAMADO NO CARREGAMENTO PRINCIPAL DA PÁGINA.
          IRÁ INSERIR TODAS AS CAPTURAS DE EVENTOS REFERENTES AO PROCESSO DE INSERIR
          UMA NOVA NEGOCIAÇÃO
*/
var NovaNegoc = {
  campoZerado    : function(valor){
                      if(valor <= 0) return true;    // SE O USUÁRIO DIGITAR SOMENTE ZEROS, O CAMPO SERÁ CONSIDERADO 'ZERADO', E NÃO VALIDO//
                      return false;                  // SE NÃO, O CAMPO NÃO É CONSIDERADO 'ZERADO'//
                    },
  campoVazio     : function(valor){
                      if(!valor.length) return true; // SE O USUÁRIO NÃO DIGITOU NADA NO CAMPO, O CAMPO SERÁ CONSIDERADO 'VAZIO' NÃO VÁLIDO//
                      return false;                  // SE NÃO, O CAMPO NÃO É CONSIDERADO 'VAZIO'//
                   },
  validarNegoc   : function(){
                      var dadosValidos = true,                                        //ESSA VARIÁVEL SERVE PARA CONTROLAR O STATUS DA VALIDAÇÃO//
                          msgRetorno   = "",                                          //MENSAGEM PARA EXPLICAR STATUS DA VALIDAÇÃO;
                                $form  = $("#form_nova_negoc"),                       //SELECIONA O FORMULÁRIO//
                                  that = this;                                        //ARMAZENA A REFERÊNCIA 'this' PARA A CLASSE. CASO SEJA PRECISO REFERENCIAR ELA , MAS DENTRO DE UMA FUNÇÃO ANINHADA, USAR 'that'//
                      // ====> EU USO .serialize() ou .serializeArray() MAS ESTAVA DANDO ERRO E PRA NÃO ME ATRASAR FIZ DE OUTRO JEITO//
                      // ====> var dadosFornecidos = $("#form_nova_negoc").serializeArray();

                      $form.find(".form-control").each(function(){   //BUSCA CADA ITEM DE <form> COM A CLASSE .form-control//
                        //PARA CADA UM DELES//
                       var $campo = $(this),                  //ARMAZENA O ITEM COM A CLASSE .form-control EM UM OBJETO JQUERY//
                           valor  = $campo.val(),             //ARMAZENA O VALOR DO CAMPO//
                        nomeAtrib = $campo.attr("name"),      //ARMAZENA O ATRIBUTO 'NAME' DO CAMPO//
                        nomeEtiqu = (nomeAtrib === "preco_mercadoria") ? $campo.parent().prev().attr("data-name") : $campo.prev().attr("data-name");      //ARMAZENA O NOME REAL DO CAMPO, O TEXTO QUE ESTIVER DENTRO DE <label>//
                                  //===> POR CAUSA DA ESTRUTURA HTML DESSE CAMPO, NÃO EXISTE UMA <label> ANTES DELE. ENTÃO É PRECISO SUBIR PARA SEU ANCESTRAL <div class="input-group"> E DEPOIS BUSCAR A <label>//

                          // VERIFICA SE O CAMPO ESTÁ VAZIO //
                          if(that.campoVazio(valor)){
                            msgRetorno   = "<p>Por favor, preencha o campo \"" + nomeEtiqu + "\".</p>"; //EXPLICA O MOTIVO DE ERRO//
                            dadosValidos = false;                                                       //A ENTRADA NÃO DEVE SER ACEITA. STATUS ALTERADO PARA 'FALSO'//
                            return false;                                                               //ENCERRA A FUNÇÃO CALLBACK DE '$form.find(".form-control").each//
                          }
                          // VERIFICA SE O CAMPO ESTÁ PREENCHIDO SOMENTE COM ZEROS //
                          else if(that.campoZerado(valor)){
                            msgRetorno   = "<p>Por favor, não insira somente zeros no campo \"" + nomeEtiqu + "\".</p>"; //EXPLICA O MOTIVO DE ERRO//
                            dadosValidos = false;                                                                        //A ENTRADA NÃO DEVE SER ACEITA. STATUS ALTERADO PARA 'FALSO'//
                            return false;                                                                                //ENCERRA A FUNÇÃO CALLBACK DE '$form.find(".form-control").each//

                          }
                          //VERIFICA A QUANTIDADE DE CARACTERES (construindo!!!)//
                      });

                      return [dadosValidos,msgRetorno];  //UM ARRAY COM UM VALOR BOOLEANO E UMA MENSAGEM EXPLICANDO O STATUS DA VALIDAÇÃO//
                    },

  salvarNegoc    : function(){
                    var $node = $(this),                                            //ARMAZENA O BOTÃO PARA SALVAR A NEGOCIAÇÃO//
                       $modal = $("main").children("#modal_nova_negoc"),            //SELECIONA O MODAL DE UMA NOVA NEGOCIAÇÃO//
                $modalAlertas = $("#modal_alertas"),                                //SELECIONA O MODAL DE ALERTAS PARA O USUÁRIO//
                    validacao = NovaNegoc.validarNegoc();                           //ARMAZENA O RESULTADO DA VALIDAÇÃO. UM ARRAY COM UM VALOR BOOLEANO E UMA MENSAGEM EXPLICANDO O STATUS DA VALIDAÇÃO

                    //REMOVE ALERTAS ANTERIORES, DENTRO DO MODAL DE NOVA NEGOCIAÇÃO E DO MODAL DE ALERTAS//
                    $modal.add($modalAlertas).find(".alert").each(function(){ $(this).remove();});

                    //VALIDA OS DADOS. VERIFICA O PRIMEIRO ITEM DO ARRAY, QUE É UM VALOR BOOLEANO INDICANDO O RESULTADO DA VALIDAÇÃO//
                    if(!validacao[0]){
                      //SE FOR 'false' OS DADOS NÃO! SERÃO ACEITOS//
                        //INSERE NO MODAL UM AVISO DE ERRO NA INSERÇÃO, ANTES DO BOTÃO DE SALVAR E FECHAR//
                        $("<div class='alert alert-danger text-center'>" + validacao[1]+ "</div>").insertBefore($node.prev());
                        return false; //ENCERRA O CÓDIGO//

                    }else{  //SE FOR 'true' OS DADOS SERÃO ACEITOS//

                      // ARMAZENA OS VALORES DA NOVA NEGOCIAÇÃO PARA PASSA-LOS NA CHAMADA AJAX//
                                var $form  = $("#form_nova_negoc"),                       //SELECIONA O FORMULÁRIO//
                          codigoMercadoria = $form.find("#codigo_mercadoria_form").val(),
                            tipoMercadoria = $form.find("#tipo_mercadoria_form").val(),
                            nomeMercadoria = $form.find("#nome_mercadoria_form").val(),
                            qtdMercadoria  = $form.find("#qtd_mercadoria_form").val(),
                           precoMercadoria = $form.find("#preco_mercadoria_form").val(),
                               tipoNegocio = $form.find("#tipo_negocio_form").val();

                            //INICIA UMA CHAMADA AJAX//
                            $.ajax({
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

                                var json = JSON.parse(data); //CONVERTE OS DADOS RETORNADOS NUM OBJETO JSON//  //PROPIEDADES : status e msg//

                                if(json.status === "sucesso"){  //VERIFICA SE HOUVE SUCESSO NA INSERÇÃO ATRAVÉS DA PROPRIEDADE 'status'//
                                  //CASO SIM...//
                                  // console.log(data);
                                  $sucesso = $("<div class='alert alert-success text-center'>" + json.msg + "</div>");            //CRIA UM ALERTA DE SUCESSO//
                                  $modalAlertas.find(".modal-body").append($sucesso);                                             //INSERE ESSE ALERTA DENTRO DO MODAL DE ALERTAS//
                                  document.querySelector("form").reset();  //ps. está em js puro, porque deu erro com jQuery!!//  //ZERA OS CAMPOS DO FORMULÁRIO, PARA QUE O USUÁRIO NÃO PRECISE APAGAR O VALOR ANTIGO//
                                }
                            }); //FIM DE .done()//

                            $modal.modal("hide");                  //ESCONDE O MODAL DE NOVA NEGOCIAÇÃO PARA EXIBIR UMA MENSAGEM DE SUCESSO AO USUÁRIO//
                            $modalAlertas.modal("show");           //EXIBE O MODAL DE ALERTAS AVISANDO QUE HOUVE SUCESSO NA INSERÇÃO//
                            ListNegoc.carregarLista();             //APÓS SALVAR UMA NOVA NEGOCIAÇÃO... CARREGUE A LISTA COM TODAS AS ANTERIORES E A NOVA//
                            //O BOTÃO PARA ATUALIZAR AS NEGOCIAÇÕES AGORA É REDUNDANTE E PODE SER RETIRADO DA PÁGINA!!!//
                    }//FIM DE 'else'//
                  },
  execHandlers  : function(){
                    //EVENTO PARA O CLIQUE NO BOTÃO DE 'NOVA NEGOCIAÇÃO'//
                    // $("main").on("click","#nova_negoc_btn",this.abrirModal);

                    $("main").on("click","#salvar_nova_negoc",this.salvarNegoc);
                }
}
