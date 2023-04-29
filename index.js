// slide otomatis
let start = 0;
show_slide()




function show_slide(){
    const slides = document.querySelectorAll('.slider');
    console.info(slides)
    
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.display = 'none';
    }

    if(start >= 3){
        start = 0
    }
    
    slides[start].style.display = 'block';
    start++
    console.info('gambar Ke-' + start)
    setTimeout(show_slide,2000)
}


// menu hamburger

 const menu_hamburger = document.querySelector('.hamburger');
 const containers = document.querySelector('.containers');

 menu_hamburger.addEventListener('click',function(){
    containers.classList.toggle('active');
 })

 const close = document.querySelector('.close');
    close.addEventListener('click',function(){
        containers.classList.remove('active')
    })


// ketika navbar dan body dikliko close hamburger
const navbar = document.querySelector('.navbar')
document.addEventListener('click',function(e){
    
    if(!menu_hamburger.contains(e.target) && !containers.contains(e.target)){
        const container = document.querySelector('.containers')
        container.classList.remove('active')
    }
})
