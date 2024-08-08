const button = document.querySelector(".slider");
const next = document.querySelector(".arrow-2")
const prev = document.querySelector(".arrow-1")
const images = document.querySelectorAll(".images")

let slidnumber = 1;
const nummber = images.length;
const nextImage = () => {
    button.style.transform = `translateX(-${slidnumber*1000}px)`;
    slidnumber++;
}
const nextImageElse = () => {
    button.style.transform = `translateX(0px)`;
    slidnumber= 1;
}
const previmage = ()=>{
    slidnumber--;
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const previmageElse = () => {
    slidnumber = 6;
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}

next.addEventListener('click',()=>{
    ( slidnumber < nummber) ? nextImage() : nextImageElse()
});

prev.addEventListener('click',()=>{
   ( slidnumber > 1) ? previmage() : previmageElse()
})

