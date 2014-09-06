/**
 * Created by dw on 14-8-29.
 */
angular.module('partyBid1App')
    .controller('ActiveCtrl', function ($scope, $location) {
        $scope.go_to_list = function () {
            $location.path('/')
        }
        var activity = JSON.parse(localStorage.getItem("activity"))
        var active_name = localStorage.getItem("action_name")
         for (var i = 0; i < activity.length; i++) {
            if (activity[i].name == active_name) {
               if (activity[i].status == 0) {
                   
                    $scope.start_end = "开始"

                }

                else {
                    $scope.start_end = "结束"
                }
            }
        }

        $scope.action = function () {


        }
        $scope.exit_action = function () {
            $location.path('/')
        }

        $scope.stay_here = function () {
            $scope.box_show = false;
        }

    })