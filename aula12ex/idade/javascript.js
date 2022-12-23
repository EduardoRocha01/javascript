function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('tn1')
    var res= document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) >ano){  //chegando informações basicas para continuar
                  window.alert('erro verofique os dados e tente novamente')
    }else{ // inicio do calculo de idade e declaração de variveis para os radios
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero='' // variavel vazia para receber varo
        if(fsex[0].checked){ //inicando a checagem do que foir marcado
            genero = 'homen'
             if(idade >=0 && idade <10){ //caso essa opção seja marcada segue essa estrutura
                  //CRIANÇA
             }else if( idade < 22){
                  //JOVEM
             }else if(idade < 50){
                  //ADULTO
             } else{
                //IDOSO
             }
        }else if(fsex[1].checked){ //checando se essa foi marcada 
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
        res.appendChild(img) // colocando a imagem no final 
    }

}