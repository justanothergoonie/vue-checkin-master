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
  created: function created() {
    console.log('created');
    setInterval(this.updateCheckInTimes, 5000);
  },
  methods: {
    addPerson: function addPerson() {
      if (!this.newArrival.name || !this.newArrival.email) return;
      this.arrived.unshift({
        name: this.newArrival.name,
        email: this.newArrival.email,
        time: Date.now(),
        timeElapsed: 0,
        hashEmail: 'https://www.gravatar.com/avatar/' + md5(this.newArrival.email)
      });

      if (this.newArrival.length > 3) {
        this.newArrival.pop();
      }

      this.newArrival.name = '';
      this.newArrival.email = '';
      this.$refs.nameField.focus();
    },
    updateCheckInTimes: function updateCheckInTimes() {
      this.arrived.forEach(function (arrival) {
        arrival.timeElapsed = Math.round((Date.now() - arrival.time) / 60000);
      });
      console.log();
    }
  }
});
//# sourceMappingURL=app.js.map
