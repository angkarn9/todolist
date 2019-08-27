export class Todo {
    id: number;
    topic: string;
    description: string;

    constructor({id, topic, description}: {id: number, topic: string, description: string}) {
        this.id = id;
        this.topic = topic;
        this.description = description;
    }
}
