import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../components/styles/Layout'

export default () => {

    const router = useRouter()
    const { query: { cmId: commnentId } } = router
    return (
        <Layout title="Comment">
            <div>
                <p> Commmnet Id {commnentId} </p>
            </div>
        </Layout>
    )
}


