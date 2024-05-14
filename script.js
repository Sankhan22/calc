function log(param){
    console.log(param)
}
function display(add){
   var display = document.querySelector('.display')
  
    if (add.length==1 & add !='=')
    display.append(add)
    
    if( add =='=')
   display.innerText = eval(display.innerText)
   if( add=='AC')
   display.innerText=""
  if( add=='Del')
  display.innerText= display.innerText.slice(0,-1)
 
}

let keyboard = document.querySelectorAll('.keyboard span');

keyboard.forEach(key=>{
key.addEventListener('click', function(){

display(this.innerText)
}


)
})
