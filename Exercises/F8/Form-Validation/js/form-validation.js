function log(value) {
    console.log(value)
}

// 1. Đối tượng `  Validator `
// options = {
//     form: '#form-1',
//     rules: [
//         // Gọi hàm Validator với phương thức isRequired
//         Validator.isRequired('#fullname'),
//         Validator.isEmail('#email')
//     ]
// }


function Validator(options) {

    let selectorRules = {}

    // Định nghĩa hàm validate với tham số đầu vào 
    // tham số: inputElement và rule
    function validate(inputElement, rule) {
        // let errorMessage = rule.test(inputElement.value)
        let errorMessage;
        let errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        let rules = selectorRules[rule.selector];

        // Lặp qua từng rule và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra này
        for (let i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            // Nếu có lỗi bất kì thì ngưng luôn vòng lặp for này
            // và tiếp tục kiểm tra đoạn if ở dưới
            // errorMessage lấy lỗi đầu tiên của rule mà nó tìm được

            if (errorMessage) {
                break;
            }
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        // log(!!errorMessage)
        return !errorMessage;
        // '!' trả về false và nội dung
        // '!!' -> covert sang kiểu boolean ( true or false )
        // Hàm validate này sẽ trả về false nếu có lỗi 
        // không có lỗi thì trả về true

    }

    // Lấy element của form cần validate
    let formElement = document.querySelector(options.form);
    if (formElement) {

        formElement.onsubmit = function (e) {
            e.preventDefault();
            // Mặc định ban đầu hệ thống không có lỗi
            let isFormValid = true;


            // Lặp qua từng rules và validate
            options.rules.forEach(rule => {
                let inputElement = formElement.querySelector(rule.selector)
                let isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false;
                    // Nếu bất kì có lỗi -> trả về false

                }
            })

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll('[name]');
                    let formValues = [...enableInputs].reduce(function (values, input) {

                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                let array = []
                                let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

                                for (let i = 0; i < checkboxes.length; i++) {
                                    array.push(checkboxes[i].value)
                                }
                                values[input.name]  = array
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
            }
        }

        // Lặp qua mỗi rules và xử lý ( lắng nghe các sự kiện của input )
        options.rules.forEach(rule => {

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
                // log(rule.selector)

            }

            let inputElement = formElement.querySelector(rule.selector)

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function (e) {
                    // Gọi hàm validate - truyền đối số và thực hiện luôn hàm validate 
                    // Đã có kết quả trả về trừ selectorRules
                    validate(e.target, rule)
                    // log(e.target)
                    // inputElement ~ e.target
                }

                inputElement.onchange = function (e) {
                    // Gọi hàm validate - truyền đối số và thực hiện luôn hàm validate 
                    // Đã có kết quả trả về trừ selectorRules
                    validate(e.target, rule)
                    // log(e.target)
                    // inputElement ~ e.target
                }

                // Xử lý khi người dùng nhập vào input
                inputElement.oninput = function (e) {
                    let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');

                }
            }


        });


        // Kết thúc vòng lặp forEach()
        // log(selectorRules)
        // Nó sẽ lưu lại được những rule 'từng tên thẻ input' của chúng ta
    }

}

// Định nghĩa rules:
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả về mess lỗi
// 2. Khi hợp lệ => Không trả ra kết quả 

Validator.isRequired = function (selector, message) {
    // return trả về 1 đối tượng:
    return {
        selector: selector,
        test: function (value) {
            if (value) {
                return undefined
            } else {
                return message || 'Vui lòng nhập trường này'
            }
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            let regex = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/
            if (regex.test(value)) {
                return undefined
            } else {
                return message || 'Trường này phải là email hợp lệ '
            }
        }
    }
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            if (value.length >= min) {
                return undefined
            } else {
                return message || `Vui lòng nhập tối thiểu ${min} ký tự`;
            }
        }
    }
}

// Định nghĩa hàm isConfirmed
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            if (value === getConfirmValue()) {
                return undefined
            } else {
                return message || 'Giá trị nhập vào không chính xác';
            }
        }
    }
}