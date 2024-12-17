def connect_4_winner(board):
    for row in board:
        for i in range(len(row) - 3):
            if row[i] != "" and row[i] == row[i+1] == row[i+2] == row[i+3]:
                return f"{row[i]} wins"
    
    for col in range(len(board[0])):
        for row in range(len(board) - 3):
            if board[row][col] != "" and board[row][col] == board[row+1][col] == board[row+2][col] == board[row+3][col]:
                return f"{board[row][col]} wins"
    
    return "No winner"

board2 = [['X', 'X', 'X', 'X'], ['O', '', 'O', 'O'], ['', '', '', '']]
print(connect_4_winner(board2)) 
