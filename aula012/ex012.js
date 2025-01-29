var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)
if (hora >= 6 && hora < 12){
    console.log(`Bom dia`)
} else if (hora >= 12 && hora < 18){
    console.log(`boa tarde`)
} else if (hora > 17 && hora <= 23){
    console.log(`boa noite`)
} else {
    console.log(`boa madrugada`)
}