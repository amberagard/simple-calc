(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#add').click(add);
        $('#sub').click(sub);
        $('#mult').click(mult);
        $('#divide').click(divide);
        $('#exp').click(exp);
        $('#fact').click(fact);
        $('#root').click(root);
    }

    function add() {
        var x = $('#num1').val() * 1;
        var y = $('#num2').val() * 1;
        $('#answer').text(x + y);
    }

    function sub() {
        var x = $('#num1').val() * 1;
        var y = $('#num2').val() * 1;
        $('#answer').text(x - y);
    }

    function mult() {
        var x = $('#num1').val() * 1;
        var y = $('#num2').val() * 1;
        $('#answer').text(x * y);
    }

    function divide() {
        var x = $('#num1').val() * 1;
        var y = $('#num2').val() * 1;
        $('#answer').text(x / y);
    }

    function exp() {
        var x = $('#num1').val() * 1;
        var y = $('#num2').val() * 1;
        $('#answer').text(Math.pow(x, y));
    }

    function fact() {
        var y = 1;
        var x = $('#num3').val() * 1;
        for(var i = 1; i <= x; i++) {
            y *= i;
        }
        $('#answer').text(y);
    }

    function root() {
        var x = $('#num3').val() * 1;
        $('#answer').text(Math.sqrt(x));
    }

})();
