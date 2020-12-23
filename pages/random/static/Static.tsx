import { GetStaticProps, GetStaticPropsResult } from "next"

const StaticRandomPage = ({ num }: Random) => {

    return (
        <div>

            <h1> Static Page</h1>
            {num}

        </div>
    )

}

export default StaticRandomPage


export type Random = {
    num: number
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Random>> => {

    return {
        props: { num: Math.random() }
    }


}