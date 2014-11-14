$(function(){
    function myClass(){
        this.a = 5;
    };


    myClass.prototype.squarer = function(param){var v= param;
        return v*v;}

    var myObject = new myClass();

    console.log(myObject.a);
    console.log("Square of 8 is "+myObject.squarer(8));
});