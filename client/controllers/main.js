/* MAIN CONTROLLER  */

angular.module('app').controller('mainController', function ($scope) {
    $scope.title = "Todos";

    $scope.todos = Todos.find({}).fetch();

    $scope.add = function () {
        Todos.insert($scope.task);
        //Reload and clear form
        $scope.todos = Todos.find({}).fetch();
        $scope.task = {};
    }

    $scope.update = function (id) {
        var todo = $scope.todos[id];
        Todos.update({ _id: todo._id }, { description: todo.description });
        //Reload
        $scope.todos = Todos.find({}).fetch();
    }

    $scope.delete = function (id) {
        Todos.remove($scope.todos[id]._id);
        $scope.todos.splice(id, 1);
    }

});
