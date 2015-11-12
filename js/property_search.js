/**
 * Created by emanuel on 09/11/15.
 */
jQuery(document).ready(function($){
    var property_search = $("#property_search");
    property_search.on("submit", function(e){
        e.preventDefault();
        var fields = property_search.serializeArray(),
        count = 0,
        sqlQuery = '',
        view_cond = [],
        dummy_string = '',
        dt_fields = ['loft', 'apartment_hotel', 'post_war', 'pre_war', 'townhouse'];
        $.each(fields,function(key,field){
            //count++;
            if (field.value !== '' && field.value !== null && field.value != 'null') {
                if (field.name === "property_type") {
                    // co_op y condo
                    if (field.value === 'co_op' ||  field.value === 'condo') {
                        sqlQuery += " AND " + field.value + " = 1";
                    }
                } else if (field.name === "dwelling_type") {
                    // or de los campos loft, apartment_hotel, post_war, pre_war, townhouse
                    if ($.inArray(field.value,dt_fields)){
                        sqlQuery += " AND " + field.value + " = '' ";
                    }
                } else if (field.name === "Views" || field.name === 'additional_views') {
                    // or con view
                    dummy_string = "Views = '" + field.value + "'";
                    view_cond.push(dummy_string);
                } else if (field.name === "fireplace") {
                    // or de los campos Fireplaces_decorative, Fireplaces_gas, Fireplaces_wood
                    sqlQuery += " AND " + field.value + " = 1";
                } else if (field.name === "rent" || field.name === "between1" || field.name === "between2") {
                    //no va
                } else {
                    sqlQuery += " AND " + field.name + " = '" + field.value + "'";
                }
            }
        });
        if ( view_cond.length !== 0) {
            sqlQuery += ' AND (' + view_cond.join(' OR ') + ')';
        }
        console.log(sqlQuery);
    });
});