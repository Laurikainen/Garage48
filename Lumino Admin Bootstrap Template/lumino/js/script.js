
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
data = data.filter(value => value.feel);
console.log(data);
    
	
	
document.getElementsByClassName('percent')[0].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.feel == 99);}, 0)/data.length*100)+'%';
$('#easypiechart-blue').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.feel == 99);}, 0)/data.length*100);
   
document.getElementsByClassName('percent')[1].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.feel == 66);}, 0)/data.length*100)+'%';
$('#easypiechart-orange').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.feel == 66);}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[2].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.feel == 33);}, 0)/data.length*100)+'%';
$('#easypiechart-teal').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.feel == 33);}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[3].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.feel == 1);}, 0)/data.length*100)+'%';
$('#easypiechart-red').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.feel == 1);}, 0)/data.length*100);
	
	
	
    console.log(data.reduce(function (n, el) {return n + (el.me == 'left');}, 0)/data.length*100);
 
    
    
    

setTimeout(() => {
	
    
    

data.forEach(el => {



if(el.feel>60){	document.getElementById('reports').innerHTML+=
`	<div class="col-md-4">
<div class="panel panel-info">
    <div class="panel-heading">Student report</div>
    <div class="panel-body">
        <p>`+el.feel+`</p>
<p>`+el.bullying+`</p>
<p>`+el.me+`</p>
<p>`+el.who+`</p>
<p>`+el.did+`</p>
<p>`+el.whom+`</p>
<p>`+el.why+`</p>
    </div>
</div>
</div>
`}

if(el.feel<60){	document.getElementById('reports').innerHTML+=
`	<div class="col-md-4">
<div class="panel panel-warning">
    <div class="panel-heading">Student report</div>
    <div class="panel-body">
        <p>`+el.feel+`</p>
<p>`+el.bullying+`</p>
<p>`+el.me+`</p>
<p>`+el.who+`</p>
<p>`+el.did+`</p>
<p>`+el.whom+`</p>
<p>`+el.why+`</p>
    </div>
</div>
</div>
`}

if(el.feel<10){	document.getElementById('reports').innerHTML+=
`	<div class="col-md-4">
<div class="panel panel-danger">
    <div class="panel-heading">Student report</div>
    <div class="panel-body">
        <p>`+el.feel+`</p>
<p>`+el.bullying+`</p>
<p>`+el.me+`</p>
<p>`+el.who+`</p>
<p>`+el.did+`</p>
<p>`+el.whom+`</p>
<p>`+el.why+`</p>
    </div>
</div>
</div>
`}
	

    
});
    
    
}, 1000);
    
    
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
