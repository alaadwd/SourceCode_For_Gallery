def spin_words(sentence):
    sentence = sentence.split()
    holder = ''

    for i in sentence:
        if len(i) > 5:
            holder += i[::-1] + " "
        else:
            holder += i + " "
    return holder.strip()

print(spin_words("hey fellow gainat im ald saika"))
