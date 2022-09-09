import { DoublyLinkedList } from '../src/DoublyLinkedList';

describe('DoublyLinkedList', () => {
    it('should push one element', () => {
        const list = new DoublyLinkedList();

        const node = list.push(42);

        expect(node.value).toBe(42);
        expect(node.next).toBe(null);
        expect(node.prev).toBe(null);
    });
    it('should push 4 elements and delete 3rd ', () => {
        const list = new DoublyLinkedList();
        const node1 = list.push(1);
        const node2 = list.push(2);
        const node3 = list.push(3);
        const node4 = list.push(4);
        expect(node1.next?.value).toBe(2);
        expect(node2.next?.value).toBe(3);
        expect(node3.next?.value).toBe(4);
        list.remove(node3);

        expect(node1.next?.value).toBe(2);
        expect(node2.next?.value).toBe(4);
        expect(node4.prev?.value).toBe(2);
    });
    it('should push one element and delete it', () => {
        const list = new DoublyLinkedList();
        const node = list.push(42);
        list.remove(node);

        const node1 = list.push(1);
        const node2 = list.push(2);

        expect(node1.prev).toBe(null);
        expect(node1.next).toBe(node2);
        expect(node2.prev).toBe(node1);
    });
    it('should delete last', () => {
        const list = new DoublyLinkedList();
        const node1 = list.push(1);
        const node2 = list.push(2);
        const node3 = list.push(3);
        const node4 = list.push(4);

        list.remove(node4);

        expect(node3.next).toBe(null);
    });
});
