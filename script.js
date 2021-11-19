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
const codingText = document.getElementById("codingText");
const projectsLabel = document.getElementById("projectsLabel");
const chair = document.getElementById("chair");


let pageCount = 0;
function pageChange(pageIndex){
    chair.classList.add("hideE")
    if(pageCount == 0){
        if(pageIndex === 1){
            pageCount = 1;
            mainImg.classList.remove("hideE");
            majorFC()
        }
        if(pageIndex === 2){
            pageCount = 2;
            mainImg.classList.remove("hideE");
            codingFC()
        }
        if(pageIndex === 3){
            pageCount = 3;
            mainImg.classList.remove("hideE");
            projectsFC()
        }
    }else{
        if(pageCount == 1){
            if(pageIndex == 2){
            pageCount = 2;
            mainImg.classList.remove("hideE");
            codingFC()
            }
            if(pageIndex == 3){
            pageCount = 3;
            mainImg.classList.remove("hideE");
            projectsFC()
            }
        }
        if(pageCount == 2){
            if(pageIndex == 1){
                let count = 0;
                let Timer = setInterval(() => {
                    mainImg.classList.add("hideE");
                    links.classList.add("linksNormal")
                    links.classList.remove("linksDown")
                    main.classList.add("mainBig");
                    main.classList.remove("mainTop");
                    achA.classList.add("hideE")
                    achBG.classList.add("hideE")
                    achB.classList.add("hideE")
                    achBGB.classList.add("hideE")
                    charImg.classList.add("charImgA");
                    charImg.classList.remove("charImgB");
                    codingText.classList.add("hideE")
                    for(let i = 0; i < codingText.children.length; i++){
                        codingText.children[i].classList.add("hideE")
                    }
                    
                    if(count === 1){
                        pageCount = 1;
                        mainImg.classList.remove("hideE");
                        majorFC()
                        clearInterval(Timer)
                    }
                    count++
                    }, 300);
                    pageCount = 0;
            }
            if(pageIndex == 3){
                let count = 0;
                let Timer = setInterval(() => {
                    mainImg.classList.add("hideE");
                    links.classList.add("linksNormal")
                    links.classList.remove("linksDown")
                    main.classList.add("mainBig");
                    main.classList.remove("mainTop");
                    achA.classList.add("hideE")
                    achBG.classList.add("hideE")
                    achB.classList.add("hideE")
                    achBGB.classList.add("hideE")
                    charImg.classList.add("charImgA");
                    charImg.classList.remove("charImgB");
                    codingText.classList.add("hideE")
                    for(let i = 0; i < codingText.children.length; i++){
                        codingText.children[i].classList.add("hideE")
                    }
                    
                    if(count === 1){
                        pageCount = 3;
                        mainImg.classList.remove("hideE");
                        projectsFC()
                        clearInterval(Timer)
                    }
                    count++
                    }, 300);
                    pageCount = 0;
            }
        }
        if(pageCount == 3){
            if(pageIndex == 1){
                let count = 0;
                let timer = setInterval(() => {
                    links.classList.add("linksNormal")
                    links.classList.remove("linksDown")
                    projectsLabel.classList.add("hideE")
                    mainImg.classList.add("hideE");
                    main.classList.add("mainBig");
                    main.classList.remove("mainTopB");
                    pageCount = 0;  

                    if(count === 1){
                        pageCount = 1;
                        mainImg.classList.remove("hideE");
                        majorFC()
                        clearInterval(timer)
                    }
                    count++ 
                }, 300);
            }
            if(pageIndex == 2){
                let count = 0;
                let timer = setInterval(() => {
                    links.classList.add("linksNormal")
                    links.classList.remove("linksDown")
                    projectsLabel.classList.add("hideE")
                    mainImg.classList.add("hideE");
                    main.classList.add("mainBig");
                    main.classList.remove("mainTopB");
                    pageCount = 0;  

                    if(count === 1){
                        pageCount = 2;
                        mainImg.classList.remove("hideE");
                        codingFC()
                        clearInterval(timer)
                    }
                    count++ 
                }, 300);
            }
        }
    }
}
function majorFC(){
    chair.classList.add("hideE")
    projects.children[0].classList.add('hide')
    coding.children[0].classList.add('hide')
    major.children[0].classList.remove('hide')
    if(mainImg.children.length === 0){

        major.children[0].classList.remove("hide");
        let img = document.createElement("img");
        img.src = "images\\major.png";
        mainImg.appendChild(img)
    }
    // note change the domain here in if statement
    if(mainImg.children[0].src !== "http://127.0.0.1:5500/images/major.png"){
        mainImg.children[0].src = "images\\major.png";
    }
    
    let timer = setInterval(() => {
        mainImg.classList.add("hideE");
        clearInterval(timer)  
    }, 1000);
}

function codingFC(){
    projects.children[0].classList.add('hide')
    coding.children[0].classList.remove('hide')
    major.children[0].classList.add('hide')
    let count = 0;
    let changeTimer = setInterval(() => {
        if(count == 1){
            let changeInside = setInterval(() => {
                charImg.classList.remove("charImgA");
                charImg.classList.add("charImgB");
                codingText.classList.remove("hideE")
                chair.classList.remove("hideE")
                for(let i = 0; i < codingText.children.length; i++){
                    codingText.children[i].classList.remove("hideE")
                }
                clearInterval(changeInside)
            }, 250)
            
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
    if(count == 1){
        clearInterval(changeTimer)
    }
    count++
    }, 600)
    
    if(mainImg.children.length === 0){
        let img = document.createElement("img");
        img.src = "images\\coding.png";
        mainImg.classList.remove("hideE");
        mainImg.appendChild(img)
    }
    // note change the domain here in if statement
    
    if(mainImg.children[0].src !== "http://127.0.0.1:5500/images/coding.png"){
        mainImg.classList.remove("hideE");
        mainImg.children[0].src = "images\\coding.png";
    }
}

function projectsFC(){
    chair.classList.add("hideE")
    projects.children[0].classList.remove('hide')
    coding.children[0].classList.add('hide')
    major.children[0].classList.add('hide')
    let Timer = setInterval(() => {
            links.classList.remove("linksNormal")
            links.classList.add("linksDown")
            projectsLabel.classList.remove("hideE")
            mainImg.classList.add("hideE");
            main.classList.remove("mainBig");
            main.classList.add("mainTopB");
            clearInterval(Timer)
            }, 1000)
            if(mainImg.children.length === 0){
                let img = document.createElement("img");
                img.src = "images\\projects.png";
                mainImg.appendChild(img)
            }
            // note change the domain here in if statement
            if(mainImg.children[0].src !== "http://127.0.0.1:5500/images/projects.png"){
                mainImg.children[0].src = "images\\projects.png";
            }
}

function changeThemeF(){
    if(menu.classList[0] === "menuPN"){
        menu.classList.add("menuP")
        menu.classList.remove("menuPN")
        document.body.style.backgroundColor = "white";
        parent.classList.remove("changeThemeB")
        parent.classList.add("changeTheme");
        main.classList.remove("blackTheme");
        main.classList.add("whiteTheme");
        major.classList.add("B");
        coding.classList.add("B");
        projects.classList.add("B");
        projects.children[0].classList.add('lBtnW')
        coding.children[0].classList.add('lBtnW')
        major.children[0].classList.add('lBtnW')
        projects.children[0].classList.remove('lBtnB')
        coding.children[0].classList.remove('lBtnB')
        major.children[0].classList.remove('lBtnB')
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
    }else{
        menu.classList.remove("menuP")
        menu.classList.add("menuPN")
        document.body.style.backgroundColor = "#181818";
        parent.classList.remove("changeTheme")
        parent.classList.add("changeThemeB");
        main.classList.add("blackTheme");
        main.classList.remove("whiteTheme");
        major.classList.remove("B");
        coding.classList.remove("B");
        projects.classList.remove("B");
        projects.children[0].classList.remove('lBtnW')
        coding.children[0].classList.remove('lBtnW')
        major.children[0].classList.remove('lBtnW')
        projects.children[0].classList.add('lBtnB')
        coding.children[0].classList.add('lBtnB')
        major.children[0].classList.add('lBtnB')
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
    }
    

}