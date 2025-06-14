let btn = document.querySelectorAll("button")
let input = document.getElementById("text")
let string ="";
let arr = Array.from(btn)
arr.forEach(function(button){
    button.addEventListener("click",function(event){
      if (event.target.innerHTML == "DEL") {
        string = string.substring(0,string.length-1)
       input.value = string
      } else if(event.target.innerHTML == "Reset") {
        string = "";
       input.value = string
      }else if(event.target.innerHTML == "="){
        string = eval(string)
        input.value = string
      }else{
         string += event.target.innerHTML;
         input.value = string
      }
    })
})
