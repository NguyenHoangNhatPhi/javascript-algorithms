import LinkedListNode from "./LinkedListNode";
import Compatator from "../utils/Comparator";

class LinkedList {
    constructor(comparatorFunction = null) {
        this.head = null;
        this.tail = null;
        this.compare = new Compatator(comparatorFunction);
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    toString(callback = null) {
        return this.toArray()
            .map((node) => node.toString(callback))
            .toString();
    }

}

export default LinkedList;