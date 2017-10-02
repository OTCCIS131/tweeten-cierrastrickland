 function onClick(){
     let clicks = document.getElementById('likes').nextSibling
    let likes = parseInt(clicks.textContent) + 1
    clicks.textContent = likes

 };

 let buttons = document.getElementById('likebutton')
 buttons.addEventListener('click', onClick)


              