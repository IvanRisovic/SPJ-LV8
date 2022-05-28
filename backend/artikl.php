<?php

class artikl
{
    public $id;
    public $naziv;
    public $proizvodac;
    public $model;
    public $cijena;
    public $kolicina;

    public function __construct($id = null, $n = null, $p = null, $m = null, $c = null, $k = null)
    {
        if($id) $this->id = $id;
        if($n) $this->naziv = $n;
        if($p) $this->proizvodac = $p;
        if($m) $this->model = $m;
        if($c) $this->cijena = $c;
        if($k) $this->kolicina = $k;
    }
}