const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

const breadthSearch = (graph, start, end) => {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
};
console.log(
  "🚀 ~ file: 7_breadth_first_search.js ~ line 25 ~ breadthSearch ~ breadthSearch",
  breadthSearch(graph, "a", "g")
);
