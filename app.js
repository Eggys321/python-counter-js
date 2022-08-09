let number = document.getElementById('Num')
let dec = document.getElementById('Dec')
let Res = document.getElementById('Res')
let Inc = document.getElementById('Inc')
// Decrease function

function Decrease (){
    number.innerText--
}


// Reset function

let Reset = function(){
    number.innerText = 0
}

Res.addEventListener('click', Reset)



// Increase function


Inc.addEventListener('click',()=>{
        number.innerText++

} )