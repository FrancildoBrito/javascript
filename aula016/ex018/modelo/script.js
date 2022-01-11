let num = document.getElementById('txtn')
let lista = document.getElementById('flist')
let res = document.getElementById('resp')
let valores = []

function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `O valor ${num.value} foi adicionado`
       lista.appendChild(item)
       res.innerHTML = ""
    }else{
    alert('Número inválido ou já presente na lista!')
}
num.value = ''
num.focus()
}
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
       return true
    }else{
       return false
    }
}
function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
    
} function verificar() {
    if (valores.length == 0){
        alert('Tabela vazia, favor adicionar valor!')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>São ${tot} os números já digitados</p>`
        res.innerHTML += `<p>O menor número é ${menor} e o maior é ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média entre os números digitados é ${media}</p>`
    }
}