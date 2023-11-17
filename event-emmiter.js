const EventEmitter = require('events')

const myEvent = new EventEmitter();
myEvent.on('birthday', ()=>{
 console.log('happy birthday too you');
})

myEvent.on('birthday', (gift)=>{
 console.log(`i will give you ${gift}`);
})

myEvent.emit('birthday', 'bike')