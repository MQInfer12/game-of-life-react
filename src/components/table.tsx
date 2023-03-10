import '../styles/table.css';
import { useEffect } from 'react';
import CellMapper from './cellMapper';
import { useBoard } from '../global/board';

interface Props {
  cells: number;
}

const Table = ({ cells }: Props) => {
  const { changeSize } = useBoard();

  useEffect(() => {
    changeSize(cells);
  }, [cells]);

  return (
    <div className="board-card">
      <div 
        className='board-container'
        style={{
          gridTemplateColumns: `repeat(${cells}, 1fr)`
        }}
      >
        <CellMapper 
          cells={cells}
        />
      </div>
    </div>
  )
}

export default Table