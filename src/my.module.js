"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var MyComponent = (function () {
    function MyComponent() {
    }
    return MyComponent;
}());
MyComponent = __decorate([
    core_1.Component({
        selector: 'my-component',
        templateUrl: 'https://raw.githubusercontent.com/ravalnath/Angular6/master/src/my.module.html',
        style:['div{width:250px;height:500px;background-color:blue; }']          
        
    })
], MyComponent);
exports.MyComponent = MyComponent;
var MyModule = (function () {
    function MyModule() {
    }
    return MyModule;
}());
MyModule = __decorate([
    core_1.NgModule({
        declarations: [MyComponent],
        imports: [
            common_1.CommonModule,
        ]
    })
], MyModule);
exports["default"] = MyModule;
