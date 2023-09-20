stack = []

even_stack = []

odd_stack = []

max_index = 6  

min_index = 0  

delete = ('Del')

while len(stack) < max_index:
    num = int(input('Ведіть число: '))
    stack.append(num)
print(stack)

for number in stack:
    if number % 2 == 0:
        even_stack.append(number)
    else:
        odd_stack.append(number)
        
print(even_stack) 
  
print(odd_stack)

dell_pop = input("Напишіть Del для видалення цифер: " )
while dell_pop == delete:
    stack.pop()
    print(stack)
    if len(stack) == min_index:
        break
    dell_pop = input("Напишіть Del для видалення цифер: " )



   
    