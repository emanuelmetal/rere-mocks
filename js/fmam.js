/**
 * Created by emanuel on 07/12/15.
 */
var buyer_form = $("#buyers"),
    seller_form = $("#sellers"),
    buyer_submit = $("#buyer_submit"),
    seller_submit = $("#sellers_submit"),
    part_of_town = $('#partoftown'),
    budget = $("#budget"),
    sale = '<h4>Budget For Sale</h4>\
                <div class="form-group">\
                <label for="price-l">Low</label>\
                <select id="price-l" class="form-control" name="salePriceLow">\
                <option value="0">0</option>\
                <option value="250000">$250,000</option>\
                <option value="500000">$500,000</option>\
                <option value="750000">$750,000</option>\
                <option value="1000000">$1,000,000</option>\
                <option value="1250000">$1,250,000</option>\
                <option value="1500000">$1,500,000</option>\
                <option value="1750000">$1,750,000</option>\
                <option value="2000000">$2,000,000</option>\
                <option value="2500000">$2,500,000</option>\
                <option value="3000000">$3,000,000</option>\
                <option value="3500000">$3,500,000</option>\
                <option value="4000000">$4,000,000</option>\
                <option value="4500000">$4,500,000</option>\
                <option value="5000000">$5,000,000</option>\
                </select>\
                </div>\
                <div class="form-group">\
                        <label for="price-h">High</label>\
                        <select id="price-h" class="form-control" name="salePriceHigh">\
                        <option value="500000">$500,000</option>\
                <option value="750000">$750,000</option>\
                <option value="1000000">$1,000,000</option>\
                <option value="1250000">$1,250,000</option>\
                <option value="1500000">$1,500,000</option>\
                <option value="1750000">$1,750,000</option>\
                <option value="2000000">$2,000,000</option>\
                <option value="2500000">$2,500,000</option>\
                <option value="3000000">$3,000,000</option>\
                <option value="3500000">$3,500,000</option>\
                <option value="4000000">$4,000,000</option>\
                <option value="4500000">$4,500,000</option>\
                <option value="5000000">$5,000,000</option>\
                <option value="6000000">$6,000,000</option>\
                <option value="7000000">$7,000,000</option>\
                <option value="8000000">$8,000,000</option>\
                <option value="9000000">$9,000,000</option>\
                <option value="10000000">$10,000,000</option>\
                <option value="15000000">$15,000,000</option>\
                <option value="20000000">$20,000,000</option> \
                </select> \
                </div>',
    rent = '<h4>Budget For Rent</h4> \
                    <div class="form-group"> \
                <label for="rprice-l">Low</label> \
                <select id="rprice-l" class="form-control" name="rentPriceLow"> \
                <option value="0">0</option> \
                <option value="1000">$1,000</option> \
                <option value="2000">$2,000</option> \
                <option value="3000">$3,000</option> \
                <option value="4000">$4,000</option> \
                <option value="5000">$5,000</option> \
                <option value="6000">$6,000</option> \
                <option value="7000">$7,000</option> \
                <option value="8000">$8,000</option> \
                <option value="9000">$9,000</option> \
                <option value="10000">$10,000</option> \
                <option value="15000">$15,000</option> \
                <option value="20000">$20,000</option> \
                <option value="30000">$30,000</option> \
                </select> \
                </div> \
                <div class="form-group"> \
                        <label for="rprice-h">High</label> \
                        <select id="rprice-h" class="form-control" name="rentPriceHigh"> \
                        <option value="1000">$1,000</option> \
                <option value="2000">$2,000</option> \
                <option value="3000">$3,000</option> \
                <option value="4000">$4,000</option> \
                <option value="5000">$5,000</option> \
                <option value="6000">$6,000</option> \
                <option value="7000">$7,000</option> \
                <option value="8000">$8,000</option> \
                <option value="9000">$9,000</option> \
                <option value="10000">$10,000</option> \
                <option value="15000">$15,000</option> \
                <option value="20000">$20,000</option> \
                <option value="30000">$30,000</option> \
                <option value="5000000">more</option> \
                        </select> \
                </div>';

buyer_submit.on("click", function(e){
    preForm(this, buyer_form);
});

seller_submit.on("click", function(){
    preForm(this, seller_form);
});

$(document).on('change', 'input:radio[id^="rlistingtype-forsale"]', function (event) {
    budget.html(sale);
});

$(document).on('change', 'input:radio[id^="rlistingtype-forrent"]', function (event) {
    budget.html(rent);
});

function preForm(button, form){
    var recaptcha = $('textarea[name=g-recaptcha-response]', form).val();
    if (recaptcha === '') {
        alert('Please show me you are not a robot!');
        return;
    }
    if (form.parsley().validate()) {
        //console.log(form.serializeObject());
        submitData(form);
    }
}

part_of_town.on('change', function () {
    //        console.log(part_of_town.val().replace(/ /g,'').toLowerCase());
    updateSelect(part_of_town.val().replace(/ /g,'').toLowerCase());
});

function recaptchaCallback(){
    grecaptcha.render('buyer_recaptcha', {'sitekey' : '6Lc-nBETAAAAAF9OdIXUQMw7k6N-UWxkBwSojooD'});
    grecaptcha.render('seller_recaptcha', {'sitekey' : '6Lc-nBETAAAAAF9OdIXUQMw7k6N-UWxkBwSojooD'});
}

function submitData(form){

    var form_content = {},
    form_email = '';//JSON.stringify();
    $.each(form.serializeObject(), function (key, value) {
        if (value !== '' && value !== null && value !== 'null') {
            form_content[key] = value;
            form_email += key + ': ' + value + '\r\n';
        }
    });
    console.log(JSON.stringify(form_content));
    console.log(form_email);
    jQuery.ajax({
        url: '/savefmam',
        type: 'POST',
        data: {
            content: JSON.stringify(form_content),
            message: form_email,
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