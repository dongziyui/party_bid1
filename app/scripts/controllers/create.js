/**scope
 * Created by dw on 14-8-28.
 */
angular.module('partyBid1App')
    .controller('CreateCtrl', function ($scope, $location) {

        $scope.add_activity = function () {
            var activity_name = $scope.activity_name
            var activity = JSON.parse(localStorage.getItem('activity')) || []
//            var activity = JSON.parse(localStorage.getItem('activity')) || [];

//            var a = true;
            if (activity.length == 0) {
                activity.unshift(activity_name)
                localStorage.setItem('activity', JSON.stringify(activity));
                $location.path('/active');
            } else {
                for (var i = 0, long = activity.length; i < long; i++) {

                    if (activity_name == activity[i]) {
                        $scope.warnning = true;
                        break;
                    }
                    $scope.warnning = false;
                }
                if ($scope.warnning == false) {
                    activity.unshift(activity_name)
                    localStorage.setItem('activity', JSON.stringify(activity));
                    $location.path('/active');
                }
            }
        }
        $scope.btn_show = localStorage.getItem('activity')

        $scope.back_to_list = function () {
            $location.path('/')
        }
    })