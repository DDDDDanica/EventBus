import EventBus from '/EventBus';

export default class subscribe () {
  this.searchHandle = EventBus.subscribe('search', (data)=>{
            console.log('data', data);
          };

          //unsubscribe to prevent memory leak
  EventBus.unsubscribe(this.searchHandle);
}
