function mostrar(){
    var element = document.getElementById('medRolo')
    var valor = element.options[element.selectedIndex].value
    var texto = element.options[element.selectedIndex].text
    var larg = Number(document.getElementById('altP').value)
   var compr = Number(document.getElementById('largP').value)
   var res = document.getElementById('res')
   
    if (valor == 0){
   alert('Favor selecionar medidas de rolo')
    }else{
       var calc1 = larg * compr
       
    }if(valor == 1){
        var calc2 = 0.58 * 1.5
        var calcFin = calc1/calc2
        res.innerHTML = `<p>Você irá precisar de ${calcFin.toFixed(1)} rolos de ${texto}</p>`
        res.innerHTML +=`<p>Sugerimos que sempre compre um rolo a mais do que o indicado.</p>`

    }else if(valor == 2){
        var calc2 = 0.58 * 2.5
        var calcFin = calc1/calc2
        res.innerHTML = `Você irá precisar de ${calcFin.toFixed(1)} rolos de ${texto}`
        res.innerHTML +=`<p>Sugerimos que sempre compre um rolo a mais do que o indicado.</p>`
    }
    else if(valor == 3){
        var calc2 = 0.58 * 3.0
        var calcFin = calc1/calc2
        res.innerHTML = `Você irá precisar de ${calcFin.toFixed(1)} rolos de ${texto}`
        res.innerHTML +=`<p>Sugerimos que sempre compre ${calcFin +=1}.</p>`
    }
    else if(valor == 4){
        var calc2 = 0.58 * 3.5
        var calcFin = calc1/calc2
        res.innerHTML = `Você irá precisar de ${calcFin.toFixed(1)} rolos de ${texto}`
        res.innerHTML +=`<p>Sugerimos que sempre compre um rolo a mais do que o indicado.</p>`
}
}
