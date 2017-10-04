// function onClick(){
//      let clicks = document.getElementById('tweets').nextSibling   
//      let tweets = parseInt(clicks.textContent) + 1
//     clicks.textContent = tweets

//  };

//  let buttons = document.getElementById('retweet')

//  buttons.addEventListener('click', onClick)


let buttons = Array.from(document.getElementsByClassName("glyphicon"));
buttons.forEach(button => {
    button.addEventListener("click", e => {
        let currentNum = button.nextSibling.textContent.trim()
        let likes = parseInt(currentNum) + 1;
        button.nextSibling.textContent = likes;
})

})
