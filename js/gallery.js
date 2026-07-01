const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close-lightbox");

const prevBtn = document.getElementById("prev-btn");

const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        showImage();

    });

});

function showImage(){

    lightbox.style.display="flex";

    lightboxImg.src = galleryImages[currentIndex].getAttribute("src");
    lightboxImg.alt = galleryImages[currentIndex].alt;

}

closeBtn.onclick=()=>{

    lightbox.style.display="none";

}

nextBtn.onclick=()=>{

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    showImage();

}

prevBtn.onclick=()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    showImage();

}

window.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowRight"){

            nextBtn.click();

        }

        if(e.key==="ArrowLeft"){

            prevBtn.click();

        }

        if(e.key==="Escape"){

            closeBtn.click();

        }

    }

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeBtn.click();

    }

});