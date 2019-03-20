import Vue from 'vue';
import fsmanager from './fullscreen';
import store from './store';

require('./datepicker');
require('pickerjs/src/css/picker.css');
require('./style.css');

const end = store.getItem('end');

const vueDefinition = {
    el: '#vueRoot',
    data: {
        clock: false,
        timer: null,
        fullscreen: false,
        end: end,
        pauseTime: new Date().getTime() + (1000 * 60 * 45),
        loop: null
    },
    mounted: function () {
        if (this.end !== null) {
            this.timer = Date.parse(end);
            this.runLoop();
        }

        fsmanager.toggleButton = (state) => {
            this.fullscreen = state;
        };

    },
    methods: {
        fullscreenToggle: function () {
            fsmanager.fullscreenToggle();
        },
        run: function () {
            const timer = this.$refs.pickerjs.getDate();
            store.setItem('end', timer);
            store.pushArrayItem('history', { start: new Date(), preparedEnd: timer });
            this.timer = timer;
            this.runLoop();
        },
        stopTimer: function () {
            clearInterval(this.loop);

            const history = store.getArrayLastItem('history');

            history.end = new Date();
            store.updateArrayLastItem('history', history);
            store.clearItem('end');

            this.clock = false;
        },
        runLoop: function () {

            this.loop = setInterval(() => {

                const distance = this.timer - new Date().getTime();

                if (distance < 0) {
                    this.stopTimer();
                } else {

                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    let countdown = `${seconds}s`;
                    if (minutes > 0) {
                        countdown = `${minutes}m ${countdown}`;
                    }
                    if (hours > 0) {
                        countdown = `${hours}m ${countdown}`;
                    }

                    this.clock = countdown;
                }
            }, 1000);
        }
    }
};

//const pauseTime = new Date().getTime() + (1000 * 60 * 45);
//const clock = document.querySelector('.clock');

window.addEventListener('load', function () {
    new Vue(vueDefinition);
})
//var timer = null;




/*document.querySelector('.run').addEventListener('click', () => {
    const timer = vue.$refs.pickerjs.getDate();
    localStorage.setItem('start', timer);
    vue.timer = timer;
    runLoop();
});*/
