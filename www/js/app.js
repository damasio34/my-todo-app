// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('MyTodoApp', ['ionic', 'MyTodoApp.controllers', 'MyTodoApp.services'])

.run(function($ionicPlatform, $state) {

    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }

    });

}).config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('todos',{
        url:'/todos',
        controller:'TodoListController',
        templateUrl:'views/todos.html'
    })
    .state('createTodo',{
        url:'/todo/new',
        controller:'TodoCreationController',
        templateUrl:'views/create-todo.html'
    })
    .state('editTodo',{
        url:'/todo/edit/:id/:content',
        controller:'TodoEditController',
        templateUrl:'views/edit-todo.html'
    });

    $urlRouterProvider.otherwise('/todos');
});