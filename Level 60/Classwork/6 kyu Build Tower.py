def tower_builder(n_floors):
    return [(" " * (n_floors - i - 1) + "*" * (2 * i + 1) + " " * (n_floors - i - 1)) for i in range(n_floors)]