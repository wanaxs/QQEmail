var app=angular.module('myApp',['ui.router']);
//状态路由
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('sy',{
		url:'/sy',
		templateUrl:'pages/page_1.html'
	}).state('xx',{
		url:'/xx',
		templateUrl:'pages/page_2.html'
	}).state('sx',{
		url:'/sx',
		templateUrl:'pages/page_3.html'
	}).state('txl',{
		url:'/txl',
		templateUrl:'pages/page_4.html'
	});
	$urlRouterProvider.otherwise('/sy');
})