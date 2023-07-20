function Tasklist (){
    return (
        <div> 
        <input 
        placeholder="Add Task"
        value={Text}
        
        />
        <button onClick={() => {
            setText('');
            
        }}>Save Task</button>
        </div> 
    );
}

export {Tasklist};