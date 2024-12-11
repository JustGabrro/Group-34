def get_matrix(n):
    if n < 0:
        raise ValueError("Size must be >= 0")
    matrix = []
    for i in range(n):
        row = [int(i == j) for j in range(n)]
        matrix.append(row)
    return matrix