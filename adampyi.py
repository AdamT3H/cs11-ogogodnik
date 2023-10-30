class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class linked_list:
    def __init__(self):
        self.head = None

    def append_ll(self, data):
        new_node = Node(data)  
        if self.head == None:
            self.head = new_node
            return

        current_node = self.head
        while(current_node.next):
            current_node = current_node.next

        current_node.next = new_node

    def print_at_index(self, index):
        current_node = self.head
        position = 0
        while(current_node != None and position != index):
            position = position + 1 
            current_node = current_node.next
        print(current_node.data if current_node else 'Index not present') #Тернарний оператор

    def print_by_data(self, data):
        current_node = self.head
        position = 1
        while(current_node != None and data != current_node.data):
            position = position + 1 
            current_node = current_node.next
        print('Data node -%s- is at position %s' % (current_node.data, position) if current_node else 'Data not present')

    def printLL(self):
        current_node = self.head
        while(current_node):
            print(current_node.data)
            current_node = current_node.next




class HashTable:
    def __init__(self, capacity):
        self.capacity = capacity
        self.table = []
        for i in range(self.capacity):
            self.table.append(linked_list())

    def hashing(self, key, data_ht):
        index = self.capacity % key 
        self.table[index].append_ll(data_ht)
        self.table[index].printLL()
    
    def count(self):
        count = 0
        for i in self.table:
            count += 1
        print(count)

a = HashTable(10)
print('Перший елемент з ключем 7')
a.hashing(7, 'lbaalsdjks')
a.count()
print('Додаємо другий елемент з ключем 7')
a.hashing(7, 'хуйня')