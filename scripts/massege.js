
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    console.log(form)
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        console.log(e)
        let error = formValidate(form);

        let formData = new FormData(form);
        

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            }) ;

            if (response.ok) {
                let result = await response.json();
                alert(result.massage);
                form.reset();
            } else {
                alert('Ошибка');
            }

        } else {
            alert('Заполните обязательные поля')
        }
    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        console.log(formReq)

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            console.log(formReq[index])
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++
                }
            } else {
                if (input.value === '')
                    formAddError(input);
                error++;
            }

        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция текста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

