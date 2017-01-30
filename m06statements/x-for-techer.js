(function ()
{
    var age = 33;

    var countOfYears = 60 - age;
    var monthlyPayment = 704;
    var interestRate = 12;

    var sum = 0;

    createRetirementPlan();

    printAccountStatement();

    // calculate how much money you will have after countOfYears of savings
    // with given monthlyPayment and interestRate
    function createRetirementPlan()
    {
        // TODO your code here
        for (var i = 1; i < countOfYears; i++)
        {
            sum += monthlyPayment * 12;
            sum += calcInterest(sum);
        }
    }

    // Utils

    function calcInterest(sum)
    {
        // TODO your code here
        return sum * (interestRate / 100);
    }

    function printAccountStatement()
    {
        console.log("Account: " + sum.toLocaleString('en-US', {maximumFractionDigits: 0}));
        console.log("Mon  CF: " + (calcInterest(sum) / 12).toLocaleString('en-US', {maximumFractionDigits: 2}));
    }

})();