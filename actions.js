let chatList = document.querySelectorAll(".chat-list")
let chatItem = document.querySelector('.chat-item')
let messages = document.querySelectorAll('#right')






chatList.forEach((chat)=>{
    chat.addEventListener("click",function display(){
        let chatItem = document.querySelector('.chat-item')
        messages.innerHTML = `<h2>Hello john</h2>`
        chat.classList.remove('.chat-item')
        chat.classList.add('.active')
    })
    
})
