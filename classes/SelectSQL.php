<?php
class SelectSQL extends StmtSQL{

  function __construct($tables,$fields = '*'){
    $this->tables   = "FROM {$tables} ";
    $this->fields   = $fields;
    // parent:: function __construct();
    return $this;
  }

  public function limit($limit){
    $this->limitClause = "LIMIT {$limit}";
    return $this;
  }

  public function orderBy($order, $flag = NULL){
    $this->orderByClause = "ORDER BY $flag{$order}";
    return $this;
  }

  public function convertToStr(){

    if(sizeof($this->whereClause) <= 0){
      $this->strStmt = "SELECT {$this->fields} {$this->tables} {$this->orderByClause} {$this->limitClause}";
    }else{
      $this->strStmt = "SELECT {$this->fields} {$this->tables} WHERE";
      foreach($this->whereClause as $filter){
        $this->strStmt .= $filter;
      }
      $this->strStmt .= "{$this->orderByClause} {$this->limitClause}";
    }

    return $this->strStmt;
  }

  function __tostring(){
    return "{$this->strStmt}";
  }
}
