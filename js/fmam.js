/**
 * Created by emanuel on 07/12/15.
 */
var buyer_form = $("#buyers"),
    seller_form = $("#sellers"),
    buyer_submit = $("#buyer_submit"),
    seller_submit = $("#sellers_submit"),
    part_of_town = $('#partoftown');

buyer_submit.on("click", function(e){
    preForm(this, buyer_form);
});

seller_submit.on("click", function(){
    preForm(this, seller_form);
});

function preForm(button, form){
    var recaptcha = $('textarea[name=g-recaptcha-response]', form).val();
    if (recaptcha === '') {
        alert('Please show me you are not a robot!');
        return;
    }
    if (form.parsley().validate()) {
        console.log(form.serializeObject());
        submitData(form);
    }
}

part_of_town.on('click', function () {
    //        console.log(part_of_town.val().replace(/ /g,'').toLowerCase());
    updateSelect(part_of_town.val().replace(/ /g,'').toLowerCase());
});

function recaptchaCallback(){
    grecaptcha.render('buyer_recaptcha', {'sitekey' : '6Lc-nBETAAAAAF9OdIXUQMw7k6N-UWxkBwSojooD'});
    grecaptcha.render('seller_recaptcha', {'sitekey' : '6Lc-nBETAAAAAF9OdIXUQMw7k6N-UWxkBwSojooD'});
}

function submitData(form){

    var form_content = {}//JSON.stringify();
    $.each(form.serializeObject(), function (key, value) {
        if (value !== '' && value !== null && value !== 'null') {
            form_content[key] = value;
        }
    });
    console.log(JSON.stringify(form_content));
    jQuery.ajax({
        url: '/savefmam',
        type: 'POST',
        data: {
            content: JSON.stringify(form_content),
            form: form.attr('id')
        },
        success: function(response){
            if (response === '1') {
                alert('Your request was saved successfully');
                window.location.reload();
            } else {
                alert('Something went wrong try again later');
            }
        },
        error: function(xhr){
            alert('Something went wrong try again later');
        }
    });
}