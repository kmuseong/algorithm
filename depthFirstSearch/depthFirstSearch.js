// 그래프를 인접 리스트로 표현
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: [],
};

// 재귀함수로 구현

const visited = {}; // 방문한 노드 객체
function recursive(node) {
    // 현재 노드를 방문 처리
    if (!visited[node]) {
        visited[node] = true;

        // 인접 노드들을 순차적으로 방문
        graph[node].forEach((neighbor) => {
            recursive(neighbor); // 재귀적으로 DFS 호출
        });
    }
}

recursive('A');

// ------------------------------------------------------------------------//

// 스택으로 구현
function stackFc(startNode) {
    const stack = [startNode]; // 스택 초기화
    const visited = {}; // 방문한 노드 객체

    while (stack.length > 0) {
        const node = stack.pop(); // 스택에서 노드 하나 꺼내기

        if (!visited[node]) {
            visited[node] = true;

            // 인접 노드들을 스택에 추가
            graph[node].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                }
            });
        }
    }
}

// 시작 노드에서 DFS 시작
stackFc('A');
