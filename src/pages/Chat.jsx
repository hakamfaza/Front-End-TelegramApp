import React from 'react';
import Card from '../components/card/Card';

export default function Chat() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <Card />
      </div>
      <div className="bg-secondary col-span-3">3</div>
    </div>
  );
}
