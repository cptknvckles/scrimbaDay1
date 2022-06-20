const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green",
    "image": "./images/earth.png"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

function planetRender(){
    
    for(let i = 0; i < planets.length; i++){
            const pDiv = document.createElement('div')
            const pInfo = document.createElement('div')
            pInfo.classList.add('pInfo')
            pDiv.classList.add('pDivAnimate')
            pDiv.style.height = `${planets[i].diameter *0.004}px`
            pDiv.style.width = `${planets[i].diameter*0.004}px`
            pDiv.style.background =`linear-gradient(to right, ${planets[i].color} 10%, rgba(40, 46, 51, 1) 70%)`
            pDiv.style.marginRight = "10px"
            pDiv.style.borderRadius = "50%"
            solarSystem.appendChild(pDiv)
            pDiv.appendChild(pInfo)
            pInfo.innerHTML = `
            <p> Planet Name: ${planets[i].name}</p>
            <p> Diameter: ${planets[i].diameter}</p>`
            
            
        }
    
    
}



planetRender()

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)