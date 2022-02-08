import { useState, useEffect } from 'react'
// Cleanup function luôn được gọi trước khi component unmounted
const tabs = ['posts', 'comments', 'albums']
function Content() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.title = title
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, [type])
  
  // hiện nút go to top khi kéo xuống 200px
  useEffect(() => {
    const handleScroll = () => {

      if(window.scrollY >= 200){
        console.log('show')
        setShowGoToTop(true)
      }else{
        console.log('hide')
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      console.log('unmounted')
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // two way binding windown width
  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // cleanup func
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h1>{width}</h1>
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
      {
        showGoToTop && (
          <button
            style={{
              position: 'fixed',
              right: 20,
              bottom: 20
            }}
          >Go to top</button>
        )
      }
    </div>
    
  );
}


// not change
function UseEffectWithDOM() {
  const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content/>}
    </div>
  );



}

export default UseEffectWithDOM;
