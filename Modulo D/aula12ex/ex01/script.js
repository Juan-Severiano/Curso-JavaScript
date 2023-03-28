function load() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('#image')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minutos}`
    if ( hora >= 0 && hora < 12 ) {
        // good morning
        img.src = 'https://classic.exame.com/wp-content/uploads/2017/06/thinkstockphotos-466262074.jpg?quality=70&strip=info&w=680'
        document.body.style.background = '#F77738'
    } else if ( hora >= 12 && hora < 18 ){
        // good afternoon
        img.src = 'https://classic.exame.com/wp-content/uploads/2020/04/whatsapp-image-2020-04-15-at-18.07.35.jpeg?quality=70&strip=info&w=960'
        document.body.style.background = '#B45D98'
    } else {
        // good night
        img.src = 'https://www.mensagens10.com.br/wp-content/uploads/2013/05/7958573893.jpg'
        document.body.style.background = '#72937F'
    }
}