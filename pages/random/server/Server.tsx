import { GetServerSideProps, GetServerSidePropsResult } from "next"
import { Random } from "../static/Static"

const ServerRandomPage = ({ num }: Random) => {

    return (
        <div>

            <h1> Server Page</h1>
            {num}

        </div>
    )


}

export default ServerRandomPage

export const getServerSideProps: GetServerSideProps = async (): Promise<GetServerSidePropsResult<Random>> => {

    return {
        props: { num: Math.random() }
    }

}