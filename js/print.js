const para = document.querySelectorAll(".para");
const novelP = document.querySelectorAll(".square_block");

window.addEventListener("scroll", function(){

    const indexDistance = document.querySelector(".content").getBoundingClientRect().top;
    const indexDistanceB = document.querySelector(".content").getBoundingClientRect().bottom;
    if(indexDistance < 100){
        document.querySelector(".index").classList.add("fixed");
    }else if(indexDistance > 200){
        document.querySelector(".index").classList.remove("fixed");
    }
    if(indexDistanceB<350){
        document.querySelector(".index").classList.remove("fixed");
    }

    for (let i = 0; i < novelP.length; i++) {
        const novelPDistance = novelP[i].getBoundingClientRect().top;
        if(novelPDistance < 400){
            novelP[i].classList.add("active");
            para[i].classList.add("active");
            if(novelP[i-1]!=null){     
                novelP[i-1].classList.remove("active")
                para[i-1].classList.remove("active")
            }
        }else {
            novelP[i].classList.remove("active");
            para[i].classList.remove("active");
             debugger;
        }           
    }     
})