angular.module('aluracar').controller('ListagemController', function ($scope, carroService) {
    carroService.obterCarros().then(function (carros) {
        $scope.listaDeCarros = carros.data;
    });
});