angular.module('aluracar').controller('CarroEscolhidoController', function ($scope, $stateParams) {
    $scope.carro = angular.fromJson($stateParams.carro);
    $scope.acessorios = [
        {nome: "Freio ABS", preco: 800, selecionado: false},
        {nome: "A/C", preco: 1000, selecionado: false},
        {nome: "MP3 Player", preco: 500, selecionado: false}
    ];

    $scope.selecionarAcessorio = function (acessorio) {
        if (acessorio.selecionado) {
            $scope.carro.preco += acessorio.preco;
        } else {
            $scope.carro.preco -= acessorio.preco;
        }
    };
});