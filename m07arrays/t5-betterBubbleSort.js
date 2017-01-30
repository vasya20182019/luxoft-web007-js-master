(function () {
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    bubbleSort(numbers);

    printArray(numbers);

    // do not check area that you already sorted
    function bubbleSort(arr) {
        // TODO your code here
        for (var i = 0; i < arr.length; i++) {
            for (var j = i; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    swap(arr, i, j);
                }
            }
        }
    }

    // Utils

    // should swap elements with given positions
    function swap(arr, pos1, pos2) {
        // TODO your code here
        var temp = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = temp;
    }

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

    function printArray(arr) {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber() {
        return Math.floor(Math.random() * 100);
    }

})();