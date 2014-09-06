/**
 * Created by dw on 14-8-29.
 */
angular.module('partyBid1App')
    .controller('ActiveCtrl', function ($scope, $location) {
        $scope.go_to_list = function () {
            $location.path('/')
        }

        var activity = JSON.parse(localStorage.getItem("activity"))
//        var active_name = localStorage.getItem("action_name")
//        console.log(active_name)
//        if (activity) {
//
//            for (var i = 0; i < activity.length; i++) {
//
//
//                if (activity[i].status == 0 || activity[i].status == 2) {
//
//                    $scope.start_end = "开始"
//
//
//                }
//
//                else {
//                    $scope.start_end = "结束"
//                }
//
//
//            }
//        }
//
//        $scope.action = function () {
//            if ($scope.start_end == "开始") {
//                $scope.start_end = "结束"
//                for (var i = 0; i < activity.length; i++) {
//                if (activity[i].name == active_name) {
//                    activity[i].status = 1
//                    var j=i
//                    }
//
//                }
//            }
//            else {
//
//                if (confirm("确定要结束本次报名吗？")) {
//                    activity[j].status = 2
//                    $location.path("/")
//                }
////
//
//            }
//        }

        $scope.exit_action = function () {
            $location.path('/')
        }

        $scope.stay_here = function () {
            $scope.box_show = false;
        }

    })