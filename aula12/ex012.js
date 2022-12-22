var agora = new Date()
var h= agora.getHours()
if(h>5 && h<=12){
    console.log(`bom dia`)
} else if(h>12 && h<=18){
    console.log(`boa tarde`)
}else if (h<5 || h>=23){
    console.log(`boa madrugada`)
}else if (h>18 || h<=22){
    console.log(`boa noite`)
}