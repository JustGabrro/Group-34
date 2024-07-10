def reverse_string_list(str):
    reversed_list = list(str)  
    reversed_list.reverse()    
    return "".join(reversed_list)  


result = reverse_string_list("hello")
print(result)