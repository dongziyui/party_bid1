/**scope
 * Created by dw on 14-8-28.
 */
angular.module('partyBid1App')
    .controller('CreateCtrl', function ($scope, $location) {

        $scope.add_activity = function () {
//            var activity_name = $scope.activity_name
           $scope.activities = JSON.parse(localStorage.getItem($scope.activities)) || []
//            var ac=[{"name":$scope.activity_name,"status":0}]
            if(!$scope.activities) {
                $scope.activities.unshift({
                    name: $scope.activity_name,
                    satus: 0
                })
                localStorage.setItem('$scope.activities', JSON.stringify($scope.activities));
                $location.path('/active');
            }
                for (var i = 0, long = $scope.activities.length; i < long; i++) {
                   console.log($scope.activities[i].name)
                    if ($scope.activity_name == $scope.activities[i].name) {
                        $scope.warnning = true;
                        break;
                    }
                 else {$scope.warnning = false
                }
                if ($scope.warnning == false) {
                    $scope.activities.unshift({
                        name:$scope.activity_name,
                        satus:0
                    })
                    localStorage.setItem('$scope.activities', JSON.stringify($scope.activities));
                    $location.path('/active');
                }
            }
        }
        $scope.btn_show = localStorage.getItem('$scope.activities')

        $scope.back_to_list = function () {
            $location.path('/')
        }
    })