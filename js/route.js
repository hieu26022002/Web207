var app = angular.module(
    'asm',
    ['ngRoute']
);

// Controller

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix("")

    $routeProvider
        .when('/', {
            templateUrl: './pages/client/home.html',
            // controller: HomeController
            layout: './pages/client/client.html'
        })
        .when('/products', {
            templateUrl: './pages/client/shop.html',
            // controller: ListController
            layout: './pages/client/client.html'
        })
        .when('/product/:ma', {
            templateUrl: './pages/client/detail.html',
            // controller: AddController
            layout: './pages/client/client.html'
        })
        // :id thể hiện là có thể nhận được id là 1 giá trị nào đó
        .when('/edit/:id', {
            templateUrl: './pages/client/edit.html',
            // controller: EditController
            layout: './pages/client/client.html'
        })
        .when('/contact', {
            templateUrl: './pages/client/contact.html',
            layout: './pages/client/client.html'
        })
        .when('/checkout', {
            templateUrl: './pages/client/checkout.html',
            layout: './pages/client/client.html'
        })
        .when('/cart', {
            templateUrl: './pages/client/cart.html',
            layout: './pages/client/client.html'
        })
        .when('/admin', {
            layout: './pages/admin/admin.html'
        })
        .when('/admin/list', {
            // templateUrl: './pages/admin/listProduct.html',
            layout:'./pages/admin/listProduct.html'
        })
        .when('/404', {
            templateUrl: './pages/404.html',
        })
        // Nếu các URL không rơi vào các case .when bên trên thì sẽ tự động chuyển tới url 404 
        .otherwise({
            //redirectTo: Chuyển tới URL
            redirectTo: '/404'
        })
});

app.controller('myController', function ($scope, $location) {
    $scope.layoutTemplate = 'client.html';

    $scope.$on('$routeChangeStart', function (event, next, current) {
        if (next.$$route && next.$$route.layout) {
            $scope.layoutTemplate = next.$$route.layout;
        } else {
            $scope.layoutTemplate = 'client.html';
        }
    });
});
