/**
 * Created by dw on 14-9-14.
 */
angular.module('partyBid1App')
    .controller('BidingCtrl', function ($scope, $location) {
        console.log(11111111)
        $scope.to_compete=function(){
            $location.path('/competition')
        }
//        $scope.bid_persons=JSON.parse(localStorage.getItem('bid_person'))
        var bid_list = JSON.parse(localStorage.getItem('bid_list'))

        var list_name = localStorage.getItem('bid_list_name')
        var bid_person = JSON.parse(localStorage.getItem('bid_person'))
//
        if (bid_list.length) {
            var bid_people = JSON.parse(localStorage.getItem('bid_people'))||[]
            for (var i = 0; i < bid_list.length; i++) {

                if(list_name==bid_list[i].name) {
                    for(var j=0;j<bid_person.length;j++) {

                        if (bid_list[i].actname == bid_person[j].actname) {

                            bid_people.unshift(bid_person[j])
                        }
                    }
                }
            }
        }

        $scope.bid_persons = bid_people
        $scope.members = bid_people.length
        console.log($scope.bid_persons)

        $scope.bid_end=function(){

            if (confirm("确定要结束本次竞价吗？")) {
                var activity = JSON.parse(localStorage.getItem('activity'))
                for(i=0;i<activity.length;i++) {
                    if(acticity[i].name==list_name) {
                        activity[i].status = 4
                    }
                }
                localStorage.setItem('activity', JSON.stringify(activity));
                $location.path("/competition")
            }
        }
    })