angular.module('app').controller('mainCtrl', function($scope, mainSrvc){

  $scope.getData = function(){
    mainSrvc.getData().then(function(res){
      console.log(res)
    })
  }
  $scope.putData = function(){
    mainSrvc.putData().then(function(res){
      console.log(res)
    })
  }
  $scope.postData = function(chk, id){
    mainSrvc.postData(chk, id).then(function(res){
      console.log(res)
    })
  }
  $scope.destroyData = function(){
    mainSrvc.destroyData().then(function(res){
      console.log(res)
    })
  }
  get
  put
  post
  destroy
})
