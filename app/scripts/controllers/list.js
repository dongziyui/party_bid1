/**
 * Created by dw on 14-8-28.
 */
angular.module('partyBid1App')
    .controller('ListCtrl', function ($scope, $location) {

      $scope.back_to_create = function ()
        {
            $location.path('/create')
        }
       $scope.activities=JSON.parse(localStorage.getItem('activity'))
       if(!$scope.activities){
           $location.path('/create')
       }

       $scope.go_to_action=function(activity_name){
           console.log(activity_name)
//           $location.path('/active')
       }

    })
