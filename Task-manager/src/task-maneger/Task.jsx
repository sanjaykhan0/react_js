import React, { useEffect, useState } from 'react'
import "./Task.css"

export default function Task() {

    const [formStyle, setFormStyle] = useState({ display: "none" })
    const [taskName, setTaskName] = useState('')
    const [status, setStatus] = useState('Pending')
    const [date, setDate] = useState('')
    const [priority, setPriority] = useState('')
    const [time1, setTime1] = useState('')
    const [record, setRecord] = useState([])
    const [index, setIndex] = useState(null)

    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem("task")) || [];
        setRecord(oldData)
    }, [])

    let Handlesubmit = (e) => {
        e.preventDefault();

        let oldData = JSON.parse(localStorage.getItem("task")) || [];
        let id = Date.now();

        if (index) {
            const updatedRecord = record.find(task => task.id === index);
            updatedRecord.taskName = taskName;
            updatedRecord.status = status;
            updatedRecord.date = date;
            updatedRecord.priority = priority;
            updatedRecord.time1 = time1;
            // setRecord(updatedRecord);
            localStorage.setItem("task", JSON.stringify(record));
        } else {
            let user = { id, taskName, status, date, priority, time1 };
            oldData.push(user);
            localStorage.setItem("task", JSON.stringify(oldData));
            setRecord(oldData);
        }

        setTaskName('');
        setStatus('Pending');
        setDate('');
        setPriority('');
        setTime1('');
        setFormStyle({ display: "none" });
        setIndex(null);
    }

    let handleDelete = (id) => {
        let deleteData = record.filter((e) => e.id !== id);
        localStorage.setItem("task", JSON.stringify(deleteData));
        setRecord(deleteData);
    }

    let handleEdit = (id) => {
        const taskToEdit = record.find(task => task.id === id);

        setTaskName(taskToEdit.taskName);
        setStatus(taskToEdit.status);
        setDate(taskToEdit.date);
        setPriority(taskToEdit.priority);
        setTime1(taskToEdit.time1);
        setFormStyle({ display: "block" });
        setIndex(id)
    }

    let handleStatusChange = (id) => {

        let oldData = JSON.parse(localStorage.getItem("task")) || [];
        const taskToUpdate = oldData.find(task => task.id === id);
        
            taskToUpdate.status = taskToUpdate.status === 'Pending' ? 'Complete' : 'Pending';
            localStorage.setItem("task", JSON.stringify(oldData));
            setRecord(oldData);
        
    }

    return (
        <>
            <div style={{ height: "100vh", backgroundColor: "red" }}>
                <div className="side" style={{ height: "100%", float: "left", width: "20%", }}>
                    <nav style={{ height: "50%", width: "100%", border: "1px solid", backgroundColor: "gray", padding: "30% 0 0 10%", boxSizing: "border-box" }}>

                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-inbox"></i> &nbsp; Inbox</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-calendar-week"></i> &nbsp; Today</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-circle-up"></i> &nbsp; Upcoming</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-hashtag"></i> &nbsp; Important</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-handshake"></i> &nbsp; Meeting</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-trash-can"></i> &nbsp; Trash</span> <br /><br />
                    </nav>
                    <nav style={{ height: "50%", width: "100%", border: "1px solid", backgroundColor: "gray", padding: "2% 0 0 10%", boxSizing: "border-box" }}>

                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-user-group"></i> &nbsp; Family</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-sun"></i> &nbsp; Vacation</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-chart-simple"></i> &nbsp; Festival</span> <br /><br />
                        <span style={{ fontSize: "20px" }}><i className="fa-solid fa-bolt"></i> &nbsp; Concerts</span> <br /><br />
                    </nav>
                </div>

                <div className="main-task" style={{ height: "100%", width: "80%", backgroundColor: "white", float: "left", padding: "1.5% 0% 0% 3%", boxSizing: "border-box" }}>

                    <br /><br />
                    <h1 style={{ display: "flex", justifyContent: "space-between", paddingRight: "20px" }} >Today Tasks <button onClick={() => setFormStyle({ display: "block" })}><i className="fa-regular fa-square-plus" style={{ fontSize: "25px" }}></i></button></h1>
                    <br /><br />
                    <table style={{ width: "100%", marginBottom: "15px" }}>
                        <thead>
                            <tr>
                                <th>All</th>
                                <th>Important</th>
                                <th>Notes</th>
                                <th>Links</th>
                            </tr>
                        </thead>
                    </table>
                    <hr />

                    {
                        record ?
                            record.map((e, i) => {
                                return <div key={i} style={{
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    marginBottom: '15px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{ flex: '1' }}>
                                        <h3 style={{ marginTop: 0, color: '#333',fontSize:"28px" }}>{e.taskName}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                            <button style={{
                                                backgroundColor: e.status === 'Complete' ? '#4CAF50' : '#FFC107',
                                                color: 'white',
                                                padding: '5px 10px',
                                                borderRadius: '4px',
                                                fontSize: '14px',
                                                marginRight: '10px',
                                                border:"none",
                                                cursor: 'pointer'
                                            }} onClick={() => handleStatusChange(e.id)}>
                                                {e.status}
                                            </button>
                                            <span style={{
                                                backgroundColor:
                                                    e.priority === 'High' ? 'red' :
                                                        e.priority === 'Medium' ? 'orange' : 'skyblue',
                                                color: 'white',
                                                padding: '5px 10px',
                                                borderRadius: '4px',
                                                fontSize: '14px'
                                            }}>
                                                {e.priority}
                                            </span>
                                        </div>
                                        <div style={{ marginTop: '10px', color: '#666' }}>
                                            <span style={{ marginRight: '15px' }}><i className="fa-solid fa-calendar"></i> {e.date}</span>
                                            <span><i className="fa-solid fa-clock"></i> {e.time1}</span>
                                        </div>
                                    </div>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: '#ddd',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: '15px'
                                    }}>
                                        <i className="fa-solid fa-car" style={{ fontSize: '24px', color: '#666' }}></i>
                                    </div>

                                    <button
                                        onClick={() => handleEdit(e.id)}
                                        style={{
                                            backgroundColor: '#2196F3',
                                            color: 'white',
                                            border: 'none',
                                            padding: '10px 15px',
                                            margin: '0 5px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}>
                                        <i className="fa-solid fa-pencil" style={{ marginRight: '5px' }}></i>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(e.id)}
                                        style={{
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            padding: '10px 15px',
                                            margin: '0 5px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}>
                                        <i className="fa-solid fa-trash" style={{ marginRight: '5px' }}></i>
                                        Delete
                                    </button>
                                </div>
                            }) : 'Loading...'
                    }


                </div>

            </div>

            <div className="form-bg" style={formStyle}>
                <form action="" className='form' onSubmit={(e) => Handlesubmit(e)} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>

                    <h1>Task Manager</h1>

                    <input
                        onChange={(e) => setTaskName(e.target.value)}
                        value={taskName}
                        type="text"
                        placeholder='Add task'
                        style={{ width: '94%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
                    />
                    <select
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                        name="status"
                        style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', backgroundColor: 'white' }}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </select>
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        type="date"
                        style={{ width: '94%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
                    />
                    <select
                        onChange={(e) => setPriority(e.target.value)}
                        value={priority}
                        name="priority"
                        style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', backgroundColor: 'white' }}
                    >
                        <option value="">Select Charge</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input
                        onChange={(e) => setTime1(e.target.value)}
                        value={time1}
                        type="time"
                        style={{ width: '94%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
                    />
                    <button
                        type='submit'
                        style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' }}
                    >
                        {index ? 'Update' : 'Submit'}
                    </button>
                </form>
            </div>
        </>
    )
}
