var fruitveggie = angular.module("FruitVeggie", []);


fruitveggie.run(function() {
    console.log('App Started');
    console.log('Fruit count', fruit.length);
    console.log('Veggie count', vegetables.length);
});

fruitveggie.controller("List",["$scope",function($scope){

    var combineList = fruit.concat(vegetables);
    $scope.items = combineList;
    $scope.fruits = [];
    $scope.veggies = [];

    $scope.moveLeft = function(idx) {
        $scope.fruits.push($scope.items[idx]);
        $scope.items.splice(idx,1);
    }

    $scope.moveRight = function(idx) {
        $scope.veggies.push($scope.items[idx]);
        $scope.items.splice(idx,1);
    }

    $scope.moveBackRight = function(idx) {
        $scope.items.push($scope.fruits[idx]);
        $scope.fruits.splice(idx,1);
    }

    $scope.moveBackLeft = function(idx) {
        $scope.items.push($scope.veggies[idx]);
        $scope.veggies.splice(idx,1);
    }





}])


