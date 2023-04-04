import { TestComponent, TestComponent2 } from '@/components/TestComponent';
import React from 'react'

const TestPage = () => {
  return (
    <div>
      <span>Pagina Test</span>
      <TestComponent name='Santiago' lastName='Bedoya' email='san@gmail.com' age={10}/>
      <TestComponent name='Simon' lastName='Diaz' email='sim@gmail.com' age={20}/>
      <TestComponent2>
        <span>Hola mundo</span>
      </TestComponent2>
      <TestComponent2>
        <span>Hola mundo2</span>
      </TestComponent2>
    </div>
  )
};

export default TestPage;


