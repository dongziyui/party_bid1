/**scope
 * Created by dw on 14-8-28.
 */
angular.module('partyBid1App')
    .controller('CreateCtrl', function ($scope, $location) {

        $scope.add_activity = function () {
            var activity_name = $scope.activity_name
            var activity = JSON.parse(localStorage.getItem('activity')) || []
//            var ac=[{"name":$scope.activity_name,"status":0}]

            if (!activity.length) {
                activity.unshift({
                    name: activity_name,
                    status: 0
                })
                localStorage.setItem('activity', JSON.stringify(activity));
                $location.path('/active');
            }
            else {
                for (var i = 0, long = activity.length; i < long; i++) {

                    if (activity_name == activity[i].name) {

                        $scope.warnning = true;
                        break;

                    }
                    else {
                        $scope.warnning = false

                    }
                }
                if ($scope.warnning == false) {
                    activity.unshift({
                        name: activity_name,
                        status: 0
                    })
                    localStorage.setItem('action_name',activity_name )
                    localStorage.setItem('activity', JSON.stringify(activity));
                    $location.path('/active');
                }
            }
        }


        $scope.btn_show = localStorage.getItem("activity")

        $scope.back_to_list = function () {
            $location.path('/')


        }
    })