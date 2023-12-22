class Node: #Створюємо клас нода, який містить в собі вузол для дерева

    def __init__(self, item): # Ініціалізуємо елементи в класі

        self.item = item
        self.left = None
        self.right = None



def checkingFullTree(root): # Перевіряємо чи дерево Full, якщо немає елементів,
                            # то воно full, якщо вузол root має обидва дочірні 
                            # вузли left і right як None, це означає, що цей вузол - листок
                            # і його теж можна вважати фулл, якщо у нас відсутній лівий але
                            # присутній правий(або наоборт) листок, то це дерево не фул і якщо
                            # у нас далі присутні два вузла і зліва і спарва, то реверсивно 
                            # викликаємо функцію наново

    if root is None:
        return True
    
    if root.left is None and root.right is None:
        return True
    
    if root.left is None or root.right is None:
        return False
    
    if root.left is not None and root.right is not None:
        return (checkingFullTree(root.left) and checkingFullTree(root.right))
    
    return False


def depth(node): #шукаємо глибину дерева, задаємо значення 0, та проходимось по елементах, поки нода не стане 0.

    lopata = 0
    while (node is not None):
        lopata += 1
        node = node.left
    return lopata


def count_elements(root): #підраховуєм кількість елементів за допомогою рекурсій, якщо вузол рут є Нон, це означає, що це порожнє дерево, тому повертається значення 0, оскільки в ньому немає жодного елементу. Якщо рут не є Ноне, то обчислюється кількість вузлів у поточному піддереві: 1 (текущий вузол) плюс кількість вузлів у лівому піддереві і кількість вузлів у правому піддереві.
    if root is None:
        return 0 
    return (1 + count_elements(root.left) + count_elements(root.right))


def checkingPerfectTree(root, lopata, level = 0):  #Ця функція призначена для перевірки, чи є бінарне дерево перфект. Якщо рут є нон то поточне піддерево порожнє, і воно перфект. Якщо обидва дочірні вузли є None, то поточний вузол є листовим, якщо його глибина дорівнює заданому рівню глибини. Якщо один із дочірніх вузлів є None, а інший - не None, то це означає, що дерево не є перфект бо на цьому рівні глибини воно повинно мати обидва дочірні вузли. Рекурсивно викликається функція наново для лівого і правого піддерев, збільшуючи рівень глибини на одиницю.

    if root is None:
        return True
    
    if root.left is None and root.right is None:
        return lopata == level + 1

    if root.left is None or root.right is None:
        return False
    
    return checkingPerfectTree(root.left, lopata, level + 1) and checkingPerfectTree(root.right, lopata, level + 1)


def checkingCompleteTree(root, index, elemnum): # Перевірка на компліт, якщо рут нон, значить це компліт. Якщо індекс більший або дорівнює це означає, що поточний вузол перевищує кількість елементів у піддереві, і тому це не є комплітним деревомю. Рекурсивно викликається функція наново для лівого і правого піддерев, збільшуючи індекс вузла на 1

    if root is None:
        return True
    
    if index >= elemnum:
        return False

    
    return (checkingCompleteTree(root.left, index * 2 + 1, elemnum) and checkingCompleteTree(root.right, index * 2 + 1, elemnum))

    

class Height: #створюємо клас який зберігає висоту
    def __init__(self):
        self.height = 0


def checkingBalancedTree(root, height):  #Якщо root є None, це означає, що поточне піддерево порожнє, і воно вважається збалансованим. Рекурсивно викликається checkingBalancedTree для лівого і правого піддерев, зберігаючи висоту лівого піддерева у left_h і правого у right_h. Визначається висота поточного піддерева як більша з висот лівого і правого піддерев, плюс одиниця. Перевіряється умова збалансованості: різниця між висотами лівого і правого піддерев не більше одиниці. Функція повертає True, якщо умова збалансованості виконана і обидва піддерева збалансовані, в іншому випадку - False.
    left_h = Height()
    right_h = Height()

    if root is None:
        return True
    
    leftleaf = checkingBalancedTree(root.left, left_h)
    rightLeaf = checkingBalancedTree(root.right, right_h)

    height.height = max(left_h.height, right_h.height) + 1

    if abs(left_h.height - right_h.height) <= 1:
        return leftleaf and rightLeaf

    return False

print("")

orestChoosed = int(input("Яке дерево вибере Пан Орест, щоб перевірити і дати п***и мені, за косяки? \r\n  Доступні варіанти: \r\n 1 - Full binary tree. \r\n 2 - Perfect binary tree. \r\n 3 - Complate binary tree. \r\n 4 - Balanced binaty tree.  \r\n Ваш вибір: "))


if orestChoosed == 1:
    print("Ви вибрали Full")
    print("")
    root = Node(1)
    root.left = Node(3)
    root.right = Node(2)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.left.right.left = Node(6)
    root.left.right.right = Node(7)


if orestChoosed == 2:
    root = Node(1)
    root.left = Node(3)
    root.right = Node(2)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.right.left = Node(6)
    root.right.right = Node(7)


if orestChoosed == 3:
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)


if orestChoosed == 4:
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)



count_elements = count_elements(root)
index = 0
height = Height()



print("Висновки: ")

print("")

if checkingFullTree(root):
    print("Дерево фулл")
else:
    print("не фул")

print("")

if checkingPerfectTree(root, depth(root)):
    print("Дерево Пегфет")
else:
    print("не пегфект")

print("")

if checkingCompleteTree(root, index, count_elements):
    print("Дерево компліт")
else:
    print("не компліт")

print("")

if checkingBalancedTree(root, height):
    print('Дерево баланст')
else:
    print("Не баланст")

print("")
