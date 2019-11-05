import React, { useState } from "react";

export default function TextField(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}
