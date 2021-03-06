/**
 * AlertController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    subscribeToAlerts: function(req, res){
    	var room = req.param('roomName');
    	sails.sockets.join(req, room);
    	res.json({
    		message: 'Subscribed to '+room+'!'
    	});
    },
    broadcastAlert: function(req, res){
    	var room = req.param('roomName');
    	var alert = req.param('alert');
    	sails.sockets.broadcast(room, 'alert', alert, req.socket);
    	res.json({
    		message: 'Alert sent!'
    	});
    }


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AlertController)
   */
  //_config: {}

};
