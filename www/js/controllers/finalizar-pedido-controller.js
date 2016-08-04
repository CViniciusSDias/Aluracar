angular.module('aluracar').controller('FinalizarPedidoController', function ($scope, $stateParams, $ionicPopup, $ionicHistory, carroService) {
    $scope.carro = angular.fromJson($stateParams.carro);
    $scope.pedido = {};

    $scope.finalizarPedido = function () {
        var pedidoFinalizado = {
            params: {
                carro: $scope.carro.nome,
                preco: $scope.carro.preco,
                nome: $scope.pedido.nome,
                endereco: $scope.pedido.endereco,
                email: $scope.pedido.email
            }
        };
        carroService.salvarPedido(pedidoFinalizado).then(function (resposta) {
            console.log(resposta);
            $ionicPopup.alert({
                title: "Parabéns!",
                template: "Você acaba de comprar um carro"
            }).then(function () {
                $ionicHistory.goBack(-2);
            });
        }, function (erro) {
            $ionicPopup.alert({
                title: "Erro",
                template: "Verifique todos os campos",
                okType: "button-assertive"
            })
        });
    };
});