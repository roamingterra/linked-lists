// Factory function which represents the full list
function LinkedList() {
  return {
    head: null,
    append: function (value) {
      const newNode = Node(value);

      // If linked list is empty, make new node the head
      if (!this.head) {
        this.head = newNode;
      } else {
        // Find last node in the list
        let lastNode = this.head;
        // if head node has a pointer pointing to a next node, enter while loop
        while (lastNode.next) {
          // Set new last node
          lastNode = lastNode.next;
        }

        // Set the new node as the next node of the last node
        lastNode.setNext(newNode);
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

const myList = LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);

console.log(myList);

// Next, I will create new LinkedList methods to do more things to the linked list
