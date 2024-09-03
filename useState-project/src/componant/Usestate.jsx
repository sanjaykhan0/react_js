import { useState } from "react"


export default function Usestateex() {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    const [val, setVal] = useState('name')
    const change = () => {
        setVal(prompt())
    }
    const [arr, setArr] = useState([1, 2, 3, 4])

    const add = () => {
        setArr([...arr, arr.length+1])
    }
    const [obj, setObj] = useState([{ name: 'amit', sub: 'react js' }, { name: 'sanjay', sub: 'react js' }])

    const objadd = () => {
        setObj([...obj, { name: 'rahil', sub: 'react js' }])
    }

    return (
        <>
            <center><button onClick={change}> change name</button><br />
                <h1>{val}</h1></center><br />
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <div>
                    <h1>count it</h1>
                    <h1>{count}</h1>
                    <button className="mx-2" onClick={increase}>increase</button><br /><br />
                    <button onClick={decrease}>decrease</button><br /><br />


                </div>
                <div>
                    <button onClick={add}>add</button>
                    {
                        arr.map((item, index) => {
                            return <h1 key={index}>{item}</h1>
                        })
                    }
                </div>
                <div>
                    <button onClick={objadd}>object add</button>
                    {
                        obj.map((item, index) => {
                            return <span> <h1 key={index}>{item.name}</h1>
                                <h2 key={index}>{item.sub}</h2></span>
                        })
                    }
                </div>
            </div>
        </>
    )
}
