const col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const col1 = col.indexOf(cell1[0]);
    const col2 = col.indexOf(cell2[0]);
    const row1 = parseInt(cell1[1], 10);
    const row2 = parseInt(cell2[1], 10);
    const even1 = (col1 + row1) % 2 === 0;
    const even2 = (col2 + row2) % 2 === 0;
    return even1 === even2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
