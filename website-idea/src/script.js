let page = document.querySelector('#content-holder') ,
    menuBtn = document.querySelector('#mctl-btn'),
    navMenu = document.querySelector('#nav'),
    navMenuToggle = false,
    btns = document.querySelectorAll('button'),
    btnHoverText


let root = document.querySelector(':root')
let rootStyle = getComputedStyle(root)

page.onclick =(e)=>{
  e = e.target
  
  if(e.getAttribute('id') == 'mctl-btn'){
    
    navMenuToggle = !navMenuToggle
    
    function navSettings(i){
      if(i == "t"){
        navMenu.classList.add('min-w-[200px]')
        navMenu.classList.add('open')
      }
      else{
        navMenu.classList.remove('min-w-[200px]')
        navMenu.classList.remove('open')
      }
    }
  
    navMenuToggle == true ? navSettings("t") : navSettings("")
    
    
    
  }
  else if(e.parentElement.getAttribute('id') == 'mcb-holder'){
    navMenuToggle = false
    navMenu.classList.remove('min-w-[200px]')
  } 
  
}


addEventListener("mouseover", (o)=>{
  for(let i of btns){
    i.querySelector('[hover-btn]').classList.add('hidden')
  }
  
  if(o.target.closest('button') && !navMenuToggle){
    
    btnHoverText = o.target.closest('button').getAttribute('icon-text')
    
    if(btnHoverText != "Home" && btnHoverText != "bars" && btnHoverText != "Log In"  ){
      o.target.closest('button').querySelector('[hover-btn]').classList.remove('hidden')
    }
    
  }
    
})
