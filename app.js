'use strict';

var leaveANote = angular.module('leaveANote', ['ngResource','angularUtils.directives.dirPagination']);


leaveANote.factory('Notes', function($resource) {
  return $resource('http://mikedettmer.com/api/projects/notes/:id/:meta', {id: '@id', meta: '@meta'});
});

leaveANote.controller('MainCtrl', function(Notes, $scope) {
  $scope.data = Notes.query();

  $scope.saveNote = function() {
    var newPost = new Notes();
    newPost.name = $scope.form.name;
    newPost.body = $scope.form.body;
    newPost.date = Date.now();
    if(newPost.name && newPost.body) {
      newPost.$save(function(){
        $scope.data = Notes.query();
      });
    } else {
      $scope.error = 'Make sure to fill out both fields!';
    }
  }

  $scope.vote = function(id, direction) {
    var note = Notes.save({id: id, meta: direction}, function() {
      $scope.data = Notes.query();
    });
  }
});
