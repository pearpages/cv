angular.module('cv', [])
    .controller('MainController', function () {
        var vm = this;
        vm.baseUrl = '/cv-design/';
        console.log('cv loaded');
    });