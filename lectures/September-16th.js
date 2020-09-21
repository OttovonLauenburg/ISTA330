


let printPaths = function (M) {
    let paths = [];
    let findPath = (M, i, j, p) => {
        let path = [...p];
        path.push(M[i][j]);
        if (i === 0 && j === 0) {
            paths.push(path);
            return 1;
        } else if (i === 0) {
            return findPath(M, i, j - 1, path);
        } else if (j == 0) {
            return findPath(M, i - 1, j, path);
        } else {
            return findPath(M, i - 1, j, path) + findPath(M, i, j - 1, path);
        }
    };
    findPath(M, M.length - 1, M[0].length - 1, []);
    for (const p of paths) {
        console.log(p.reverse());
    }
};

let M = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
let test = printPaths(M);