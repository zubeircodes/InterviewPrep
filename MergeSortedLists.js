
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  const list3 = [];
  const ptr1 = list1;
  const ptr2 = list2;

  while(ptr1.next !== null && ptr2.next !== null) {   
      if(list1.val > list2.val ) {
          list3.push(list1.val);
          ptr1.next++;
      } else if (list1.val< list2.val){
          list3.push(list2.val);
          ptr2.next++;
      } else {
          list3.push(list1.val);
          list3.push(list2.val);
          ptr2.next++;
          ptr1.next++;
      }
  }   
  return list3;
 
};

let test1 = [1,2,4];
let test2 = [1,3,4];
console.log(mergeTwoLists(test1, test2));
