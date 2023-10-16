class Hashtsble:
    def __init__(self):
        self.capasity = 10
        self.table = [[] for _ in range(0, self.capasity)]

    def HasingFunk(self, key):
        Hashed_key = hash(key) % self.capasity
        return Hashed_key
    
    def set(self, key, value):
        Hash_key = self.HasingFunk(key)
        key_ex = False
        slot = self.table[Hash_key]
        for i, kv in slot:
            k, v = kv
            if key == k:
                key_ex == True
                break

            if key_ex:
                slot[i] = ((key, value))
            else:
                slot.append((key, value))

H = Hashtsble()
H.set(1, 3)
H.set(2, 4)
H.set(3, 5)

print(H.get(1))

print(H.table)