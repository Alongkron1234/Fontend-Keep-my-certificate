import './Form.css'
import {useState} from 'react'
import axios from 'axios'
const Form=()=> {
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")

    const inputTitle=(event)=>{
        setTitle(event.target.value)
        console.log(event.target.value);
    }
    const inputName=(event)=>{
        setName(event.target.value)
        console.log(event.target.value);
    }
    const inputContent=(event)=>{
        setContent(event.target.value)
        console.log(event.target.value);
    }
    const saveItem=(event)=> {
        event.preventDefault();
        axios.post("http://localhost:8000/create/", {
            title: title,
            name: name,
            content: content
        }).then(res=>{
            console.log(res.data);
        })
        setTitle('')
        setName('')
        setContent('')
    }
    return (
        <form className="contain" onSubmit={saveItem}>
            <h1>Add certificate</h1>
            <div className="form">
                <div className="test">
                    <input type="text" name="name" autocomplete="off" required onChange={inputTitle} value={title}/>
                        <label for="name" className="label-name">
                            <span className="content-name">Title</span>
                        </label>
                </div>
                
            </div>
            <div className="form">
                <div className="test">
                    <input type="text" name="name" autocomplete="off" required onChange={inputName} value={name}/>
                    <label for="name" className="label-name">
                        <span className="content-name">Picture Name or Picture Link</span>
                    </label>
                </div>
                
            </div>
            <div className="form">
                <div className="test">
                    <input type="text" name="name" autocomplete="off" required onChange={inputContent} value={content}/>
                    <label for="name" className="label-name">
                        <span className="content-name">content</span>
                    </label>
                </div>
                
            </div>
            <div className="form">
                <div className="bt">
                    <button>Add certificate</button>
                </div>
            </div>
        </form>
    )
}

export default Form;