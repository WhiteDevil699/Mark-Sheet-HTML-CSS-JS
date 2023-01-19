    const first_name = document.getElementById('fname');
    const name1 = document.getElementById('cdname');

    const father = document.getElementById('faname')  ;
    const fathout = document.getElementById('cdfname')

    const selected = document.getElementById('s1');
    const seleout = document.getElementById('exam');

    const input1 = document.getElementById('inp');
    const output1 = document.getElementById('output');

    const input2 = document.getElementById('inp1');
    const output2 = document.getElementById('output1');

    const input3 = document.getElementById('inp2');
    const output3 = document.getElementById('output2');
    
    const input4 = document.getElementById('inp3');
    const output4 = document.getElementById('output3');

    const input5 = document.getElementById('inp4');
    const output5 = document.getElementById('output4');

    const input6 = document.getElementById('inp5');
    const output6 = document.getElementById('output5');

    const gnumber = document.getElementById('Getnumber')

    const btn1 = document.getElementById('btn');

    function fun1(){
        name1.innerHTML = first_name.value;
        fathout.innerHTML = father.value;
        seleout.innerHTML = selected.value;
        output1.innerHTML = input1.value;
        output2.innerHTML = input2.value;
        output3.innerHTML = input3.value;
        output4.innerHTML = input4.value;
        output5.innerHTML = input5.value;
        output6.innerHTML = input6.value;

       let sum2 = document.getElementById('inp').value;
        let sum3 = document.getElementById('inp1').value;
        let sum4 = document.getElementById('inp2').value;
        let sum5 = document.getElementById('inp3').value;
        let sum6 = document.getElementById('inp4').value;
        let sum7 = document.getElementById('inp5').value;

        let final = parseFloat(sum2) + parseFloat(sum3) + parseFloat(sum4) + parseFloat(sum5) + parseFloat(sum6) + parseFloat(sum7);

        gnumber.innerHTML = final;

        let x = sum2+ sum3+ sum4+ sum5+ sum6+ sum7 / 560 * 100;

        console,log(x);
    }

    btn1.addEventListener('click',fun1);





