function calcular() {
    let peso = document.getElementById('txtpes')
    let altura = document.getElementById('txtalt')
    let res = document.getElementById('res')

    let p = Number(peso.value)
    let alt = Number(altura.value)
    let imc = p / (alt **2)

    if(imc >= 18.5 && imc <= 24.9){
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(1)},
         esse valor é considerado NORMAL.</p>`
         document.body.style.background = 'linear-gradient(to right, green, yellowgreen)'

    }else if(imc < 30.0){
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(1)},
         esse valor é considerado como SOBREPESO!</p>`
         document.body.style.background = '#cf7004'

    }else if(imc > 30) {
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(1)},
        esse valor é considerado como OBESIDADE!</p>`
        document.body.style.background = 'linear-gradient(to left, red, yellow)'
      
    } if(imc < 18.5){
        res.innerHTML = `<p> O seu IMC é de ${imc.toFixed(1)},
         esse valor é considerado como MAGREZA!</p>`
         document.body.style.background = '#cf7004'
        }
        
   
}