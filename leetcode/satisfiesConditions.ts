function satisfiesConditions(grid: number[][]): boolean {
    const m = grid.length
    const n = grid[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i < m - 1 && grid[i][j] !== grid[i + 1][j]) {
                return false
            }

            if(j < n - 1 && grid[i][j] === grid[i][j + 1]) {
                return false
            }
        }
    }

    return true
};
