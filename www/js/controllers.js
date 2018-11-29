angular.module('app.controllers', [])

    .controller('eventCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {
            $http.get('http://localhost:1337/event/index')
                .then(function (response) {
                    $scope.events = response.data.events;
                });


        }])

    .controller('organizerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('venueCtrl', ['$scope', '$stateParams', 'Store',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams,Store) {
            $scope.events = Store.getAllEvents();

        }])

    .controller('personCtrl', ['$scope', '$stateParams', 'Store',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Store) {

            $scope.$on("$ionicView.beforeEnter", function () {

                var item = Store.getSelected();
                $scope.item = item;


            });


        }])

    .controller('detailCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {

            $http.get('http://localhost:1337/Event/detail/' + $stateParams.id)
                .then(function (response) {

                    $scope.events = response.data.event;
                    console.log("$scope.events =" + $scope.events);
                });


        }])

    .controller('mapsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('oeventCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {

            $http.get('http://localhost:1337/event/index')
                .then(function (response) {
                    $scope.events = response.data.events.filter(function (item) {
                        //console.log("$stateParams.org = "+ $stateParams.org);
                        return item.organizer == $stateParams.org;
                    });

                });


        }])

    .controller('veventCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams,$http) {

            $http.get('http://localhost:1337/event/index')
            .then(function (response) {
            $scope.events = response.data.events.filter(function (item) {

            return item.venue === $stateParams.ven;
            });
            
            
            });
        }])


    .controller('loginCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup', 'Store',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup, Store) {

            $scope.data = {};

            $scope.login = function () {


                $http.post("http://localhost:1337/user/login", $scope.data)
                    .then(function (response) {

                        Store.setUserinfo(1, $scope.data.username);

                        // A confirm dialog
                        var confirmPopup = $ionicPopup.confirm({
                            title: 'Welcome back!',
                            template: 'Go back to previous page?'
                        });

                        confirmPopup.then(function (res) {
                            if (res) {
                                $ionicHistory.goBack();
                            } else {
                                console.log('granted');
                            }
                        });


                    }, function (response) {

                        var alertPopup = $ionicPopup.alert({
                            title: response.data,
                            template: 'Login failed. Please try again.'
                        });
                    });

            }

        }])

    .controller('registerEventsCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {

            $http.get('http://localhost:1337/Person/myevent')
                .then(function (response) {

                    $scope.events = response.data;
                });


        }])
