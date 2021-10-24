const major = document.getElementById("major");
const coding = document.getElementById("coding");
const projects = document.getElementById("projects");
const main = document.getElementById("main");
const icons = document.getElementById("icons");
const parent = document.getElementById("parent");
const gi = document.getElementById("gi");
const ti = document.getElementById("ti");
const ii = document.getElementById("ii");
const menu = document.getElementById("menu");
const menuA = document.getElementById("menuA");
const menuB = document.getElementById("menuB");




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