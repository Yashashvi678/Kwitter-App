
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAy004s__KYphhg1xFKdXsbh2eG9ol4uI4",
    authDomain: "my-project-43-9783f.firebaseapp.com",
    databaseURL: "https://my-project-43-9783f-default-rtdb.firebaseio.com",
    projectId: "my-project-43-9783f",
    storageBucket: "my-project-43-9783f.appspot.com",
    messagingSenderId: "498645295529",
    appId: "1:498645295529:web:c20b5eb7724ec60c1fe4b8"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name1").innerHTML = "Welcome " + user_name + " !";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    document.getElementById("room_name").innerHTML = "";

    window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}