let taskbar=document.getElementsByClassName("taskbar")[0]
let startmenue=document.getElementsByClassName("startmenue")[0]
taskbar.addEventListener("click",()=>{
    console.log("clicked");
    if(startmenue.style.bottom="7px"){
        startmenue.style.bottom="-700px"
    }
    else{
        startmenue.style.bottom="7px"
    }
})