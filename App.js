 import React, {useState} from 'react';
 import data from './data'
 import SingleQuestion from './Question';
 
 import './App.css';

function App() {
   // eslint-disable-next-line
  const [questions, setQuestion]= useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
             <section className='info'>
        {questions.map((question)=>{
          console.log(question)
          return<>
           <SingleQuestion key={question.id} {...question}/>
          
           </>
        })}
      </section>
       </div>

    </main>    
    


  );
}

export default App;
