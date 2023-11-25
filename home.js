'use strict'

let btn = document.querySelector("#home");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let body = document.querySelector("#body");

    body.innerHTML = '';

    let html = `
         <div id="home" style="display:block;background-color:#DBFAD4;">  

         <div class="container col-xxl-8 px-4 py-5">
         <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
           <div class="col-10 col-sm-8 col-lg-6">
             <img class="cipa" src="img/cipa.jpeg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
           </div>
           <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 font2">Nuestra Experiencia</h1>
                <p class="size1"> La experiencia es algo maravilloso, nos permite reconocer un error cada vez que lo volvemos a cometer. Franklin P. Jones </p>
           </div>
         </div>
       </div>

       <div class="bg1" style="width:1200px; display:block; margin:auto;">
           <img src="img/pedagogia.png">
       </div> <br> <br>

    </div>
    `;

    body.innerHTML += html;

});
