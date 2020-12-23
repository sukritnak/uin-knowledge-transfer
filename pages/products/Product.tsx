import Link from 'next/Link'
import React from 'react'
import { useRecoilState } from 'recoil'
import { Layout } from '../../components/styles/Layout'
import { userState } from '../../stores/userState'

export default function Product() {

    const [userData] = useRecoilState(userState)

    return (
        <>
            <Layout title="Product">
                Hello {userData.fullName} <br />
                <Link href='/'>
                    <a>
                        Go back Home
                    </a>
                </Link>
                <br />
                <a href='/'>
                    Go back Home re render
                </a>
            </Layout>
        </>
    )
}
