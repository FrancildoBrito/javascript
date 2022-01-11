function calcular(){
    //TRANSFORMA AS "IDs EM VARIAVEIS"
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let tab2 = document.getElementById('seltab2')

    if(num.value.length == 0){
        // SE(A QUANTIDADE DE CARACTERES DE "NUM" FOR IGUAL A "0")
        alert('Favor digitar um número!')
    }else{ //SE NÃO...
        let n = Number(num.value)// VARIAVEL "n" RECEBE O VALOR NUMERICO DE "NUM"
        tab.innerHTML = ""
        tab2.innerHTML = ""
        for(let c = 1; c <= 10; c++){ /*
            PARA c inicia recebendo 1; enquanto "c" for menor ou igual a 10;
            é adicionado 1 ao valor de 'c '*/
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)

            let item2 = document.createElement('option')
            item2.text = `${n} + ${c} = ${n+c}`
            item2.value = `tab2${c}`
            tab2.appendChild(item2)

        }

       
    
    }

}