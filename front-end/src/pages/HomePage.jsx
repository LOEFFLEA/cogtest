import { useState } from 'react';

export default function HomePage() {
    const [started, setStarted] = useState(false);
    return (
        <>
        <h1>This is the Brown-Peterson Task Test</h1>
        <p1>Welome to the Brown-Peterson Task Test.</p1><br></br><br></br>


      
      {!started ? (
        <button
          type="button"
          onClick={() => setStarted(true)}
          style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', float: 'center' }}
        >
          Start
        </button>
      ) : (
        <p style={{ fontSize: '18px', color: '#555' }}>You have started!</p>
      )}
        </>
    );
}