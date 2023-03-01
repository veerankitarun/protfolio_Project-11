var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}





var navbar = document.getElementById("header");
var menu = document.getElementById("menu");

window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
    }



var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbxKuz3PaqCDIGbonNvD1TSIDyG3o0VMuvVgwdUN-DdL8VavqBra-kTiS1lI_lchTQLj/exec'
const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent Successfully"
            setTimeout(function(){
                msg.innerHTML=""
            }, 5000)
            form.reset()
        })
            
      .catch(error => console.error('Error!', error.message))
  })
