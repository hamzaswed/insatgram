// ?start slider section
//get top par images
var topImages = document.querySelectorAll(".image"),
    indexImage = 1,
    timeBar = document.createElement("hr");//*create time bar 

//set attribute to top par images and change image from statu bar
for(var i=0; i<topImages.length; i++){
    //set attribute to images
    topImages[i].setAttribute("data-index", i);
    //get attribute and set it for indexImage
    topImages[i].onclick = function change(){
        if(document.body.classList.contains("active")){
            indexImage = parseFloat(this.getAttribute("data-index")) + 1;
            //?add time bar to sllider container
            containerDiv.appendChild(timeBar);
            timeBar.style.width = "0";
            setTimeout(() => {
                timeBar.style.width = "100%";
            }, 50);
            image.src = "images/img" + indexImage + ".jpg";
            clearInterval(settime);//clear time first image
            ChangeTime();//change image after 3 minutes
        }else{
            //*for set first image and first time bar
            myfunction()
            indexImage = parseFloat(this.getAttribute("data-index")) + 1;
            //?add time bar to sllider container
            containerDiv.appendChild(timeBar);
            timeBar.style.width = "0";
            setTimeout(() => {
                timeBar.style.width = "100%";
            }, 50);
            image.src = "images/img" + indexImage + ".jpg";//set first image 
            ChangeTime();//change image after 3 minutes
        }
    }
}
//change slider images after 3 minutes
function ChangeTime(){
    settime = setInterval(() => {
        indexImage++;
        //?add time bar to sllider container
        containerDiv.appendChild(timeBar);
        timeBar.style.width = "0";
        setTimeout(() => {
            timeBar.style.width = "100%";
        }, 50);
        if(indexImage > topImages.length){
            indexImage = topImages.length;
            clearInterval(settime);
            slidertDiv.remove();
            document.body.classList.remove("active");//*remove time after all images
        }else{
            image.src = "images/img" + indexImage + ".jpg";
        }
    }, 3000);
    
}

//change images onclick next button
function next(){
    clearInterval(settime);
    indexImage++;
    if(indexImage > topImages.length){
        indexImage = topImages.length;
        nextBut.style.color = "#ffffff85";
    }else{
        image.src = "images/img" + indexImage + ".jpg";
        nextBut.style.color = "#ffffff";
    }
}

//change images onclick prev button
function prev(){
    clearInterval(settime);
    indexImage--;
    if(indexImage < 1){
        indexImage = 1;
        prevBut.style.color ="#ffffff85";
    }else{
        image.src = "images/img" + indexImage + ".jpg";
        prevBut.style.color ="#ffffff";
    }
}

//remove slider section from body
function remove(){
    clearInterval(settime);
    slidertDiv.remove();
    document.body.classList.remove("active");
}

function myfunction(){
//*crete slider Elements
slidertDiv = document.createElement("div");
    containerDiv = document.createElement("div");
    closeIcon = document.createElement("i");
    nextBut = document.createElement("i");
    prevBut = document.createElement("i");
    image = document.createElement("img");
    //*add style icon and buttons from font awesome
    closeIcon.innerHTML = "&#xf057";
    nextBut.innerHTML = "&#xf138";
    prevBut.innerHTML = "&#xf137";
    //*add class to created slider
    document.body.classList.add("active")
    slidertDiv.classList.add("slider");
    containerDiv.classList.add("container");
    closeIcon.classList.add("close-but");
    closeIcon.classList.add("fa");//?add fontawesome class to created icon
    nextBut.classList.add("next-but");
    nextBut.classList.add("fa");//?add fontawesome class to created icon
    prevBut.classList.add("prev-but");
    prevBut.classList.add("fa");//?add fontawesome class to created icon
    //*add creted Element to body
    document.body.appendChild(slidertDiv);//*get body 
    slidertDiv.appendChild(containerDiv);
    containerDiv.appendChild(closeIcon);
    containerDiv.appendChild(nextBut);
    containerDiv.appendChild(prevBut);
    containerDiv.appendChild(image);
    //*buttons functions
    //change images onclick next button
    nextBut.onclick = next;
    //change images onclick prev button
    prevBut.onclick = prev;
    //remove slider section from body
    closeIcon.onclick = remove;
//remove slider section on scroll
window.onscroll = remove;
}
//? end slider section



//? start post section

//*add heart icon on like the 
var postImages = Array.from(document.querySelectorAll(".post .postImg .container")),//add all images to array
    activeHeart = document.createElement("i");
    activeHeart.classList.add('fa');
    activeHeart.innerHTML = "&#xf004";

for(i=0;i<postImages.length;i++){
    postImages[i].ondblclick = function(){
        //add created heart to image on dblclick 
        this.appendChild(activeHeart);
        //change color of like icon 
        document.getElementsByClassName("like")[postImages.indexOf(this)].style.color ="red";
        //remove creted heart after 1 secound
        setTimeout(() => {
            activeHeart.remove();
        }, 1000);
    }
}
//change color of like button onclick on it
var like = document.getElementsByClassName("like");
for(var x=0; x<like.length; x++){
    like[x].onclick = function(){
        if(this.style.color == "white"){
            this.style.color = "red";
        }else{
            this.style.color = "white";
        }
    }
}
//? end post section












