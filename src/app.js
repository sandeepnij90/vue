let mainEvents = [];
let addEvent = new Vue({
  el: '#addEvent',
  methods: {
    addEvent: () => {
      // get the values from the form
      let title = document.getElementById('title').value;
      let location = document.getElementById('location').value;
      let description = document.getElementById('description').value;
      let start = document.getElementById('start').value;
      let end = document.getElementById('end').value;

      // if the validation passes push into the mainEvents array else show error
      if (title == '' || location == '' || description == '' || start == '' || end == '') {
        alert("please enter all fields before adding an event");
      } else if(start > end) {
        alert('Your end date cannot be before your start date');
      } else { // add the event to main events array
        let enteredEvent = {
          'title' : title,
          'location' : location,
          'description' : description,
          'start' : start,
          'end' : end,
        }
        mainEvents.push(enteredEvent);
      }
    }
  }
});
let loadEvents = new Vue({
  el: '#events',
  data: {
    events : mainEvents,
    displayEdit : false
  },
  methods: {
    showEdit: () => {
      if (loadEvents.displayEdit == true) {
        loadEvents.displayEdit = false;
      } else {
        loadEvents.displayEdit = true;
      }
    },
    editEvent: index => {
      mainEvents[index].title = document.getElementById('Etitle').value;
      mainEvents[index].location = document.getElementById('Elocation').value;
      mainEvents[index].description = document.getElementById('Edescription').value;
      mainEvents[index].start = document.getElementById('Estart').value;
      mainEvents[index].end = document.getElementById('Eend').value;
      loadEvents.displayEdit = false;
    },
    checkFuture: start => {
      let currentDt = new Date();
      let mm = currentDt.getMonth() + 1;
      let dd = currentDt.getDate();
      let yyyy = currentDt.getFullYear();

      if (mm < 10) {
        var date = yyyy+'-0'+mm+'-'+ dd;

      } else {
        var date = yyyy+'-'+mm+'-'+ dd;
      }
      if(start > date) {
        return 'future';
      }
    }
  }
});
