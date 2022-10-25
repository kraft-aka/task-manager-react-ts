import React, {useRef} from 'react'
import './styles.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent)=> void;
}


export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form className='input' onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();
        }}>
        <input type="text"
          ref = {inputRef}
          value={todo}
          placeholder='Enter a task'
          className='input-box'
          onChange={(e)=>setTodo(e.target.value)} />
        <button className="input-submit" type='submit'>GO</button>
      </form>
    </div>
  )
}
