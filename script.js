let preLoader = document.getElementById("loading");
let qrText = document.getElementById("qrText");
let genButton = document.querySelector(".generate-btn");
let remButton = document.querySelector(".remove-btn");
const accessKey =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let qrImg = document.getElementById("qrImage");
let imageBox = document.getElementById("img-box");

function loader(){
  setTimeout( () => {
    preLoader.style = "display:none;";

  }, 3000)
}

genButton.addEventListener("click", function () {
  if (qrText.value !== "") {
    qrImg.src = accessKey + qrText.value;
    imageBox.style.margin = "20px";
  } else {
    qrText.classList.add("sqeeze");
    setTimeout(() => {
      qrText.classList.remove("sqeeze");
    }, 700);
  }
  qrText.value = "";
}); 

remButton.addEventListener('click', function(){
  if(qrImg.complete && qrImg.src !== ""){
    qrImg.src  = "";
    imageBox.style.margin = "";
    // qrImg.style.margin = "
  }
})
