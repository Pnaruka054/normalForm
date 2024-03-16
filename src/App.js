import React, { useEffect } from 'react';
import "./App.css";
import TotalElements from './components/TotalElements'
import Form from './components/Form'
import { useState } from "react";

function App() {
  let [ary, setary] = useState([])
  function data(da) {
    let ary1 = [...ary, da]
    setary(ary1)
  }

  return (
    <div>
      <Form data={data} />
      <TotalElements arry={ary} />
    </div>
  )
};

export default App;