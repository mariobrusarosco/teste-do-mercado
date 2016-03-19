<?php
  //FUNCÃO PARA CARREGAR AUTOMATICAMENTE AS CLASSES QUE FOREM NECESSÁRIAS//
  function autoload($classe){
    require_once("classes/{$classe}.php");
  }

  //CARREGA O CABEÇALHO DA PÁGINA//
  require_once("includes/header.php");
?>

<main class="container">

  <header>
    <div id="logo_vale_mobi" class="logo row">
      <div class="col-xs-12 col-lg-6">
        <img class="img-responsive" src="img/logo.png" title="ValeMobi" alt="ValeMobi">
      </div>
    </div>

    <nav id="barra_navegacao" class="nav row">
      <div class="col-xs-12">
        <button id="nova_negoc_btn" class="btn btn-info btn-block center-block" type="button" data-toggle="modal" data-target="#modal_nova_negoc">Nova Negociação</button>
      </div>
      <div class="col-xs-12">
        <button id="lista_negoc_btn" class="btn btn-primary btn-block center-block" type="button" data-toggle="modal" data-target="#myModal">Listar Negocições</button>
      </div>
    </nav>
  </header>

    <div class='modal fade' id='modal_nova_negoc' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>
      <div class='modal-dialog modal-lg' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
            <h4 class='modal-title' id='myModalLabel'>Nova Negociação</h4>
          </div>

          <div class='modal-body'>
              <form class="" action="index.html" method="post">

                <div class="form-group">
                  <label for="codigo_mercadoria_form">Código Mercadoria</label>
                  <input id="codigo_mercadoria_form" type="number" class="form-control" placeholder="Digite o Código da Mercadoria" required="required">
                </div>

                <div class="form-group">
                  <label for="tipo_mercadoria_form">Tipo Mercadoria</label>
                  <select id="tipo_mercadoria_form" type="number" class="form-control">
                    <option class="">Tipo 01</option>
                    <option class="">Tipo 02</option>
                    <option class="">Tipo 03</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="nome_mercadoria_form">Nome</label>
                  <input id="nome_mercadoria_form" type="text" class="form-control" placeholder="Digite o Nome da Mercadoria">
                </div>

                <div class="form-group">
                  <label for="qtd_mercadoria_form">Quantidade</label>
                  <input id="qtd_mercadoria_form" type="number" class="form-control" placeholder="Digite a Quantidade da Mercadoria">
                </div>

                <div class="form-group">
                  <label for="preco_mercadoria_form">Preço</label>
                  <div class="input-group">
                    <div class="input-group-addon">R$</div>
                    <input id="preco_mercadoria_form" type="number" step="0.01" class="form-control" placeholder="Preço em Reais">
                  </div>
                </div>

                <div class="form-group">
                  <label for="tipo_negocio_form">Tipo Negócio</label>
                  <select id="tipo_negocio_form" type="number" class="form-control">
                    <option class="">Negócio 01</option>
                    <option class="">Negócio 02</option>
                    <option class="">Negócio 03</option>
                  </select>
                </div>

              </form>

          </div>
          <div class='modal-footer'>
            <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>
            <button type='button' class='btn btn-primary'>Save changes</button>
          </div>
        </div>
      </div>
    </div>



</main>

<?php
  //CARREGA O RODAPÉ DA PÁGINA//
  require_once("includes/footer.php");
?>
