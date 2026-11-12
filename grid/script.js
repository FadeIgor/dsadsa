const btn = document.querySelector('button')

const p = document.getElementById('obliczenia')

btn.addEventListener('click', function(e){
    e.preventDefault();

    let metry = document.getElementById('powierzchnia').value 
    let usluga = document.getElementById('usluga').value
    let gruntowanie = document.getElementById('gruntowanie').checked
    let materialy = document.getElementById('materialy').value

    let cena_m = parseInt(usluga);

    if(gruntowanie == true) cena_m+=5;
    if(materialy=='firma') cena_m+=15;

    console.log(cena_m)
    p.innerText = cena_m*metry

});