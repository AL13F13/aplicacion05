// JavaScript Document
$(document).ready(function(e) {
 //document.addEventListener("deviceready",function(){
	$ ('#btndatos').on ('click', function (){ 
	
		//alert ('hola');
		$('body').pagecontainer ("change", "#datos",
		{transition : "flip"});
		
//}); 
});

}); //click btndatos



// JavaScript Document
$(document).ready(function(e) {
 //document.addEventListener("deviceready",function(){
	$ ('#resultado').on ('click', function (){ 
		//alert ('hola');
		$ ('body').pagecontainer ("change", "#resultado",
		{transition : "flip"});
		var imc;
		var nombre = $ ('#txtnombre').text;
		var peso = $('#txtpeso').val();
		var talla = $ ('#txttalla').val();
		alert(peso);
		alert(talla);
		imc = peso/(talla*talla);
		$('#imc').text(' hola ' + ' nombre '  +   $(' #txtnombre ').val() + ' tu'+    ' imc es de = ' +imc);
		
//}); 
});

}); //click btndatos