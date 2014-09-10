/**
 * Created by dw on 14-8-28.
 */
angular.module('partyBid1App')
    .controller('ListCtrl', function ($scope, $location) {
        var activity = JSON.parse(localStorage.getItem("activity"))

        for (var j = 0; j < activity.length; j++) {

            if (activity[j].status == 1) {
                $scope.bkcolor = true
                console.log(activity[j].name)
            }
//            else {
//                console.log(activity[j].status)
//                $scope.bkcolor = false
//            }
        }

        $scope.back_to_create = function () {
            $location.path('/create')
        }


        $scope.activities = JSON.parse(localStorage.getItem('activity'))
        if (!$scope.activities) {
            $location.path('/create')
        }
        var activity = JSON.parse(localStorage.getItem("activity"))
        $scope.go_to_action = function (action_name) {
            localStorage.setItem('action_name', action_name)

            $location.path('/active')
        }

    })
