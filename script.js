// Factory function which represents the full list
function LinkedList() {
  return {
    head: null,
    append: function (value) {
      const newNode = Node(value);

      // If linked list is empty, make new node the head
      if (!this.head) {
        this.head = newNode;
        // Else, find last node in the list and make it point to the new node
      } else {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.setNext(newNode);
      }
    },
    prepend: function (value) {
      const newNode = Node(value);

      // Make new node the head
      const secondNode = this.head;
      this.head = newNode;
      this.head.setNext(secondNode);
    },

    getSize: function () {
      if (!this.head) return 0;
      else {
        let size = 1;
        let currentNode = this.head;

        while (currentNode.next) {
          size++;
          currentNode = currentNode.next;
        }
        return size;
      }
    },

    getHead: function () {
      return this.head;
    },

    getTail: function () {
      if (!this.head) return null;
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      return lastNode;
    },

    getNodeAt: function (index) {
      if (!this.head) return null;
      let currentNode = this.head;
      for (let i = 0; i <= index; i++) {
        if (i === 0) currentNode = currentNode;
        else currentNode = currentNode.next;
      }
      return currentNode;
    },

    // Method that ruins the last element from the list
    pop: function () {
      const size = this.getSize();

      let currentNode = null;
      if (!size) return 0;
      if (size === 1) this.head = null;
      else {
        currentNode = this.head;
        for (let i = 1; i < size - 1; i++) {
          currentNode = currentNode.next;
        }
        // Make second last node point to null, effectively removing the last node
        currentNode.setNext(null);
      }
    },

    contains: function (value) {
      if (!this.head) return false;
      let currentNode = this.head;
      if (currentNode.data === value) return true;
      else {
        while (currentNode.next) {
          currentNode = currentNode.next;
          if (currentNode.data === value) return true;
        }
        return false;
      }
    },

    // Find which index contains the desired value
    find: function (value) {
      let index = 0;
      if (!this.head) return null;
      let currentNode = this.head;
      if (currentNode.data === value) return 0;
      else {
        while (currentNode.next) {
          currentNode = currentNode.next;
          index++;
          if (currentNode.data === value) return index;
        }
      }
      return null;
    },

    toString: function () {
      if (!this.head) return null;
      let currentNode = this.head;
      process.stdout.write(`( ${currentNode.data} )`);
      while (currentNode.next) {
        currentNode = currentNode.next;
        process.stdout.write(` -> ( ${currentNode.data} )`);
      }
      process.stdout.write(" -> null");
      return "";
    },

    insertAt: function (value, index) {
      // Create new node
      const newNode = Node(value);

      // Fail the method call if there is no head and index is greater than 0
      if (index > 0 && !this.head) {
        console.log("Failed");
        return "";
      }

      // Make new node the head if there is no head and index is 0
      if (index === 0 && !this.head) {
        this.head = newNode;
        return "";
      }

      // Check if there is a node before the passed by reference index
      let testNode = this.head;
      for (let i = 1; i <= index - 1; i++) {
        testNode = testNode.next;
      }
      if (!testNode) {
        console.log("Failed");
        return "";
      }

      // Make new node the head if index is 0 and point it to the previous head if there is one
      if (index === 0 && this.head) {
        const previousHead = this.head;
        this.head = newNode;
        newNode.setNext(previousHead);
        return "";
      }
      // For all other cases, do the following...
      // Get node previous to provided index
      let previousNode = this.head;
      for (let i = 1; i <= index - 1; i++) {
        previousNode = previousNode.next;
      }
      // Get node at provided index
      let currentNode = this.head;
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next;
      }
      // Point new node towards the "current node"
      newNode.setNext(currentNode);
      // Point previous node towards the new node
      previousNode.setNext(newNode);
    },

    removeAt: function (index) {
      // If index is 0 and there is no head, return
      if (index === 0 && !this.head) {
        console.log("Failed");
        return "";
      }
      // Check if there is a node at the given index
      let testNode = this.head;
      for (let i = 1; i <= index; i++) {
        testNode = testNode.next;
      }
      if (!testNode) {
        console.log("Failed");
        return "";
      }
      // If index is 0, remove the node and make the new first node the head
      if (index === 0) {
        const previousHead = this.head;
        const nextNode = previousHead.next;
        previousHead.setNext(null);
        this.head = nextNode;
      }
      // If index is greater than 0, remove the node at the index, and make the previous node point to the next node
      if (index > 0) {
        let testNode = this.head;
        let previousNode;
        let nodeToBeRemoved;
        let nextNode;
        if (index === 1) previousNode = this.head;
        for (let i = 1; i <= index + 1; i++) {
          testNode = testNode.next;
          if (i === index - 1) {
            previousNode = testNode;
          }
          if (i === index) {
            nodeToBeRemoved = testNode;
          }
          if (i === index + 1) {
            nextNode = testNode;
          }
        }
        previousNode.setNext(nextNode);
        nodeToBeRemoved.setNext(null);
      }
    },
  };
}

// Factory function for creating new nodes, complete with methods to update properties
function Node(value = null, nextNode = null) {
  return {
    data: value,
    next: nextNode,
    setValue: function (newData) {
      this.data = newData;
    },
    setNext: function (newNextNode) {
      this.next = newNextNode;
    },
  };
}

// TEST THE LINKED LIST

const myList = LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.prepend(5);
console.log(myList.getSize());
console.log(myList.getHead());
console.log(myList.getTail());
console.log(myList.getNodeAt(1));
console.log(myList.contains(5));
console.log(myList.find(20));
console.log(myList.toString);

myList.pop();
console.log(myList.toString());

myList.insertAt(1, 1);
console.log(myList.toString());

myList.removeAt(0);
console.log(myList.toString());
