/**
 * Created by dw on 14-8-28.
 */
angular.module('partyBid1App')
    .controller('ListCtrl', function ($scope, $location) {

        $scope.back_to_create = function () {
            $location.path('/create')
        }

        $scope.joins=JSON.parse(localStorage.getItem("join")) || []
        $scope.activities = JSON.parse(localStorage.getItem('activity'))
        if (!$scope.activities) {
            $location.path('/create')
        }
        var activity = JSON.parse(localStorage.getItem("activity"))
        $scope.go_to_action = function (action_name) {

//            if (!action_name) {

                localStorage.setItem('action_name', action_name)
//            }
//
//

            $location.path('/active')
        }

    })
