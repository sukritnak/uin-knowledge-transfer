import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Layout } from '../../components/styles/Layout'

const Contents: NextPage<ContentProps> = ({ data }) => {

    const router = useRouter()
    const { query: { id } } = router


    console.log('data', data)


    // useEffect(() => {
    //     const contents = async () => {
    //         const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //         const { data } = result
    //         console.log(data)
    //     }
    //     contents() 
    // })

    return (
        <Layout title="Contents">
            <div>
                <p> Content Id {id} </p> <br/>
                <div className="p-6"> {data.userId} </div>
                <div className="p-6"> {data.id} </div>
                <div className="p-6"> {data.title} </div>
                <div className="p-6"> {data.complete} </div>
            </div>
        </Layout>
    )
}

export default Contents


export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
        ],
        fallback: false
    }


}

type ContentProps = {
    data: { userId: number, id: number, title: string, complete: boolean }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext): Promise<GetStaticPropsResult<ContentProps>> => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const { data } = result
    return {
        props: { data }
    }

}
