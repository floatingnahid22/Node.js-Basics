const EventEmitter = require('events');


class School extends EventEmitter {
    startPeriod() {
        console.log('class started');
    
        //raise event when bell ring
        //raise an event 
        setTimeout(() => {
            this.emit('bellRing', { // to use multiple parameter
                period: 'first',
                text: 'period ended',
            }); //after 2 sec it will run 
        }, 2000);
    }
}


module.exports = School;