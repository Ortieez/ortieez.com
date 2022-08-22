<script>
    import { link } from 'svelte-spa-router'

    class TextScramble {
            constructor(el) {
                this.el = el
                this.chars = '!@#$%^&*\(\)\'+-=_?/.>,<;:|][}{'
                this.update = this.update.bind(this)
        }
        setText(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 20)
            const end = start + Math.floor(Math.random() * 20)
            this.queue.push({ from, to, start, end })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
        }
        update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                char = this.randomChar()
                this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
            }
            this.el.innerHTML = output
            if (complete === this.queue.length) {
            this.resolve()
            } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    }

    function openMenu(){
        let menu = document.getElementById('menu');
        let items = document.getElementById("items")
        let visualizer = document.getElementById("visualizer")
        let menuDisplay = menu.style.height
        if (menuDisplay == "0vh") {
            menu.style.height = "83.7vh"
            items.style.height = "83.7vh"
            visualizer.style.height = "83.7vh"

            menu.style.opacity = "1"
            items.style.opacity = "1"
            visualizer.style.opacity = "1"
        } else {
            menu.style.height = "0vh"
            items.style.height = "0vh"
            visualizer.style.height = "0vh"

            menu.style.opacity = "0"
            items.style.opacity = "0"
            visualizer.style.opacity = "0"
        }
    }

    window.onload = () => {
        const handleScrambleHome = e => {
            homeFx.setText("/ home");
        }

        const handleScrambleAbout = e => {
            aboutFx.setText("/ about me");
        }

        const home = document.querySelector('.home')
        const about = document.querySelector('.about')

        const homeFx = new TextScramble(home)
        const aboutFx = new TextScramble(about)

        home.addEventListener("mouseover", handleScrambleHome);
        about.addEventListener("mouseover", handleScrambleAbout);

    }

    function changeState() {
        let menuButtonText = document.getElementById("menuButtonText");
        if (menuButtonText.innerHTML == "menu") {
            menuButtonText.innerHTML = "close";
        } else {
            menuButtonText.innerHTML = "menu";
        }
    };


   


</script>

<main>
    <div class="menuButton" on:click="{openMenu}" on:click="{changeState}">
        <h1 id="menuButtonText">menu</h1>
    </div>
    <div id="menu" class="menuInsides" style="height: 0vh; opacity: 0;">
        <div class="divider">
            <div class="items" id="items">
                <ul>
                    <div class="item">
                        <li><a href="/" class="underline home"  use:link>/ home</a></li>
                        <li>Less is more. More is less.<li>
                    </div>
                    <div class="item">
                        <li><a href="/about" class="underline about" use:link>/ about me</a></li>
                        <li>Something something about me.<li>
                    </div>
                </ul>
            </div>
            <div class="visualizer" id="visualizer">b</div>
        </div>
    </div>
</main>

<style>
    .menuButton {
        position: absolute;
        top: 7.7vh;
        z-index: 3;
        left: 50%;
        font-size: large;
        font-family: 'Hack NF Bold';
        color: #EBDBB2;
        opacity: 0.3;
        transform: translate(-50%, -50%);
        transition: all .5s ease-in-out;
        cursor: pointer;
        text-align: center;
    }

    .menuButton:hover {
        mix-blend-mode: normal;
        opacity: 1;
        transition: all .5s ease-in-out;
    }

    .menuInsides {
        position: absolute;
        z-index: 2;
        opacity: 0;
        top: 50%;
        left: 50%;
        width: 87.5vw;
        height: 0vh;
        transform: translate(-50%, -50%);
        background-color: #202020;
        transition: all .5s ease-in-out;
    }

    .divider {
        display: flex;
        flex-direction: row;
    }

    .items {
        width: 50%;
        height: 83.7vh;
        transition: all .5s ease-in-out;

        display: flex;
        flex-direction: column;
    }

    .items ul {
        margin-top: auto;
        margin-bottom: auto;
        list-style-type: none;

    }

    .items .item {
        margin: 5vh;
    }

    .item a {
        font-family: "Hack NF Bold";
        font-size: 8vh;
        text-decoration: none;
        color: #D5C4A1;
        opacity: 0.5;
        transition: opacity 0.5s ease-in-out;
    }

    .item a:hover {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }

    .item li {
        color: #A89984;
    }

    .visualizer {
        width: 50%;
        height: 83.7vh;
        transition: all .5s ease-in-out;
    }

    .underline {
        mix-blend-mode: difference;
        display: inline-block;
        color: #000;
        text-decoration: none;
    }

    .underline::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: width .3s;
    }

    .underline:hover::after {
        width: 100%;
        transition: width .3s;
    }
</style>