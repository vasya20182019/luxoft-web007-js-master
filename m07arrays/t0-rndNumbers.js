(function () {
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 1000);

    printArray(numbers);

    function fillArrayWithRndNumbers(arr, count) {
        // TODO your code here
        for (var i = 0; i < count; i++) {
            numbers[i] = getRndNumber();
        }
    }

    // Utils

    function printArray(arr) {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber() {
        return Math.floor(Math.random() * 100);
    }

})();