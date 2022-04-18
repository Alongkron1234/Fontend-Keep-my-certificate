import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './Content.css'
const Content=()=> {
    const [items, setItems] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8000/posts")
        .then(response=>setItems(response.data))
        .catch(err=>console.log(err))
    },[])

    const deleteItem=(id)=> {
        axios.delete(`http://localhost:8000/delete/${id}`).then((response)=>{
            setItems(
                items.filter((e)=> {
                    return e.id != id
                })
            )
        })
    }
    return (
        <ul>
            <div className="container">
                <h2>Certificate</h2>
                <div className="app-grid">
                    {items.map((e)=>{
                    return (
                        <div className="Item">
                            <div className="title">
                                <h3>{e.title}</h3>
                            </div>
                            <div className="img">
                                <img src={e.name}/>
                            </div>
                            <div className="content">
                                <p>{e.content}</p>
                            </div>
                            <div className="btn">
                                <button onClick={()=>{deleteItem(e.id)}}>Delete</button>
                            </div>
                            
                        </div>
                        )
                    })}
                </div>
                
            </div>
            
        </ul>
    )
}

export default Content;