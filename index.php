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
        <button id="nova_negoc_btn" class="btn btn-info btn-block center-block">Nova Negociação</button>
      </div>
      <div class="col-xs-12">
        <button id="lista_negoc_btn" class="btn btn-primary btn-block center-block">Listar Negocições</button>
      </div>
    </nav>

  </header>

  <section>

  </section>


</main>

<?php
  //CARREGA O RODAPÉ DA PÁGINA//
  require_once("includes/footer.php");
?>
