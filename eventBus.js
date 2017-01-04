let subscribers = [];

export default {
    subscribe (eventName, callback) {
        let handle = {eventName, callback};
        subscribers.push(handle);
        return handle;
    },

    unsubscribe (handle) {
        subscribers.splice(subscribers.indexOf(handle), 1);
    },

    //pass the data
    publish (eventName, data) {
        subscribers.forEach((subscriber) => {
            if (subscriber.eventName == eventName) {
                subscriber.callback(data);
            }
        })
    }
};
