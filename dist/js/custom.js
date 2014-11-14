$(function(){
    function myObject(){
        this.a = 5;
    };

    var myObject = new myObject();

    console.log(myObject.a);
});