//On line CSV file:  http://data.cabq.gov/government/budget/BudgetCYApprovedCABQ-en-us.csv
// destination for CSV file is ./datafiles/BudgetCYApprovedCABQ-en-us
// Ads express to our project


//---This is a template to parse a CSV file
//--------------------------------------------------------------------------
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/datafiles/BudgetCYApprovedCABQ-en-us.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    // alert(lines);
}
