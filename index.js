// $(".container").on('click',function(){
//     ;
// });
onload = function(e) {
 
     //e.stopImmediatePropagation();
    let overlay = document.querySelectorAll('.overlay');
    let imgBtn = document.querySelectorAll('.imgBtn');
for(let i=0; i < imgBtn.length; i++){
   //console.log(imgBtn)
   overlay[i].style.display = "none"
    imgBtn[i].addEventListener('click', (e)=>{

        console.log(e.target.parentElement.parentElement)
        
        if ((e.target.parentElement.parentElement || e.target.parentElement.parentElement.parentElement || e.target.parentElement === imgBtn[i] ) && overlay[i].style.display === "none") {
                overlay[i].style.display = "block";
                console.log('hello')
        }else if((e.target.parentElement.parentElement || e.target.parentElement.parentElement.parentElement || e.target.parentElement === imgBtn[i] ) &&    overlay[i].style.display === "block") {
            overlay[i].style.display = "none";
            console.log('badda')
        }
        });
        
}

}


