import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function(){
    return Links.find({});
  })
});

function onRoute(req, res, next){
  console.log(req.params.token, Links.findOne({token: req.params.token}))
  const link = Links.findOne({token: req.params.token});

  if(link){

    //use mongo-style modifiers (look in meteor manual) to update db
    Links.update(link, {$inc: {'clicks':1}});
    //above, we don't need to use a meteor method because we're alread on
    //the server. Meteor methods are only necessary on the client.

    res.writeHead(307, {'Location': link.url});
    res.end();
  }else{
    next();
  }

}

const middleware = ConnectRoute(function(router){
  router.get('/:token', onRoute)
})

WebApp.connectHandlers.use( middleware );
