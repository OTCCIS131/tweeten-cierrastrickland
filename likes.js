let buttons = Array.from(document.getElementsByClassName("glyphicon"));
buttons.forEach(button => {
    button.addEventListener("click", e => {
        let currentNum = button.nextSibling.textContent.trim()
        let likes = parseInt(currentNum) + 1;
        button.nextSibling.textContent = likes;
})

})

$(function() {

$("#newTweetForm").submit(function (e){
    e.preventDefault()
    let newTweetInput = $("[name=words]", $(this))
    let newTweet = newTweetInput.val()

    if (newTweet.trim() == '') return
    
    //select an existing similar element
    let newElement = $(".likebutton", "p:last-child", ".name", ".panel-body",  ".panel-heading:last-child", $("#tweeting")).clone()
    newElement.text(newTweet)

    $("#tweeting").append(newElement)
})

})
