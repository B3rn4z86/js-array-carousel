// Elements

const btnPrev = document.querySelector(".left");
const btnNext = document.querySelector(".right");
const wrapper = document.querySelector(".items-wrapper");


btnPrev.classList.add("hide");

const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
]
let counterImg = 0;

//reset slider

wrapper.innerHTML = "";

//1
for(let i = 0; i < images.length; i++){
  const image = images[i];
  wrapper.innerHTML += `<img src ="${image}" class = " item hide">`;
}
//2
const itemsCollection = document.getElementsByClassName ("item");

//3
itemsCollection[0].classList.remove("hide");


btnNext.addEventListener("click", function(){
  itemsCollection[counterImg].classList.add("hide");
  counterImg++;
  itemsCollection[counterImg].classList.remove("hide");
  btnPrev.classList.remove("hide");

  if(counterImg === itemsCollection.length -1){
    btnNext.classList.add("hide");
  }
}
)

btnPrev.addEventListener("click",function(){
  itemsCollection[counterImg].classList.add("hide");
  counterImg--;
  itemsCollection[counterImg].classList.remove("hide");
  btnNext.classList.remove("hide");

  if(counterImg=== 0){
    btnPrev.classList.add("hide");
  }
  

})


  

  
  