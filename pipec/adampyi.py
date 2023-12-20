class Node:  #Створння класу Node, який потрібний для зберігання даних, та утворення зв'язаного списку.
    def __init__(self, data):    #Створюємо основні компоненти класу Node за допомогою функції __init__
        self.data = data
        self.next = None

class LinkedList:    #Створюємо клас для створення зв'язаного список, який у подальшому поможе нам уникнути колізії.
    def __init__(self):    #Створюємо основнікомпоненти класу LinkedList за допомогою функції __init__
        self.head = None

    def append_linked_list(self, data):    #Додавання елемента до списку, та перевірка на навність першо елемента в листі
        new_node = Node(data)  
        if self.head == None:
            self.head = new_node
            self.ass = new_node
            return

        self.ass.next = new_node
        self.ass = new_node

    def print_at_index(self, index): #Функція проходить по всіх елементах у списку, та якщо находить елемент за шуканим індексом, то показує його вміст, якшо ні, то показує повідомлення про відсутність елемнета
        current_node = self.head
        position = 0
        while(current_node != None and position != index):
            position = position + 1 
            current_node = current_node.next
        print(current_node.data if current_node else 'Index not present') #Тернарний оператор

    def print_by_data(self, data):#Функція проходить по всіх елементах у списку, та якщо находить елемент за шуканим вмістом, то показує його, якшо ні, то показує повідомлення про відсутність елемнета
        current_node = self.head
        position = 1
        while(current_node != None and data != current_node.data):
            position = position + 1 
            current_node = current_node.next
        print('Data node -%s- is at position %s' % (current_node.data, position) if current_node else 'Data not present')

    def print_linked_list(self): #Функці проходиться по кожному елементу списку, та прінтить його користувачу
        current_node = self.head
        while(current_node):
            print(current_node.data)
            current_node = current_node.next




class HashTable: #Створюємо клас для створенн яхеш-таблиці
    def __init__(self, capacity):#Створюємо основні компоненти класу HashTable за допомогою функції __init__
        self.capacity = capacity
        self.table = []
        for i in range(self.capacity):
            self.table.append(LinkedList())

    def hashing(self, key, data_ht):    #Ця фaункція призначена для вставки даних у хеш-таблицю. У ній ми ініціалізуємо індекс, за допомогою хешфункції
        index = key % self.capacity 
        self.table[index].append_linked_list(data_ht)
        self.table[index].print_linked_list()
    
    def count(self):    #Метод який кількість елементів в хеш таблиці
        count = 0
        for i in range(self.capacity):
            count += 1
        print(count)

a = HashTable(10)
print('Додаємо перший елемент з ключем 7')
print("")
a.hashing(7, 'Porshe')
print("")
a.count()
print("")
print('Додаємо другий елемент з ключем 7')
print("")
a.hashing(7, 'BMW')