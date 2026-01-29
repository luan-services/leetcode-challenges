#include <stddef.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};
 
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    int sum = 0;
    int toNext = 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* current = &dummy;
    
    while(l1 != NULL || l2 != NULL || toNext > 0) {
        if (l1 != NULL) {
            sum += l1->val;
            l1 = l1->next;
        }
        if (l2 != NULL) {
            sum += l2->val;
            l2 = l2->next;
        }

        sum += toNext;

        if (sum > 9) {
            toNext = 1;
            sum = sum % 10;

        } else {
            toNext = 0;
        }

        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
        newNode->val = sum;
        newNode->next= NULL;
        current->next = newNode;
        current = current->next;
        current = newNode;
        sum = 0;
    }

    return dummy.next;
}