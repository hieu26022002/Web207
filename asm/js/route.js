var app = angular.module(
    'asm',
    ['ngRoute']
);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html',
            // controller: HomeController
        })
        .when('/ds-nguoi-dung', {
            templateUrl: './pages/list.html',
            // controller: ListController
        })
        .when('/add', {
            templateUrl: './pages/add.html',
            // controller: AddController
        })
        // :id thể hiện là có thể nhận được id là 1 giá trị nào đó
        .when('/edit/:id', {
            templateUrl: './pages/edit.html',
            // controller: EditController
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