import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'links.insert': function(url){
    //console.log(url + ' is valid?')
    check(url, Match.Where( (url)=>{ return validUrl.isUri(url)}))

    //passed? save the url
    const token = Math.random().toString(36).slice(-6);
    Links.insert({url, token, clicks:0});
  }
});



export const Links = new Mongo.Collection('links');
