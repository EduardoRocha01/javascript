function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('tn1')
    var res= document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) >ano){
                  window.alert('erro verofique os dados e tente novamente')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero=''
        if(fsex[0].checked){
            genero = 'homen'
             if(idade >=0 && idade <10){
                  //CRIANÇA
             }else if( idade < 22){
                  //JOVEM
             }else if(idade < 50){
                  //ADULTO
             } else{
                //IDOSO
             }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <10){
                //CRIANÇA
           }else if( idade < 22){
                //JOVEM
                img.setAttribute('src','./mulher/nova.png')
           }else if(idade < 50){
                //ADULTO
                img.setAttribute('src','./mulher/madura.png')
           } else{
              //IDOSO
               img.setAttribute('src','./mulher/idosa.png')
           }
        }

        res.innerHTML = `detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }

}