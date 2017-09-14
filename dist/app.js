'use strict';

var mainEvents = [];
var addEvent = new Vue({
  el: '#addEvent',
  methods: {
    addEvent: function addEvent() {
      // get the values from the form
      var title = document.getElementById('title').value;
      var location = document.getElementById('location').value;
      var description = document.getElementById('description').value;
      var start = document.getElementById('start').value;
      var end = document.getElementById('end').value;

      // if the validation passes push into the mainEvents array else show error
      if (title == '' || location == '' || description == '' || start == '' || end == '') {
        alert("please enter all fields before adding an event");
      } else if (start > end) {
        alert('Your end date cannot be before your start date');
      } else {
        // add the event to main events array
        var enteredEvent = {
          'title': title,
          'location': location,
          'description': description,
          'start': start,
          'end': end
        };
        mainEvents.push(enteredEvent);
      }
    }
  }
});
var loadEvents = new Vue({
  el: '#events',
  data: {
    events: mainEvents,
    displayEdit: false
  },
  methods: {
    showEdit: function showEdit() {
      if (loadEvents.displayEdit == true) {
        loadEvents.displayEdit = false;
      } else {
        loadEvents.displayEdit = true;
      }
    },
    editEvent: function editEvent(index) {
      mainEvents[index].title = document.getElementById('Etitle').value;
      mainEvents[index].location = document.getElementById('Elocation').value;
      mainEvents[index].description = document.getElementById('Edescription').value;
      mainEvents[index].start = document.getElementById('Estart').value;
      mainEvents[index].end = document.getElementById('Eend').value;
      loadEvents.displayEdit = false;
    },
    checkFuture: function checkFuture(start) {
      var currentDt = new Date();
      var mm = currentDt.getMonth() + 1;
      var dd = currentDt.getDate();
      var yyyy = currentDt.getFullYear();

      if (mm < 10) {
        var date = yyyy + '-0' + mm + '-' + dd;
      } else {
        var date = yyyy + '-' + mm + '-' + dd;
      }
      if (start > date) {
        return 'future';
      }
    }
  }
});