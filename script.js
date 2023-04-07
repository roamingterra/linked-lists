// Factory function which represents the full list
function LinkedList(value, index) {
  return {};
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

// const n1 = Node(200);
// const n2 = Node(500, n1);
// n2.setValue(400);
// n2.setNext(null);
// console.log(n1);
// console.log(n2);
