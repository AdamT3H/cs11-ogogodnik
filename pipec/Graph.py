# варіант 6
oriented_graph = {
  'A': ['B', 'D', 'F', 'C'],
  'B': ['C', 'E', 'D'],
  'C': ['E'],
  'D': ['F'],
  'F': ['E', 'C'],
  'E': ['D']
}

unoriented_graph = {
  'a': ['d', 'c'],
  'b': ['c', 'd'],
  'c': ['a', 'b', 'f', 'e'],
  'd': ['b', 'a', 'e', 'f'],
  'e': ['c', 'd'],
  'f': ['d', 'c']
}


def bfs_oriented(oriented_graph, start):
    visited = set()
    queue = [start]
    while queue:
        item = queue.pop(0)
        if item in visited:
            continue
        print(item)
        visited.add(item)
        queue.extend(oriented_graph[item])

def bfs_unoriented(unoriented_graph, start):
    visited = set()
    queue = [start]
    while queue:
        current_vertex = queue.pop(0)
        if current_vertex in visited:
            continue
        print(current_vertex)
        visited.add(current_vertex)
        queue.extend(unoriented_graph[current_vertex])

def dfs_oriented(oriented_graph, start, visited = None):
    if visited is None:
        visited = set()
    if start in visited:
        return
    visited.add(start)
    print(start)
    for next_start in oriented_graph[start]:
        dfs_oriented(oriented_graph, next_start, visited)

def dfs_unoriented(unoriented_graph, start, visited = None):
    if visited is None:
        visited = set()
    if start in visited:
        return
    visited.add(start)
    print(start)
    for next_start in unoriented_graph[start]:
        dfs_unoriented(unoriented_graph, next_start, visited)


print("BFS Oriented:")
bfs_oriented(oriented_graph, 'A')

print("")

print("BFS Unoriented:")
bfs_unoriented(unoriented_graph, 'a')

print("")
print("")

print("DFS Oriented:")
dfs_oriented(oriented_graph, 'A')

print("")

print("DFS Unoriented:")
dfs_oriented(unoriented_graph, 'a')

