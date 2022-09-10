export class Node<T> {
    public value: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    public push = (value: T) => {
        const newNode = new Node(value);

        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            return this.tail;
        }
        this.head = newNode;
        this.tail = newNode;
        return this.tail;
    };

    public remove = (node: Node<T>) => {
        if (this.head === node && node === this.tail) {
            this.head = null;
            this.tail = null;

            return;
        }
        if (this.head === node) {
            this.head = this.head.next;
            return;
        }
        if (this.tail === node) {
            this.tail = this.tail.prev;
            if (this.tail?.next) {
                this.tail.next = null;
            }
            return;
        }

        if (node.next != null) {
            node.next.prev = node.prev;
        }
        if (node.prev != null) {
            node.prev.next = node.next;
        }
        return;
    };
}
