let menu = document.getElementById("test2");
let paths = document.getElementsByClassName("shard");

const test = () => {
    
    for (let i = 0; i< 6; i++) {
        try {
            paths[i].style.opacity = "0"

        } catch(e) {
            console.log(e);
            continue
        }
        
    }

    menu.style.width = "100vw"
    menu.style.height= "100vh"
    menu.style.opacity= "1"
}

const close = () => {
    for (let i = 0; i< 6; i++) {
        try {
            paths[i].style.opacity = ".5"
        } catch(e) {
            console.log(e);
            continue
        }
        
    }

    menu.style.width = "0vw"
    menu.style.height= "0vh"
    menu.style.opacity= "0"

}