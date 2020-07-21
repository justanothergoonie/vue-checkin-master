"use strict";

var app = new Vue({
  el: '#app',
  data: {
    arrived: [],
    newArrival: {
      name: '',
      email: '',
      time: ''
    }
  },
  methods: {
    addPerson: function addPerson() {
      this.arrived.push({
        name: this.newArrival.name,
        email: this.newArrival.email,
        time: Date.now(),
        hashEmail: md5(this.newArrival.email)
      });
      this.newArrival.name = '';
      this.newArrival.email = '';
    } // timeElapsed: (window.onload = function () {
    // 	elapseMe();
    // }),

  }
});
//# sourceMappingURL=app.js.map
