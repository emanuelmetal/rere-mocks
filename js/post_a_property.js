/**
 * Created by emanuel on 21/01/16.
 */
Dropzone.autoDiscover = false;

if (!$){
    $ = jQuery;
}

var form = $("#post_a_property");
var submit = $("#submit");
var myDropzone = new Dropzone("div#dzUpload",
    {
        url: "/upload.php",
        paramName: "file", // The name that will be used to transfer the file
        maxFilesize: 3, // MB
        maxFiles: 3,
        addRemoveLinks: true,
        accept: function (file, done) {
            if (file.name == "justinbieber.jpg") {
                done("Naha, you don't.");
            }
            else {
                done();
            }
        },
        maxFiles: 3
    });


submit.on("click", function(){
    preForm(form);
});

function processForm0() {
    queryForm = document.forms[0];
    var e = "INSERT INTO wp_listings ";
    e += "(DirPath,";
    e += "address_number,";
    e += "street_name,";
    e += "unit_number,";
    e += "source,";
    e += "asking_price,";
    e += "maint_cc,";
    e += "RE_Taxes,";
    e += "Rooms,";
    e += "OverallCondition,";
    e += "Beds,";
    e += "Dinning_Type,";
    e += "Baths,";
    e += "Bath_Cond,";
    e += "Kitchen_Type,";
    e += "Exposure,";
    e += "Fireplaces,";
    e += "Kitchen_Cond,";
    e += "Private_Outdoor,";
    e += "Views)";
    e += " VALUES (''";
    e += " ," + houseNumber;
    e += " ,'" + streetName + "'";
    e += " ,'" + queryForm.elements["apartment"].value + "'";
    if (queryForm.elements["rlistingtype-o"].checked) {
        e += " ,'OH'"
    }
    if (queryForm.elements["rlistingtype-a"].checked) {
        e += " ,'AV'"
    }
    if (queryForm.elements["rlistingtype-rcondo"].checked) {
        e += " ,'RO'"
    }
    if (queryForm.elements["rlistingtype-rco-op"].checked) {
        e += " ,'RP'"
    }
    if (queryForm.elements["rlistingtype-rcondo"].checked || queryForm.elements["rlistingtype-rco-op"].checked) {
        e += " , " + queryForm.elements["rent"].value
    } else {
        e += " , " + queryForm.elements["price"].value
    }
    e += " ," + queryForm.elements["maint_cc"].value;
    e += " ,";
    e += " ," + queryForm.elements["total_rooms"].value;
    e += " ,'" + queryForm.elements["overall_condition"].value + "'";
    e += " ," + queryForm.elements["bedrooms"].value;
    e += " ,'" + queryForm.elements["dining_type"].value + "'";
    e += " ," + queryForm.elements["bathrooms"].value;
    e += " ,'" + queryForm.elements["bath_condition"].value + "'";
    e += " ,'" + queryForm.elements["kitchen_type"].value + "'";
    e += " ,'" + queryForm.elements["exposure"].value + "'";
    e += " ,'" + queryForm.elements["fireplace"].value + "'";
    e += " ,'" + queryForm.elements["kitchen_condition"].value + "'";
    e += " ,'" + queryForm.elements["private_outdoor"].value + "'";
    e += " ,'" + queryForm.elements["views"].value;
    if (queryForm.elements["additional_views"].value > "") {
        e += ", " + queryForm.elements["additional_views"].value + "'"
    } else {
        e += "'"
    }
    e += " )";
    jQuery("#query").text(e);
    e = "INSERT INTO wp_listings_details";
    e += "(DirPathDetails,address_numberDetails,street_nameDetails,unit_numberDetails,buildingname,part_of_town,neighborhood,near,house_number,doorman,concierge,manned_elevator,pets,washer_dryer,parking,health_club,exercise_room,pool,co_op,condo,condop,freehold,built,permit,financing_allowed,tax_deductible,flip_tax,central_air,included,gas,electricity,cable,outdoor_space,meeting_space,playroom,storage) VALUES (''";
    e += " ," + houseNumber;
    e += " ,'" + streetName + "'";
    e += " ,'" + queryForm.elements["apartment"].value + "'";
    e += " ,";
    e += " ,'" + queryForm.elements["part_of_town"].value + "'";
    e += " ,'" + queryForm.elements["neighborhood"].value + "'";
    if (queryForm.elements["between1"].value > "" || queryForm.elements["between2"].value > "") {
        e += " ,'between " + queryForm.elements["between1"].value + " and " + queryForm.elements["between2"].value + "'"
    } else {
        e += " ,"
    }
    e += " ,";
    if (queryForm.elements["rdoorman-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rdoorman-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rconcierge-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rconcierge-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["relevator-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["relevator-n"].checked) {
        e += " ,'no'"
    }
    e += " ,'" + queryForm.elements["pets"].value + "'";
    if (queryForm.elements["rwasher-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rwasher-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rparking-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rparking-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rhealth_club-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rhealth_club-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rexercise_room-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rexercise_room-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rpool-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rpool-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rproperty_type-coop"].checked) {
        e += " ,'X'"
    } else {
        e += " ,"
    }
    if (queryForm.elements["rproperty_type-condo"].checked) {
        e += " ,'X'"
    } else {
        e += " ,"
    }
    if (queryForm.elements["rproperty_type-condop"].checked) {
        e += " ,'X'"
    } else {
        e += " ,"
    }
    if (queryForm.elements["rproperty_type-free-hold"].checked) {
        e += " ,'X'"
    } else {
        e += " ,"
    }
    e += " ,";
    e += " ,";
    e += " ," + queryForm.elements["financing"].value;
    e += " ,";
    e += " ,";
    if (queryForm.elements["rcentral_air-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rcentral_air-n"].checked) {
        e += " ,'no'"
    }
    e += " ,";
    if (queryForm.elements["rgas-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rgas-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["relectricity-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["relectricity-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rcable-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rcable-n"].checked) {
        e += " ,'no'"
    }
    e += " ,'" + queryForm.elements["private_outdoor"].value;
    if (queryForm.elements["rmeeting_space-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rmeeting_space-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rplayroom-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rplayroom-n"].checked) {
        e += " ,'no'"
    }
    if (queryForm.elements["rstorage-y"].checked) {
        e += " ,'yes'"
    }
    if (queryForm.elements["rstorage-n"].checked) {
        e += " ,'no'"
    }
    e += " )";
    jQuery("#query").text(e);
    e = "INSERT INTO wp_listings_pdfs";
    e += "(DirPathPdfs,address_numberPdfs,street_namePdfs,unit_numberPdfs,relative_path_pdfs) VALUES (''";
    e += " ," + houseNumber;
    e += " ,'" + streetName + "'";
    e += " ,'" + queryForm.elements["apartment"].value + "'";
    e += " )";
    e = "INSERT INTO wp_listings_images";
    e += "(DirPathImage,address_numberImages,street_nameImages,unit_numberImages,relative_path_image) VALUES (''";
    e += " ," + houseNumber;
    e += " ,'" + streetName + "'";
    e += " ,'" + queryForm.elements["apartment"].value + "'";
    e += " )";
    return 0
}
function normalizeAddress() {
    queryForm = document.forms[1];
    var e = queryForm.elements["Address"].value;
    addressLength = e.length;
    newLength = 0;
    while (addressLength != newLength) {
        addressLength = e.length;
        e = e.replace("  ", " ");
        newLength = e.length
    }
    e = changeCaseToInitialCaps(e);
    if (e.charAt(e.length - 1) == " ") {
        e = e.slice(0, -1)
    }
    if (e.charAt(0) == " ") {
        e = e.substr(1)
    }
    queryForm.elements["address"].value = e;
    houseNumber = e.substr(0, e.indexOf(" "));
    if (isNaN(houseNumber)) {
        alert("Address error: House number invalid");
        return 0
    }
    e = e.substr(e.indexOf(" ") + 1);
    e = e.replace(/St$/, "Street");
    e = e.replace(/Str$/, "Street");
    e = e.replace(/St\.$/, "Street");
    e = e.replace(/Str\.$/, "Street");
    e = e.replace(/Av$/, "Avenue");
    e = e.replace(/Ave$/, "Avenue");
    e = e.replace(/Av\.$/, "Avenue");
    e = e.replace(/Ave\.$/, "Avenue");
    e = e.replace(/Dr$/, "Drive");
    e = e.replace(/Drv$/, "Drive");
    e = e.replace(/Dr\.$/, "Drive");
    e = e.replace(/Drv\.$/, "Drive");
    e = e.replace(/Prk$/, "Park");
    e = e.replace(/Pk$/, "Park");
    e = e.replace(/Pk\.$/, "Park");
    e = e.replace(/Prk\.$/, "Park");
    e = e.replace(/Plc$/, "Place");
    e = e.replace(/Pl$/, "Place");
    e = e.replace(/Plc\.$/, "Place");
    e = e.replace(/Pl\.$/, "Place");
    e = e.replace(/Sq$/, "Square");
    e = e.replace(/Sq\.$/, "Square");
    e = e.replace(/Blvd$/, "Boulevard");
    e = e.replace(/Blvd\.$/, "Boulevard");
    e = e.replace(/Ln$/, "Lane");
    e = e.replace(/Ln\.$/, "Lane");
    e = e.replace(/Plz$/, "Plaza");
    e = e.replace(/Plz\.$/, "Plaza");
    e = e.replace(/Cir$/, "Circle");
    e = e.replace(/Cir\.$/, "Circle");
    e = e.replace(/Cpw$/, "Central Park West");
    e = e.replace(/Cpw\.$/, "Central Park West");
    e = e.replace(/Cps$/, "Central Park South");
    e = e.replace(/Cps\.$/, "Central Park South");
    e = e.replace(/Rsd$/, "Riverside Drive");
    e = e.replace(/Rsd\.$/, "Riverside Drive");
    e = e.replace(/Unp$/, "United Nations Plaza");
    e = e.replace(/Unp\.$/, "United Nations Plaza");
    e = e.replace(/Sp$/, "Sutton Place");
    e = e.replace(/Sp\.$/, "Sutton Place");
    e = e.replace(/Sps$/, "Sutton Place South");
    e = e.replace(/Sps\.$/, "Sutton Place South");
    e = e.replace("Saint Nicholas", "St. Nicholas");
    e = e.replace("Cortlandt Alley", "Cortlandt Street");
    e = e.replace("Laguardia", "LaGuardia");
    e = e.replace("Macdougal", "MacDougal ");
    e = e.replace(/S$/, "South");
    e = e.replace(/S\.$/, "South");
    e = e.replace(/N$/, "South");
    e = e.replace(/N\.$/, "South");
    e = e.replace(/So$/, "South");
    e = e.replace(/So\.$/, "South");
    e = e.replace(/No$/, "South");
    e = e.replace(/No\.$/, "South");
    e = e.replace(/Park Av South/, "Park Avenue South");
    e = e.replace(/Park Ave South/, "Park Avenue South");
    e = e.replace(/Park Av\. South/, "Park Avenue South");
    e = e.replace(/Park Ave\. South/, "Park Avenue South");
    e = e.replace(/^7th Av/, "Seventh Av");
    e = e.replace(/^Seventh Ave\./, "Seventh Avenue");
    e = e.replace(/^Seventh Ave /, "Seventh Avenue ");
    e = e.replace(/^Seventh Ave$/, "Seventh Avenue");
    e = e.replace(/^Seventh Av\./, "Seventh Avenue");
    e = e.replace(/^Seventh Av /, "Seventh Avenue ");
    e = e.replace(/^Seventh Av$/, "Seventh Avenue");
    streetName = e;
    if (e == "Sutton Place" || e == "Sutton Place South" || e == "Beekman Place" || e == "United Nations Plaza" || e == "Park Avenue South" || e == "Malcomb X Boulevard" || e == "Seventh Avenue South" || e == "Central Park West" || e == "Central Park South" || e == "Central Park North" || e == "Frederick Douglass Boulevard" || e == "Hamilton Terrace" || e == "Riverside Drive" || e == "Riverside Boulevard" || e == "Irving Place" || e == "Columbus Circle" || e == "Gramercy Park" || e == "Union Square" || e == "Astor Place" || e == "Astor Row" || e == "Bowery" || e == "Bogardus Place" || e == "Cabrini Boulevard" || e == "Great Jones Street" || e == "Peter Jennings Way" || e == "Juan Pablo Duarte Boulevard" || e == "LaGuardia Place" || e == "Malcolm X Boulevard" || e == "St. Nicholas Avenue" || e == "Chatham Square" || e == "Duffy Square" || e == "Hanover Square" || e == "Lincoln Square" || e == "Madison Square" || e == "Tompkins Square Park" || e == "Washington Square Park" || e == "Worth Square" || e == "North Moore Street" || e == "Sutton Place South" || e == "Park Avenue South" || e == "Seventh Avenue South") {
        tempAddress = houseNumber + " " + e;
        queryForm.elements["address"].value = tempAddress;
        return 1
    }
    lastWord = e.substr(e.lastIndexOf(" ") + 1);
    if (lastWord == "Street") {
        firstWord = e.substr(0, e.indexOf(" "));
        remainder = e.substr(e.indexOf(" ") + 1);
        if (firstWord == "Varick" || firstWord == "Hudson" || firstWord == "York" || firstWord == "Greene" || firstWord == "Warren" || firstWord == "Beekman" || firstWord == "Baxter" || firstWord == "Horatio" || firstWord == "Charles" || firstWord == "Broad" || firstWord == "Nassau" || firstWord == "Pine" || firstWord == "West" && remainder == "Street" || firstWord == "William" || firstWord == "Barrow" || firstWord == "Greenwich" || firstWord == "Spring" || firstWord == "West Broadway" || firstWord == "Mercer" || firstWord == "Christopher" || firstWord == "Murray" || firstWord == "Franklin" || firstWord == "Liberty" || firstWord == "Vestry" || firstWord == "Wall" || firstWord == "Ann" || firstWord == "Irving" || firstWord == "Pine" || firstWord == "Beach" || firstWord == "Beak" || firstWord == "Bethune" || firstWord == "Bleeker" || firstWord == "Broome" || firstWord == "Charlton" || firstWord == "Cortlandt" || firstWord == "Delancy" || firstWord == "Forsyth" || firstWord == "Fulton" || firstWord == "Gay" || firstWord == "Henry" || firstWord == "Hester" || firstWord == "Horatio" || firstWord == "Houston" || firstWord == "Jane" || firstWord == "Jefferson" || firstWord == "Leroy" || firstWord == "Ludlow" || firstWord == "MacDougal" || firstWord == "Monroe" || firstWord == "Morton" || firstWord == "Perry" || firstWord == "Rivington" || firstWord == "Rutgers" || firstWord == "Stuyvesant" || firstWord == "Sullivan" || firstWord == "Thompson" || firstWord == "Vesey" || firstWord == "Washington" || firstWord == "William" || firstWord == "Wooster") {
            tempAddress = houseNumber + " " + firstWord + " " + remainder;
            queryForm.elements["address"].value = tempAddress;
            return 1
        }
        direction = firstWord;
        direction = direction.replace(/E$/, "East");
        direction = direction.replace(/W$/, "West");
        direction = direction.replace(/N$/, "North");
        direction = direction.replace(/S$/, "South");
        direction = direction.replace(/E\.$/, "East");
        direction = direction.replace(/W\.$/, "West");
        direction = direction.replace(/N\.$/, "North");
        direction = direction.replace(/S\.$/, "South");
        direction = direction.replace(/No\.$/, "North");
        direction = direction.replace(/So\.$/, "South");
        direction = direction.replace(/No$/, "North");
        direction = direction.replace(/So$/, "South");
        tempAddress = houseNumber + " " + direction + " " + remainder;
        queryForm.elements["address"].value = tempAddress;
        if (direction + " " + remainder == "South Williams Street") {
            return 1
        }
        if (direction == "North" || direction == "South") {
            alert("This street is not in our database.  If you believe this is a valid name, please contact us and we will add it.");
            return 0
        }
        if (remainder.indexOf(" ") != -1) {
            streetNumber = remainder.substr(0, remainder.indexOf(" "))
        } else {
            streetNumber = remainder
        }
        streetNumber = streetNumber.toLowerCase();
        if (streetNumber == "1st" | streetNumber == "21st" | streetNumber == "31st" | streetNumber == "41st" | streetNumber == "51st" | streetNumber == "61st" | streetNumber == "71st" | streetNumber == "81st" | streetNumber == "91st" | streetNumber == "101st" | streetNumber == "111st" | streetNumber == "121st" | streetNumber == "131st") {
            streetNumber = streetNumber.slice(0, -2)
        }
        if (streetNumber == "2nd" | streetNumber == "22nd" | streetNumber == "32nd" | streetNumber == "42nd" | streetNumber == "52nd" | streetNumber == "62nd" | streetNumber == "72nd" | streetNumber == "82nd" | streetNumber == "92nd" | streetNumber == "102nd" | streetNumber == "112nd" | streetNumber == "122nd" | streetNumber == "132nd") {
            streetNumber = streetNumber.slice(0, -2)
        }
        if (streetNumber == "3rd" | streetNumber == "23rd" | streetNumber == "33rd" | streetNumber == "43rd" | streetNumber == "53rd" | streetNumber == "63rd" | streetNumber == "73rd" | streetNumber == "83rd" | streetNumber == "93rd" | streetNumber == "103rd" | streetNumber == "113rd" | streetNumber == "123rd" | streetNumber == "133rd") {
            streetNumber = streetNumber.slice(0, -2)
        }
        if (streetNumber == "first") {
            streetNumber = "1"
        }
        if (streetNumber == "second") {
            streetNumber = "2"
        }
        if (streetNumber == "third") {
            streetNumber = "3"
        }
        if (streetNumber == "fourth") {
            streetNumber = "4"
        }
        if (streetNumber == "fifth") {
            streetNumber = "5"
        }
        if (streetNumber == "sixth") {
            streetNumber = "6"
        }
        if (streetNumber == "seventh") {
            streetNumber = "7"
        }
        if (streetNumber == "eighth") {
            streetNumber = "8"
        }
        if (streetNumber == "ninth") {
            streetNumber = "9"
        }
        if (streetNumber == "tenth") {
            streetNumber = "10"
        }
        if (streetNumber == "eleventh") {
            streetNumber = "11"
        }
        if (streetNumber == "twelfth") {
            streetNumber = "12"
        }
        if (streetNumber.substr(streetNumber.length - 2, 2) == "th") {
            streetNumber = streetNumber.slice(0, -2)
        }
        if (isNaN(streetNumber) || streetNumber > 220) {
            alert("Address error: Street number invalid or East/West missing");
            return 0
        } else {
            tempAddress = houseNumber + " " + direction + " " + streetNumber + " Street";
            queryForm.elements["address"].value = tempAddress;
            return 1
        }
    }
    if (lastWord == "Avenue") {
        firstPart = e.substr(0, e.lastIndexOf(" "));
        if (firstPart.indexOf(" ") > -1) {
            avenueNumber = firstPart.substr(0, firstPart.indexOf(" "))
        } else {
            avenueNumber = firstPart
        }
        avenueNumber = avenueNumber.toLowerCase();
        validated = 0;
        if (avenueNumber == "1st" | avenueNumber == "1") {
            firstPart = "First";
            validated = 1
        }
        if (avenueNumber == "2nd" || avenueNumber == "2") {
            firstPart = "Second";
            validated = 1
        }
        if (avenueNumber == "3rd" || avenueNumber == "3") {
            firstPart = "Third";
            validated = 1
        }
        if (avenueNumber == "4th" | avenueNumber == "4") {
            firstPart = "Fourth";
            validated = 1
        }
        if (avenueNumber == "5th" || avenueNumber == "5") {
            firstPart = "Fifth";
            validated = 1
        }
        if (avenueNumber == "6th" | avenueNumber == "6") {
            firstPart = "Sixth";
            validated = 1
        }
        if (avenueNumber == "7th" | avenueNumber == "7") {
            firstPart = "Seventh";
            validated = 1
        }
        if (avenueNumber == "8th" | avenueNumber == "8") {
            firstPart = "Eighth";
            validated = 1
        }
        if (avenueNumber == "9th" | avenueNumber == "9") {
            firstPart = "Ninth";
            validated = 1
        }
        if (avenueNumber == "10th" | avenueNumber == "10") {
            firstPart = "Tenth";
            validated = 1
        }
        if (avenueNumber == "11th" | avenueNumber == "11") {
            firstPart = "Eleventh";
            validated = 1
        }
        if (avenueNumber == "12th" | avenueNumber == "12") {
            firstPart = "Twelfth";
            validated = 1
        }
        if (avenueNumber == "first" | avenueNumber == "second" | avenueNumber == "third" | avenueNumber == "fourth" | avenueNumber == "fifth" | avenueNumber == "sixth" | avenueNumber == "seventh" | avenueNumber == "eighth" | avenueNumber == "ninth" | avenueNumber == "tenth" | avenueNumber == "eleventh" | avenueNumber == "twelfth") {
            validated = "1"
        }
        if (firstPart == "Madison" || firstPart == "Vanderbilt" || firstPart == "East End" || firstPart == "York" || firstPart == "Lexington" || firstPart == "Park" || firstPart == "Lenox" || firstPart == "Columbus" || firstPart == "St. Nicholas" || firstPart == "Convent" || firstPart == "Edgecomb" || firstPart == "Amsterdam" || firstPart == "West End" || firstPart == "Cabrini" || firstPart == "Fort Washington") {
            validated = 1
        }
        if (validated) {
            tempAddress = houseNumber + " " + firstPart + " Avenue";
            queryForm.elements["address"].value = tempAddress;
            return 1
        } else {
            alert("This avenue is not in our database.  If you believe this is a valid name, please contact us and we will add it.");
            return 0
        }
    }
    alert("This street/avenue is not in our database.  If you believe this is a valid name, please contact us and we will add it.");
    return 0
}
function changeCaseToInitialCaps(e) {
    var t;
    var n;
    var r;
    var i;
    var s;
    var o;
    n = e;
    n = e.toLowerCase();
    strLen = n.length;
    if (strLen > 0) {
        for (t = 0; t < strLen; t++) {
            if (t == 0) {
                r = n.substring(0, 1).toUpperCase();
                s = n.substring(1, strLen);
                n = r + s
            } else {
                r = n.substring(t, t + 1);
                if (r == " " && t < strLen - 1) {
                    r = n.substring(t + 1, t + 2).toUpperCase();
                    i = n.substring(0, t + 1);
                    s = n.substring(t + 2, strLen);
                    n = i + r + s
                }
            }
        }
    }
    return n
}
var houseNumber;
var streetName;

function preForm(form){
    var recaptcha = $('textarea[name=g-recaptcha-response]', form).val();
    if (recaptcha === '') {
        alert('Please show me you are not a robot!');
        return;
    }
    if (form.parsley().validate()) {

        submitData(form);
    }
}

function submitData(form){

    var form_email = '';
    $.each(myDropzone.files, function(key, file){
        var field = "#file" + key;
        $(field).val(file.name);
    });

    $.each(form.serializeObject(), function (key, value) {
        if (value !== '' && value !== null && value !== 'null') {
            form_email += key + ': ' + value + '\r\n';
        }
    });

    jQuery.ajax({
        url: '/savepap',
        type: 'POST',
        data: {
            message: form_email,
            file0: $("#file0").val(),
            file1: $("#file1").val(),
            file2: $("#file2").val()
        },
        success: function(response){

            if (response === '1' || response !== '') {
                alert('Your Property was sent successfully');
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

function recaptchaCallback(){
    grecaptcha.render('recaptcha', {'sitekey' : '6Lc-nBETAAAAAF9OdIXUQMw7k6N-UWxkBwSojooD'});
}