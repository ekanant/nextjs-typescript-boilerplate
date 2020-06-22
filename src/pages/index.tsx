import React, { ReactElement } from 'react'
import {GetStaticProps} from 'next'

interface Props {
  myText: string
}

export default function index(prop: Props): ReactElement {
  return (
    <>
      Hello this is typescript<br/>
      {prop.myText}
    </>
  )
}

export const getStaticProps: GetStaticProps  = async ()=>{
  return {
    props: {
      myText: 'This is my text'
    }
  }
}