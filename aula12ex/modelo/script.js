function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var min = new Date()
    var minuto= min.getMinutes()
    var data= new Date()
    var hora=data.getHours()

    msg.innerHTML=`Agora são ${hora} horas e ${minuto} minutos`
    
    if(hora>=5&& hora<=12){
        //manha
        foto.setAttribute('src','manha.png')
    }else if(hora>=13 && hora<=18){
        //tarde
        foto.setAttribute('src','tarde.png')
        
    }else{
        //noite
        foto.setAttribute('src','noite.png')
    }

   
}

