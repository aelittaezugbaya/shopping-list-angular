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
    
    constructor() {
         this.name = "Milk";
         this.done = false;
    }
}

app.controller('ItemCtrl',ItemCtrl);