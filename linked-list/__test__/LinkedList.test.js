import LinkedList from "../LinkedList";
import LinkedListNode from "../LinkedListNode";

describe("LinkedList", () => {

    it("Should prepend node to linked list", () => {
        const linkedList = new LinkedList();

        linkedList.prepend(2);

        expect(linkedList.head.toString()).toBe("2");
        expect(linkedList.tail.toString()).toBe("2");

        linkedList
            .append(1)
            .prepend(3);

        expect(linkedList.toString()).toBe("3,2,1");
    });

    it("Should be possible to store objects in the list and print them out", () => {
        const linkedList = new LinkedList();
        const nodeValue1 = { value: 1, key: "key1" };
        const nodeValue2 = { value: 2, key: "key2" };

        linkedList
            .append(nodeValue1)
            .prepend(nodeValue2);

        const nodeStringifier = value => `${value.key}:${value.value}`;

        expect(linkedList.toString(nodeStringifier)).toBe("key2:2,key1:1");
    })

});