const modal = document.getElementById("certModal");
const preview = document.getElementById("certPreview");

function viewCert(src){
  modal.style.display="flex";
  preview.src=src;
}

function closeCert(){
  modal.style.display="none";
}
