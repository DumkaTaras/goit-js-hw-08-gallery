// const parent = document.getElementById('parent')
// const child = document.getElementById('child')
// const descendant = document.getElementById('descendant')
// parent.addEventListener('click',()=>{
//     alert('parent click handler')
// })
// child.addEventListener('click',()=>{
//     alert('child click handler')
// })
// descendant.addEventListener('click',()=>{
//     alert('descendant click handler')
// })

// const colorPalete = document.querySelector('.color-palete')
// const output = document.querySelector('.output')

// colorPalete.addEventListener('click', selectColor);
// function selectColor(){
//     if(event.target.nodeName !== 'BUTTON') return;
//     const selectedColor = event.target.dataset.color
//     output.textContent = `Selected color : ${selectedColor}`
//     output.style.color = selectedColor
// }
// createPaleteitems()
// function createPaleteitems(){
//     const items = []
//     for(let i=0;i<300;i++){
//         const color=getRandomColor();
//         const item=document.createElement('button');
//         item.type='button';
//         item.dataset.color=color;
//         item.style.backgroundColor=color;
//         item.classList.add('item');
//         items.push(item);
//     }
//     colorPalete.append(...items)
// }

// function getRandomColor(){
//     return `#${getRandomIndex()}${getRandomIndex()}${getRandomIndex()}`;
// }
// function getRandomIndex(){
//     return Math.round(Math.random()*255).toString(16).padStart(2,'0');
// }


const gallery = document.querySelector('.gallery')
const lightboxContent = document.querySelector('.lightbox__content>img')
const modal = document.querySelector('.lightbox')
const body = document.querySelector('body')
const closeBtn = document.querySelector('.lightbox__button')
console.log(gallery)

gallery.addEventListener('click', openGallery)

function openGallery(event) {
    if (modal.style.display = 'none') {
        modal.style.display = 'block'
        body.style.backgroundColor = 'rgb(36, 33, 33)'
        gallery.style.display = 'none'
    }
    lightboxContent.src = event.target.src
    modal.classList.replace('lightbox__image', 'js-lightbox')
        closeBtn.addEventListener('click', closeModal)
        document.addEventListener('keydown',(event)=>{
            if(event.code === 'Escape'){
                closeModal()
            }
        })
}
function closeModal() {
    modal.style.display = 'none'
    body.style.backgroundColor = ''
    gallery.style.display = ''
}