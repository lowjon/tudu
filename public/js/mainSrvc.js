angular.module('app').service('mainSrvc', function($http){

  this.getData = function(){
    return $http({
      method: 'GET',
      url: '/api/notes'
    }).then(function(res){
      return res.data
    })
  }
  this.putData = function(){
    return $http({
      method: 'PUT',
      url: '/api/addnote'
    }).then(function(res){
      return res.data
    })
  }
  this.postData = function(){
    return $http({
      method: 'POST',
      url: '/api/selected'
    }).then(function(res){
      return res.data
    })
  }
  this.deleteData = function(){
    return $http({
      method: 'DELETE',
      url: '/api/deletenote'
    }).then(function(res){
      return res.data
    })
  }

})
