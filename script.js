//selecting  id's
// add_book_popup,popup_container,popup

var popup_container=document.querySelector(".popup_container")
var popup=document.querySelector(".popup")
var add_book=document.getElementById("add_book_popup")

add_book.addEventListener("click",function(){
    popup_container.style.display="block"
    popup.style.display="block"
})

//selecting cancel button section

var cancelbutton=document.getElementById("canceling_book")

cancelbutton.addEventListener("click",function(event){
    event.preventDefalt()
    popup_container.style.display="none"
    popup.style.display="none"
})

//selecting add button section 5
// book_title_input,book_author_input,book_decription_input 2,3,4
///container 1
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book_title_input")
var bookauthorinput=document.getElementById("book_author_input")
var bookdecriptioninput=document.getElementById("book_decription_input")
var addbook=document.getElementById("adding_book")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    popup_container.style.display="none"
    popup.style.display="none"

    var div=document.createElement("div",)
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdecriptioninput.value}</p>
            <button style="font-family:cursive;" onclick="deletebook(event)">Delete</button>`
            container.append(div)

})

// / delete button

function deletebook(event){
    event.target.parentElement.remove()
}
