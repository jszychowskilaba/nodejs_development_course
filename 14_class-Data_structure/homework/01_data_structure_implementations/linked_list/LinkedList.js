const { Node } = require("./Node");

/**
 * Class that handles a linked list structure made with Nodes.
 */
class LinkedList {
  #firstNode;
  constructor() {
    // Store first node, in order to have a reference of
    // where the structure starts
    this.#firstNode = null;
  }
  /**
   * Return first node, for testing purposes
   * @returns {Node} The node
   */
  get firstNode() {
    return this.#firstNode;
  }
  /**
   * Inserts a new node with data in front of the linked list. Returns true.
   *
   * It works by creating a new Node with the data.
   * If the linked list is empty, this node is stored as the first node.
   * If the linked list is not empty, we store the actual first node
   * of the list at the new Node, and then set the new node as the first element.
   * @param {*} data The data
   * @returns {Boolean} true
   */
  insertFront(data) {
    const newNode = new Node(data);
    if (this.#firstNode === null) {
      // If linked list is empty
      // Adding new node
      this.#firstNode = newNode;
    } else {
      // If linked list is not empty
      // Adding new node
      newNode.nextNode = this.#firstNode;
      this.#firstNode = newNode;
    }
    return true;
  }
  /**
   * Inserts a new node with data at the of the list.
   *
   * It works by creating a new Node with the data.
   * If the linked list is empty, this node is stored as the first node.
   *
   * If the list is not empty, we go through the linked list till we find
   * a node with nextNode = null, this indicates that is the last node.
   * To store the node, we set this last nextNode property to point the
   * new node.
   * @param {*} data The data
   * @returns {Boolean} true
   */
  insertRear(data) {
    const newNode = new Node(data);
    if (this.#firstNode === null) {
      // If list is empty
      // Adding new node
      this.#firstNode = newNode;
    } else {
      // If list is not empty
      let currentNode = this.#firstNode;

      // Going through the linked list till last node
      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }
      // Adding new node
      currentNode.nextNode = newNode;
    }
    return true;
  }
  /**
   * Inserts a node after a target node position. If target node
   * is not in the list, returns false, else returns true.
   *
   * It works by checking if the target node is in the linked list.
   * If the target node is found, the new node is positioned in the middle
   * of the targetNode and the targetNode.nextNode.
   * @param {*} targetNode The target node
   * @param {*} dataToAdd The data to create a node with
   * @returns {Boolean} true if added, false if not
   */
  insertAfter(targetNode, dataToAdd) {
    const previousNode = this.searchNode(targetNode);

    if (previousNode != undefined) {
      const newNode = new Node(dataToAdd);
      newNode.nextNode = previousNode.nextNode;
      previousNode.nextNode = newNode;
      return true;
    }

    return false;
  }
  /**
   * Search if a node with certain data is stored in the linked list. If found,
   * the node is returned, if not, returns undefined.
   *
   * It works by taking the first node, then we go throw the linked listed till
   * we find a node with a data match, after that we return the node.
   * @param {*} data - The data
   * @returns {Node} - The node, undefined if not found
   */
  searchNode(data) {
    let currentNode = this.#firstNode;

    // Going through the linked list we find the node or
    // we reach the end list.
    while (currentNode != null) {
      if (currentNode.data === data) {
        // If there is a match
        return currentNode;
      }
      // Going to next node
      currentNode = currentNode.nextNode;
    }
    // If no match
    return undefined;
  }
  /**
   * Returns the all the nodes data in a array shape. Used for testing purposes. If list is empty, returns undefined.
   *
   * It works by creating and empty array, then it goes through the list pushing each
   * data element into the array.
   * @returns {Array} - The data
   */
  getData() {
    let currentNode = this.#firstNode;
    const data = [];

    if (currentNode === null) {
      return undefined;
    }

    while (currentNode != null) {
      // Looping through the list
      data.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }
    return [...data];
  }
  /**
   * Delete the first node in the linked list. Returns true if deleted, false if not (empty list)
   *
   * It works by checking two scenarios.
   * First one: if the list is empty, we do nothing
   * Second one: if there are one or more elements, we make
   * the first node to point to its nextNode, so the reference is lost.
   * @returns {Boolean} true if deleted, false if not.
   *
   */
  deleteFront() {
    // Checking for empty list
    if (this.#firstNode === null) {
      return false;
    }
    // Deleting element
    this.#firstNode = this.#firstNode.nextNode;
    return true;
  }
  /**
   * Delete the last node of the list. Returns true if deleted, false if not
   *
   * It works by checking for three possibles scenarios.
   * The first one: if the list is empty, we do nothing.
   * The second one: if there is only one node, we delete it.
   * The third one: if there is more than one node, we loop till the
   * end of the list storing the actual node and the next node. If
   * the next node is the last one, we make the actualNode.nextNode to be
   * null, so we lost the reference of the last node.
   *
   * @returns {Boolean} true if deleted, false if not
   */
  deleteRear() {
    // If list is empty
    if (this.#firstNode === null) {
      return false;
    }
    // If there is only one node
    if (this.#firstNode.nextNode === null) {
      this.#firstNode = null;
      return true;
    }
    let actualNode = this.#firstNode;
    let nextNode = this.#firstNode.nextNode;

    // Looping through the list till next node is the last one.
    while (nextNode.nextNode != null) {
      actualNode = nextNode;
      nextNode = nextNode.nextNode;
    }

    // Deleting last node.
    actualNode.nextNode = null;
    return true;
  }
  /**
   * Deletes the first node that stores a given data. Returns true if deleted, false if not.
   *
   * It works by looking for three possible scenarios.
   * The first one: linked list is empty, we do nothing.
   * The second one: the node is in the first position, so we delete it.
   * The third one: the node is in the middle or last position. So we work
   * looping throw the actual node and the next node. If the next node
   * matches with the data of the node to delete, we remove the next node
   * from the list by making the actualNode to point to the nextNode.nextNode.
   * @param {*} data The data
   * @returns {Boolean} true if deleted, false if not.
   */
  deleteNode(data) {
    // Empty list
    if (this.#firstNode === null) {
      return false;
    }

    let actualNode = this.#firstNode;
    let nextNode = this.#firstNode.nextNode;

    // Data match in first node
    if (actualNode.data === data) {
      this.deleteFront();
      return true;
    }

    // There is no more to check
    if (nextNode === null) {
      return false;
    }

    // Looping through the list till last node.
    do {
      // If there is a data match
      if (nextNode.data === data) {
        // We delete the node
        actualNode.nextNode = nextNode.nextNode;
        return true;
      }
      // If there is no match, we continue looping.
      actualNode = nextNode;
      nextNode = nextNode.nextNode;
    } while (nextNode != null);

    return false;
  }
}

module.exports = { LinkedList };
