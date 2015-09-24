// angular.module('Main', []);
//     angular.module('Main').controller('BaseCtrl', ['$scope', '$http', function ($scope, $http){

//         $http.get('/emoji').then(function(res){
//             $scope.emojis = res.data;
//         });

//         // $scope.emojis = [{
//         //     id: 1,
//         //     name: '=)'
//         // },
//         // {
//         //     id: 2,
//         //     name: ':-)'
//         // },
//         // {
//         //     id: 3,
//         //     name: '8)'
//         // },
//         // {
//         //     id: 4,
//         //     name: ':)'
//         // }];
//     }]);


// con sockets
angular.module('Main', []);
    angular.module('Main').controller('BaseCtrl', ['$scope', function ($scope){
        io.socket.get('/emoji', function(data){
            $scope.emojis = data;
            $scope.$apply();
        });

        io.socket.on('emoji', function(event){
            switch (event.verb){
                case 'created':
                    $scope.emojis.push(event.data);
                    $scope.$apply();
                    break;
            }
        });
    }]);