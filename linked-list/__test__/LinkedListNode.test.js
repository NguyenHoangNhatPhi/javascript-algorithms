import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode", () => {
    it("Should create list node with value", () => {
        const node = new LinkedListNode(1);
        
        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
    });

    it("Should create list node with object as a value", () => {
        const nodeValue = {value: 1, key: "test"};
        const node = new LinkedListNode(nodeValue);

        expect(node.value.value).toBe(1);
        expect(node.value.key).toBe("test");
        expect(node.next).toBeNull();
    });

    it("Should link nodes together", () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2);
        node1.next = node2;

        expect(node1.next).toBeDefined();
        expect(node2.next).toBeNull();
        expect(node1.value).toBe(1);
        expect(node1.next.value).toBe(2);
    });

    it("Should convert node to string", () => {
        const node = new LinkedListNode(1);

        expect(node.toString()).toBe("1");

        node.value = "string value";
        expect(node.toString()).toBe("string value");
    });

    it("Should convert node to string with custom stringfer", () => {
        const nodeValue = {value: 1, key: "test"};
        const node = new LinkedListNode(nodeValue);
        const toStringCallback = value => `value: ${value.value}, key: ${value.key}`;

        expect(node.toString(toStringCallback)).toBe("value: 1, key: test");
    })

})