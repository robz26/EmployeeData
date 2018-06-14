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

  ("body").on("click", "#submit", function(){
      var name = $("#name").val().trim();
      var role = $("#role").val().trim();
      var date = $("#date").val().trim();
      var months = $("#months").val().trim();
      var start = $("#start").val().trim();
      var rate = $("#rate").val().trim();

      
  })

  database.ref().on("child_added", function (snapshot){
    console.log(snapshot).val();
    
  })