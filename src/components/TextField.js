import React, { useState } from "react";

export default function TextField(props) {
  const dummyText = "type a string here";
  const [text, setText] = useState(dummyText);

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}
