// 创建图的邻接列表表示
class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.edges[node1].push({ node: node2, weight });
    this.edges[node2].push({ node: node1, weight });
  }
}

// 迪杰斯特拉算法函数
function dijkstra(graph, startNode) {
  const distances = {};
  const visited = new Set();
  const previousNodes = {};
  const priorityQueue = new PriorityQueue();

  graph.nodes.forEach(node => {
    distances[node] = node === startNode ? 0 : Infinity;
    priorityQueue.enqueue(node, distances[node]);
  });

  while (!priorityQueue.isEmpty()) {
    const { element: currentNode } = priorityQueue.dequeue();
    visited.add(currentNode);

    graph.edges[currentNode].forEach(neighbor => {
      if (!visited.has(neighbor.node)) {
        const potentialDistance = distances[currentNode] + neighbor.weight;
        if (potentialDistance < distances[neighbor.node]) {
          distances[neighbor.node] = potentialDistance;
          previousNodes[neighbor.node] = currentNode;
          priorityQueue.enqueue(neighbor.node, potentialDistance);
        }
      }
    });
  }

  return { distances, previousNodes };
}

// 优先队列实现
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// 示例使用
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);

const startNode = "A";
const { distances, previousNodes } = dijkstra(graph, startNode);

console.log("Distances:", distances);
console.log("Previous Nodes:", previousNodes);
