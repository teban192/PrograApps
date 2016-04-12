var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://sizzling-inferno-3730.firebaseio.com/Usuarios");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "Usuarios");
});

app.controller("Samp", function($scope, $firebaseArray) {
  var ref = new Firebase("https://sizzling-inferno-3730.firebaseio.com/messages");
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
  // click on `index.html` above to see $remove() and $save() in action
});

app.controller("Samplem", function($scope, $firebaseObject) {
  var ref = new Firebase("https://sizzling-inferno-3730.firebaseio.com/messages");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "message");
});


app.controller("Sampuser", function($scope, $firebaseArray) {
  var ref = new Firebase("https://sizzling-inferno-3730.firebaseio.com/Usuarios");
  // create a synchronized array
  $scope.usuarios = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.adduser = function() {
    $scope.usuarios.$add({
      usuario: $scope.newuser
    });
  };
  // click on `index.html` above to see $remove() and $save() in action
});













