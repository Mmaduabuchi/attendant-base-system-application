
setInterval(() => {
    let date = new Date();
    document.getElementById("home-time").innerHTML = date.toLocaleTimeString();
}, 1000);


const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const errorMsgElement = document.getElementById("snapErrorMsg");

const constraints = {

    audio: false,

    video: {
    width: 450,
    height: 300
    }

};

async function init(){

    try{

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
    }
    catch(e){

    errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
    }

}

function handleSuccess(stream){
    window.stream = stream;
    video.srcObject = stream;
}

init();

var context = canvas.getContext("2d");

snap.addEventListener("click", function(){
    
    context.drawImage(video, 0, 0, 200, 100);
});



function updateOnlineStatus () {
    
    document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline';
  
    if(navigator.onLine == true){
        document.getElementById('status').style.color = "green";
    }else{
        document.getElementById('status').style.color = "red";
    }
}
  
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
  
  updateOnlineStatus();


  document.querySelector(".form").addEventListener('submit', (evt)=> {
    evt.preventDefault();
    var email = document.querySelector(".email").value;
    var password = document.querySelector(".password").value;
    if(email && password){
        fetch(

            "http://localhost:3000/submit",
            {   method: "post",
                credentials: 'include',
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({email, password}) 
            }
            
        )
    }
  })