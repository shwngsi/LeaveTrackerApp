var taskManagerModule = angular.module('taskManagerApp', ['ngAnimate']);

taskManagerModule.controller('taskManagerController', function ($scope,$http) {
	
	var urlBase="";
	$scope.toggle=true;
	$scope.selection = [];
	$scope.statuses=['Approved','Pending'];
	$http.defaults.headers.post["Content-Type"] = "application/json";

    function findAllTasks() {
        //get all tasks and display initially
        $http.get(urlBase + '/tasks/search/findAllLeaves').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.tasks = data._embedded.tasks;
                } else {
                    $scope.tasks = [];
                }
                for (var i = 0; i < $scope.tasks.length; i++) {
                    if ($scope.tasks[i].leaveStatus == 'Approved') {
                        $scope.selection.push($scope.tasks[i].id);
                    }
                }
                $scope.leaveName="";
                $scope.leaveDescription="";
                $scope.leaveStatus="";
                $scope.toggle='!toggle';
            });
    }

    findAllTasks();

	//add a new task
	$scope.addTask = function addTask() {
		if($scope.leaveName=="" || $scope.leaveDescription=="" || $scope.leaveStatus == ""){
			alert("Insufficient Data! Please provide values for task name, description, priortiy and status");
		}
		else{
		 $http.post(urlBase + '/tasks', {
             taskName: $scope.leaveName,
             taskDescription: $scope.leaveDescription,
             taskStatus: $scope.leaveStatus
         }).
		  success(function(data, status, headers) {
			 alert("Task added");
             var newTaskUri = headers()["location"];
             console.log("Might be good to GET " + newTaskUri + " and append the task.");
             // Refetching EVERYTHING every time can get expensive over time
             // Better solution would be to $http.get(headers()["location"]) and add it to the list
             findAllTasks();
		    });
		}
	};
		
});

//Angularjs Directive for confirm dialog box
taskManagerModule.directive('ngConfirmClick', [
	function(){
         return {
             link: function (scope, element, attr) {
                 var msg = attr.ngConfirmClick || "Are you sure?";
                 var clickAction = attr.confirmedClick;
                 element.bind('click',function (event) {
                     if ( window.confirm(msg) ) {
                         scope.$eval(clickAction);
                     }
                 });
             }
         };
 }]);