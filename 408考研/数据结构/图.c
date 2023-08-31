// 邻接矩阵存储结构定义：
#define MAX_VERTEX_NUM 100      // 顶点数目最大值
typedef char VertexType;        // 顶点的数据类型
typedef int EdgeType;           // 带权图中边上权值的数据类型
typedef struct 
{
    VertexType Vex[MAX_VERTEX_NUM];          // 顶点表
    EdgeType Edge[MAX_VERTEX_NUM][MAX_VERTEX_NUM]; // 邻接矩阵，边表
    int vexnum, arcnum;         // 图的当前顶点数和弧数
}MGraph;


// 广度优先搜索
bool visited[MAX_VERTEX_NUM];
void BFSTraverse(Graph G){
    for (int i = 0; i < G.vexnum; i++)
    {
        visited[i] = FALSE;    // 初始化标记数组
        InitQueue(Q);
        for (int i = 0; i < G.vexnum; i++)
        {
            if (!visited[i])
            {
                BFS(G, i);
            }  
        }
    }   
}
void BFS(Graph G, int v){
    visit(v);       // 访问初始顶点v
    visited[v] = TRUE;
    Enqueue(Q, v);
    while (!isEmpty(Q))
    {
        DeQueue(Q, v);
        for (int w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w))
        {
            if (!visited[w])
            {
                visit(w);
                visited[w] = TRUE;
                EnQueue(Q, w);
            }            
        }       
    }  
}