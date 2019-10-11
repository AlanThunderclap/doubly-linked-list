const Node = require('./node');

class LinkedList {
    constructor() {
        this.clear();
    }

    append(data) {
        if (!this._head)
            this._head = this._tail = new Node(data);
        else {
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
        }
        
        this.length++;

        return this;
    }

    head() {
        return this._head && this._head.data ;
    }

    tail() {
        return this._tail && this._tail.data;
    }

    at(index) {
        let node = this._head;

        for (let i = 0; i < index; i++)
            node = node.next;     

        return node.data;
    }

    insertAt(index, data) {
        if (!this.length)
            return this.append(data);
            
        let node = this._head;

        for (let i = 1; i < index; i++)
            node = node.next;

        let newNode = new Node(data, node, node.next);
        node.next.prev = newNode;
        node.next = newNode;

        this.length++;
        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length = 0;
        this._head = this._tail = null;

        return this;
    }

    deleteAt(index) {
        if (this.length === 1)
            return this.clear();
        
        let node = this._head;

        for (let i = 1; i < index; i++)
            node = node.next;

        node.next = node.next.next;
        node.next.prev = node;

        this.length--;
        return this;
    }

    reverse() {
        [this._head, this._tail] = [this._tail, this._head];
        let node = this._head;

        while (node) {
            [node.next, node.prev] = [node.prev, node.next];
            node = node.next;
        }

        return this;
    }

    indexOf(data) {
        let node = this._head;

        for (let i = 0; i < this.length; i++, node = node.next) {
            if (node.data === data)
                return i;
        }

        return -1;
    }
}

module.exports = LinkedList;
