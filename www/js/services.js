angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('Store', function(){

    var person_items = 
        {
            id: '1',
            username: 'visitor',
            quantity: 3
        };

    this.getItem = function (id) {

        return person_items;
        
    };

    this.getSelected = function() {

        return person_items;
        
    };
    
    this.getUsername = function() {

        return person_items.username;
        
    };

    this.setUserinfo = function(id,username) {
        
        person_items.id = id;
        person_items.username = username;
        return true;
        
    };

    





});