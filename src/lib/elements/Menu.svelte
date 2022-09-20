<script>
    import { link } from "svelte-spa-router";
    import { slide, fade } from "svelte/transition";
    import anime from "animejs/lib/anime.es.js";

    let showMenu = false;

    const fadeIn = {
        delay: 100,
        duration: 200,
    };

    const fadeOut = {
        delay: 0,
        duration: 100,
    };

    const slideIn = {
        delay: 100,
        duration: 500,
    };

    const slideOut = {
        delay: 0,
        duration: 400,
    };

    function menu() {
        showMenu = showMenu ? false : true;
    }

    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = "!@#$%^&*()'+-=_?/.>,<;:|][}{";
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => (this.resolve = resolve));
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || "";
                const to = newText[i] || "";
                const start = Math.floor(Math.random() * 20);
                const end = start + Math.floor(Math.random() * 20);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = "";
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    function animate(start) {
        anime({
            targets: ".bar",
            height: function () {
                return anime.random(0, 60) + "vh";
            },
            easing: "easeInOutQuad",
            duration: 1000,
            complete: animate,
        });

        if (!start) anime.remove(".bar");
    }

    function changeState() {
        let menuButtonText = document.getElementById("menuButtonText");
        if (menuButtonText.innerHTML == "menu") {
            menuButtonText.innerHTML = "close";
            animate(1);
        } else {
            menuButtonText.innerHTML = "menu";
            animate(0);
        }
    }

     function onLoad() {
        const handleScrambleHome = (e) => {
            homeFx.setText("/ home");
        };

        const handleScrambleAbout = (e) => {
            aboutFx.setText("/ about me");
        };

        const home = document.querySelector(".home");
        const about = document.querySelector(".about");

        const homeFx = new TextScramble(home);
        const aboutFx = new TextScramble(about);

        home.addEventListener("mouseover", handleScrambleHome);
        about.addEventListener("mouseover", handleScrambleAbout);
    };
</script>

<main>
    <div class="menuButton" on:click={menu} on:click={changeState}>
        <h1 id="menuButtonText">menu</h1>
    </div>
    {#if showMenu}
        <div in:slide={slideIn} out:slide={slideOut} id="menu" class="menuInsides">
            {#if showMenu}
                <div in:fade={fadeIn} out:fade={fadeOut} class="divider">
                    <div class="items" id="items">
                        <ul>
                            <div class="item">
                                <li>
                                    <a href="/" class="home" on:click={animate(0)} use:link>/ home</a>
                                </li>
                                <li>The homepage</li>
                            </div>
                            <div class="item">
                                <li>
                                    <a href="/about" class="about" on:click={animate(0)} use:link>/ about me</a>
                                </li>
                                <li>Something something about me.</li>
                            </div>
                        </ul>
                    </div>
                    <div class="visualizer" id="visualizer">
                        <div class="bar" style="background-color: #EBDBB2;" />
                        <div class="bar" style="background-color: #D5C4A1;" />
                        <div class="bar" style="background-color: #928374;" />
                        <div class="bar" style="background-color: #EBDBB2;" />
                        <div class="bar" style="background-color: #A89984;" />
                        <div class="bar" style="background-color: #928374;" />
                        <div class="bar" style="background-color: #EBDBB2;" />
                    </div>
                </div>
            {/if}
        </div>
    {/if}
</main>

<style>
    @font-face {
        font-family: "Hack NF Bold";
        src: url("fonts/HACKBOLDNERDFONTCOMPLETE.TTF");
    }

    .menuButton {
        position: absolute;
        top: 7.7vh;
        z-index: 3;
        left: 50%;
        font-size: large;
        font-family: "Hack NF Bold";
        color: #ebdbb2;
        opacity: 0.3;
        transform: translate(-50%, -50%);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        text-align: center;
    }

    .menuButton:hover {
        mix-blend-mode: normal;
        opacity: 1;
        transition: all 0.5s ease-in-out;
    }

    .menuInsides {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        width: 87.5vw;
        height: 83.5vh;
        transform: translate(-50%, -50%);
        background-color: #202020;
        transition: all 0.5s ease-in-out;
    }

    .divider {
        display: flex;
        flex-direction: row;
    }

    .items {
        width: 60%;
        height: 83.7vh;
        transition: all 0.5s ease-in-out;

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
        font-size: 5vw;
        text-decoration: none;
        color: #d5c4a1;
        opacity: 0.5;
        transition: opacity 0.5s ease-in-out;
    }

    .item a:hover {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }

    .item li {
        color: #a89984;
    }

    .visualizer {
        display: flex;
        flex-direction: row;
        width: 40%;
        height: 83.7vh;
        transition: all 0.5s ease-in-out;
    }

    .visualizer .bar {
        height: 20vh;
        width: 20%;
        margin-top: auto;

        background-color: red;
    }
</style>
