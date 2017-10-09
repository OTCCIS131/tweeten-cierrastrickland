let buttons = Array.from(document.getElementsByClassName("glyphicon"));
buttons.forEach(button => {
    button.addEventListener("click", e => {
        let currentNum = button.nextSibling.textContent.trim()
        let likes = parseInt(currentNum) + 1;
        button.nextSibling.textContent = likes;
})

})

// $(function() {

//     $('.likes').click(event =>{
//         let currentNum = $(event.target).text()
//         let likes = parseInt(currentNum) + 1;

        

//     })

// })
