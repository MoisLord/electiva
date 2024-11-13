$(document).ready(function(){
//VALIDACION DE DATOS	
$("#rif").on("keypress",function(e){
    validarkeypress(/^[0-9-\b]*$/,e);
});

$("#rif").on("keyup",function(){
    validarkeyup(/^[0-9]{6,9}$/,$(this),
$("#srif"),"El formato debe ser 092348760 o 00003454");
    if($("#rif").val().length > 6){
      var datos = new FormData();
        datos.append('accion','consultatr');
        datos.append('rif',$(this).val());
        enviaAjax(datos,'consultatr');	
    }
});

$("#Nombre").on("keypress",function(e){
    validarkeypress(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
});
$("#Nombre").on("keyup",function(){
    validarkeyup(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/,
    $(this),$("#sNombre"),"Solo Alfanumericos entre 3 y 30 caracteres");
});
$("#Telefono").on("keypress",function(e){
    validarkeypress(/^[0-9-\b-]*$/,e);
});

$("#Telefono").on("keyup",function(){
    validarkeyup(/^[0-9]{11,15}$/,$(this),$("#sTelefono"),"El formato debe ser 041215478964");
});
$("#direccion").on("keypress",function(e){
    validarkeypress(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
});
$("#direccion").on("keyup",function(){
    validarkeyup(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/,
    $(this),$("#sdireccion"),"Solo letras  entre 3 y 30 caracteres");
});

//FIN DE VALIDACION DE DATOS
//Función para validar por Keypress
function validarkeypress(er,e){
        
    key = e.keyCode;
    
    
    tecla = String.fromCharCode(key);
    
    
    a = er.test(tecla);
    
    if(!a){
    
        e.preventDefault();
    }
    
    
}
//Función para validar por keyup
function validarkeyup(er,etiqueta,etiquetamensaje,
mensaje){
    a = er.test(etiqueta.val());
    if(a){
        etiquetamensaje.text("");
        return 1;
    }
    else{
        etiquetamensaje.text(mensaje);
        return 0;
    }
}

}); 