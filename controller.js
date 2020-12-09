angular.module("AngularJSPractices", [])

    .controller("PersonController", function($scope, $http){

        const apiURL = "http://localhost:8080/api/person/"

        // Attr
        $scope.personList = [];
        $scope.newPerson = {}

        // Methods

        $http.get(apiURL)
            .success(function(data){
                console.log(data);
                $scope.personList = data;
            })
            .error(function(error){
                alert(error)
            })

        $scope.add = function() {

            let httpHeaders = {
                firstname : $scope.newPerson.firstname,
                lastname : $scope.newPerson.lastname
            }

            $http.post(apiURL, httpHeaders)
                .success(function(data, status, headers, config){
                    $scope.personList.push(data);
                    $scope.newPerson = {};
                    
                    console.log(status);
                })
                .error(function(error, status, headers, config){
                    console.log(error);
                })
        };

    });