const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

    const containerLeft = document.getElementsByClassName("container")[0];
    const containerRight = document.getElementsByClassName("container")[1];
    const btnup = document.getElementById("up")
    //console.log(btnup)
    const btndown = document.getElementById("down")
    let currentIndex


for ( let i=0; i < items.length ; i++){
    const nuovaImgNuovoDiv = document.createElement("img")
    nuovaImgNuovoDiv.src = items[i]
    const nuovoDiv = document.createElement("div")
    nuovoDiv.classList.add("not-active")
    containerLeft.append(nuovoDiv)
    nuovoDiv.append(nuovaImgNuovoDiv)
    
    if (i===0){
        nuovoDiv.classList.add("active")
        currentIndex = 0
    }

    const titolo = document.createElement("h3")
    titolo.append(title[i])
    const testo = document.createElement("p")
    testo.append(text[i])
    const divText = document.createElement("div");
    divText.append(titolo)
    divText.append(testo)
    nuovoDiv.append(divText)

    const div = document.createElement("div")
    containerLeft.append(div)
    containerRight.append(div)

    const nuovaImg = document.createElement('img');
    nuovaImg.src = items[i];
    nuovaImg.append(title[i])
    div.append(nuovaImg);   
}

btnup.addEventListener("click", function() {
})

