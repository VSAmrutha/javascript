function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                sum1 = arr[i][j] + sum1
            }
            if (i === 0 && j === arr.length - 1 || i === arr.length - 1 && j === 0 || i === 1 && j === 1) {
                sum2 = arr[i][j] + sum2
            }
        }

    }

    // function plusMinus(arr) {

    //     let newPrevise = [0, 0, 0];
    //     // for(let i=0;i<arr.length;i++){
    //     //     if(arr[i]>0){
    //     // newPrevise[0]=newPrevise[0]+1
    //     //     }else if(arr[i]<0){
    //     //       newPrevise[1]=newPrevise[1]+1
    //     //     }else{
    //     //      newPrevise[2]=newPrevise[2]+1
    //     //     }
    //     // }
    //     return newPrevise[0]
    // }

    //----------------------------------
    // Complete the staircase function below which i did
    function staircase(n) {
        let x = Array(n).fill("")
        for (let i = 1; i <= n; i++) {
            let hash = '#'
            let p = i
            while (p >= 1) {
                x[i - 1] = x[i - 1] + hash
                p--
            }
        }
        for (let i = 0; i < x.length; i++) {
            console.log(x[i])
        }
    }
    //---------------------------what youtube
    function staircase(n) {
        for (let i = 0; i < n; i++) {
            let row = ""
            for (let j = 0; j < n; j++) {
                if (i + j > n - 2) {
                    row += "#";
                } else {
                    row += " ";
                }
            }
            console.log(row)
        }
    }
    //------------------min and max value
    function miniMaxSum(arr) {
        let min;
        let max;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max || !max) {
                max = arr[i]
            }
            if (arr[i] < min || !min) {
                min = arr[i]
            }
        }
        let minRemovedArr = arr.filter(x => x !== min)
        let maxRemovedArr = arr.filter(x => x !== max)
        let minValue = 0, maxValue = 0
        for (let i = 0; i < minRemovedArr.length; i++) {
            minValue += minRemovedArr[i];
        }
        for (let i = 0; i < maxRemovedArr.length; i++) {
            maxValue += maxRemovedArr[i];
        }
        console.log(maxValue, minValue)
    }
    //-----------------------min max from youtube
    // Complete the miniMaxSum function below.
    function miniMaxSum(arr) {
        let newArr = [...arr].sort()
        let sum = 0;
        for (let i = 0; i < newArr.length; i++) {
            sum += newArr[i]
        }
        let minValue = sum - newArr[newArr.length - 1]
        let maxValue = sum - newArr[0]
        console.log(minValue, maxValue)
    }
    //birthday from youtube
    function birthdayCakeCandles(ar) {
        let tall = Math.max(...ar)
        let sum = 0
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] == tall) {
                sum++
            }
        }
        return sum
    }
    //what i did for birthday candles
    // Complete the birthdayCakeCandles function below.
    function birthdayCakeCandles(ar) {
        let tall = [...ar].sort();
        let max = tall[tall.length - 1]
        let sum = 0
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] == max) {
                sum++
            }
        }
        return sum
    }
//time conversion input: 07:05:45PM
    function timeConversion(s) {
        /*
         * Write your code here.
         */
        let l = s.length
        let t = s.substring(l - 2)
        let hour;
        let a;
        let f;
        if (t == "PM") {


            hour = +s.substring(0, 2)
            if (hour == 12) {
                return s.replace("PM", "")
            }
            let rest = s.substring(2)
            a = 12 + hour
            f = +a + rest.replace("PM", "")
        }
        if (t == "AM") {
            hour = +s.substring(0, 2)
            if (hour == 12) {
                a = "00" + s.substring(2)
                return f = a.replace("AM", "")
            }
            f = s.replace("AM", "")
        }
        return f

    }

