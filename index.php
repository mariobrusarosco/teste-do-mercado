<?php
  //FUNCÃO PARA CARREGAR AUTOMATICAMENTE AS CLASSES QUE FOREM NECESSÁRIAS//
  function autoload($classe){
    require_once("classes/{$classe}.php");
  }

  //CARREGA O CABEÇALHO DA PÁGINA//
  require_once("includes/header.php");
?>

<div class="container">
  <div class="row">
      <button id="mario" class="btn btn-primary">My Row</button>
  </div>
</div>

<?php
  //CARREGA O RODAPÉ DA PÁGINA//
  require_once("includes/footer.php");
?>
