/**
 * Created by dw on 14-9-14.
 */
angular.module('partyBid1App')
    .controller('BidingCtrl', function ($scope, $location) {
        $scope.to_compete=function(){
            $location.path('/competition')
        }
        $scope.bid_end=function(){
            if (confirm("确定要结束本次竞价吗？")) {
                activity[i].status = 4
                localStorage.setItem('activity', JSON.stringify(activity));
                $location.path("/competition")
            }
        }
    })