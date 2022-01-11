function verificar() {
    let ini = document.getElementById('txti') //Transformando em variaveis
    let fin = document.getElementById('txtf')
    let passo = document.getElementById('txtp') 
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fin.value.length == 0 || passo.value.length == 0){
         window.alert('[ERRO] Faltam dados!')
         res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value) //transformando em valor numerico
        let f = Number(fin.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            window.alert('Passo inválido! Vamos considerar PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449} `//unicode list(no google)
        }
    }else {
        //contagem regressiva
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
        }
}








