def digit_consistency(num1, num2):
    combined_digits = sorted(str(num1) + str(num2))
    product_digits = sorted(str(num1 * num2))
    return combined_digits == product_digits

print(digit_consistency(6, 21)) 
print(digit_consistency(10, 11)) 
