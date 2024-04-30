const dfs = (tree: object, start: any): void => {
  const stack = [start];

  while (stack.length > 0) {
    const vert = stack.shift();

    if (tree[vert]) {
      stack.unshift(...tree[vert]);
    }
  }
};

const dfsg = (graph: object, start: any): void => {
  const visited = {};
  const stack = [start];

  while (stack.length !== 0) {
    const vert = stack.shift();

    if (!visited[vert]) {
      visited[vert] = true;
    }

    if (graph[vert]) {
      for (let subVert of graph[vert]) {
        if (!visited[subVert]) {
          stack.unshift(subVert);
        }
      }
    }
  }
};
