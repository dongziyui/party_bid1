/**
 * Created by dw on 14-8-29.
 */
angular.module('partyBid1App')
    .controller('ActiveCtrl', function ($scope, $location) {
        $scope.go_to_list=function(){
            $location.path('/')
        }
//
//        if(activities.status==0){
//            $scope.start_end == "开始"
//        }
//
//        else{
//            $scope.start_end == "结束"
//        }
    $scope.action=function() {


   }
        $scope.exit_action=function(){
            $location.path('/')
        }

       $scope.stay_here=function(){
           $scope.box_show=false;
       }
//
    })