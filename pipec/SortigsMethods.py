nonSortedList = [1, -45, 23, 6, 25, -11, 5]  #Задаємо несортований лист

print("Unsorted Array: ")

print(nonSortedList)


method = input("Який метод сортування оберемо? \r\n Доступні варіанти: \r\n BubbleSort \r\n InsertionSort \r\n SelectionSort \r\n QuickSort \r\n")

match method:
    case "BubbleSort":

        def bubbleSort(list):  #Створюємо функцію сортування булькою
            
            for i in range(len(list)):  #Проходимось по кожному елементу
                    
                swapped = False  #Зміння для відслідковування чи сортується лист чи ні
                
                for j in range(0, len(list) - i - 1):  #Цей рядок визначає цикл, який працює з індексами масиву list. Перемінна j приймає значення в діапазоні від 0 до len(list) - i - 1

                    if list[j] > list[j + 1]:  #Порівнюємо вибраний елемент з наступним

                        temp = list[j]
                        list[j] = list[j+1]
                        list[j+1] = temp
                        swapped = True

                if not swapped:  #Якщо попередній цикл не застосовується, тоді list відсортовано
                    break


        bubbleSort(nonSortedList)  #Викликаємо функцію

        print("Bubble Sort: ")

        print(nonSortedList)  #Прінтимо функцію



    case "InsertionSort":

        def insertionSort(list):  #Створюємо функцію для сортування вставкою

            for step in range(1, len(list)):  #Проходимось по кожному елементу, важливоЮ що перший елемент вважається відсортованим

                key = list[step]  #Запамятовуємо вибраний елемент
                j = step - 1  #Початковий індекс для порівняння
                    
                while j >= 0 and key < list[j]:  #Цикл для порівнянь та вставки

                    list[j + 1] = list[j]
                    j = j - 1
                
                list[j + 1] = key  #Вставляємо на своє місце

        insertionSort(nonSortedList)

        print("Insertion Sort: ")

        print(nonSortedList)


    case "SelectionSort":
        def selectionSort(list, capacitu):
        
            for step in range(capacitu):

                min_idx = step

                for i in range(step + 1, capacitu):
                
                    if list[i] < list[min_idx]:
                        min_idx = i
                
                (list[step], list[min_idx]) = (list[min_idx], list[step])

        capacitu = len(nonSortedList)

        selectionSort(nonSortedList, capacitu)

        print("Selection Sort: ")

        print(nonSortedList)




    case "QuickSort":

        def partition(list, low, high):

            elem = list[high]  #Вибираємо опорний елемент

            i = low - 1  #Ініціалізуємо індекс i, який вказує на місце останнього елемента менше або рівного elem

            for j in range(low, high):  #Перебираємо елементи

                if list[j] <= elem:
                    
                    i = i + 1

                    (list[i], list[j]) = (list[j], list[i])

                (list[i + 1], list[high]) = (list[high], list[i + 1])

                return i + 1



        def quickSort(list, low, high):
            if low < high:

                pi = partition(list, low, high)

                quickSort(list, low, pi - 1)

                quickSort(list, pi + 1, high)




        capacitu= len(nonSortedList)

        quickSort(nonSortedList, 0, capacitu - 1)

        print('Quick Sort: ')

        print(nonSortedList)