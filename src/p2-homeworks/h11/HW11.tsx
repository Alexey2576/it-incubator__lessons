import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
   const [value1, setValue1] = useState(0)
   const [value2, setValue2] = useState(100)
   const onChangeRange = (value: number) => setValue1(value)
   return (
      <div>
         <h2>homeworks 10</h2>

         {/*should work (должно работать)*/}
         <div>
            <span>{value1}</span>
            <SuperRange value={value1} onChangeRange={onChangeRange}
               // сделать так чтоб value1 изменялось
            />
         </div>

         <div>
            <span>{value1}</span>

            <span>{value2}</span>
         </div>

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeSuperRange/>*/}
         {/*<AlternativeSuperDoubleRange/>*/}
         <hr/>
      </div>
   )
}

export default HW11
