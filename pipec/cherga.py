queue = []

max_index = 6  

min_index = 0  

delete = ('Del')

while len(queue) < max_index:
    num = int(input('Ведіть число: '))
    queue.append(num)
print(queue)

dell_pop = input("Напишіть Del для видалення цифер: " )
while dell_pop == delete:
    queue.pop(0)
    print(queue)
    if len(queue) == min_index:
        break
    dell_pop = input("Напишіть Del для видалення цифер: " )