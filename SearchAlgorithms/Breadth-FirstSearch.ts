const bfs = (tree: object, start: any): void => {
  const queue = [start];

  while (queue.length !== 0) {
    const vert = queue.shift();

    if (tree[vert]) {
      queue.push(...tree[vert]);
    }
  }
};

const bfsg = (graph: object, start: any): void => {
  const visited = {};
  const queue = [start];

  while (queue.length !== 0) {
    const vert = queue.shift();

    if (!visited[vert]) {
      visited[vert] = true;
    }

    if (graph[vert]) {
      for (let subVert of graph[vert]) {
        if (!visited[subVert]) {
          queue.push(subVert);
        }
      }
    }
  }
};
