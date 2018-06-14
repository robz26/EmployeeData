// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKhtdAL06SFSz2tgxoJHszhKl1-jLI3TU",
    authDomain: "time-sheet-8bf7c.firebaseapp.com",
    databaseURL: "https://time-sheet-8bf7c.firebaseio.com",
    projectId: "time-sheet-8bf7c",
    storageBucket: "",
    messagingSenderId: "655891623227"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // on click event listener for adding Trains
  $("#submit").on("click", function(event) {
    event.preventDefault();

      // create variables to store and grab user input
      var name = $("#name").val().trim();
      var role = $("#role").val().trim();
      var date = $("#date").val().trim();
      var name = $("#months").val().trim();
      var name = $("#start").val().trim();
      var name = $("#rate").val().trim();

        
        // add data to firebase
      database.ref().push({
        name: name,
        role: role,
        date: date,
        months: months,
        start: start,
        rate: rate
        });

   // Alert
    alert("Employee added succefully!");

    // clear all of the text-boxes for new submission
      $("#name").val("");
      $("#role").val("");
      $("#date").val("");
      $("#months").val("");
      $("#start").val("");
      $("#rate").val("");
  
  });

  // create Firebase event for adding train to the database and a row in the html when a user adds an entry
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	  console.log(childSnapshot.val());

	  // get the values and store them into a variable.
	  var name = childSnapshot.val().name;
	  var role = childSnapshot.val().role;
	  var date = childSnapshot.val().date;
	  var months = childSnapshot.val().months;
	  var start = childSnapshot.val().start;
	  var rate = childSnapshot.val(). rate;

});