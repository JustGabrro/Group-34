// Task 1
function task1() {
    const input = document.getElementById('task1-input').value;
    const array = input.split(',').map(Number);

    if (array.length !== 5) {
        document.getElementById('task1-result').textContent = 'Please enter exactly 5 integers.';
        return;
    }

    document.getElementById('task1-result').textContent = 
        `2nd Index: ${array[1]}, 4th Index: ${array[3]}`;
}

// Task 2
function task2() {
    const n = parseInt(document.getElementById('task2-count').value);
    const input = document.getElementById('task2-input').value;
    const array = input.split(',').map(Number);
    if (array.length !== n) {
        document.getElementById('task2-result').textContent = 
            `Please enter exactly ${n} integers.`;
        return;
    }

    const result = array.filter((_, index) => index % 2 === 0);
    document.getElementById('task2-result').textContent = `Odd Indices: ${result.join(', ')}`;
}

// Task 3
function task3() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Number(prompt(`Enter number ${i + 1}:`)));
    }

    const doubled = array.map(num => num * 2);
    document.getElementById('task3-result').textContent = 
        `Doubled Values: ${doubled.join(', ')}`;
}

// Task 4
function task4() {
    const n = parseInt(document.getElementById('task4-count').value);
    const input = document.getElementById('task4-input').value;
    const array = input.split(',').map(Number);

    if (array.length !== n) {
        document.getElementById('task4-result').textContent = 
            `Please enter exactly ${n} integers.`;
        return;
    }

    document.getElementById('task4-result').textContent = 
        `Reversed: ${array.reverse().join(', ')}`;
}

// Task 5
function task5() {
    const n = parseInt(document.getElementById('task5-count').value);
    const input = document.getElementById('task5-input').value;
    const array = input.split(',').map(Number);

    if (array.length !== n) {
        document.getElementById('task5-result').textContent = 
            `Please enter exactly ${n} integers.`;
        return;
    }

    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    document.getElementById('task5-result').textContent = 
        `Swapped: ${array.join(', ')}`;
}
