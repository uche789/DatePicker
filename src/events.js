export class EventObserver {
    constructor(type = '', callback = () => {}) {
        this.type = type;
        this.callback = callback
    }
}

export class EventHandler {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        if (!(observer instanceof EventObserver)) {
            throw new Error('Invalid argument: Observer');
        }
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        if (!(observer instanceof EventObserver)) {
            throw new Error('Invalid argument: Observer');
        }
        this.observers = this.observers.filter(instance => observer != instance);
    }

    broadcast(observerType, changes) {
        this.observers
            .filter(observer => observer.type === observerType)
            .forEach(observer => observer.callback(changes))
    }
}