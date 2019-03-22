const button = document.querySelector('#check');
const output = document.querySelector('#output');

function convertToRoman(num) {
    let answer = [];
    let test = num.toString().split('');

    if(num > 400) {
      output.innerText = `Input must be under 400. Try again.`;
      return false;
    }else if(num < 1){
      output.innerText = `Input must be 1 or greater. Try again.`;
      return false;
    }else if(num % 1 !== 0){
      output.innerText = `Input must be an integer. Try again.`;
      return false;
    };
// if test.length is 4 search for thousand place, subtract thousand unless number is five
// repeat with what is left(call function on remainder)
// Called in convert function to convert 0-9 for decimal
// change results based on test.length in convert()

    // function simple(check){
    //     let arr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    //     answer.push(arr[check]);
    //     console.log(answer)
    // }

// call convert for each place in test
    function convert(i){
        if(test.length === 4){
            // simple(i);
            let arr = ['', 'M', 'MM', 'MMM', 'MV', 'V', 'VM', 'VMM', 'VMMM', 'MX'];
        answer.push(arr[i]);
        }
        else if(test.length === 3){
            let arr = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
        answer.push(arr[i]);
        }
        else if(test.length === 2){
            let arr = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        answer.push(arr[i]);
        }
        else if(test.length === 1){
            let arr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        answer.push(arr[i]);
        }
    }


    num.toString().split('').map(place => {
        convert(place);
        test.shift();
        console.log('place', place, test);
    });

    console.log('answer', answer.join(''));
    // return answer.join('');
    output.innerText = `${answer.join('')}`;
}

button.addEventListener('click', function(e){
  e.preventDefault();
  let input = document.querySelector('#user-input').value;
  convertToRoman(input);
});
