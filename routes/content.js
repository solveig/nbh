var CRMDAO   = require('../crm').CRMDAO ,sanitize = require('validator').sanitize; // Helper to sanitize form input
var CRM_CONST  = require('./href/crm_const_no'); 


/* The ContentHandler must be constructed with a connected db */
/* console.log , see the windows where node app.js is started */
/* psi the very first firm this was made for */
/* client specify what we to collect in database */
/* each user has an unique psi_id for all his clients */

function ContentHandler (db) {
    'use strict';


 var crmClient = new CRMDAO(db);

 this.displayMainPage = function(req, res, next) {
        'use strict';
     if (!req.username) return res.redirect('/login');
     var  clients = req.clients;  // tror jeg kan fjerne dette 
   
     
     crmClient.getCrm( clients,function(err, x) {
            'use strict';
     if (err) return next(err);
     if(!x) return res.redirect('/post_not_found');
     var allClient=x.clients;
     var client    =  new Array();   
     var cli;
     var id = 0;
   
      for (cli in allClient ) {
     	  //console.log('cli:'+cli+'contact='+allClient[cli]['contact']);
        if (req.username == allClient[cli]['contact']) {
        	 client[id] = allClient[cli];
        	 id++;       
        }
     }   
     var signature=null;
     var users = x.users;
     var ind = 0;
     var goOn = true;
     while ( goOn && ind < users.length ) {
        if (req.username == users[ind]['name']) {
        	signature = users[ind]['signature'];
        	goOn = false;
        	console.log("signature ",signature);
        }
        ind++;
    
     }   
     if (goOn)  {
     	console.log("Signature is not found for " ,req.username," ",users[6]); 
     }
     //debugger;
     //console.log('time ',crm_var.treatHours_txt);
     // obs thisday_txt var for lang ellernoe annetrart kanskje bruk av thisvariabel i render
       	 //todo:['ny', 'iBehandling','iVedlikehold'],
    var crm = {
 
       errors: null,
       psiNy: 0,     
       status: null, 
       statusNew:null,  

      assA:null,
       assB:null,
       assC:null,




     notes: null,    
       showUp: ['ny', 'iBehandling', 'iVedlikehold'],                                   
 
      'client' :client ,                                // from database
       username: req.username,                          // name when login 
       signature: signature
     };
     
    
     return   res.render( 'newCrmClient_template' , 
     { crmC: CRM_CONST,crm: crm });
  });
 };


    this.displayCrmNotFound = function(req, res, next) {
        'use strict';
        return res.send('Sorry, crm not found', 404);
    };
  
 this.displayCrmClient = function(req, res, next) {
        'use strict';
       debugger;
        if (!req.username) return res.redirect('/login');
         console.log('fra displayCrmClient !!!!!!!!!!!!!!!!!!!!!!!!!!');
         console.log(req);
        return res.render('newCrmClient_template', {
           
        });
    };

    function extract_clients(clients) {
        'use strict';
  
        var cleaned = [];
      
        var clients_array = clients.split(',');

        for (var i = 0; i < clients_array.length; i++) {
            if ((cleaned.indexOf(clients_array[i]) == -1) && clients_array[i] != '') {
                cleaned.push(clients_array[i].replace(/\s/g,''));
            }
        }

        return cleaned
    }
    // called from newCrmClient submit form
    this.handleCrmClient = function(req, res, next) {
        'use strict';
        debugger;
       
      if (!req.username) return res.redirect('/signup');
        var status       = req.body.status;
        console.log('første status0',status);
        var statusNew;
        if (status in {'henlagt':1,'kommentar':1,'syk':1,'avsluttVedlikehold':1}) {
            statusNew = status;
        }
        else {
            statusNew    = req.body.statusNew;
       } 	
        var psi_id    = req.body.psiNy;
        
        console.log(psi_id ,'Status er  .....',statusNew);
      
        var assA = '_';
        var assB = '_';
        var assC = '_';
        var indAss = 1;  
       // if (statusNew in {'ekskludert':1,'iBehandling':1}) {
       //  	indAss = 0;
       // } 	
         
        if (req.body.assA == 'X') {
          assA = 'X';
        }               	
        if (req.body.assB == 'X') {
          assB = 'X';
        }
        if (req.body.assC == 'X') {
          assC = 'X';
        }
            
        var hist   = {};
        
        var currentTime = new Date()
        var month = currentTime.getMonth() + 1
        var day   = currentTime.getDate()
        var year  = currentTime.getFullYear()
        var toDay = day + "." + month + "." + year
        console.log('toDay=',toDay);
        console.log(' considerations=',req.body.considerations);
        //console.log('studydate=',rec.body.studyDate);
        //console.log("signatur=",req.body.signature," today=",toDay);
        switch (statusNew) {       
        case 'iRegistrering' :
           hist = {
           	    status         : statusNew,
                studyDate      : req.body.studyDate,
                studyHours     : req.body.studyHours,
                studyMin       : req.body.studyMin,
                airA           : airA, 
                airB           : airB,
                airC           : airC, 
                notes          : req.body.notes[0],
                signature      : req.body.signature,
                psi_id         : psi_id,	 
                toDay          : toDay,
                valgtTitle     : CRM_CONST.title_txt 
           };          
             console.log('iRegistrering:studydate',hist.studyDate);
           break;
         case 'iArkiv' :
           hist = {
           	    status         : statusNew,
                studyDate      : req.body.studyDate,
                studyHours     : req.body.studyHours,
                studyMin       : req.body.studyMin,
                airA           : airA, 
                airB           : airB,
                airC           : airC, 
                notes          : req.body.notes[0],
                signature      : req.body.signature,
                psi_id         : psi_id,	 
                toDay          : toDay,
                valgtTitle     : CRM_CONST.title_txt 
           };          
             console.log('iArkiv:studydate',hist.studyDate);
           break;
       
        case 'kommentar' :
           hist = {
           	   status       : statusNew,
        	     notesDate    : req.body.notesDate,
        	     notes        : req.body.notes[2],
           }
           break;
        default:
        	  console.log(' Feil her  '+statusNew);
        }; 	
      //  'client' :client ,                                // from database
     //  username: req.username                          // name when login 
 
        var perm = 'tja';
        if (typeof psi_id == 'undefined') {
          next(Error('Please choose a PSI nr!'));
         
        }
        else {
        	crmClient.updateCrm(psi_id,statusNew,hist, function(err, perm) {
            'use strict';

            if (err) return next(err);

            // now redirect to the blog permalink
           // return res.redirect('/' )
          });
        	        
          //console.log("nochang ",req.body.noChange);    console.log("submit ",req.body.submit1);         
          if (req.body.submit1 == "Lagre")  {
            if (statusNew in {'iRegistrering':1,'iArkiv':1}) {
              return   res.render( 'print_template' , { valgt: statusNew,crm: hist });
            }   
            else {
              if (statusNew in {kommentar:1}) {
                return res.redirect('/');
              }  
              else {
         	      return  res.send('FEIL!!!! ID:' + psi_id + ' ' + statusNew );
         	      return res.redirect('/'); 
              }     	
            }
          }   
          else {
            return res.redirect('/');        
          }
        };
      };
    };

module.exports = ContentHandler;


