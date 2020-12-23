import { ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const SLayout = {
    Layout: styled.div`
        ${tw`bg-red-100 h-screen`}
  `,
    Title: styled.div`
        ${tw`text-gray-800`}
    `

}

export const SBtn = {
    Button: styled.button`
        ${tw`bg-red-500 rounded`}
    
    `
}

type LayoutProps = {

    children?: ReactNode
    title?: string

}

export const Layout = ({ title, children }: LayoutProps) => {
    return (
        <>

            <Header title={title}></Header>
            <Container> {children}</Container>

        </>


    )

}


export const Header = ({ title = 'this is title' }: { title: string }) => {
    return (

        <>
            <N.Nav>
                <N.Title>
                    {title}
                </N.Title>

            </N.Nav>



        </>

    )
}


const Container = styled.div`
    ${tw`container h-screen`}

`

const N = {
    Nav: styled.div`
        ${tw`flex shadow text-2xl bg-gray-200`}
        height: 60px;    
    `,
    Title: styled.div`
        ${tw`flex justify-center items-center text-coral-1 w-full`}
    `


}


