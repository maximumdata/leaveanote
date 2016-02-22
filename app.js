'use strict';

var leaveANote = angular.module('leaveANote', ['ngResource','angularUtils.directives.dirPagination']);


leaveANote.factory('getAllNotes', function($resource) {
  return $resource('http://mikedettmer.com/api/projects/notes/');
});

leaveANote.controller('MainCtrl', function(getAllNotes, $scope) {
  $scope.data = getAllNotes.query();

  $scope.saveNote = function() {
    var newPost = new getAllNotes();
    newPost.name = $scope.form.name;
    newPost.body = $scope.form.body;
    newPost.date = Date.now();
    if(newPost.name && newPost.body) {
      newPost.$save(function(){
        $scope.data = getAllNotes.query();
      });
    } else {
      $scope.error = 'Make sure to fill out both fields!';
    }
  }

});

leaveANote.controller('FormCtrl', function($scope, getAllNotes) {

  $scope.saveNote = function() {
    var newPost = new getAllNotes();
    newPost.name = $scope.form.name;
    newPost.body = $scope.form.body;
    newPost.date = Date.now();

    newPost.$save();

    $scope.$emit('submitted');
  }
});
