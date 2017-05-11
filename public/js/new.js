(function () {
'use strict';

console.log('init');

angular.module('NewNoteApp', [])
.controller('NewNoteController', NewNoteController)
.service('NewNoteService', NewNoteService);

NewNoteController.$inject = ['NewNoteService'];
function NewNoteController (NewNoteService) {
  var n_ctrl = this;

  n_ctrl.post = function () {
    console.log("click");
    console.log(n_ctrl.n_title, n_ctrl.n_body);
    NewNoteService.post(n_ctrl.n_title, n_ctrl.n_body);
  }

}

NewNoteService.$inject = ['$http'];
function NewNoteService ($http) {
  var n_serv = this;

  n_serv.post = function (n_title, n_body) {
    $http({
      method: 'POST',
      url: '/post',
      params: {title: n_title, body: n_body}
    }).then((res) => {
      console.log('Post made successfully!')
    });
  }
}

})();
