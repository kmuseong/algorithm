function sieveOfEratosthenes(n) {
    // 기본 설정
    let isPrime = Array(n + 1).fill(true); // 배열생성하고 값을 모두 true, 일단 모두 소수라고 설정
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    // 2부터 시작하여 배수를 제거
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // i의 배수들을 모두 제거
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 소수 목록 생성
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    return primes;
}
