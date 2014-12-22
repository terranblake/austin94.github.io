var gradingCalculator = angular.module('gradingCalculator', []);

gradingCalculator.controller('GradingCtrl', function ($scope) {
    $scope.grades = [
        {'percentage': 90,
            'grade': 'A',
            'highlight': false},
        {'percentage': 80,
            'grade': 'B',
            'highlight': false},
        {'percentage': 70,
            'grade': 'C',
            'highlight': false},
        {'percentage': 60,
            'grade': 'D',
            'highlight': false},
        {'percentage': 50,
            'grade': 'F',
            'highlight': false}
    ];

    $scope.currentGrade = 72;
    $scope.totalGrade = 100;

    $scope.roundNumber = function(number) {
      return Math.round(number);
    };

    $scope.addGradeScale = function() {
        var grade ={
            'percentage': 0,
            'grade': '?',
            'highlight': false
        };

        $scope.grades.push(grade);
    };

    $scope.isSelected = function(level) {
        debugger;

        var target = Math.round(($scope.currentGrade / $scope.totalGrade)*100);

        if(target >= level)  {
            return true;
        }

        return false;
    };


});