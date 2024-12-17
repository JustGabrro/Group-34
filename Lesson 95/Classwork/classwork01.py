def tic_tac_toe_result(board):
    for row in board:
        if len(set(row)) == 1 and row[0] != "":
            return f"{row[0]} wins"
    
    for col in range(3):
        if len(set([board[row][col] for row in range(3)])) == 1 and board[0][col] != "":
            return f"{board[0][col]} wins"
    
    if len(set([board[i][i] for i in range(3)])) == 1 and board[0][0] != "":
        return f"{board[0][0]} wins"
    
    if len(set([board[i][2 - i] for i in range(3)])) == 1 and board[0][2] != "":
        return f"{board[0][2]} wins"
    
    if all(cell != "" for row in board for cell in row):
        return "Draw"
    
    return "No result"

board1 = [['X', 'O', ''], ['X', 'X', 'O'], ['O', '', '']]
print(tic_tac_toe_result(board1))