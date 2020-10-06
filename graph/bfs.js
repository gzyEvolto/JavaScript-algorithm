const graph = require("./graph");

const visited = new Set();
visited.add(2);//为防止起始节点不在队列中
const q = [2];
while (q.length) {
  const n = q.shift(); //出队
  console.log(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      visited.add(n); //一旦入队就认为此节点已访问
    }
  });
}
