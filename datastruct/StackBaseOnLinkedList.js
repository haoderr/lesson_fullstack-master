// 节点， 代替 数组里的每个元素
class Node {
    constructor(element) {
        this.element = element;// 值
        // 链表因为有指针， 不连续， 节点， new 出来， 每次都去申请新的内存空间
        // next 指向下一个节点
        this.next = null;// 
    }
}

class StackBasedLinkedList {
    constructor() {
        this.top = null;// 空栈
    }
    push(value) {
        const node = new Node(value);
        if (this.top === null) {
            this.top = node;
        }else {
            node.next = this.top;
            this.top = node;
        }
    }
    pop() {
        if (this.top == null) {
            return -1;
        }
        const value = this.top.element;
        return value;
    }
    clear() {
        this.top = null
    }
    display() {
        if(this.top !== null) {
            let temp = this.top;
            while(temp != null) {
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}

module.exports = {
    StackBasedLinkedList,
    Node
}