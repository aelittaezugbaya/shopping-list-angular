/// <reference path="../vendor/types/angularjs/angular.d.ts"/>

// (function(){
//     var app = angular.module('shopping-list',[]);

//     app.controller('TitleController',function(){
//         this.title='title';
//     })
// })();

var app = angular.module('shopping-list',[]);

interface IItem{
    name:string;
    done:boolean; 
};

class ItemCtrl implements IItem{
    name:string;
    done:boolean; 
    
    constructor(name:string,done:boolean) {
         this.name = name;
         this.done = done;
    }
}

var food:IItem[]=[ new ItemCtrl('milk',false),new ItemCtrl('eggs',false),new ItemCtrl('butter',false)]

interface IItems{
    items: IItem[];
}

class ItemsCtrl implements IItems{
    items:IItem[];

    constructor(){
        this.items=food;
    }
}

interface IHeader{
    text:string;
}

class HeaderCtrl implements IHeader{
    text:string;

    constructor(){
        this.text="Shopping List";
    }
}

function header():ng.IDirective {
    var directive: ng.IDirective = {
        controller:HeaderCtrl,
        controllerAs: 'header',
        restrict: 'E',
        templateUrl: './app/header.html'
    };
    return directive;

}

function item():ng.IDirective{
    var directive: ng.IDirective = {
        // controller:ItemCtrl,
        // controllerAs: 'item',
        restrict: 'E',
        templateUrl: './app/item.html'
    };
    return directive;
}

function list():ng.IDirective{
    var directive: ng.Directive ={
        controller:ItemsCtrl,
        controllerAs: 'list',
        restrict: 'E',
        templateUrl:'./app/list.html'
    }
    return directive;
}

// app.controller('ItemCtrl',ItemCtrl);

// app.controller('HeaderCtrl',HeaderCtrl);
app.controller('ItemsCtrl',ItemsCtrl)
app.directive("header",header);
app.directive("item",item);
app.directive('list',list);