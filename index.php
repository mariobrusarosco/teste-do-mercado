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
