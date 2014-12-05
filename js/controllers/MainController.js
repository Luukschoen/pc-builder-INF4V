
app.controller('MainController', ['$scope', '$rootScope', '$http', '$state', '$stateParams', '$filter',
    function MainController($scope, $rootScope, $http, $state, $stateParams, $filter) { 
        
    $scope.headlines = "Hi, ik ben hier gekomen via de controller!";
    $scope.objects = [
      {naam: "Mitchell Irvine", points: 3},
      {naam: "Niels van 't Hof", points: 5},
      {naam: "Luuk Schoenmakers", points: 4},
      {naam: "Dennis Bergsma", points: 0}
    ]




    }
]);

