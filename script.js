function toggle() {

const html = document.documentElement

const img = document.querySelector(".profile img")

if(html.classList.contains("light")){

    html.classList.remove("light")

  img.setAttribute("src","./assents/Avatar.png")

}else{
    img.setAttribute("src","./assents/Avatar-light.png")
html.classList.add("light")

}

//Maneira mais facil
//html.classLsist.toggle("light")



}

