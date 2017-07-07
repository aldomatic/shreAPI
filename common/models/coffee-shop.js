'use strict';

module.exports = function(Coffeeshop) {

    Coffeeshop.status = function(cb){
        cb(null, 'This is a remote method!');
    }


    Coffeeshop.remoteMethod(
        'status', {
        http: {
            path: '/status',
            verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
        }
    );

};
