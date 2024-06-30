/* eslint-disable react/prop-types */
export default function Cell({ id, cell, go, setGo, cells, setCells, winningMessage }) {
  const handleClick = (event) => {
    if (!winningMessage){
    const taken =
      event.target.firstChild?.classList.contains("rond") ||
      event.target.firstChild?.classList.contains("croix") || 
      event.target.classList.contains("rond") || 
      event.target.classList.contains("croix");
    if (!taken) {
      if (go === "rond") {
        event.target.firstChild.classList.add("rond");
        handleCellChange("rond")
        setGo("croix");
      }
      if (go === "croix") {
        event.target.firstChild.classList.add("croix");
        handleCellChange("croix")
        setGo("rond");
      }
    }}
  };
  const handleCellChange = (className) =>{
    const nextCells = cells.map((cell, index) => {
        if (index === id){
            return className
        } else {
            return cell
        }
    })
    setCells(nextCells)
  }
  console.log(cells)
  return (
    <div className="square" id={id} onClick={handleClick}>
    <div className={cell}>
        </div>
            </div>
  );
}
