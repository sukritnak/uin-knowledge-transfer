import { Button } from 'antd'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DownloadOutlined } from '@ant-design/icons';
import { Layout, SBtn, SLayout } from '../components/styles/Layout'
import Router from 'next/router'
import { useRecoilState } from 'recoil'
import { userState } from '../stores/userState'


// import styles from '../styles/Home.module.css'

export default function Home() {



  const goToProduct = () => {
    Router.push({
      pathname: '/products'
    })
  }

  const [userData, setUserData] = useRecoilState(userState)

  const handleSetUserState = () => {
    setUserData({
      user: 'AIJ-NO32',
      fullName: 'Sukrit'
    })

  }

  return (
    <Layout title="Home">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SLayout.Title>Hello </SLayout.Title>
      <br />
      <SBtn.Button onClick={() => goToProduct()}>
        Go to product
      </SBtn.Button>
      <br />
      <S.ButtonCustom isClick={true}>
        click me too.
      </S.ButtonCustom>
      <br />

      <S.CustomAntBtn type="primary" shape="round" onClick={handleSetUserState}>
        set name by default sys.
      </S.CustomAntBtn> <br/>

      <div> {userData.user} </div> <br/>
      <div> {userData.fullName} </div> <br/>
    </Layout>
  )
}


type BtnProp = {
  isClick?: boolean
}


const S = {
  ButtonCustom: styled(SBtn.Button) <BtnProp>`
    ${tw`bg-blue-100 my-4`}
    ${props => props.isClick && `background-color: red`}

  `,
  CustomAntBtn: styled(Button)`
   ${tw`bg-blue-300 text-green-900 border-green-50`}
  `

}