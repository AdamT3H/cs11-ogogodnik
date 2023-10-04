#створюємо Linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    #display потрібне для відображення списку

    def display(self):
        cur = self.head
        while cur:
            print(cur.data, end=' -> ')
            cur = cur.next
        print("None")

    #це вставка в початок

    def insertBegin(self, new_data):
        new_data = Node(new_data)
        new_data.next = self.head
        self.head = new_data



    #це вставка після елемна
    def insertAfter (self, prev_node, new_data):
        if prev_node is None:
            print("faild")
            return
        
        new_node = Node(new_data)
        new_node.next = prev_node.next
        prev_node.next = new_node

    #вставка в кінець елемента
    def insertEnd (self, new_data):
        new_node = Node(new_data)

        if self.head is None:
            self.head = new_node
            return
        
        last = self.head
        while (last.next):
            last = last.next

        last.next = new_node
    #видалення айтема
    def delNode(self, position):
        if self.head is None:
            return
        temp = self.head

        if position == 0:
            self.head = temp.next
            temp = None
            return
        
        for i in range ( position - 1):
            temp = temp.next
            if temp is None:
                break

        if temp is None:
            return
        
        if temp.next is None:
            return
        
        next = temp.next.next

        temp.next = None

        temp.next = next
    #пошук йатема
    def search(self, key):

        cur = self.head

        while cur is not None:
            if cur.data == key:
                return True
            cur = cur.next
        return False
    # сортування, хз чи правильно написано, але в інеті так роблять((
    def sortt(self, target):
        cur = self.head
        index = 0
        while cur:
            if cur.data == target:
                return index
            cur = cur.next
            index += 1
        return -1
    #тут ми добуваєм попереднє число від вибраного
    def get_previous(self, target):
        cur = self.head
        previous = None
        while cur:
            if cur.data == target:
                if previous:
                    return previous.data
                else:
                    return None
            previous = cur
            cur = cur.next
        return None
# тут ми добуваєм наступне число від вибраного
    def get_next(self, target):
        cur = self.head
        while cur:
            if cur.data == target and cur.next:
                return cur.next.data
            cur = cur.next
        return None
    #ця функція для обєднування списків
    def merge(self, linkedList2):

        linkedList2 = LinkedList()
        cur1 = self.head
        cur2 = linkedList2.head


        if not linkedList2.head:
            return

        while cur1 and cur2:
            if cur1.data < cur2.data:
                linkedList2.insertEnd(cur1.data)
                cur1 = cur1.next
            else:
                linkedList2.insertEnd(cur2.data)
                cur2 = cur2.next

        while cur1:
            linkedList2.insertEnd(cur1.data)
            cur1 = cur1.next

        while cur2:
            linkedList2.insertEnd(cur2.data)
            cur2 = cur2.next

        self.head = linkedList2.head
    #ця обєднує списки
    def concatenate(self, linkedList2):

        linkedList2 = LinkedList()

        if not linkedList2.head:
            return

        cur = self.head
        while cur.next:
            cur = cur.next

        cur.next = linkedList2.head
        

#це для принту списку
    def printLList(self):
        temp = self.head
        while (temp):
            print (str(temp.data) + "", end="")
            temp = temp.next

if __name__ == '__main__':
    #перший ліст
    linkklist = LinkedList()
    linkklist.insertBegin(1)
    linkklist.insertEnd(3)
    linkklist.insertBegin(6)
    linkklist.insertEnd(8)
    linkklist.insertAfter(linkklist.head.next, 9)
    #другий ліст
    my_linked_list2 = LinkedList()
    my_linked_list2.insertEnd (2)
    my_linked_list2.insertEnd (4)
    my_linked_list2.insertEnd (5)
    my_linked_list2.insertEnd (7)
    #відображення двох лістів
    linkklist.display()
    my_linked_list2.display()
 #задаєм щоб один ліст обєднувався з другим, воно чогось не паше, я вже не маю сили то фіксити, весь вечір сиджу
    linkklist.concatenate(my_linked_list2)

    print("Після об'єднання:")
    linkklist.display()

    print ('Your list is: ')
    linkklist.printLList()

    print()
    print()

    print('You delited an item: ')
    linkklist.delNode(0)
    linkklist.printLList()
    
    print()
    print()
    #тут шукаєм елементи
    fitem = 6
    if linkklist.search (fitem):
        print(str(fitem) + ' found!')
    else: 
        print(str(fitem) + ' not found(')

    print()
    print()
    #тут пошук за індексом
    target_element = 3
    index = linkklist.sortt(target_element)
    if index != -1:
        print ("Елемент " + str(target_element) + " знайдено на позиції " + str(index))
    else:
        print ("Елемент " + str(target_element) + " не знайдено в списку ")

    target_element_forPrevnext = 9
    previous_element = linkklist.get_previous(target_element)
    next_element = linkklist.get_next(target_element)

    print()
    print()


    if previous_element is not None:
        print("Попередній елемент: " + str(previous_element))
    else:
        print("Попереднього елемента немає")

    if next_element is not None:
        print ("Наступний елемент: " + str(next_element))
    else:
        print("Наступного елемента немає")

#тут не все є з ТЗ, але я найшов то шо найшов, написав як міг ітак важко далось, але то тільки перший код, далі буде краще, надіюсь,  почну з хеш таблицями завтра розбиратись, шоб закрити хвіст, дякую<3
