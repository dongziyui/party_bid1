/**
<<<<<<< HEAD
 * Created by dw on 14-9-14.
 */
angular.module('partyBid1App')
    .controller('CompetitionCtrl', function ($scope, $location) {
        $scope.to_list = function () {
            $location.path('/')
        }
        var activity = JSON.parse(localStorage.getItem("activity"))
        for (var i = 0; i < activity.length; i++) {
            if (activity[i].status == 3) {
                $scope.usable = true
            }
        }
        $scope.compete_action = function () {
            var bid_list = JSON.parse(localStorage.getItem('bid_list')) || []
            var queue = localStorage.getItem('queue') || 0
            queue++
            localStorage.setItem('queue', queue)
            for (var i = 0; i < activity.length; i++) {
                if (activity[i].name == active_name) {
                    activity[i].status = 3
                    localStorage.setItem('activity', JSON.stringify(activity));


                }

                bid_list.unshift({
                    name: '竞价' + queue,
                    status:activity[i].status
                })
                localStorage.setItem('bid_list', JSON.stringify(bid_list))
                $location.path('/biding')
            }
        }
        $scope.bid_lists = JSON.parse(localStorage.getItem('bid_list'))
        $scope.bid_view = function () {
            $location.path('/biding')
        }
    })
=======
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
>>>>>>> 78d490883211396b560ef0cbf95940675f239022
