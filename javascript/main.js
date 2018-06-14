$(document).ready(function() {

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
$("#submit").on("click", function (event) {
    event.preventDefault();


      // create variables to store and grab user input
    var name = $("#name").val().trim();
    var role = $("#role").val().trim();
    var start = $("#start").val().trim();
    var months = $("#months").val().trim();
    var rate = $("#rate").val().trim();



    // add data to firebase
    database.ref().push({
        name: name,
        role: role,
        start: start,
        months: months,
        rate: rate
    });

    // Alert
    alert("Employee added succefully!");


      $("#name").val("");
      $("#role").val("");
      $("#start").val("");
      $("#months").val("");
      $("#rate").val("");
  
  });


    console.log(childSnapshot.val());

    // get the values and store them into a variable.
    var name = childSnapshot.val().name;
    var role = childSnapshot.val().role;
    var date = childSnapshot.val().date;
    var months = childSnapshot.val().months;
    var start = childSnapshot.val().start;
    var rate = childSnapshot.val().rate;


	  // get the values and store them into a variable.
	  var name = childSnapshot.val().name;
	  var role = childSnapshot.val().role;
	  var start = childSnapshot.val().start;
	  var months = childSnapshot.val().months;
    var rate = childSnapshot.val(). rate;
    
    // Add each data into the table
	  $(".table").append("<tr><td>" + name + "</td><td>" +  + "</td><td>" + role + 
    "</td><td>" + start + "</td><td>" + months + "</td><td>" + rate + "</td></tr>");


});
