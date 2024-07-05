let cal = JSON.parse(localStorage.getItem('calculation')) || '';
            showCal(`${eval(cal) || cal}`);

            function newCal(val){
                cal += val;
                showCal(cal);
                localStorage.setItem('calculation', JSON.stringify(cal));
            }

            function showCal(cal){
                document.querySelector('.js-cal').innerHTML = `${cal}`;
            }