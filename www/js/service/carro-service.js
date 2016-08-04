angular.module('aluracar').factory('carroService', function ($http) {
    var url = "http://aluracar.herokuapp.com/";
    return {
        obterCarros: function () {
            return $http.get(url);
        },

        salvarPedido: function (pedido) {
            url += "salvarpedido";
            return $http.get(url, pedido);
        }
    };
});