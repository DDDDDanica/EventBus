import EventBus from '/src/eventBus';

function  subscribe() {
  this.searchHandle = EventBus.subscribe('search', data =>{
    console.log('data', data);
  });

  //unsubscribe to prevent memory leak
  EventBus.unsubscribe(this.searchHandle);
}
