// https://coderun.yandex.ru/seasons/2025-summer/tracks/common/problem/coderun-welcome
// Сложность по памяти: O(sqrt(n + m))
// Сложность по врмени: O(1)
function solution(n, m) {    
    for (let i = Math.floor(Math.sqrt(n + m)); i >= 1; i--) {
        const totalCells = i * i;
        const maxWhite = Math.floor(totalCells / 2);
        const maxBlack = Math.ceil(totalCells / 2);

        if ((n >= maxWhite && m >= maxBlack) || (n >= maxBlack && m >= maxWhite)) {
            return i
        }
    }
    return 0;
}

console.log(solution(9, 8))
console.log(solution(12, 15))
console.log(solution(1, 0))
console.log(solution(0, 0))