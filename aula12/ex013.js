var agora = new Date()
var diaSem = agora.getDay()
/*
No JS os dias da semana são:
0 = domingo
1 = segunda
2 =  terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
switch(diaSem){
    case 0 :
        console.log('Hoje é domingo')
        break
        case 1 :
        console.log('Hoje é segunda')
        break
        case 2 :
        console.log('Hoje é terça')
        break
        case 3 :
        console.log('Hoje é quarta')
        break
        case 4 :
        console.log('Hoje é quinta')
        break
}