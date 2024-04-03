'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const { default: stuff } = await import('../data.json');
      setData(stuff);
    })();
  }, []);

  return (
    <div>
      <div>value of "data" is:</div>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </div>
  );
}
