/**
 * Vanilla javascript for checking the dom
 * @constructor
 */
var CheckDom = function () {

    /**
     * Check for strings
     * @param element | id
     * @param strings  | Array
     */
    this.forStrings = function (element, strings) {
        //if an array is not passed turn into array
        if (!Array.isArray(strings)) {
            strings = [strings];
        }

        for (var i = 0; i < strings.length; i++) {
            var html = document.getElementById(element).innerHTML;
            var re = new RegExp(strings[i], 'gi');
            var matches = (html.match(re) || []).length;

            //continue past loop if not found
            if (matches <= 0) {
                continue;
            }

            console.log(matches, strings[i], element);
        }
    }
}

window.onload = function () {
    //instantiate
    var checkDom = new CheckDom();

    //check #app for strings
    checkDom.forStrings('app', ['Septemque', 'illic', 'oppida']);
}