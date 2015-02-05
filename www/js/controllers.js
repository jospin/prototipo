angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.fbLogin = function() {
      openFB.login(
          function(response) {
              if (response.status === 'connected') {
                  console.log('Facebook login succeeded');
                  $scope.closeLogin();
              } else {
                  alert('Facebook login failed');
              }
          },
          {scope: 'email,read_stream,publish_stream,publish_actions'});
  };

})

.controller('HomeCtrl', function($scope, $state) {
  openFB.api({
      path: '/me',
      params: {fields: 'id,name,email'},
      success: function(user) {
          $scope.$apply(function() {
              $scope.user = user;
          });
      },
      error: function(error) {
          $state.go('app/login');
      }
  });

  $scope.doConfirm = function(){
    console.log($scope.confirmData);
    console.log($scope);
  };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
