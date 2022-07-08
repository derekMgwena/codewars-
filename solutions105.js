

/* 
function getGeneration(cells, generations) {
  const n = cells.length, m = cells[0].length,
        cell = (i,j) => cells[(i+n)%n][(j+m)%m],
        coos = [[1,0],[-1,0],[1,1],[0,1],[-1,1],[1,-1],[0,-1],[-1,-1]]
  for (let k = 0; k < generations; ++k)
      cells = cells.map((row,i) => row.map((x,j) => {
      const neighbours = coos.reduce((a, [di, dj]) => a + cell(i+di, j+dj), 0)
      return neighbours < 2 || neighbours > 3 ? 0 : neighbours == 3 ? 1 : x
    }))
  return cells
} */
function getGeneration(cells, generations) {
  const n = cells.length, m = cells[0].length,
        cell = (i,j) => cells[(i+n)%n][(j+m)%m],
        coos = [[1,0],[-1,0],[1,1],[0,1],[-1,1],[1,-1],[0,-1],[-1,-1]]
  for (let k = 0; k < generations; ++k)
      cells = cells.map((row,i) => row.map((x,j) => {
      const neighbours = coos.reduce((a, [di, dj]) => a + cell(i+di, j+dj), 0)
      return neighbours < 2 || neighbours > 3 ? 0 : neighbours == 3 ? 1 : x
    }))
  return cells
}