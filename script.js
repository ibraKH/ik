const major = document.getElementById("major");
const coding = document.getElementById("coding");
const projects = document.getElementById("projects");
const main = document.getElementById("main");
const mainImg = document.getElementById("mainImg")
const links = document.getElementById("links")
const icons = document.getElementById("icons");
const parent = document.getElementById("parent");
const gi = document.getElementById("gi");
const ti = document.getElementById("ti");
const ii = document.getElementById("ii");
const menu = document.getElementById("menu");
const menuA = document.getElementById("menuA");
const menuB = document.getElementById("menuB");
const achA = document.getElementById("achA");
const achBG = document.getElementById("achBG");
const achB = document.getElementById("achB");
const achBGB = document.getElementById("achBGB");
const charImg = document.getElementById("charImg");

function majorFC(){
    if(mainImg.children.length === 0){

        
        let img = document.createElement("img");
        img.src = "major.png";
        mainImg.appendChild(img)
    }
    // note change the domain here in if statement
    if(mainImg.children[0].src !== "http://127.0.0.1:5500/major.png"){
        mainImg.children[0].src = "major.png";
    }
}

function codingFC(){
    let count = 0;
    let changeTimer = setInterval(() => {
        if(count == 1){
    
    achA.classList.remove("hideE")
    achBG.classList.remove("hideE")
    achB.classList.remove("hideE")
    achBGB.classList.remove("hideE")
        }
    
    mainImg.classList.add("hideE");
    links.classList.remove("linksNormal")
    links.classList.add("linksDown")
    main.classList.remove("mainBig");
    main.classList.add("mainTop");
    charImg.classList.remove("hideE");
    if(count == 1){
        clearInterval(changeTimer)
    }
    count++
    }, 700)
    
    if(mainImg.children.length === 0){
        let img = document.createElement("img");
        img.src = "coding.png";
        mainImg.classList.remove("hideE");
        mainImg.appendChild(img)
    }
    // note change the domain here in if statement
    if(mainImg.children[0].src !== "http://127.0.0.1:5500/coding.png"){
        mainImg.classList.remove("hideE");
        mainImg.children[0].src = "coding.png";
    }
}

function projectsFC(){
    if(mainImg.children.length === 0){
        let img = document.createElement("img");
        img.src = "projects.png";
        mainImg.appendChild(img)
    }
    // note change the domain here in if statement
    if(mainImg.children[0].src !== "http://127.0.0.1:5500/projects.png"){
        mainImg.children[0].src = "projects.png";
    }
}

function changeThemeF(){
    console.log(menu.classList[0]);
    if(menu.classList[0] === "menuPN"){
        menu.classList.add("menuP")
        menu.classList.remove("menuPN")
        document.body.style.backgroundColor = "white";
        parent.classList.remove("changeThemeB")
        parent.classList.add("changeTheme");
        main.classList.remove("blackTheme");
        main.classList.add("whiteTheme");
        major.classList.add("majorB");
        coding.classList.add("codingB");

        menuA.style.backgroundColor = "black"
        menuB.style.backgroundColor = "black"



    if(document.documentElement.clientWidth < 500){
        gi.style.color = "white"
        ti.style.color = "white"
        ii.style.color = "white"
        icons.style.backgroundColor = "black"
    }else{
        gi.style.color = "black"
        ti.style.color = "black"
        ii.style.color = "black"  
    }
    }else{
        menu.classList.remove("menuP")
        menu.classList.add("menuPN")
        document.body.style.backgroundColor = "#181818";
        parent.classList.remove("changeTheme")
        parent.classList.add("changeThemeB");
        main.classList.add("blackTheme");
        main.classList.remove("whiteTheme");
        major.classList.remove("majorB");
        coding.classList.remove("codingB");

        menuA.style.backgroundColor = "white"
        menuB.style.backgroundColor = "white"



    if(document.documentElement.clientWidth < 500){
        gi.style.color = "black"
        ti.style.color = "black"
        ii.style.color = "black"
        icons.style.backgroundColor = "white"
    }else{
        gi.style.color = "white"
        ti.style.color = "white"
        ii.style.color = "white"  
    }
    }
    

}