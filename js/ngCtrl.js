
var app = angular.module('ngApp', []);

app.controller('ngOptionCtrl', function($scope) {
    
    // $scope.callback = function (data) {
    //     $scope.allData = data
    // }

    chrome.storage.sync.get(["storedData"], function (value) {
        console.log("Angular")
        console.log(value.storedData)
        $scope.allData = value.storedData;
        console.log($scope.allData);
        
        angular.element('#test2').change();
        

    });

    $scope.removeItem = function (index) {
        console.log(index)
        $scope.allData.splice(index, 1);
        // delete $scope.allData[index]
        angular.element('#test2').change();
        console.log($scope.allData)

        chrome.storage.sync.set({"storedData": $scope.allData})
        
    }
    


});

