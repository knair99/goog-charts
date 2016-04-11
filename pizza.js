function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    var stuff = ["parm_slider",
        "moz_slider",
        "american_slider",
        "pepperjack_slider",
        "marinara_slider",
        "white_slider",
        "tomato_slider",
        "bacon_slider",
        "pepperoni_slider",
        "italian_slider",
        "beef_slider",
        "ham_slider",
        "black_slider",
        "garlic_slider",
        "banana_slider",
        "onion_slider",
        "Pineapple_slider",
        "mushroom_slider",
        "tomatoes_slider"
    ];
    var calories = ["200",
        "300",
        "200",
        "400",
        "150",
        "100",
        "100",
        "400",
        "400",
        "500",
        "1000",
        "600",
        "50",
        "40",
        "70",
        "40",
        "20",
        "20",
        "20"
    ];
    for (var i = 0; i < stuff.length; i++) {
        var s = stuff[i];
        console.log(s);
        if (sessionStorage.getItem(s) !== null) {
            var val = sessionStorage.getItem(s);
            console.log(val);
            var count = parseInt(val);
            if (count !== null) {
                s = s.replace(/_slider/gi, "");
                data.addRow([s, count]);
            }
        }
    }
    // Set chart options
    var options = {
        'title': 'PIZZA BREAKDOWN',
        'width': 700,
        'height': 700,
        'is3D': true,
        'pieStartAngle': 0,
        'pieSliceText': 'label'
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    ////////////////CHEESE WARS////////////
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'CHEESE');
    data2.addColumn('number', 'Slices');
    var cheeses = ["parm_slider",
        "moz_slider",
        "american_slider",
        "pepperjack_slider",
        "marinara_slider",
        "white_slider",
        "tomato_slider"
    ];
    for (var i = 0; i < cheeses.length; i++) {
        var s = cheeses[i];
        console.log(s);
        if (sessionStorage.getItem(s) !== null) {
            var val = sessionStorage.getItem(s);
            console.log(val);
            var count = parseInt(val);
            if (count !== null) {
                s = s.replace(/_slider/gi, "");
                data2.addRow([s, count]);
            }
        }
    }
    // Set chart options
    var options = {
        'title': 'CHEESE v SAUCE WARS',
        'width': 700,
        'height': 700,
        'is3D': true,
        'pieStartAngle': 0,
        'pieSliceText': 'label'
    };
    var chart2 = new google.visualization.PieChart(document.getElementById('cheese_div'));
    chart2.draw(data2, options);
    ////////////////calories//////////////
    var data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'Item');
    data3.addColumn('number', 'Calories');
    for (var i = 0; i < stuff.length; i++) {
        var s = stuff[i];
        console.log(s);
        if (sessionStorage.getItem(s) !== null) {
            var val = sessionStorage.getItem(s);
            console.log(val);
            var count1 = parseInt(val);
            var count = count1 * calories[i];
            if (count !== null) {
                s = s.replace(/_slider/gi, "");
                data3.addRow([s + '(' + count1 + ')', count]);
            }
        }
    }
    var options3 = {
        title: 'CALORIE BREAKDOWN',
        legend: {position: 'top', maxLines: 2},
        height: 700
    };
    var chart3 = new google.visualization.Histogram(document.getElementById('calories_div'));
    chart3.draw(data3, options3);


    ///////////////sankey////////////////////

    var data4 = new google.visualization.DataTable();
    data4.addColumn('string', 'Cheeese');
    data4.addColumn('string', 'Toppings');
    data4.addColumn('number', 'No of items');

    var toppings = [
        "bacon_slider",
        "pepperoni_slider",
        "italian_slider",
        "beef_slider",
        "ham_slider",
        "black_slider",
        "garlic_slider",
        "banana_slider",
        "onion_slider",
        "Pineapple_slider",
        "mushroom_slider",
        "tomatoes_slider"];

    var crust = ["parm_slider",
        "moz_slider",
        "american_slider",
        "pepperjack_slider"];

    for (var i = 0; i < crust.length; i++) {

        var cr = crust[i];
        cr = cr.replace(/slider/gi, "");

        for(var j = 0; j < cheeses.length; j++){

            var ch = cheeses[i];

            if (sessionStorage.getItem(ch) !== null) {
                var val = sessionStorage.getItem(ch);
                var count = parseInt(val);

                if (count !== null) {
                    ch = ch.replace(/_slider/gi, "");
                    data4.addRow([cr, ch, count]);
                }
            }

        }
    }



    for (var i = 0; i < cheeses.length; i++) {

        var ch = cheeses[i];
        ch = ch.replace(/slider/gi, "");

        for(var j = 0; j < toppings.length; j++){

            var tp = toppings[i];

            if (sessionStorage.getItem(tp) !== null) {
                var val = sessionStorage.getItem(tp);
                var count = parseInt(val);

                if (count !== null) {
                    tp = tp.replace(/_slider/gi, "");
                    data4.addRow([ch, tp, count]);
                }
            }

        }
    }



    // Sets chart options.
    var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
        '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

    var options = {
        height: 700,
        sankey: {
            node: {
                colors: colors
            },
            link: {
                colorMode: 'gradient',
                colors: colors
            }
        }
    };
    // Instantiates and draws our chart, passing in some options.
    var chart4 = new google.visualization.Sankey(document.getElementById('sankey'));
    chart4.draw(data4, options);
}


$(document).ready(function() {

    //mutually exclusive select for index page crust types
    $('#order_thin').on('click', function(){
        $('#pizthin').parent().children().css('background-color', 'white');
        $('#pizthin').css('background-color', '#ffffcc');
        sessionStorage.setItem("crust", "thin");
    });

    $('#order_pan').on('click', function(){
        $('#pizpan').parent().children().css('background-color', 'white');
        $('#pizpan').css('background-color', ' #ffffcc');
        sessionStorage.setItem("crust", "pan");

    });

    $('#order_hand').on('click', function(){
        $('#pizhand').parent().children().css('background-color', 'white');
        $('#pizhand').css('background-color', ' #ffffcc');
        sessionStorage.setItem("crust", "hand");

    });


    //Calculate amount of stuff on the pizza
    $('#parm_slider').on("change", function() {
        val = $('#parm_slider').val();
        sessionStorage.setItem("parm_slider", val);
    });

    $('#moz_slider').on("change", function() {
        val = $('#moz_slider').val();
        sessionStorage.setItem("moz_slider", val);
    });


    $('#pepperjack_slider').on("change", function() {
        val = $('#pepperjack_slider').val();
        sessionStorage.setItem("pepperjack_slider", val);
    });

    $('#swiss_slider').on("change", function() {
        val = $('#swiss_slider').val();
        sessionStorage.setItem("swiss_slider", val);
    });


    $('#marinara_slider').on("change", function() {
        val = $('#marinara_slider').val();
        sessionStorage.setItem("marinara_slider", val);
    });

    $('#white_slider').on("change", function() {
        val = $('#white_slider').val();
        sessionStorage.setItem("white_slider", val);
    });

    $('#tomato_slider').on("change", function() {
        val = $('#tomato_slider').val();
        sessionStorage.setItem("tomato_slider", val);
    });

    $('#garlic_slider').on("change", function() {
        val = $('#garlic_slider').val();
        sessionStorage.setItem("garlic_slider", val);
    });


    ////////////////////////////////////////
    //Do the same thing for toppings
    ////////////////////////////////////////

    $('#bacon_slider').on("change", function() {
        val = $('#bacon_slider').val();
        sessionStorage.setItem("bacon_slider", val);
    });

    $('#pepperoni_slider').on("change", function() {
        val = $('#pepperoni_slider').val();
        sessionStorage.setItem("pepperoni_slider", val);
    });


    $('#italian_slider').on("change", function() {
        val = $('#italian_slider').val();
        sessionStorage.setItem("italian_slider", val);
    });

    $('#beef_slider').on("change", function() {
        val = $('#beef_slider').val();
        sessionStorage.setItem("beef_slider", val);
    });


    $('#ham_slider').on("change", function() {
        val = $('#ham_slider').val();
        sessionStorage.setItem("ham_slider", val);
    });

    $('#black_slider').on("change", function() {
        val = $('#black_slider').val();
        sessionStorage.setItem("black_slider", val);
    });

    $('#garlic_slider').on("change", function() {
        val = $('#garlic_slider').val();
        sessionStorage.setItem("garlic_slider", val);
    });

    $('#green_slider').on("change", function() {
        val = $('#green_slider').val();
        sessionStorage.setItem("green_slider", val);
    });


    $('#banana_slider').on("change", function() {
        val = $('#banana_slider').val();
        sessionStorage.setItem("banana_slider", val);
    });

    $('#onion_slider').on("change", function() {
        val = $('#onion_slider').val();
        sessionStorage.setItem("onion_slider", val);
    });

    $('#Pineapple_slider').on("change", function() {
        val = $('#Pineapple_slider').val();
        sessionStorage.setItem("Pineapple_slider", val);
    });

    $('#mushroom_slider').on("change", function() {
        val = $('#mushroom_slider').val();
        sessionStorage.setItem("mushroom_slider", val);
    });

    $('#tomatoes_slider').on("change", function() {
        val = $('#tomatoes_slider').val();
        sessionStorage.setItem("tomatoes_slider", val);
    });

});