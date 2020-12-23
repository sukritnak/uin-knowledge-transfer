import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
    ${tw`mt-3 w-full rounded border px-6 py-1 block text-white bg-green-400 text-base border-green-400`}
    @media(max-width: 640px) {
        ${tw`shadow bg-coral-1 border-coral-2`}
    }
`


export const ReverseButton = styled(Button)`
    ${tw`bg-white text-green-50 border-green-50`}

    @media(max-width: 640px) {
        ${tw`shadow bg-green-50 border-green-400 text-white`}
    }
`