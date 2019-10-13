
Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

setInterval(() => {
	


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
	
	
	
document.getElementsByClassName('percent')[4].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'noIdea');}, 0)/data.length*100)+'%';
$('#easypiechart-blue2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'noIdea');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[5].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'witnessed');}, 0)/data.length*100)+'%';
$('#easypiechart-orange2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'witnessed');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[6].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'happened');}, 0)/data.length*100)+'%';
$('#easypiechart-teal2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'happened');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[7].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'iBullied');}, 0)/data.length*100)+'%';
$('#easypiechart-red2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'iBullied');}, 0)/data.length*100);
	
	
document.getElementsByClassName('percent')[8].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'nasty');}, 0)/data.length*100)+'%';
$('#easypiechart-blue3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'nasty');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[9].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'left');}, 0)/data.length*100)+'%';
$('#easypiechart-orange3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'left');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[10].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'tagged');}, 0)/data.length*100)+'%';
$('#easypiechart-teal3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'tagged');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[11].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'scammed');}, 0)/data.length*100)+'%';
$('#easypiechart-red3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'scammed');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[12].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'disturbed');}, 0)/data.length*100)+'%';
$('#easypiechart-blue4').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'disturbed');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[13].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'safe');}, 0)/data.length*100)+'%';
$('#easypiechart-orange4').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'safe');}, 0)/data.length*100);
	
 
    
});}, 1000);



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
	
	
	
document.getElementsByClassName('percent')[4].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'noIdea');}, 0)/data.length*100)+'%';
$('#easypiechart-blue2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'noIdea');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[5].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'witnessed');}, 0)/data.length*100)+'%';
$('#easypiechart-orange2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'witnessed');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[6].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'happened');}, 0)/data.length*100)+'%';
$('#easypiechart-teal2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'happened');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[7].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.bullying == 'iBullied');}, 0)/data.length*100)+'%';
$('#easypiechart-red2').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.bullying == 'iBullied');}, 0)/data.length*100);
	
	
document.getElementsByClassName('percent')[8].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'nasty');}, 0)/data.length*100)+'%';
$('#easypiechart-blue3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'nasty');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[9].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'left');}, 0)/data.length*100)+'%';
$('#easypiechart-orange3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'left');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[10].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'tagged');}, 0)/data.length*100)+'%';
$('#easypiechart-teal3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'tagged');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[11].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'scammed');}, 0)/data.length*100)+'%';
$('#easypiechart-red3').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'scammed');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[12].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'disturbed');}, 0)/data.length*100)+'%';
$('#easypiechart-blue4').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'disturbed');}, 0)/data.length*100);
	
document.getElementsByClassName('percent')[13].innerHTML=Math.round(data.reduce(function (n, el) {return n + (el.me == 'safe');}, 0)/data.length*100)+'%';
$('#easypiechart-orange4').data('easyPieChart').update(data.reduce(function (n, el) {return n + (el.me == 'safe');}, 0)/data.length*100);
	
 
    
    
    

setTimeout(() => {
	
    
    

data.forEach(el => {

if(el.who){

if(el.feel>60){	document.getElementById('reports').innerHTML=
`	<div class="col-md-4">
<div class="panel panel-info">
    <div class="panel-heading">Student feels great</div>
    <div class="panel-body">

<p>`+el.who+` did `+el.did+` to `+el.whom+` because `+el.why+`</p>

    </div>
</div>
</div>
`+document.getElementById('reports').innerHTML}

if(el.feel<60&&el.feel>=10){	document.getElementById('reports').innerHTML=
`	<div class="col-md-4">
<div class="panel panel-warning">
    <div class="panel-heading">Student feels OK</div>
    <div class="panel-body">

<p>`+el.who+` did `+el.did+` to `+el.whom+` because `+el.why+`</p>

    </div>
</div>
</div>
`+document.getElementById('reports').innerHTML}

if(el.feel<10){	document.getElementById('reports').innerHTML=
`	<div class="col-md-4">
<div class="panel panel-danger">
    <div class="panel-heading">Student feels bad</div>
    <div class="panel-body">

<p>`+el.who+` did `+el.did+` to `+el.whom+` because `+el.why+`</p>

    </div>
</div>
</div>
`+document.getElementById('reports').innerHTML}}
	

    
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
