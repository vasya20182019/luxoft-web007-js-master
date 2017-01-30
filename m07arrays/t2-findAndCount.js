(function () {
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 1000);

    printArray(numbers);

    console.log(getCountOfElements(numbers, 23));

    // return count of elements el within array
    function getCountOfElements(arr, el) {
        // TODO your code here
        var count = 0;
        for (var index in arr) {
            if (arr[index] === el) {
                count++;
            }
        }
        return count;
    }

    // returns:
    //
    //     el if exists
    //    -1 if not
    function findElement(arr, el) {
        // TODO your code here
        for (var index in arr) {
            if (arr[index] === el) {
                return el;
            }
        }
        return -1;
    }

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