'use client';

import { useRef, useState } from 'react';
import { Layer, Line, Stage } from 'react-konva';

const Canvas = () => {
  const [lines, setLines] = useState<{ points: number[] }[]>([]);
  const [isStartNew, setIsStartNew] = useState(false);
  const [activeLine, setActiveLine] = useState<{ points: number[] } | null>(null);
  const [logPoints, setlogPoints] = useState([]);
  const isDrawing = useRef(false);


  const handleMouseDown = (e: any) => {
    if (!isStartNew) return;
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setActiveLine({ points: [pos.x, pos.y] });
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current || !isStartNew) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    setActiveLine((prevLine) => ({
      points: [...(prevLine?.points || []), point.x, point.y],
    }));
  };

  const handleMouseUp = () => {
    if (isStartNew) {
      setLines((prevLines) => [...prevLines, activeLine]);
    }
    setIsStartNew(false);
    isDrawing.current = false;
  };

  const handleAddNewLine = () => {
    setIsStartNew(true);
    setlogPoints([]);
    setActiveLine({ points: [] }); // Start a new line
  };

  const handleShowLocationLog = () => {
    const fullyFlattenedPoints = lines.map((line) => line.points).flat(4);

    let points = [];
    for (let i = 0; i < fullyFlattenedPoints.length; i += 2) {
      points.push({ x: fullyFlattenedPoints[i], y: fullyFlattenedPoints[i + 1] });
    }
    setlogPoints(points);
    console.log(points, 'lines');
  };
  return (
    <section>
      <div className='grid grid-cols-6 gap-2 '>
        {logPoints.map((item, index) => (
          <p key={index} className='bg-blue-300 p-2 text-center text-blue-800'>
            point {index + 1}: x:{item.x}, y:{item.y}
          </p>
        ))}
      </div>
      <button className={'bg-blue-500'} onClick={handleAddNewLine}>
        Add New Line
      </button>
      <button className={'bg-blue-500'} onClick={handleShowLocationLog}>
        Show Location Log
      </button>
      <Stage
        style={{ backgroundColor: 'GrayText' }}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer clearBeforeDraw={isStartNew}>
          {activeLine && (
            <Line
              points={activeLine.points}
              stroke='#f00'
              strokeWidth={5}
              tension={0.5}
              lineCap='round'
              lineJoin='round'
            />
          )}
        </Layer>
      </Stage>
    </section>
  );
};

export default Canvas;
