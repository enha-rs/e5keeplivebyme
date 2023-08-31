// 二叉树的链式存储结构如下：
typedef struct BiTNode
{
    ElemType data;                   // 数据域
    struct BiTNode *lchild, *rchild; // 左、右孩子指针
}BiTNode, *BiTree;

// 中序遍历非递归算法
void InOrder2(BiTree T)
{
    InitStack(S);              // 初始化栈
    BiTree p = T;              // p为遍历指针
    while (p || !isEmpty(S))    // p不空 或者 栈不空时循环
    {
        if(p)                  // 一路向左
        {
            Push(S, p);        // 当前结点入栈
            p = p->lchild;     // 左孩子不空，一直往左走
        }
        else                   // 出栈，并转向出栈结点的右子树
        {
            Pop(S, p);
            visit(p);
            p = p->rchild;
        }
    }
}

// 前序遍历非递归算法
// 和中序的区别只有 visit(p) 在代码中的位置
void PreOrder2(BiTree T)
{
    InitStack(S);
    BiTree p = T;
    while (!p || !isEmpty(S))
    {
        if (p)
        {
            visit(p);
            Push(S, p);
            p = p->lchild;
        }
        else {
            pop(S, p);
            p = p->rchild;
        }     
    }
}

// 后序遍历非递归算法
void PostOrder2(BiTree T){
    InitStack(S);
    BiTree p = T;
    BiTree r = NULL;
    while (p || !isEmpty(S)){
        if (p){
            push(S, p);
            p = p->lchild;
        }
        else {
            GetTop(S, p);
            if (p->rchild && p->rchild != r)
            {
                p = p->rchild;
            }
            else {
                pop(S, p);
                visit(p);
                r = p;
                p = NULL;
            }
            
        }
    }
    
}
