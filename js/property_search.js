/**
 * Created by emanuel on 09/11/15.
 */
jQuery(document).ready(function($){
    var property_search = $("#property_search");
    property_search.on("submit", function(e){
        e.preventDefault();
        var fields = property_search.serializeArray(),
        count = 0,
        sqlQuery = "";
        $.each(fields,function(key,field){
            //count++;
            if (field.value !== '' && field.value !== null && field.value != 'null') {
                sqlQuery += " AND " + field.name + " = '" + field.value + "'";
            }
        });
        console.log(sqlQuery);
    });
});