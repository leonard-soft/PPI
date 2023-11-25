'use strict'

let button = document.querySelector("#teachers");

button.addEventListener("click", function (event) {

    let Body = document.querySelector("#body");
    Body.innerHTML = '';

    let html = ` <br> <br>

        <h1 align="center" class="font2" >Docentes en Formación</h1> <br> 

        <div class="bg1"> 

            <div style="display:flex; justify-content:center;">
                <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/Leonard.jpeg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Leonardo <br> Bermudez</h3>
                    </div>
                </div>

                <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/Angela.jpeg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Angela <br> Borrego</h3>
                    </div>
                </div>

                <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/Emelyn.jpeg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Emelyn <br> Martinez</h3>
                    </div>
                </div>

            </div>

            <div style="display:flex; justify-content:center;">
                
                 <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/Mara.jpeg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Mara <br> Redondo</h3>
                    </div>
                </div>

                 <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/Rosmary.jpeg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Rosmary <br> Rivera</h3>
                    </div>
                </div>
                
            </div> <br> <br>

            <h1 align="center" class="font2"> Instituciones Educativas</h1> <br> 

            <div style="display:flex; justify-content:center;">
                
                 <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/colegio1.jpeg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Centro Educativo Divino Niño</h3>
                    </div>
                </div>

                 <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/colegio2.jpeg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Fundación Sembradores de Paz</h3>
                    </div>
                </div>

                <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/colegio3.png" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Centro Educativo Personas pequeñas</h3>
                    </div>
                </div>

                <div class="card" style="width: 18rem; border-radius:50px; ">
                    <img src="img/SanJuan.jpg" style="border-radius:55px; height:280px;" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h3 class="font2" align="center">Institución Educativa San Juan del Cordoba</h3>
                    </div>
                </div>
                
            </div> <br> <br>

        </div> <br> <br>
    `;

    Body.innerHTML = html;

});
