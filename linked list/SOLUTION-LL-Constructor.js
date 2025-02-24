// Define the Node class for the singly linked list
class Node {
    // Constructor for the Node class, takes a value as an argument
    constructor(value){
        // Assign the value to the 'value' property of the Node instance
        this.value = value;
        // Initialize the 'next' property to null, which will 
        // store a reference to the next node in the list
        this.next = null;
    }
}
 
class LinkedList {
    // Constructor for the LinkedList class, takes a value 
    // as an argument to create the first node in the list
    constructor(value) {
        // Create a new Node instance with the given value 
        // and assign it to the variable 'newNode'
        const newNode = new Node(value);
        // Set the 'head' property of the LinkedList instance 
        // to the newly created node (the first node in the list)
        this.head = newNode;
        // Set the 'tail' property of the LinkedList instance to the head node 
        // (the last node in the list, since there is only one node at this point)
        this.tail = this.head;
        // Initialize the 'length' property of the LinkedList instance 
        // to 1, as there is only one node in the list
        this.length = 1;
    }


    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}


function test() {
    let myLinkedList = new LinkedList(4);
    
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/