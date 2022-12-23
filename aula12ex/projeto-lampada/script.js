var b = img.getAttribute('src') 
var p = document.querySelector('p#p')
    p.innerHTML = `${b}`


function acender(){
    var img = document.querySelector('#img')
    
    

   
    

        
            img.setAttribute('src','./lampada-acessa1.jpg')
         
    
           
         
            
 
        
}
function apagar(){
    var img = document.querySelector('#img')


    
      

         img.setAttribute('src','./lampada-quebrada.jpg')
        

     
}

function quebrar(){
    
    var img = document.querySelector('#img')
    
        img.setAttribute('src','./lampada-apagada1.jpg')
 

    
}

