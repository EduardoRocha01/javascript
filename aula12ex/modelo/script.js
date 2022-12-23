function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var min = new Date()
    var minuto= min.getMinutes()
    var data= new Date ()
    var hora= data.getHours()

    msg.innerHTML=`Agora são ${hora} horas e ${minuto} minutos`
    
    if(hora>=5&& hora<=12){
        //manha
        foto.setAttribute('src','manha.png')
        document.body.style.background = '#e2cd97'
    }else if(hora>=13 && hora<=18){
        //tarde
        foto.setAttribute('src','tarde.png')
        document.body.style.background = '#ee7e0d'
        
    }else{
        //noite
        foto.setAttribute('src','noite.png')
        document.body.style.background = '#151413'
        msg.innerHTML = `Agora são ${hora} e ${minuto} da noite`
    }

   
}

