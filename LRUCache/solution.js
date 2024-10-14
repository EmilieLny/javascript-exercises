import { DoublyLinkedList } from '@datastructures-js/linked-list';


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.keyValueMap = {};
    this.keyNodeMap = {};
    this.linkedList = new DoublyLinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const lruNode = this.keyNodeMap?.[key];
    if (!lruNode) {
        return -1
    };
    this.linkedList.remove(lruNode);
    this.linkedList.insertLast(key);
    this.keyNodeMap[key] = this.linkedList.tail();

    return this.keyValueMap[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.linkedList.count() === this.capacity) {
        const head = this.linkedList.head();
        delete this.keyValueMap[head.getValue()];
        delete this.keyNodeMap[head.getValue()];
        this.linkedList.remove(head);
    }
    this.keyValueMap[key] = value;
    this.linkedList.insertLast(key);
    this.keyNodeMap[key] = this.linkedList.tail();

    console.log("put", this.keyValueMap)

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4