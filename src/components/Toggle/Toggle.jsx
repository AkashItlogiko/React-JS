import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={{ margin: '1rem', backgroundColor: 'pink', padding: '1rem' }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quos dolorum et maiores debitis illo laboriosam.
        </p>
      )}

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
