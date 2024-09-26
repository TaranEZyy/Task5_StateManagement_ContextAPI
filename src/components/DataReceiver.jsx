import React,{useContext} from 'react'
import { MyContext } from './Context';

function DataReceiver() {

    const {user,aman} = useContext(MyContext);

  return (
    <div>
            <h1>Name:: {user}</h1>
            <h1>Name:: {aman}</h1>
    </div>
  )
}

export default DataReceiver