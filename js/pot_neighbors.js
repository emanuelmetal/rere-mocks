/**
 * Created by emanuel on 27/11/15.
 */
var image = $('#manhattan'),
    part_of_town = $('#part_of_town'),
    neighborhood = $('#neighborhood');
var key_map = {
    lm: 'lowermanhattan',
    downtown: 'downtown',
    me: 'midtowneast',
    mw: 'midtownwest',
    ues: 'uppereastside',
    uws: 'upperwestside',
    uptown: 'uptown',
    um: 'uppermanhattan'
};

var neighbor_by_pot = {
    downtown: [
        'Alphabet City',
        'Chelsea',
        'East Village',
        'Flatiron',
        'Gramercy Park',
        'Greater Chinatown',
        'Greenwich Village',
        'Lower East Side',
        'Meat-packing District',
        'NoHo',
        'Nolita',
        'SoHo',
        'Stuyvesant Square',
        'The Village',
        'Union Square',
        'West Village',
        'Stuyvesant Square',
        'Gold Coast'
    ],
    lowermanhattan: [
        'Battery Park City',
        'East River Waterfront',
        'Greater Chinatown',
        'Financial District',
        'Civic Center',
        'South Street Seaport',
        'Tribeca'
    ],
    midtowneast: [
        'Beekman Place',
        'Kips and Rose Bays',
        'Murray Hill',
        'Sutton Place',
        'Tudor City',
        'Turtle Bay',
        'United Nations Plaza'
    ],
    midtownwest: [
        'Clinton',
        'Hells Kitchen',
        'North Chelsea',
        'West 50s'
    ],
    uppereastside: [
        'Carnegie Hill',
        'Lenox Hill',
        'Metropolitan Museum District',
        'Sociable Sixties',
        'Yorkville'
    ],
    upperwestside: [
        'Ansonia Station',
        'Central Park West Corridor',
        'Lincoln Square',
        'Manhattan Valley',
        'Morningside Heights',
        'Riverside Drive-West End Avenue',
        'Schuyler Corridor'
    ],
    uptown: [
        'Hamilton Heights',
        'Manhattanville',
        'Morningside Heights',
        'South Harlem',
        'Spanish Harlem',
        'Sugar Hill'
    ],
    uppermanhattan: [
        'Fort George',
        'Hudson Heights',
        'Inwood',
        'Jumel-Morris District',
        'Washington Heights'
    ]
};
if (image.mapster) {
    image.mapster(
        {
            fillOpacity: 0.4,
            fillColor: "d42e16",
            stroke: true,
            strokeColor: "3320FF",
            strokeOpacity: 0.8,
            strokeWidth: 4,
            singleSelect: true,
            mapKey: 'name',
            listKey: 'name',
            showToolTip: true,
            toolTipClose: ["tooltip-click", "area-click"],
            onClick: updateByMap,
            areas: [
                {
                    key: "lm",
                    fillColor: "ffffff"
                },
                {
                    key: "downtown",
                    fillColor: "000000"
                },
                {
                    key: "les",
                    fillColor: "000000"
                },
                {
                    key: "me",
                    fillColor: "000000"
                },
                {
                    key: "mw",
                    strokeColor: "ffffff"
                },
                {
                    key: "ues",
                    strokeColor: "ffffff"
                },
                {
                    key: "uws",
                    strokeColor: "ffffff"
                },
                {
                    key: "uptown",
                    strokeColor: "000000"
                },
                {
                    key: "um",
                    strokeColor: "000000"
                }
            ]
        });

}

var pot_selected = $("#part_of_town option:selected");

part_of_town.on("change", function(e){
    var selected_pot_map = $(this).find(":selected").data("value"),
        selected_pot = $(this).find(":selected").val();
//        console.log(selected_pot);
    if (selected_pot_map !== null){
        $(selected_pot_map).click();
//            console.log( $(this).find(":selected").data("value"));
    } else {
        $('area').mapster('deselect');
    }
    updateSelect(selected_pot);
});

function getNeighborhood(part_of_town){


    if (neighbor_by_pot[part_of_town]){
        return neighbor_by_pot[part_of_town];
    }
    return [];
}

function updateSelect(part_of_town){
    var inner_html = '<option value="null">Select an option...</option>',
        neighborhoods_arr = getNeighborhood(part_of_town);

    if (neighborhoods_arr.length === 0){
        inner_html = '<option value="null">Select Part of Town first ...</option>'
    }

    if (part_of_town === 'any') {
        inner_html = '<option value="Any">Any</option>';
        $.each(neighbor_by_pot, function(key, arr){
            $.each(arr, function (key, value) {
                inner_html += '<option value="' + value + '">' + value +'</option>';
            });
        });
    } else {
        $.each(neighborhoods_arr, function (key, value) {
            inner_html += '<option value="' + value + '">' + value + '</option>';
        });
    }
    neighborhood.html(inner_html);
}

function updateByMap(data){
    if (data.selected) {
        part_of_town.val(key_map[data.key]);
    } else {
        part_of_town.val("null");
    }
    updateSelect(part_of_town.val());
}