angular.module('app').service('mainSrvc', function($http){

  this.getData = function(){
    return $http({
      method: 'GET',
      url: './'
    }).then(function(res){
      return res.data
    })
  }
  this.putData = function(){
    return $http({
      method: 'PUT',
      url: './'
    }).then(function(res){
      return res.data
    })
  }
  this.postData = function(){
    return $http({
      method: 'POST',
      url: './'
    }).then(function(res){
      return res.data
    })
  }
  this.deleteData = function(){
    return $http({
      method: 'DELETE',
      url: './'
    }).then(function(res){
      return res.data
    })
  }

})
