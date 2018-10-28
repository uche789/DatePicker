export default class EventObserver {
    constructor () {
        this.observers = [];
    }

    subscribe (observer) {
        this.observers.push(observer);
    }

    unsubscribe (observer) {
        this.observers.filter(instance => observer != instance);
    }

    broadcast (changes) {
        this.observers.forEach(observers => observers.update(changes))
    }
}