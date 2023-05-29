let string = "";
let buttons = document.querySelectorAll('.button');
console.log(buttons)
Array.from(buttons).forEach(
    (button) => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'C') {
                string = "";
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'M-') {
                length = string.length;
                string = string.slice(0, length - 1);
                document.querySelector('input').value = string;
            }
            else {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }

        })
        button.addEventListener('click', (e) => {
            e.target.style.boxShadow = "1px 2px #d30808";
            setTimeout(() => {
                e.target.style.boxShadow = "4px 8px #d30808";
            }, 150);
        })

    }
)