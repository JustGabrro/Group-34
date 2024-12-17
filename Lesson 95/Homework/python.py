def longest_increasing_subsequence(arr):
    if len(arr) == 1:
        return arr
    
    max_length = 0
    max_sequence = []
    current_sequence = [arr[0]]
    
    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            current_sequence.append(arr[i])
        else:
            if len(current_sequence) > max_length:
                max_length = len(current_sequence)
                max_sequence = current_sequence
            current_sequence = [arr[i]]
    
    # Final check for the last sequence
    if len(current_sequence) > max_length:
        max_sequence = current_sequence
    
    return max_sequence
