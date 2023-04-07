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
      this.head = newNode;
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
myList.prepend(5);

console.log(myList);
