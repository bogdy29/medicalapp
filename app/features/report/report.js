'use strict';

var report;

report = angular.module('myApp.report', ['ngRoute']);

report.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {
    templateUrl: 'features/report/report.html',
    controller: 'ReportCtrl'
  });
}])

report.controller('ReportCtrl', ['RestService', '$scope', '$translate', function(RestService, $scope, $translate) {
	
	var bloodPresureApiCall = "bloodpressure";
	var acqApiCall = "acq";
		  		
		
	//report Blood presure	
	$scope.bloodPresureChartOptions = {
             chart: {
				type: 'discreteBarChart',
				height: 450,
				margin : {
					top: 20,
					right: 20,
					bottom: 60,
					left: 55
				},
				x: function(d){ return d.body.effective_time_frame.date_time; },
				y: function(d){ return d.body.systolic_blood_pressure.value; },
				showValues: true,
				valueFormat: function(d){
					return d3.format(',.4f')(d);
				},
				transitionDuration: 500,
				xAxis: {
					axisLabel: 'X Axis',
					tickFormat: function(d){
                        return d3.time.format('%b')(new Date(d));
                    }
				},
				yAxis: {
					axisLabel: 'Y Axis',
					axisLabelDistance: 30
				}
			}
        };
			
	RestService.getData(bloodPresureApiCall)
                .then(function (response) {
					$scope.bloodPresureChartData[0].values = response.data.data;
                });
				
	$scope.bloodPresureChartData = [{
		key: "Cumulative Return",
		values: []
	}];
	
	//report ACQ
	$scope.acqChartOptions = {
             chart: {
				type: 'discreteBarChart',
				height: 450,
				margin : {
					top: 20,
					right: 20,
					bottom: 60,
					left: 55
				},
				x: function(d){ return d.body.effective_time_frame.date_time; },
				y: function(d){ return d.body.score; },
				showValues: true,
				valueFormat: function(d){
					return d3.format(',.4f')(d);
				},
				transitionDuration: 500,
				xAxis: {
					axisLabel: 'X Axis'
				},
				yAxis: {
					axisLabel: 'Y Axis',
					axisLabelDistance: 30
				}
			}
        };
			
	RestService.getData(acqApiCall)
                .then(function (response) {
					$scope.acqChartData[0].values = response.data.data;
                });
				
	$scope.acqChartData = [{
		key: "Cumulative Return",
		values: []
	}];

}]);