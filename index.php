<?php
  //FUNCÃO PARA CARREGAR AUTOMATICAMENTE AS CLASSES QUE FOREM NECESSÁRIAS//
  function autoload($classe){
    require_once("classes/{$classe}.php");
  }

  //CARREGA O CABEÇALHO DA PÁGINA//
  require_once("includes/header.php");
?>

<main class="container">

  <header class="row">

      <div id="logo_vale_mobi" class="logo col-xs-6 col-sm-4 col-md-3 col-lg-3">
        <img class="img-responsive" src="img/logo.png" title="ValeMobi" alt="ValeMobi">
      </div>

    <nav id="barra_navegacao" class="nav col-xs-6 col-sm-8 col-md-9">
      <div class=" col-sm-6">
        <button id="nova_negoc_btn" class="btn btn-info btn-block center-block" type="button" data-toggle="modal" data-target="#modal_nova_negoc">Nova Negociação</button>
      </div>
      <div class=" col-sm-6">
        <button id="lista_negoc_btn" class="btn btn-primary btn-block center-block" type="button" data-toggle="modal" data-target="#myModal">Listar Negocições</button>
      </div>
    </nav>
  </header>


  <div class='modal fade' id='modal_nova_negoc' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>
    <div class='modal-dialog modal-lg' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
          <h4 class='modal-title' id=''>Nova Negociação</h4>
        </div>

        <div class='modal-body'>
            <form id="form_nova_negoc"class="" action="" method="">

              <div class="form-group">
                <label data-name="Código Mercadoria" for="codigo_mercadoria_form">Código Mercadoria</label>
                <input id="codigo_mercadoria_form" name="codigo_mercadoria" type="number" class="form-control" placeholder="Digite o Código da Mercadoria" required="required">
              </div>

              <div class="form-group">
                <label data-name="Tipo Mercadoria" for="tipo_mercadoria_form">Tipo Mercadoria</label>
                <select id="tipo_mercadoria_form" name="tipo_mercadoria" type="number" class="form-control" required="required">
                  <option class="" value="tipo1" selected>Tipo 01</option>
                  <option class="" value="tipo2">Tipo 02</option>
                  <option class="" value="tipo3">Tipo 03</option>
                </select>
              </div>

              <div class="form-group">
                <label data-name="Nome" for="nome_mercadoria_form">Nome</label>
                <input id="nome_mercadoria_form" name="nome_mercadoria" type="text" class="form-control" placeholder="Digite o Nome da Mercadoria" required="required">
              </div>

              <div class="form-group">
                <label data-name="Quantidade" for="qtd_mercadoria_form">Quantidade</label>
                <input id="qtd_mercadoria_form" name="qtd_mercadoria" type="number" class="form-control" placeholder="Digite a Quantidade da Mercadoria" required="required">
              </div>

              <div class="form-group">
                <label data-name="Preço" for="preco_mercadoria_form">Preço</label>
                <div class="input-group">
                  <div class="input-group-addon">R$</div>
                  <input id="preco_mercadoria_form" name="preco_mercadoria" type="number" step="0.01" maxlength="10" class="form-control" placeholder="Preço em Reais" required="required">
                </div>
              </div>

              <div class="form-group">
                <label data-name="Tipo Negócio" for="tipo_negocio_form">Tipo Negócio</label>
                <select id="tipo_negocio_form" name="tipo_negocio" type="number" class="form-control" required="required">
                  <option class="">Compra</option>
                  <option class="">Venda</option>
                </select>
              </div>

            </form>

        </div>
        <div class='modal-footer'>
          <button type='button' class='btn btn-default' data-dismiss='modal'>Fechar</button>
          <button id="salvar_nova_negoc" type='button' class='btn btn-primary'>Salvar</button>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade modal_alertas" id="modal_alertas" tabindex="-1" role="dialog" aria-labelledby="">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">

        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>




</main>

<?php
  //CARREGA O RODAPÉ DA PÁGINA//
  require_once("includes/footer.php");
?>
