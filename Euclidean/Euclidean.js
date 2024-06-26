// 유클리드 호제법 최대공약수 구하기
function euclidean(a, b) {
    let tmp, n; // 임시저장 변수와 나머지값 변수

    // a가 b보다 크게 설정하기
    if (a < b) {
        tmp = a;
        a = b;
        b = tmp;
    }

    // 알고리즘 구현
    while (b !== 0) {
        n = a % b; // 나머지 값 변수에 저장
        a = b; // a에 b값을 대입
        b = n; // b는 나머지값을 대입
    }

    return a; // 최대공약수 반환 (a에 b값이 들어가기 때문에 b가 최대공약수)
}
