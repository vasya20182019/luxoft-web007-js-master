(function () {
    //var numbers = [];
    var numbers = [90,30,59,7,57,36,64,6,62,34];

    //fillArrayWithRndNumbers(numbers, 10);

    printArray(numbers);

    bubbleSort(numbers);
    //bubbleSort(numbers);

    printArray(numbers);

    // stop sorting if arr already sorted
    // if you will get sorted array - should be only one iteration
    function bubbleSort(arr) {
        var isSorted = true;
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            for (var j = i; j < arr.length; j++) {
                count++;
                //if (arr[j] > arr[j + 1]) {
                //    isSorted = false;
                //}
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            }
            //if (isSorted) {
            //    console.log("arr is already sorted")
            //    break;
            //}
            isSorted = true;
        }
        console.log("count = " + count);
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