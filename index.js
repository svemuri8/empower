FileInputStream serviceAccount =
  new FileInputStream("path/to/serviceAccountKey.json");

FirebaseOptions options = new FirebaseOptions.Builder()
  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
  .setDatabaseUrl("https://empower101010.firebaseio.com")
  .build();

FirebaseApp.initializeApp(options);

var database = firebase.database();



function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    name: name,
    addres: email,
    zip: imageUrl,
    

  });
}