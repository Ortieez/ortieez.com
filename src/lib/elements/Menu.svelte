<script>
    function test(){
        let menu = document.getElementById('menu');
        let menuDisplay = menu.style.height
        if (menuDisplay == "0vh") {
            menu.style.height = "83.7vh"
            menu.style.opacity = "1"
        } else {
            menu.style.height = "0vh"
            menu.style.opacity = "0"
        }
    }
</script>

<main>
    <div class="menuButton" on:click="{test}">
        <h1>menu</h1>
    </div>
    <div id="menu" class="menuInsides">
      pindik
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

</style>