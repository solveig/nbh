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
db.crm.insert ({"contact": "kari","history" : []})

db.crm.update ({"contact":"kari"},
                       {$addToSet : 
                       	{"history"       : [{ 
                           "psi_id" : 0,
                           "arkiv"        : true,
  	                        "status"       : "ny",
  	                        "toDay" : new Date(),
  	                        "signature": "Kari Karlsen",                 
                         }]}});
                        
                        
 db.crm.find().pretty()                       {
 	
 
 ojk
 db.crm.aggregate([{ "$project": { _id: 0, psi_id:1, "clients.history.status":1
 ,"clients.history.psi_id":1,"clients.history.arkiv":1} }   ])
 
 ])
 
 "highestScore" : {"$ max" : "$score"}

'clients.history.status': { '$nin': ['Kommentar'] }
ok
> db.crm.aggregate([{"$match":{ contact: 'kari'}}, { "$project": { _id: 0, psi_i
d:1, "clients.history.status":1 ,"clients.history.psi_id":1,"clients.history.ark
iv":1} }   ])


 db.crm.aggregate([                                      { $unwind: '$clients' },{"$match":{ contact: 'kari'}}, { "$project": { _id: 0, psi_i
d:1, "clients.history.status":1 ,"clients.history.psi_id":1,"clients.history.ark
iv":1} }   ])

