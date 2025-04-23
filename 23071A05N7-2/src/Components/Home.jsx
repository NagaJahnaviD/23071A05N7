import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
function RandomStuff() {
  const [fibnos, setfibnos]=useState([]);
  const {handleSubmit,register,formState:{errors}}=useForm();
  function fib(data) {
    const n = parseInt(data.num);
    let result = [];
    if (n >= 1) result.push(0);
    if (n >= 2) result.push(1);
    let v1 = 0, v2 = 1;
    for (let i = 2; i < n; i++) {
      const v3 = v1 + v2;
      result.push(v3);
      v1 = v2;
      v2 = v3;
    }
    setfibnos(result);
  }
  return (
    <div className='container'>
         <form className='text-center form' action="" onClick={handleSubmit((data)=>fib(data))}>
            <div>
              <label htmlFor="num">Enter a number</label>
              <input type="integer " className='form-input' {...register('num',{required:true,min:1})} />
              {errors.num?.type === 'required'&&<p className='text-warning'>* This is a required field</p>}
              {errors.num?.type === 'min'&&<p className='text-warning'>* number must be graeter than 0</p>}
            </div>
            <button className="btn btn-dark">generate</button>
         </form>
         <div className="mt-4">
            {fibnos.length > 0 && (
              <div>
                <h4>Fibonacci Sequence:</h4>
                <p>{fibnos.join(', ')}</p>
              </div>
            )}
         </div>
         
    </div>
  )
}

export default RandomStuff