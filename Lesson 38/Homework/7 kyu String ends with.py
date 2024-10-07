def solution(text, ending):
    sliced_str = text[len(text) - len(ending):]
    
    if sliced_str == ending:
        return True
    
    return False