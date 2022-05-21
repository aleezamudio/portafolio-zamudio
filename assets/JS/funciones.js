const links = document.querySelectorAll(".links")
const contenedorAno = document.querySelector(".contenedor-ano")
const elementosMenuProyectos = document.querySelectorAll(".elementos-menu-proyectos")

// AÑADIR CLASE ACTIVA CLICKANDO MENÚ
links.forEach(link => {
    link.addEventListener("click", añadirActiva)
});


function añadirActiva() {
    links.forEach(link => {
        link.classList.remove("activa")
    });

    this.classList.add("activa")
}

// AÑADIR CLASE ACTIVA HACIENDO SCROLL MENÚ
$(window).scroll(function(){
    if($(document).scrollTop() < ($("#habilidades").offset().top - 300)) { //Si el scrollTop de la ventana es menor o igual que el top de habilidades le pone la clase activa a quien-soy
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[0].classList.add("activa")
    }

    if($(document).scrollTop() > ($("#habilidades").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[1].classList.add("activa")
    }

    if($(document).scrollTop() >= ($("#proyectos").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[2].classList.add("activa")
    }

    if($(document).scrollTop() >= ($("#contacto").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[3].classList.add("activa")
    }
});

// ANIMACIÓN SUAVE SCROLL ENLACES
$(document).ready(function () {
    $('a').click(function(){
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 500);});
});

// BOTON SUBIR ARRIBA ANIMACIÓN APARECER Y DESAPARECER
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('.flecha-subir').fadeIn('fast');
    } else if ($(this).scrollTop() > 100) {
        $('.flecha-subir').fadeOut('fast');
    }
});

//EFECTO FADE DEL MODAL SABER MÁS SOBRE MÍ
$("#fade").modal({
    fadeDuration: 300,
    fadeDelay: 1.50
});

// CAMBIAR AÑO AUTOMÁTICAMENTE
var fecha = new Date();
var anio = fecha.getFullYear();
contenedorAno.innerHTML = anio

//CAMBIAR ACTIVA EN EL MENÚ PROYECTOS
elementosMenuProyectos.forEach(element => {
    element.addEventListener("click", cambiarActiva)
});

function cambiarActiva() {
    elementosMenuProyectos.forEach(element => {
        element.classList.remove("activa")
        this.classList.add("activa")
    });
}

//AJAX PROYECTOS
const lista_menu = $(".proyecto-menu ul")
const lista_menu_select = $("#proyecto-menu-item")
const video = $(".video")
const github = $(".github")
const website = $(".website")
const titulo = $(".titulo-proyecto")
const puno = $(".puno")
const pdos = $(".pdos")
const tecnologias_proyecto = $(".tecnologias-proyecto")
var objeto_json

$.ajax({
    url: "assets/JS/proyectos.json",
    dataType: "json",
    success: primeraPeticion
})

function primeraPeticion(json) {
    objeto_json = json;
    for (let i = 0; i < json.proyectos.length; i++) {
        if(i == 0) {
            if($(window).width() <= 550) {
                lista_menu_select.html(lista_menu_select.html()+'<option selected id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')  
            }else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos activa" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
            }
            video.attr("src", json.proyectos[i].video)
            github.attr("href", json.proyectos[i].github)
            website.attr("href", json.proyectos[i].website)
            titulo.html(json.proyectos[i].nombre)
            puno.html(json.proyectos[i].descripcion.uno)
            pdos.html(json.proyectos[i].descripcion.dos)
            iconos = json.proyectos[i].iconos
            for (let i = 0; i < iconos.length; i++)  {
                tecnologias_proyecto.html(tecnologias_proyecto.html() + iconos[i])
            }
        }else {
            if($(window).width() <= 550) {
                lista_menu_select.html(lista_menu_select.html()+'<option id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')
            }else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos" id="' + i + '">' + json.proyectos[i].nombre +  '</li>')
            }
        }
        
    }

    if($(window).width() <= 550) {
        lista_menu_select.change(segundaPeticion)
    }else {
        const items_menu = $(".proyecto-menu ul li")
        items_menu.click(segundaPeticion)
    }
    
}

function segundaPeticion() {
    let id_elemento
    if($(window).width() <= 550) {
        id_elemento = $('#proyecto-menu-item option:selected').attr('id')
        lista_menu_select.html('')
    }
    else {
        id_elemento = $(this).attr('id')
        lista_menu.html("")
    }

    for (let i = 0; i < objeto_json.proyectos.length; i++) {
        if(i == id_elemento) {
            if($(window).width() <= 550) {
                lista_menu_select.html(lista_menu_select.html()+'<option selected id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')
            }else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos activa" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
            }

            
            video.attr("src", objeto_json.proyectos[i].video)
            github.attr("href", objeto_json.proyectos[i].github)
            website.attr("href", objeto_json.proyectos[i].website)
            titulo.html(objeto_json.proyectos[i].nombre)
            puno.html(objeto_json.proyectos[i].descripcion.uno)
            pdos.html(objeto_json.proyectos[i].descripcion.dos)
            tecnologias_proyecto.html("")
            iconos = objeto_json.proyectos[i].iconos
            for (let i = 0; i < iconos.length; i++)  {
                tecnologias_proyecto.html(tecnologias_proyecto.html() + iconos[i])
            }
        }else {
            if($(window).width() <= 550) {
                lista_menu_select.html(lista_menu_select.html()+'<option id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')
            }
            else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
            }
        }
        
    }

    if($(window).width() <= 550) {
        lista_menu_select.change(segundaPeticion)
    }else {
        const items_menu = $(".proyecto-menu ul li")
        items_menu.click(segundaPeticion)
    }
}

//DESPLEGAR MENÚ EN RESPONSIVE
const hamburguesa = $(".hamburguesa")
const menu = $(".menu")
const cerrar_menu = $(".cerrar_menu")
const contenido = $(".contenido")
hamburguesa.click(desplegarMenu)
cerrar_menu.click(ocultarMenu)
if($(window).width() <= "768") {
    contenido.click(ocultarMenu)
    links.forEach(link => {
        link.addEventListener("click", ocultarMenu)
    });
}

function desplegarMenu() {
    if($(window).width() <= 768) {
        menu.css("left", "0")
        hamburguesa.css("display", "none")
        cerrar_menu.css("display", "flex")
        menu.css("transition", "all .3s ease")
    }
}
function ocultarMenu() {
    if($(window).width() <= 768) {
        menu.css("left", "-30%")
        hamburguesa.css("display", "flex")
        cerrar_menu.css("display", "none")
        menu.css("transition", "all .3s ease")
    }
    if($(window).width() <= 550) {
        menu.css("left", "-100%")
        hamburguesa.css("display", "flex")
        cerrar_menu.css("display", "none")
        menu.css("transition", "all .3s ease")
    }

}

// ANIMACION ELEMENTO BAJAR
const letras_bajar = $(".bajar")

function animacionBajar() {
    letras_bajar.animate({'bottom': '22%'}, {
        duration: 500,
        complete: function() {
            letras_bajar.animate({bottom: '20%'}, {
                duration: 500, 
                complete: animacionBajar})
        }
    })
};

animacionBajar()

// HOVER CONTACTO ITEMS
const contacto_item = $(".contacto-item")

contacto_item.mouseover(function() {
    id_item = $(this).attr("id")
    $("#" + id_item + " a i").css("color", "#108e91")
    $("#" + id_item + " a span").css("color", "#108e91")
    $("#" + id_item + " a i").css("transition", "all .15s ease")
    $("#" + id_item + " a span").css("transition", "all .15s ease")
})

contacto_item.mouseout(function() {
    id_item = $(this).attr("id")
    $("#" + id_item + " a i").css("color", "#0B5345")
    $("#" + id_item + " a span").css("color", "#0B5345")
    $("#" + id_item + " a i").css("transition", "all .15s ease")
    $("#" + id_item + " a span").css("transition", "all .15s ease")
})