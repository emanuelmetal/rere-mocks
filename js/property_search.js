/**
 * Created by emanuel on 09/11/15.
 */
jQuery(document).ready(function($){
    var property_search = $("#property_search");
    property_search.on("submit", function(e){
        e.preventDefault();
        var fields = property_search.serializeArray(),
        count = 0;
        $.each(fields,function(key,value){
            count++;
        });
        console.log(count);
    });
});