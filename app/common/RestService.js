angular.module('commonServices',[])
    .service('RestService' , ['$http', function($http) {
        var self = this;
		var baseUrl = "https://dev.medrecord.nl/ehr/452/procedure/";
		var urlAuth = "/omh?authToken=helloletmeinplease";

        this.getData = function(restParameter){
            return $http({
                    method: 'GET',
                    url: baseUrl + restParameter + urlAuth
            }).then(function(response) {
                    return response;
            });
        };
		
		this.postData = function(){
            return $http({
                    method: 'POST',
                    url: baseUrl + restParameter + urlAuth
            }).then(function(response) {
                    return response;
            });
        };
}]);
