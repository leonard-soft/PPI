'use strict'

let pts = document.querySelector("#pts");

pts.addEventListener('click', function (event) {

    let body = document.querySelector("#body");
    body.innerHTML = '';

    let html = ` <br> <br>

    <h1 align="center" class="font2" >Proyecto Transversal de Educación Sexual</h1> <br> 

    <div class="bg1"> 

    <div style="background-color:#DDC3EA; width:1200px; display:block; margin:auto;" class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 align="center" class="display-5 fw-bold">VALORACIÓN DE SÍ MISMO/A</h1> <br>
            <p style="display:block; margin:auto;" class="col-md-8 fs-4">Me reconozco como un ser valioso y único, que se merece ser respetado y valorado.
            Recurro a las instituciones y personas adecuadas que puedan ayudarme a defender mis derechos cuando estos son vulnerados
            </p>
        </div>
    </div>

    <div style="display:flex; justify-content:center;">

        <div style="background-color:#FADBD8; width:560px; margin:20px;" class="h-100 p-5 text-bg-dark rounded-3">
            <h2>Actividades</h2>
            <p>Se les realizó una charla a los estudiantes, para explicarles sobre el tema del consentimiento
            Semáforo del consentimiento: se utilizó un semáforo como referencia. Se ´les explicó que el verde significa “sí”, el amarillo “dudoso” o “indeciso”, y el rojo “no”. Se les pidió a los niños que levantaran tarjetas de colores para expresar su nivel de consentimiento en diferentes ocasiones.
            Juegos de rol: Se organizó juegos de rol donde los niños practicaron pedir permiso antes de interactuar con los demás, como preguntar si podían unirse al juego o si podían compartir una merienda
            </p>
        </div>

        <div style="background-color:#FADBD8; width:560px; margin:20px;" class="h-100 p-5 text-bg-dark rounded-3">
            <h2>Estrategias</h2>
        <p>Socialización del tema ante del inicio de las actividades.
        Se involucró a los niños en las actividades asignadas para que así de esta manera pudieran aplicarlas a situaciones cotidianas.
        Se estimularon a los niños a través de actividades y juegos motivadores.
        </p>
        </div>
    </div>

    </div> <br> <br>
`;

    body.innerHTML = html;


});

