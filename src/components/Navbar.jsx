import { useEffect, useRef, useState } from "react"


const Navbar = ({ title, links, change }) => {
    
    const [data, setData] = useState(true)
    const inputRef = useRef(null)
    console.log(inputRef);
    
    
    useEffect(() => {
        inputRef.current.style.background = 'red'
        console.log('Подключен компонент');
    }, [])
    

    return (
    <nav className='nav' ref={inputRef}>
        <a href="#" className="logo">{title}</a>
        <h2>{data ? 'hello': 'bye'}</h2>
        <button onClick={() => setData(!data)}>click</button>
        <ul className="list">
            {links.map((item,i) =>(
               <li key={i}>
               <a href="#" onClick={() => change(item)} className="list__link">{item}</a>
               </li> 
            ))}
        </ul>
    </nav>
  )
}

export default Navbar