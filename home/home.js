'use strict'

let btn = document.querySelector("#home");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let body = document.querySelector("#body");

    body.innerHTML = '';

    let html = `
         <div id="home" style="display:block;background-color:#DBFAD4;"> <br> <br>

            <!-- Slider (carousel) -->
            <div class="container mt-4">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicadores -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <!-- Imágenes del slider -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="slider_img" src="./img/bandera.png" alt="Imagen 1" style="width:100%;">
                        </div>
                        <div class="carousel-item">
                            <img class="slider_img" src="./img/normal.jpg" alt="Imagen 2" style="width:100%;">
                        </div>
                        <div class="carousel-item">
                            <img class="slider_img" src="./img/normal2.jpg" alt="Imagen 3" style="width:100%;">
                        </div>
                    </div>

                    <!-- Controles -->
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Siguiente</span>
                    </a>
                </div>
            </div> <br> <br>

            <!-- Cards -->
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img src="imagen1.jpg" alt="Card 1" style="width:100%;">
                            <div class="card-body">
                                <h5 class="card-title">Card 1</h5>
                                <p class="card-text">Contenido de la tarjeta 1.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src="imagen2.jpg" alt="Card 2" style="width:100%;">
                            <div class="card-body">
                                <h5 class="card-title">Card 2</h5>
                                <p class="card-text">Contenido de la tarjeta 2.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src="imagen3.jpg" alt="Card 3" style="width:100%;">
                            <div class="card-body">
                                <h5 class="card-title">Card 3</h5>
                                <p class="card-text">Contenido de la tarjeta 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br> <br>

            <!-- Caja de Comentarios -->
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Caja de Comentarios</h2>
                        <!-- Agrega aquí tu formulario de comentarios -->
                    </div>
                </div>
            </div> <br> <br>

    </div>
    `;

    body.innerHTML += html;

});
