
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDeYk-zEj_iTVFflPrBhU3nRueeRpaBKMM",
      authDomain: "kwitter-ad703.firebaseapp.com",
      databaseURL: "https://kwitter-ad703-default-rtdb.firebaseio.com",
      projectId: "kwitter-ad703",
      storageBucket: "kwitter-ad703.appspot.com",
      messagingSenderId: "760029274640",
      appId: "1:760029274640:web:6092effe4e5b21d5c82095",
      measurementId: "G-5Q9YZV4FQF"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function redirectToRoomName (name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location ="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}