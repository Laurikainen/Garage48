
Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}


fetch('https://growby.app/slide',{
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    method: "POST"})
.then(r => r.json())
.then(data => {

 document.getElementsByClassName('easypiechart')[0].setAttribute('data-percent',data.sum("feel")/data.length);
    document.getElementsByClassName('easypiechart')[0].setAttribute('data-percent',data.sum("feel")/data.length);
    


    
    

data.forEach(el => {

    

if(el.why)document.getElementById('reports').innerHTML+=
`	<div class="col-md-4">
<div class="panel panel-info">
    <div class="panel-heading">Info Panel</div>
    <div class="panel-body">
        <p>`+el.why+`</p>
    </div>
</div>
</div>
`
    
});
/*

document.getElementById('reports').innerHTML=

`	<div class="col-md-4">
<div class="panel panel-info">
    <div class="panel-heading">Info Panel</div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>
    </div>
</div>
</div>
<div class="col-md-4">
<div class="panel panel-warning">
    <div class="panel-heading">Warning Panel</div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>
    </div>
</div>
</div>
<div class="col-md-4">
<div class="panel panel-danger">
    <div class="panel-heading">Danger Panel</div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.</p>
    </div>
</div>
</div>`*/ 


  
});
