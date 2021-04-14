const tableData = require("../data/tableData");
const waitListData = require("../data/waitingListData");

module.exports =(app) => {
    // when they  click on the API Table and API Wait List links, it shows you a json
    app.get("/api/tables", (request, response) => response.json(tableData));
    app.get("/api/waitlist", (request, response) => response.json(waitListData));
    
    // looks at the length of the array of objects and will let user know if there is a table or not
    app.post("/api/tables", (request, response) => {
        if(tableData.length < 5){
            // from client to you, they are submitting their info to get a table
            tableData.push(request.body); //pushing the new obj value into tableData array
            response.json('true');
        } else {
            waitListData.push(request.body); //pushing the new obj value into waiting list because no tables available
            response.json('false');
        }
    });

};