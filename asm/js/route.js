var app = angular.module(
    'asm',
    ['ngRoute']
);

// Controller

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix("")

    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html',
            // controller: HomeController
        })
        .when('/products', {
            templateUrl: './pages/shop.html',
            // controller: ListController
        })
        .when('/product/:ma', {
            templateUrl: './pages/detail.html',
            // controller: AddController
        })
        // :id thể hiện là có thể nhận được id là 1 giá trị nào đó
        .when('/edit/:id', {
            templateUrl: './pages/edit.html',
            // controller: EditController
        })
        .when('/contact',{
            templateUrl: './pages/contact.html'
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