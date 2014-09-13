/**
 * Created by dw on 14-9-13.
 */
angular.module('partyBid1App')
    .controller('competitionCtrl', function ($scope, $location) {
        var activity = JSON.parse(localStorage.getItem("activity"))
        var active_name = localStorage.getItem("action_name")
        var bid_list = localStorage.getItem("bid_list") || []
        $scope.bid_lists = localStorage.getItem("bid_list")
        $scope.to_list = function () {
            $location.path('/')
        }


        $scope.compete_action = function () {
            var a = 0
            if ($scope.start == "开始") {
                $scope.start = "结束"
                for (var i = 0; i < activity.length; i++) {

                    if (activity[i].name == active_name) {
                        activity[i].status = 3
                        localStorage.setItem('activity', JSON.stringify(activity));

                    }
                }
                for (j = 0; j < activity.length; j++) {
                    if (activity[j].status == 3) {
                        a++
                        console.log(a)
                    }
                }
                bid_list.unshift({
                    name: "竞价" + a,
                    actname: active_name
                })
                localStorage.setItem('bid_list', JSON.stringify(bid_list));
            }
            else {
                for (var i = 0; i < activity.length; i++) {
                    if (activity[i].name == active_name) {

                        if (confirm("确定要结束本次竞价吗？")) {
                            activity[i].status = 4
                            localStorage.setItem('activity', JSON.stringify(activity));
                            $location.path("/competition")
                        }
                    }
                }
            }
        }
        if (activity) {
            for (var i = 0; i < activity.length; i++) {
                if (activity[i].name == active_name) {
                    if (activity[i].status == 3) {

                        $scope.start = "结束"
                    }
                    else {
                        $scope.start = "开始"
                        $scope.usable = true
                    }
//                    var unable = true
//                    break
                }
//                else {
//                    unable = false
//                }
//                if (unable == false) {
//                    $scope.start_end = "开始"
//                    $scope.usable = false
//                }
            }
////
            }
        })