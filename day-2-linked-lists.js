class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addValue(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    get(position) {
        if (position > -1) {
            let current = this.head;
            let i = 0;
            while (current !== null && i < position) {
                current = current.next;
                i++;
            }
            return current !== null ? current.value : undefined;
        } else {
            return undefined;
        }
    }

    remove(position) {
        if (this.head === null || position < 0 || position >= this.size()) {
            throw new RangeError(`No item at position ${position}`);
        }

        if (position === 0) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        let previous = null;
        let i = 0;

        while (current !== null && i < position) {
            previous = current;
            current = current.next;
            i++;
        }

        if (current !== null) {
            previous.next = current.next;
            return true;
        }
        throw new RangeError(`No item at position ${position}`);
    }

    values() {
        let current = this.head;
        let values = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    isEmpty() {
        return this.head === null;
    }
}

const list = new LinkedList();