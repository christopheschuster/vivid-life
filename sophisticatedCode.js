/* 
   Filename: sophisticatedCode.js
   
   This code calculates the Fibonacci sequence up to a given number using a memoization technique.
   It keeps track of previously calculated values to avoid redundant calculations. The memoized
   sequence is then returned as an array.
*/

const calculateFibonacci = (n) => {
  const memo = Array(n + 1).fill(null);
  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (memo[n] !== null) return memo[n];

    const result = fibonacci(n - 1) + fibonacci(n - 2);
    memo[n] = result;
    return result;
  };

  const sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(fibonacci(i));
  }
  return sequence;
};

const number = 10;
const fibSequence = calculateFibonacci(number);
console.log(`Fibonacci sequence up to ${number}: ${fibSequence}`);


/* 
   This code creates a simple text-based game using object-oriented principles.
   The game involves navigating through a maze and collecting treasures.
*/

// Maze class
class Maze {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.maze = Array(height);
    for (let i = 0; i < height; i++) {
      this.maze[i] = Array(width).fill(".");
    }
  }

  placeTreasure(x, y) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      throw new Error("Invalid treasure coordinates");
    }
    this.maze[y][x] = "T";
  }

  draw() {
    for (let row of this.maze) {
      console.log(row.join(" "));
    }
  }
}

// Player class
class Player {
  constructor(maze, x, y) {
    this.maze = maze;
    this.x = x;
    this.y = y;
    this.treasures = 0;
  }

  move(dx, dy) {
    const newX = this.x + dx;
    const newY = this.y + dy;

    if (
      newX < 0 ||
      newY < 0 ||
      newX >= this.maze.width ||
      newY >= this.maze.height
    ) {
      throw new Error("Invalid move");
    }

    if (this.maze.maze[newY][newX] === "T") {
      this.treasures++;
    }

    this.x = newX;
    this.y = newY;
    this.maze.draw();
    console.log(`Treasures found: ${this.treasures}`);
  }
}

// Game initialization
const maze = new Maze(5, 5);
maze.placeTreasure(1, 2);
maze.placeTreasure(3, 4);
maze.draw();

const player = new Player(maze, 0, 0);
player.move(1, 0);
player.move(1, 0);
player.move(0, 1);
player.move(0, 1);
player.move(1, 0);
player.move(0, 1);
player.move(0, 1);
player.move(1, 0);
player.move(0, 1);
player.move(0, 1);
player.move(1, 0);