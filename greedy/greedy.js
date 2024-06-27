function solution(num) {
    const coins = [500, 100, 50, 10]; // 내림차순 정렬
    let change = 1000 - num;
    let count = 0;

    for (let coin of coins) {
        count += Math.trunc(change / coin);
        change %= coin;
    }

    return count;
}
