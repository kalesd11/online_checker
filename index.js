function updateStatus(){
    let statusElem = document.getElementById("status")
    // console.log(statusElem);
    if(navigator.onLine){
        statusElem.innerText = "online"
    }else{
        statusElem.innerText = "offline"
    }
};
updateStatus()
window.addEventListener ("online",(e)=>{updateStatus()})
window.addEventListener ("offline",(e)=>{updateStatus()})