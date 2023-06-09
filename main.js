const leap = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const move = (curr, depth, maxDepth, end, seen) => {
  // Base cases
  if (curr[0] < 0 || curr[0] > 7 || curr[1] < 0 || curr[1] > 7) {
    return;
  }
  if (depth >= maxDepth[0]) return;
  if (seen[curr[0]][curr[1]]) return;

  if (curr[0] === end[0] && curr[1] === end[1]) {
    maxDepth[0] = depth;
    return new Node(end);
  }

  // Recursive cases
  // pre
  const node = new Node(curr);
  seen[curr[0]][curr[1]] = true;
  let found = false;

  // in
  for (let i = 0; i < leap.length; ++i) {
    const [d0, d1] = leap[i];
    const path = move(
      [curr[0] + d0, curr[1] + d1],
      depth + 1,
      maxDepth,
      end,
      seen,
    );
    if (path) {
      seen[curr[0] + d0][curr[1] + d1] = false;
      found = true; node.next = path;
    }
  }

  // post
  if (found) return node;
};

const travail = (start, end) => {
  const seen = [];

  for (let i = 0; i < 8; ++i) {
    seen.push(new Array(8).fill(false));
  }

  let head = move(start, 0, [Infinity], end, seen);

  const path = [];
  while (head) {
		path.push(`${String.fromCharCode(97 + head.value[0])}${head.value[1] + 1}`);
    head = head.next;
  }

  return path; 
};
