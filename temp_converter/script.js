let inpCel = document.getElementById("cel")
let inpFar = document.getElementById("far")

inpCel.addEventListener('input', function(){
    let c = this.value
    let f = (c * 9/5) + 32
    // to store integer only to 4 digits

    if(!Number.isInteger(f)){
        f = f.toFixed(4) //to minimize it to 4 digits
    }

    
    inpFar.value = f
})
inpFar.addEventListener('input', function(){
    let f = this.value
    let c = (f - 32) * 5/9

    if(!Number.isInteger(c)){
        c = c.toFixed(4) //to minimize it to 4 digits
    }

    inpCel.value = c
})