/**
 * Created by dw on 14-8-29.a
 */
angular.module('partyBid1App')
    .controller('ActiveCtrl', function ($scope, $location) {
        $scope.refresh = function () {
            var people = JSON.parse(localStorage.getItem("people")) || [];
            $scope.peopleList = people;
            $scope.peopleCount = people.length;
            console.log(2222222222)
        }
        $scope.refresh()
//            var register = document.getElementById("register");
//            if (register) {
//                var scope = angular.element(register).scope();
//                scope.$apply(function () {
//                    scope.refresh();
//                });
//            }



                    $scope.go_to_list = function () {
            $location.path('/')
        }
//        $scope.joins = JSON.parse(localStorage.getItem("join")) || []
        var activity = JSON.parse(localStorage.getItem("activity"))
        var active_name = localStorage.getItem("action_name")
        var join = JSON.parse(localStorage.getItem("join")) || []
        var people = JSON.parse(localStorage.getItem("people")) || []
        if (join.length) {
            for (i = 0; i < join.length; i++) {
                 if(active_name==join[i].actname) {
                     people.unshift(join[i])
                 }
            }
        }

        $scope.persons = people
        $scope.member = people.length
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
                            $location.path("/competition")
                        }
//

                    }
                }
            }
        }
        if (activity) {
            for (var i = 0; i < activity.length; i++) {

                if (activity[i].status == 1) {

                    if (activity[i].name == active_name) {

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