function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
   
    if( hora >= 0 && hora < 12){
       //BOM DIA
       img.src = "/exercicios/ex014/dia.jpg"
       document.body.style.background = "#179694"
       msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos, BOM DIA!!`
       
    }else if(hora >= 12 && hora <= 18 ){
      //BOA TARDE
      document.body.style.background = "#94860a"
      img.src = "/exercicios/ex014/tarde.jpg"
      msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos, BOA TARDE!!`
    }else{
        //BOA NOITE
        document.body.style.background = "#061836"
        img.src = "/exercicios/ex014/noite.jpg"
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos, BOA NOITE!!`
    }
}