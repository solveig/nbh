/* The CRMDAO must be constructed with a connected database object */

function CRMDAO(db) {
    "use strict";
    //debugger;
    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof CRMDAO)) {
        console.log('Warning: CRMDAO constructor called without "new" operator');
        return new CRMDAO(db);
    }

    var crmx = db.collection("crm");
    
    this.getCrm = function(clients, callback) {
        "use strict";
      crmx.findOne(function(err, x) {
            "use strict";
         if (err) return callback(err, null);
             //   console.log("gc:users"+ users); undefined
           
            callback(err, x)
        });
    }

               
    // called from Content:handleCrmClient
    this.updateCrm = function (regId,statusNew,hist, callback) {
        "use strict";
        //     console.log( regId+ " regId comment " + comment);
      var permalink = "/login.html"
      	
      if (statusNew == "kommentar") {
      	//console.log('kommmmmm ser du meg eller er det bare tull');
        crmx.update({'clients.regId':+regId},{ $push:{'clients.$.history':hist}},function(err, n, something, dummy) {
            "use strict";

        if (err) return callback(err, null);
        console.log('KUpdated crm regId nr ',   regId , ' hist ' ,hist);
        callback(err,permalink);
        });
      }    
      else  {    
      	console.log('annet',statusNew);
      	 crmx.update({'clients.regId':+regId},{$set:{'clients.$.status':statusNew}, $push:{'clients.$.history':hist}},function(err, n, something, dummy) {
            "use strict";

        //console.log("n:  " + JSON.stringify(n));
        //console.log("something:  " + JSON.stringify(something, null, 4));
        //console.log("dummy:  " + JSON.stringify(dummy));
        //process.exit();
        //});
        if (err) return callback(err, null);
        console.log('AUpdated crm regId nr ',   regId , ' hist ' ,hist);
        callback(err,permalink);
        });
      }
    }  
 



    this.tullgetCrmByUser = function(user, num, callback) {
        "use strict";

        crm.find({ name : user }).sort('date', -1).limit(num).toArray(function(err, items) {
            "use strict";

            if (err) return callback(err, null);

            console.log("Found " + items.length + " crm");

            callback(err, items);
        });
    }

    this.tullgetCrmByPermalink = function(permalink, callback) {
        "use strict";
        posts.findOne({'permalink': permalink}, function(err, crm) {
            "use strict";

            if (err) return callback(err, null);

            callback(err, crm);
        });
    }


    this.tullClients = function(permalink, regId, status,hours,met,comment,date ,callback) {
        "use strict";

        var clients = {   "regId"    : regId,
                          "status"    : status,
                          "hours"     : hours,
                          "comment"   : comment, 
                          "date"      : date}
       
        crm.update({'permalink': permalink}, {'$push': {'clients': clients}}, function(err, numModified) {
            "use strict";

            if (err) return callback(err, null);

            callback(err, numModified);
        });
    }
}

module.exports.CRMDAO = CRMDAO;
