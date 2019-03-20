import Vue from 'vue';
import Picker from 'pickerjs';

let pickerjs;

Vue.component('date-picker', {
    template: '<div class="js-inline-picker" />',
    props: ['pauseTime'],
    mounted: function () {
        //const self = this;
        //const picker = document.querySelector('.js-inline-picker');

        pickerjs = new Picker(this.$el, {
            inline: true,
            format: 'HH:mm',
            headers: true,
            date: new Date(this.pauseTime),
        });

        //this.$on('get-date', function()
    },
    beforeDestroy: function () {
        pickerjs.destroy();
    },
    methods: {
        getDate: function () {
            return pickerjs.getDate();
        }
    }
});