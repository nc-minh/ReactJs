import { useState } from 'react'

function Content() {
  return (
    <div>This is content</div>
  );
}

function Mounted() {
  const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content/>}
    </div>
  );
}

export default Mounted;
