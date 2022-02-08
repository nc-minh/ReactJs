import { useState, useEffect } from 'react'
// -> Side Effect : sửa dữ liệu bên cạnh cách hoạt động chính
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi thêm vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback. [deps])
// --------------------
// 1. Callback luôn được gọi sau khi conponent mounted
// function Content() {
//   const [title, setTitle] = useState('')

//   useEffect(() => {
//     console.log('Mounted!')
//     document.title = title
//   })

//   console.log(title)
//   return (
//     <input
//       value={title}
//       onChange={e => setTitle(e.target.value)}
//     />
//   );
// }

// 2. useEffect(callback, [])
// function Content() {
//   const [title, setTitle] = useState('')
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     console.log('Mounted!')
//     document.title = title
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(posts => {
//         setPosts(posts)
//       })
//   }, [])
  
//   console.log(title)
//   console.log(posts)
//   return (
//     <div>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.name}</li>
//         ))}
//       </ul>
//     </div>
    
//   );
// }

// 3. useEffect(callback, [deps])
const tabs = ['posts', 'comments', 'albums']
function Content() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  console.log(type)

  useEffect(() => {
    console.log('Mounted!')
    document.title = title
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, [type])
  
  console.log(title)
  console.log(posts)
  return (
    <div>
      {
        tabs.map(tab => (
          <button 
            key={tab}
            style={type === tab ? {
              color: '#fff',
              backgroundColor: '#333'
            } : {}}
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))
      }
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
    
  );
}


// not change
function UseEffect() {
  const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content/>}
    </div>
  );



}

export default UseEffect;
