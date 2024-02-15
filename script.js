let change = document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
let change1 = document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
console.log(change)
console.log(change1)
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "red";
})
