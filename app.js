let navBtn = document.getElementById("hamburger-btn")
let nav = document.getElementById("nav")
let cancel_nav = 'fas fa-times close'
let hamburger_nav = "fa-solid fa-bars"
let currentRole = document.getElementById('activities')
let roles = ['Software Dev.', 'Data Analyst.', 'Blockchain Enthusiast']
let roleBar = document.getElementById('role-bar')
let currentWordIndex = 0
let header = document.getElementsByTagName('header')[0]

navBtn.addEventListener('click', navResolute)


addEventListener('scroll', ()=> 
scrollY >= 400 ? header.classList.add('fixed') : 
header.classList.remove("fixed")
)

function navResolute(){
    nav.classList.toggle('visible-nav')
    navBtn.classList.toggle('bars')
    navBtn.classList.toggle('cancel')
}

function get_word(){
    presentRoleWord = roles[currentWordIndex]
    currentRole.innerHTML == presentRoleWord ? 
    currentWordIndex == roles.length-1 ? currentWordIndex = 0 : currentWordIndex += 1
    : currentWordIndex = currentWordIndex
    return roles[currentWordIndex]
}

let returnedWordIndex = 0
let textIndex = 0

function typeText(){
    word = get_word()

    // are we still working on the same word? 
    if (returnedWordIndex == currentWordIndex){
        if (currentRole.innerHTML.length == 0){
            textIndex = 0
            currentRole.innerHTML += word.charAt(textIndex)

        }else{
            textIndex += 1
            currentRole.innerHTML += word.charAt(textIndex)
        }
    }else{
        // clear the current role 
        
        
        if (removeText()){
            textIndex = 0
            returnedWordIndex = currentWordIndex
            currentRole.innerHTML += word.charAt(textIndex)
        }else{
            setTimeout(removeText, 100)
        }
    }

    setTimeout(typeText, 200) 
}


typeText()

function removeText(){
    currentRole.innerHTML = currentRole.innerHTML.slice(0, -1)
    if (currentRole.innerHTML.length == 0){return true}   
}


function roleBarOpacity(){
    roleBar.classList.toggle('dim')
}
setInterval(roleBarOpacity, 300)
