import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../../components/styles/Layout'
import { Button, ReverseButton } from '../../../components/styles/Shared'

export default function Items() {

  const [showText, setShowText] = useState(true)
  const [item, setItems] = useState({ id: '', items: 'I1' })


  const handleClick = () => {
    setShowText(!showText)

    setItems({ id: Math.random().toString(), items: 'items AMIOJ)' })

    setShowText(state => {
      console.log('showText at handle click', state)
      return state
    })

    console.log('-------------showText at handle click', showText)
  }


  useEffect(() => {
    console.log('change showText', showText)
  }, [showText])

  return (
    <Layout title='Items'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>  {item.id} </div>
      <div>  {item.items} </div>

      <Button onClick={handleClick} > Click to hide/show text below </Button>
      {/* <ReverseButton> Click to show text below </ReverseButton> */}

      {/* { showText && <p className="w-full text-center mt-6"> Show textttttttttt </p> } */}
      { showText ? <p className="w-full text-center mt-6"> Show textttttttttt </p> : <p className="w-full text-center mt-6"> click above to show </p>}

    </Layout>
  )
}
