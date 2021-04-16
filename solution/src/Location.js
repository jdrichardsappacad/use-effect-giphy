import { useState, useEffect } from 'react';

const Location = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    window.addEventListener('mousemove', mover);

    function mover(e) {
      if (e?.clientX) setX(e.clientX);
      if (e?.clientY) setY(e.clientY);
    }

    mover();
    return () => window.removeEventListener('mousemove', mover);
  }, [x, y]);

  const location = (
    <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
      {' '}
      The window location is {x}, {y}
    </div>
  );

  const agreement = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40,
        right: 20
      }}
    >
      I agree to be tracked{' '}
      <input type='checkbox' onClick={() => setAgree((prev) => !prev)} />
    </div>
  );

  return (
    <div>
      {agreement}
      {agree && location}
    </div>
  );
};
export default Location;
