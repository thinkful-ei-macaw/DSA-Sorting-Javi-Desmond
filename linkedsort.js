class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  //insert at the beginning
  insertFirst(item){
    //create new node and point head to new node
    this.head = new Node(item, this.head);
  }
  insertBefore(item, name){
    //check if has list
    if(this.head === null){
      this.insertFirst(item);
    }
    //keep track of currNode
    let currNode = this.head;
    //keep track of previous node
    let previousNode = this.head;
    //iterate through until end
    while((currNode !== null) && (currNode.value !== item)){
      //save previous node
      previousNode = currNode;
      //move onto next node
      currNode = currNode.next;
    }
    return previousNode.next = new Node(name,currNode);
  }
  insertAfter(item, name){
    //check if has list
    if(this.head === null){
      this.insertFirst(item);
    }
    //keep track of currNode
    let currNode = this.head;
    //keep track of previous node
    let previousNode = this.head;
    //iterate through until end
    while((currNode !== null) && (currNode.value !== item)){
      //save previous node
      previousNode = currNode;
      //move onto next node
      currNode = currNode.next;
    }
    return currNode.next = new Node(name,currNode.next);
  }
  insertAt(name,index){
    let currNode = this.head;
    let count = 0;
    //check if index has num
    
    
    while(currNode.next !== null){
      if(count < index-1){ //at node before 
        currNode = currNode.next;
        count++;
      } else{
        //connect new node to node after selected
        const newNode = new Node(name, currNode.next.next);
        //disconnect node to node after
        currNode.next.next = null;
        //connect new node to node before 
        currNode.next = newNode;
        return newNode;
      }
    }
    
    
  }
  insertLast(item){
    //check if has list
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      //start at the beginning of the list
      let tempNode = this.head;
      //iterate until reach the end
      while(tempNode.next !== null){
        //traverse through list, setting tempNode to next node that does not have address of null
        tempNode = tempNode.next;
      }
      //set the end node's next pointer to the new node
      tempNode.next = new Node(item, null);
    }
  }
  remove(item){
    //if list is empty
    if(!this.head){
      return null;
    }
    //if node to be removed is head, 
    //make next node head 
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    //item is the node
    let currNode = this.head;
    //keep track of previous node
    let previousNode = this.head;

    while((currNode !== null) && currNode.value !== item){
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  find(item){
    //start at the head
    let currNode = this.head;
    //check if the list is empty
    if(!this.head){
      return null;
    }
    //check for the item
    while(currNode !== null){
      if(currNode.value=== item){
        //found the node!!
        return currNode;
      }
      //return null if at end of list
      //and item is not on the list
      if(currNode.next === null){
        return null;
      }
      else{
        //keep looking 
        currNode = currNode.next;
      }
    }
    
  }

}

module.exports = LinkedList;