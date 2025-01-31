if('serviceWorker' in navigator){ 
    console.log('Colosio mato a salinas');
    navigator.serviceWorker.register('./sw.js')

    .then(res=> console.log('Service worker esta funcionando', res))
    .catch(res=>console.log('Algo no funciono con el service Worker', err));	
    
    }else{
        console.log('No soportaste')

    }