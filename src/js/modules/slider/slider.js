export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate,
        autoplay
    } = {}) {
        this.container = document.querySelector(container);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        try {
            this.slides = this.container.children;
        } catch (error) {

        }
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }

}