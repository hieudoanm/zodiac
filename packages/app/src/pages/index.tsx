import { animals } from '@zodiac/data/zodiac';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const HomePage: NextPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setIndex((prev) => Math.min(prev + 1, animals.length - 1));
      }
      if (e.key === 'ArrowUp') {
        setIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const color = animals.at(index)?.logos.at(0)?.color ?? '';

  return (
    <div className="linear h-screen w-screen overflow-hidden">
      <div className="fixed inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-y-8">
        <div
          className="flex items-center justify-center gap-x-8 text-6xl font-bold"
          style={{ color }}>
          <div>Year of</div>
          <div className="w-36">{animals.at(index)?.animal}</div>
        </div>
        <div className="aspect-square w-full max-w-xs rounded-full bg-white"></div>
      </div>
      <div
        className="linear transition-all delay-1000 duration-1000"
        style={{ transform: `translateY(-${index * 100}vh)` }}>
        {animals.map(({ id, logos }) => {
          const backgroundColor = logos.at(0)?.backgroundColor ?? '';
          const color = logos.at(0)?.color ?? '';
          return (
            <section
              key={id}
              className="h-screen w-screen"
              style={{ backgroundColor }}></section>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
