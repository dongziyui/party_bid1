/**
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
        $scope.compete_action = function (bid_list_name) {
            var bid_list = JSON.parse(localStorage.getItem('bid_list')) || []
            var active_name = localStorage.getItem("action_name")
            var queue = localStorage.getItem('queue') || 0
            queue++
            localStorage.setItem('queue', queue)
            for (var i = 0; i < activity.length; i++) {
                if (activity[i].name == active_name) {
                    activity[i].status = 3
                    localStorage.setItem('activity', JSON.stringify(activity));
                    bid_list.unshift({
                        name: '竞价' + queue,
                        actname:activity[i].name
                    })
                    localStorage.setItem('bid_list', JSON.stringify(bid_list))
                    localStorage.setItem('bid_list_name', bid_list_name)
                    $location.path('/biding')

                }

//                bid_list.unshift({
//                    name: '竞价' + queue,
//                    status:activity[i].status
//                })
//                localStorage.setItem('bid_list', JSON.stringify(bid_list))
//                $location.path('/biding')
            }
        }
        $scope.bid_lists = JSON.parse(localStorage.getItem('bid_list'))
        $scope.bid_view = function (bid_list_name) {
            localStorage.setItem('bid_list_name', bid_list_name)
            $location.path('/biding')
        }
    })
