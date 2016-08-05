// jQuery validation and rules;
$(document).ready(function(){
    $('#signup-form').validate({
        rules: {
            email: {
                required: true,
                minlength: 4
            },
            login: {
                required: true,
                minlength: 4
            },
            pass: {
                required: true,
                minlength: 4
            },
            confpass: {
                required: true,
                minlength: 4
            }
        }
    });

    $('#signup-form input').on('keyup blur', function () {
        if ($('#signup-form').valid()) {
            $('button.btn.btn-submit').prop('disabled', false);
        } else {
            $('button.btn.btn-submit').prop('disabled', 'disabled');
        }
    });
});
