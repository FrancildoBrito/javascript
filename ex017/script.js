function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
   
    if(num.value.length == 0){
      window.alert('Por favor digite o número!')
    }else{
    let n = Number(num.value)
    //let c = 1
    tab.innerHTML = ""
    for(let c = 1; c <= 10; c++){ //modelo usando FOR
        let item = document.createElement('option') //cria um novo elemento
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item) //insere um novo nó na estrutura do DOM de um documento.
    }
    // MODELO USANDO WHILE
   /* while(c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }*/
    }
}