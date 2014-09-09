/**
 * Created by dw on 14-8-29.a
 */
angular.module('partyBid1App')
    .controller('ActiveCtrl', function ($scope, $location) {
        $scope.go_to_list = function () {
            $location.path('/')
        }
        $scope.joins=JSON.parse(localStorage.getItem("join")) || []
        var activity = JSON.parse(localStorage.getItem("activity"))
        var active_name = localStorage.getItem("action_name")

        $scope.action = function () {
//            if($scope.use==true){
            if ($scope.start_end == "开始") {
                $scope.start_end = "结束"
                for (var i = 0; i < activity.length; i++) {
                    if (activity[i].name == active_name) {
//                        console.log(activity[i].name)
                        activity[i].status = 1

                        localStorage.setItem('activity', JSON.stringify(activity));

                    }

                }
            }
            else {
                for (var i = 0; i < activity.length; i++) {
                    if (activity[i].name == active_name) {

                        if (confirm("确定要结束本次报名吗？")) {
                            activity[i].status = 2
                            localStorage.setItem('activity', JSON.stringify(activity));
                            $location.path("/")
                        }
//

                    }
                }
            }
        }
            if (activity) {
                for (var i = 0; i < activity.length; i++) {
                    console.log(activity[i].status)
                    if (activity[i].status == 1) {
                        console.log(activity[i].status)
                        if (activity[i].name == active_name) {
                            console.log(active_name)
                            $scope.start_end = "结束"


                        }
                        else {
                            $scope.start_end = "开始"
                            $scope.use = true
                        }
                        var unable = true
                        break
                    }
                    else {
                        unable = false
                    }

                    if (unable == false) {
                        $scope.start_end = "开始"
                        $scope.use = false
                    }


                }
//
            }

            $scope.exit_action = function () {
                $location.path('/')
            }

            $scope.stay_here = function () {
                $scope.box_show = false;
            }

        })