export function findDiagonalDifferences(matrix: number[][] = []): number {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const rowLength = row.length;

    primaryDiagonal += row[i];
    secondaryDiagonal += matrix[i][rowLength - 1 - i];
  }

  return Number(primaryDiagonal - secondaryDiagonal);
}
