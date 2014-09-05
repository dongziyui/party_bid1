/**
 * Created by dw on 14-8-29.
 */
angular.module('partyBid1App')
    .controller('ActiveCtrl', function ($scope, $location) {
//        $scope.box_show=true
        $scope.go_to_list=function(){
            $location.path('/')
        }
        $scope.start_end="开始"
    $scope.action=function(){

        if($scope.start_end=="结束"){

           $scope.start_end="开始";
        }
        else{
            $scope.start_end="结束";
        }


    }
    })