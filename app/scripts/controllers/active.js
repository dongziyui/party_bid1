/**
 * Created by dw on 14-8-29.
 */
angular.module('partyBid1App')
    .controller('ActiveCtrl', function ($scope, $location) {
        $scope.go_to_list=function(){
            $location.path('/')
        }
//
    $scope.action=function() {
console.log($scope.start_end)
        if ($scope.start_end == "结束") {
            $scope.box_show = true;
//            $scope.exit_action=function(){
//                $location.path('/')
//            }
//            $scope.stay_here=function(){
//                $scope.box_show = false;
//
//            }

//            $scope.start_end = "开始";
        }
        else {
            $scope.start_end = "结束";
        }
        console.log($scope.box_show)
    }

//    $scope.exit_action=function(){
//        $location.path('/')
//    }
       $scope.stay_here=function(){
           $scope.box_show=false;
       }
//
    })