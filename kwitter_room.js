
//ADD YOUR FIREBASE LINKS HERE
const config = {
    apiKey: "AIzaSyAy004s__KYphhg1xFKdXsbh2eG9ol4uI4",
    authDomain: "my-project-43-9783f.firebaseapp.com",
    databaseURL: "https://my-project-43-9783f-default-rtdb.firebaseio.com",
    projectId: "my-project-43-9783f",
    storageBucket: "my-project-43-9783f.appspot.com",
    messagingSenderId: "498645295529",
    appId: "1:498645295529:web:e72beecf7807172e1fe4b8",
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
