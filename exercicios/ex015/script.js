function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
   
  if(fano.value.length === 0 || Number(fano.value) > ano) {
      alert(`[ERRO] Verifique os dados e tente novamente!`)
  }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ""
       var img = document.createElement('img') //criando novo elemento
       img.setAttribute('id', 'foto') //DANDO ATRIBUTO A ELEMENTO
       if(fsex[0].checked) {
           gênero = "Homem"
           if(idade >= 0 && idade <= 10){
               //criança
               img.setAttribute('src', 'menino.jpg')
           }else if(idade < 21){
               //jovem
               img.setAttribute('src', 'jovemM.jpg')
           }else if(idade < 50){
               //adulto
               img.setAttribute('src', 'homem.jpg') //setando atributo
           }else{
               //idoso
               img.setAttribute('src', 'senhor70.jpg')
           }
       }else if (fsex[1].checked) { //condição com varias ramificações
           gênero = "Mulher"
           if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'menina.jpg')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'jovemF.jpg')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'mulher.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'ssenhora70.jpg')
        }
       } 
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img) //adiciona um elemento
    }
}