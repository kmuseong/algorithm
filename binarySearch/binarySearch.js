//  1. 스택(stack) 구현
function stack(arr, target) {
    // 배열의 처음과 끝 값설정
    let left = 0;
    let right = arr.length - 1;
    const stack = []; // 스택 초기화

    stack.push({ left, right }); // 스택에 객체의 형태로 값 추가

    // 스택이 값이 없을 때까지 반복
    while (stack.length > 0) {
        const { left, right } = stack.pop(); // 스택에서 시작과 끝값 제거함과 동시에 값 사용

        // 시작점이 끝점보다 크면 검색 범위를 초과한 것이므로 다음 반복으로 넘어감
        if (left > right) {
            continue;
        }

        const mid = Math.floor((left + right) / 2); // 가운데 값 설정

        if (arr[mid] === target) {
            return mid; // 목표 값을 찾은 경우 해당 인덱스를 반환
        } else if (arr[mid] < target) {
            stack.push({ left: mid + 1, right }); // 목표 값이 가운데 값보다 작은 경우 시작점을 가운데 값 + 1로 설정
        } else {
            stack.push({ left, right: mid - 1 }); // 목표 값이 가운데 값보다 클 경우 끝점을 가운데 값 -1로 설정
        }
    }

    return -1; // 목표 값을 찾지 못한 경우 -1 반환
}

//  2. 재귀함수(recursive) 구현
function recursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // 목표 값을 찾지 못한 경우 -1 반환
    }

    const mid = Math.floor((left + right) / 2); // 가운데 값 설정

    if (arr[mid] === target) {
        return mid; // 목표 값을 찾은 경우 해당 인덱스를 반환
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // 자기자신을 호출하는데 처음 값을 가운데 값 + 1로 설정
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // 자기자신을 호출하는데 끝 값을 가운데 값 -1로 설정
    }
}
