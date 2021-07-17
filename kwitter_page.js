//YOUR FIREBASE LINKS
const config = {
      apiKey: "AIzaSyAy004s__KYphhg1xFKdXsbh2eG9ol4uI4",
      authDomain: "my-project-43-9783f.firebaseapp.com",
      databaseURL: "https://my-project-43-9783f-default-rtdb.firebaseio.com",
      projectId: "my-project-43-9783f",
      storageBucket: "my-project-43-9783f.appspot.com",
      messagingSenderId: "498645295529",
      appId: "1:498645295529:web:c20b5eb7724ec60c1fe4b8"
};


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
