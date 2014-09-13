/**
 * Created by dw on 14-9-13.
 */
angular.module('partyBid1App')
 .controller('competitionCtrl',function($scope, $location){
        var activity = JSON.parse(localStorage.getItem("activity"))
        $scope.go_to_list=function(){
        $location.path('/')
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
    $scope.action=function(){

    }
    })