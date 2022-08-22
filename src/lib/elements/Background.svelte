<script>
    import anime from 'animejs';

    anime({
        targets: '.line-drawing-demo .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
</script>

<style>
    .line {
        display: block;
        background: transparent;
        background-color: #EBDBB2;
        position: absolute
    }

    .left-vertical {
        min-height: 100vh;
        width: 2px;
        left: 6vw;
    }

    .right-vertical {
        min-height: 100vh;
        width: 2px;
        right: 6vw;
    }

    .top-horizontal {
        min-height: 2px;
        width: 100%;
        left: 128;
        top: 8vh;
    }

    .bottom-horizontal {
        min-height: 2px;
        width: 100%;
        left: 128;
        bottom: 8vh;
    }

    .bg {
        position: fixed;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        width: 200%;
        height: 200vh;
        background: transparent url('Rectangle.png') repeat 0 0;
        filter: contrast(2);
        background-repeat: repeat;
        animation: bg-animation .2s infinite;
        opacity: .8;
        visibility: visible;
    }

    @keyframes bg-animation {
        0% { transform: translate(0,0) }
        10% { transform: translate(-5%,-5%) }
        20% { transform: translate(-10%,5%) }
        30% { transform: translate(5%,-10%) }
        40% { transform: translate(-5%,15%) }
        50% { transform: translate(-10%,5%) }
        60% { transform: translate(15%,0) }
        70% { transform: translate(0,10%) }
        80% { transform: translate(-15%,0) }
        90% { transform: translate(10%,5%) }
        100% { transform: translate(5%,0) }
    }
</style>

<main>
    <span class="left-vertical line"></span>
    <span class="right-vertical line"></span>
    <span class="top-horizontal line"></span>
    <span class="bottom-horizontal line"></span>
    <div class="bg"></div>
</main>