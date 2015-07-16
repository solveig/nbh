aggregate i node.js bruke []

db.crm.aggregate([{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] },
'clients.history.arkiv': true } } , { $project: { _id: 0, signature:1, clients.history:1 } } , feil
{ $unwind: '$clients' } , { $unwind: '$clients.history' } ,
 { $sort: { 'clients.psi_id': 1, 'clients.history.toDay': 1 } } ])
 
ok 
db.crm.aggregate([{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] },
'clients.history.arkiv': true } } , { $project: { _id: 0, signature:1, clients:1 } } , 
{ $unwind: '$clients' } , { $unwind: '$clients.history' } ,
 { $sort: { 'clients.psi_id': 1, 'clients.history.toDay': 1 } } ])
 
 
db.crm.drop(); 
db.crm.insert ({"contact": "kari","signature": "Kari Karlsen","clients" : []})

db.crm.update ({"contact":"kari"},
                       {$addToSet : 
                       	{"clients" : {"psi_id"        : 0,  	        
                        "history"       : [{ 
                        	"psi_id" : 0,
                        	"arkiv"        : true,
  	                      "status"       : "ny",
  	                       toDay : new Date()                 
                         }]}}});
 db.crm.update ({"contact":"kari"},
                       {$addToSet : {"clients" : {"psi_id"        : 1,  	                                 
                        "history"       : [{ 
                        	"psi_id" : 1, 
                       	  "arkiv"        : true,
  	                      "status"       : "ny",
  	                    toDay : new Date()                                   
                        }]}}});

db.crm.update ({"contact":"kari"},
                       {$addToSet : 
                       	{"clients" : {"psi_id"        : 0,  	        
                        "history"       : [{ 
                        	"psi_id" : 0,
                        	"arkiv"        : false,
  	                      "status"       : "Inkluderes",
  	                       toDay : new Date()                 
                         }]}}});
 db.crm.update ({"contact":"kari"},
                       {$addToSet : {"clients" : {"psi_id"        : 1,  	                                 
                        "history"       : [{ 
                        	"psi_id" : 1, 
                       	  "arkiv"        : true,
  	                      "status"       : "Syk",
  	                    toDay : new Date()                                   
                        }]}}});





db.crm.update ({"contact":"kari"},
                       {$addToSet : {"clients" : {"psi_id"        : 3,  	                                 
                        "history"       : [{ 
                        	"psi_id" : 3,  
                       	"arkiv"        : true,
  	                      "status"       : "Syk",
  	                      toDay : new Date()                    
                        }]}}});
db.crm.update ({"contact":"ole"},
                       {$addToSet : {"clients" : {"psi_id"        : 4,  	                               
                        "history"       : [{  
                        	"psi_id" : 4, 
                       	  "arkiv"        : false,
  	                      "status"       : "Inkluderes" ,
  	                      toDay : new Date()                   
                        }]}}});
db.crm.update ({"contact":"kari"},
                       {$addToSet : {"clients" : {"psi_id"        : 5,  	                                
                       "history"       : [{ 
                        	"psi_id" :5 ,  
                       	 "arkiv"        : true,
  	                      "status"       : "Inkluderes" ,
  	                      toDay : new Date()                   
                        }]}}});
                        db.crm.update ({"contact":"kari"},
                       {$addToSet : 
                       	{"clients" : {"psi_id"        : 6,  	        
                        "history"       : [{ 
                        	"psi_id" : 6,
                        	"arkiv"        : true,
  	                      "status"       : "ny",
  	                       toDay : new Date()                 
                         }]}}});
                         db.crm.update ({"contact":"kari"},
                       {$addToSet : 
                       	{"clients" : {"psi_id"        : 6,  	        
                        "history"       : [{ 
                        	"psi_id" : 6,
                        	"arkiv"        : true,
  	                      "status"       : "Inkludres",
  	                       toDay : new Date()                 
                         }]}}});
                         db.crm.update ({"contact":"kari"},
                       {$addToSet : 
                       	{"clients" : {"psi_id"        : 6,  	        
                        "history"       : [{ 
                        	"psi_id" : 6,
                        	"arkiv"        : false,
  	                      "status"       : "Syk",
  	                       toDay : new Date()                 
                         }]}}});
                        
                          db.crm.update ({"contact":"kari"},
                       {$addToSet : 
                       	{"clients" : {"psi_id"        : 5,  	        
                        "history"       : [{ 
                        	"psi_id" : 5,
                        	"arkiv"        : true,
  	                      "status"       : "Kommentar",
  	                       toDay : new Date()                 
                         }]}}});
                      
                        
                        
 db.crm.find().pretty()                       {
        "_id" : ObjectId("533059d0927b82a87337d8a6"),
        "clients" : [
                {
                        "psi_id" : 0,
                        "history" : [
                                {
                                        "psi_id" : 0,
                                        "arkiv" : true,
                                        "status" : "ny",
                                        "toDay" : ISODate("2014-03-24T16:14:08.4
65Z")
                                }
                        ]
                },
                {

ok
> db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' } , {
$group:{ _id: {"psi_id":"$clients.history.psi_id"}}})

ok
> db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' } ,{$
match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }, 'cl
ients.history.arkiv': true } }  )

ok
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' },
{ $sort: { 'clients.psi_id': 1, 'clients.history.toDay': 1 } }   ,
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }, 'clients.history.arkiv': true } }  )


ok ED BESTEMT ID
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$sort: { 'clients.history.psi_id': 1, 'clients.history.toDay': 1 } }   , 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] },
'clients.history.arkiv': true ,'clients.history.psi_id' : 1} } , {$group:{ _id: {"psi_id":"$clients.psi_id","hist":
"$clients.history","lastHist" : {"max" : "$clients.history.toDay"}}}} )
	
ok
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' },  
{ $match :{'clients.history.status': {'$in':['Ekskluderes','Syk','Frisk','Henlagt','Avslutt Vedlikehold']}}})	
	
ok
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$sort: { 'clients.history.psi_id': 1, 'clients.history.toDay': 1 } }   ,   
{$match :{'contact': 'kari','$clients.history.status': { '$nin': ['Kommentar']}, 
	'clients.history.status': {'$in':['Ekskluderes','Syk','Frisk','Henlagt','Avslutt Vedlikehold']}}},
{$group:{_id:{'psi_id':'$clients.psi_id','history':'$clients.history'}}})	
	
fff 
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$sort: { 'clients.history.psi_id': 1, 'clients.history.toDay': 1 } }   ,   
{$match :{'contact': 'kari','$clients.history.status': { '$nin': ['Kommentar']}, 
$and : ['clients.history.status': {'$in':['Ekskluderes','Syk','Frisk','Henlagt','Avslutt Vedlikehold',
'$clients.history.arkiv':true	]}]}},
{$group:{_id:{'psi_id':'$clients.psi_id','history':'$clients.history'}}})
	 
 	
tryk
> db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$sort: { 'clients.history.psi_id': 1, 'clients.history.toDay': 1 } }   ,   
{$match :{'contact': 'kari','clients.history.status': { '$nin': ['Kommentar']}, 
	'clients.history.arkiv': true,
'clients.history.status': {'$in':['Ekskluderes','Syk','Frisk','Henlagt','Avslutt Vedlikehold']}}},
{$group:{_id:{'psi_id':'$clients.psi_id','history':'$clients.history'}}})
 	
 
ok
> db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, {$
sort: { 'clients.history.psi_id': 1, 'clients.history.toDay': 1 } }   ,  {$match
:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,   {$
group:{ _id: {"$cond": [{$eq:["$clients.history.arkiv",false]}, {"arkiv": "$clie
nts.history.arkiv"}, { "arkiv": "$clients.history.arkiv","psi_id": "$clients.his
tory.psi_id",  "status":"$clients.history.status"}]}}}) 
 
 
 nå ok
 db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$sort: { 'clients.history.psi_id': 1, 'clients.history.toDay': 1 } }   ,
 {$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } , 
 {$group:{ _id: {"$cond": [{$eq:["$clients.history.status",'Syk']},
 	{}, 	
{ "arkiv": "$clients.history.arkiv","psi_id": "$clients.history.psi_id",
 "status":"$clients.history.status"}]}}})
 
 
Kommentar




tja
db.crm.find({'clients.history.status': {'$in':['Ekskluderes','Syk','Frisk','Henlagt','Avslutt Vedlikehold']}})
{ qty: { $in: [ 5, 15 ] } }	
	
	
	
	
	

tja
db.crm.aggregate( { $match :{'clients.history.status': {'$in':['Ekskluderes','
Syk','Frisk','Henlagt','Avslutt Vedlikehold']}}})

-----Arkiverte ,arkiv=true, hente alt
ok siste Arkiverte
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' },
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:["$clients.history.arkiv",true]},
{ 'psi_id':'$clients.psi_id','history': '$clients.history',
'lastHist' : {'max' : '$clients.history.toDay'}}, {}]}}},
{$match:{'_id.history.psi_id':{'$exists':true}}},
{$sort: { '_id.history.psi_id': 1}}  )

-----Kommentar ikke ikke for de som er ferdig behandlet dvs  i syk ..and arkiv=true, ha med kun id og status		
	ikke ha $ foran clients.history.status i $and , men i $eq må jeg ha det.
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar']} , 
'$and':  [{'clients.history.status': {'$nin':['Ekskluderes','Syk','Frisk','Henlagt','Avslutt Vedlikehold']}},
{'clients.history.arkiv':true} ] }} ,{$group:{ _id: {'psi_id':'$clients.psi_id','status': '$clients.history.status', 'lastHist' : 
{'max' : '$clients.history.toDay'}}}}, {$sort: { '_id.history.psi_id': 1}}  )
	

----Lag Rapport 
-if ferdig behandlt og arkiv = true,henter ingenting
- if arkiv = false hene alt else hene psi og status'
-for psi nr legge il en ekstra spørring
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' },
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id:{"$cond": [{$eq:["$clients.history.arkiv",false]},
{ 'psi_id':'$clients.psi_id','history': '$clients.history'}, 
{ '$cond': [{$eq:['$clients.history.status','Syk']},
{ 'psi_id':'$clients.psi_id','status': '$clients.history.status'}, {}]}  ]}} 
})

{$match:{'_id.history.psi_id':{'$exists':true}}},
{$sort: { '_id.history.psi_id': 1}}  )
---hmmmm
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' },
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id:{"$cond": [{$eq:["$clients.history.arkiv",false]},
{ 'psi_id':'$clients.psi_id','history': '$clients.history',
'lastHist' : {'max' : '$clients.history.toDay'}}, 
{ '$cond': [{$eq:['$clients.history.status','Syk']},
{ 'psi_id':'$clients.psi_id','status': '$clients.history.status',
'lastHist' : {'max' : '$clients.history.toDay'}}, {}]}  ]}} 
})
	
--

	{"$cond": [{$eq:["$clients.history.arkiv",true]},
{ 'psi_id':'$clients.psi_id','history': '$clients.history',
'lastHist' : {'max' : '$clients.history.toDay'}}, {}]}
	}},




starter 
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' },
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:["$clients.history.arkiv",true]},
{ 'psi_id':'$clients.psi_id','history': '$clients.history',
'lastHist' : {'max' : '$clients.history.toDay'}}, {}]}}},
{$match:{'_id.history.psi_id':{'$exists':true}}},
{$sort: { '_id.history.psi_id': 1}}  )
---	
	
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id:{"$cond": [{$eq:["$clients.history.arkiv",false]}, 
{ 'psi_id':'$clients.psi_id','history': '$clients.history'},
{ '$cond': [{$eq:['$clients.history.status','Syk']}, 
{ 'psi_id':'$clients.psi_id','status': '$clients.history.status'}, {}]}]}}},
	{$group:{ _id2:{'her':'_id',lastHist' : {'max' : '$clients.history.toDay'}}}})
	
	
	-----ferdig kladd
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} },
	{$group:{ _id: {'psi_id':'$clients.psi_id','history': '$clients.history',
		'lastHist':{ $max: 'clients.history.toDay'}}}})
		,
		
 {$group:{ _id:{"$cond": [{$eq:["$clients.history.arkiv",false]},  
 	{ 'psi_id':'clients.psi_id','history': '$clients.history'}, 
 	{ '$cond': [{$eq:['$clients.hisory.status','Syk']},  
 		{ 'psi_id':'$clients.psi_id','status': '$clients.history.status'}, {}]}]}}})
{
        "result" : [
                {
                        "_id" : null
                },
                {
                        "_id" : 0
                },
                {
                        "_id" : 1
                }
        ],
        "ok" : 1
}
>
lag rapport hente altarkiv=

db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' },
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:["$clients.history.arkiv",false]},
{ 'psi_id':'$clients.psi_id','history': '$clients.history'}, {}]}}},
{$match:{'_id.history.psi_id':{'$exists':true}}},
{$sort: { '_id.history.psi_id': 1}},
{$group :{ '_id':'noused', 'siste': {'$max' : '$_id.history.toDay'}}  })


 { "$group": {
       "_id": "$_id",
       "date_submitted": { "$max": "$submissions.date_submitted" }
   }}

{'$group' : {'lastHist' : {'$max' : '$clients.history.toDay'}}}

problem hadde max inne i cind i group


obs,obs



-----
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:["$clients.history.arkiv",false]}, 
{ 'history':'$clients.history'}, {}]}}}, {$match:{'_id.history.psi_id':{'$exists':true}}}, 
 {$group :{ '_id':{'history':'$_id.history'},
'siste': {'$max' : '$_id.history.toDay'}}},
{$sort: { '_id.history.psi_id': 1}},
{$project: { '_id.history.psi_id': 1}},)


{
        "result" : [
                {
                        "_id" : {
                                "history" : {
                                        "psi_id" : 0,
                                        "arkiv" : false,
                                        "status" : "Inkluderes",
                                        "toDay" : ISODate("2014-03-31T14:52:00.6
25Z")
                                }
                        },
                        "siste" : ISODate("2014-03-31T14:52:00.625Z")
                }
        ],
        "ok" : 1
}
>finner alt når false
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:["$clients.history.arkiv",false]},
{ 'history':'$clients.history'}, {}]}}}, {$match:{'_id.history.psi_id':{'$exists':true}}},
{$group :{ '_id':{'history':'$_id.history'}, 'siste': {'$max' : '$_id.history.toDay'}}},
{$sort: { '_id.history.psi_id': 1}},
{$project: { '_id.history': 1}})
{
        "result" : [
                {
                        "_id" : {
                                "history" : {
                                        "psi_id" : 0,
                                        "arkiv" : false,
                                        "status" : "Inkluderes",
                                        "toDay" : ISODate("2014-03-31T14:52:00.6
25Z")
                                }
                        }
                }
        ],
        "ok" : 1
}


db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:['$clients.history.arkiv',false]},
{ 'history':'$clients.history'}, { '$cond': [{$eq:['$clients.history.status','Syk']}, 
{'history':'$clients.history' }, {}]}]}}}, {$match:{'_id.history.psi_id':{'$exists':true}}},
{$group :{ '_id':{'history':'$_id.history'}, 'siste': {'$max' : '$_id.history.toDay'}}},
{$sort: { '_id.history.psi_id': 1}},
{$project: { '_id.history': 1}})


{ '$cond': [{$eq:['$clients.history.status','Syk']}, 
{ 'psi_id':'$clients.psi_id','status': '$clients.history.status'}, {}]}
	
	db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:['$clients.history.arkiv',false]},
{ 'history':'$clients.history'}, { '$cond': [{$eq:['$clients.history.status','Syk']}, 
{'history':'$clients.history' }, {}]}]}}}, {$match:{'_id.history.psi_id':{'$exists':true}}},
{$group :{ '_id':{'history':'$_id.history'}, 'siste': {'$max' : '$_id.history.toDay'}}},
{$sort: { '_id.history.psi_id': 1}},
{$project: { '_id.history': 1}})


ok
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:['$clients.history.arkiv',false]},
{ 'history':'$clients.history'}, { '$cond': [{$eq:['$clients.history.status','Syk']}, {'history':'$clients.history' },
{}]}]}}},

{$match:{'_id.history.psi_id':{'$exists':true}}},
{$group : { '_id':{'hist':'$_id.history'}, 'siste': {'$max' : '$_id.history.toDay'}}},
{$group : { _id: {'$cond': [{$eq:['$_id.hist.arkiv',true]},{'history' :'$_id.hist'},
{'history':{'psi_id':'$_id.hist.psi_id','status':'$_id.hist.status'}}]}}},
{$sort: { '_id.history.psi_id': 1}},
{$project: { '_id.history': 1}})

{
        "result" : [
                {
                        "_id" : {
                                "history" : {
                                        "psi_id" : 0,
                                        "status" : "Inkluderes"
                                }
                        }
                },
                {
                        "_id" : {
                                "history" : {
                                        "psi_id" : 1,
                                        "arkiv" : true,
                                        "status" : "Syk",
                                        "toDay" : ISODate("2014-03-31T14:52:00.6
70Z")
                                }
                        }
                }
        ],
        "ok" : 1
}
>

ok
db.crm.aggregate({ $unwind: '$clients' } , { $unwind: '$clients.history' }, 
{$match:{ contact: 'kari','clients.history.status': { '$nin': ['Kommentar'] }} } ,
{$group:{ _id: {"$cond": [{$eq:['$clients.history.arkiv',false]},
{ 'history':'$clients.history'}, 
{ '$cond': [{$eq:['$clients.history.status','Ekskluderes']}, {'history':'$clients.history' },
{ '$cond': [{$eq:['$clients.history.status','Syk']}, {'history':'$clients.history' },
{ '$cond': [{$eq:['$clients.history.status','Frisk']}, {'history':'$clients.history' },
{ '$cond': [{$eq:['$clients.history.status','Henlagt']}, {'history':'$clients.history' },
{ '$cond': [{$eq:['$clients.history.status','Avslutt vedlikehold']}, {'history':'$clients.history' },
{}]}]}]}]}]}]}}},
{$match:{'_id.history.psi_id':{'$exists':true}}},
{$group : { '_id':{'hist':'$_id.history'}, 'siste': {'$max' : '$_id.history.toDay'}}},
{$group : { _id: {'$cond': [{$eq:['$_id.hist.arkiv',true]},{'history' :'$_id.hist'},
{'history':{'psi_id':'$_id.hist.psi_id','status':'$_id.hist.status'}}]}}},
{$sort: { '_id.history.psi_id': 1}},
{$project: { '_id.history': 1}})

koden
db.crm.aggregate({ '$unwind': '$clients' } , { '$unwind': '$clients.history' } , 
{ '$match':{ contact: 'kari', status: { '$nin': [Object] } } } ,
 { '$group': { _id: { '$cond': [Object] } } } ',' { '$match': { '_id.history.psi_id': { '$exists': true }
 } } ',' { '$group':
   { _id: { hist: '$_id.history' },
     siste: { '$max': '$_id.history.toDay' } } } ',' { '$group': { _id: { '$cond
': [Object] } } } ',' { '$sort': { '_id.history.psi_id': 1 } } ',' { '$project':
 { _id: 0, psi_id: 1, signature: 1, history: 1 } }
 	
 	
 	
 	To convert a JSON string into a JavaScript object, you simply pass the JSON string into the JSON.parse() method, like this:

var jsObject = JSON.parse(jsonString);
 	
 	    // Need Json string to be an javascriptarray
    var obj1 = JSON.parse(docs);    
    console.log('her',JSON.stringify(obj1));

To convert a JavaScript object into a JSON string, pass the object into the JSON.stringify() method:

var foo = {};
foo.bar = "new property";
foo.baz = 3;

var jsonString = JSON.stringify(foo);
jsonString now holds '{"bar":"new property","baz":3}'.


..........
project = {$project : {
        "s" : {
            "$ifNull" : [
                "$solved",
                [
                    {
                        "points" : 0
                    }
                ]
            ]
        },
        "login" : 1
    }
};
unwind={$unwind:"$s"};
group= { "$group" : {
        "_id" : "$_id",
        "login" : {
            "$first" : "$login"
        },
        "score" : {
            "$sum" : "$s.points"
        }
    }
}

project -id:0 er lov, de andre kan ikke ha 0, men det er bare ikke åta dem med, så forsvinner de

Sjekk to field mot hverandre fungerte i kommentar i crm tok utgangspunkt i denne
...try
db.so.ensureIndex( { name: 1 } );
db.so.aggregate( [
    { $match: { name: 'charles' } },
    { $project: { 
        modified: 1, 
        sync: 1,
        name: 1,
        eq: { $cond: [ { $gt: [ '$modified', '$sync' ] }, 1, 0 ] } 
    } },
    { $match: { eq: 1 } }
] );

db.crm.aggregate( [
    { $match: { 'contact': 'kari' } },
    { $unwind: '$history' },
    { $project: { 
        psi_id: 1, 
        status: 1,
        history: 1,
        eq: { $cond: [ { $eq: [ '$status', '$history.status' ] }, 1, 0 ] } 
    } },
    { $match: { eq: 1 } }
] ).pretty();

!!!!!!!!Obs splitting i en kodelinje feil, kan gi rare feilmeldinger som Display all possibilities
space og tab kan ødelegge inne i en and. ta den helt inn til veggen

---solveig
resultsCollection.aggregate(
{ $match : { testid : testid} },
{ $skip : alreadyRead },
{ $project : {
        timeStamp : 1 ,
        label : 1,
        responseCode : 1 ,
        value : 1,
        success : 1
    }},
flere fields i group    
{ $group : {
        _id :  { success:'$success', responseCode:'$responseCode', label:'$label'},
        max_timeStamp : { $timeStamp : 1 },
        count_responseCode : { $sum : 1 },
        avg_value : { $sum : "$value" },
        count_success : { $sum : 1 }
    }}
);
--



nytt mongoddb 2.6
var returnedDoc = db.orders.aggregate( [
    {
      $group: {
         _id: "$cust_id",
         total: { $sum: "$price" }
      }
    }
] );

var myArray = returnedDoc.result; // access the result field  trengs ikke mer

myArray.forEach( function(x) { printjson (x); } );

...
db.sizes.aggregate( [ { "$project" : {
                "tags" : {"$ifNull":["$tags", null]}, 
                "_id"  : 0, 
                "size" : { "$let" : { 
                    "vars" : { "isArray" : {"$cond": {"if" : {"$eq":["$tags.0",[]]}, "then":true, "else":false} } }, 
                    "in"   : { "$cond" : { "if" : "$$isArray", "then":{"$size":"$tags"}, "else":null } } 
                } } 
} } ] )
{ "tags" : null, "size" : null }
{ "tags" : 1, "size" : null }
{ "tags" : [ 1 ], "size" : 1 }
{ "tags" : [ [ 1 ], 1 ], "size" : 2 }
{ "tags" : { "a" : [ 1 ] }, "size" : null }
{ "tags" : 0, "size" : null }
{ "tags" : null, "size" : null }

Size of array
db.users.aggregate(
   [
      {
         $group: {
            _id: "$username",
            tags_count:  {$size: "$tags" }
         }
      }
   ]
)
hmm How to find mongo documents with a same field
db.mycollection.aggregate(
    { $group: { 
        // Group by fields to match on (a,b)
        _id: { a: "$a", b: "$b" },

        // Count number of matching docs for the group
        count: { $sum:  1 },

        // Save the _id for matching docs
        docs: { $push: "$_id" }
    }},

    // Limit results to duplicates (more than 1 match) 
    { $match: {
        count: { $gt : 1 }
    }}
)

!!!!!!!
$setIsSubset (aggregation)¶