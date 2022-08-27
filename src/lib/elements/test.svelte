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

  const onload = () => {
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

  function changeState() {
    let menuButtonText = document.getElementById("menuButtonText");
    if (menuButtonText.innerHTML == "menu") {
      menuButtonText.innerHTML = "close";
    } else {
      menuButtonText.innerHTML = "menu";
    }
  }