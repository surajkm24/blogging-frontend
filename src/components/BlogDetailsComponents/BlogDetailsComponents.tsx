import { Box } from "@chakra-ui/react"
import { Bold } from "./Bold"
import { Italic } from "./Italic"
import { OrderedListComp } from "./OrderedList"
import { Para } from "./Para"
import { UnorderedListComp } from "./UnorderedList"

export const BlogDetailsComponents = ({ content }: { content: any }) => {

    return (
        <Box pb='20px'>
            {content?.map((ele: any) => (
                (
                    ele[0] === 'para'
                ) ? (
                    <Para para={ele[1]} />
                ) : (
                    ele[0] === 'italic'
                ) ? (
                    <Italic italic={ele[1]} />
                ) : (
                    ele[0] === 'unorderedList'
                ) ? (
                    <UnorderedListComp list={ele[1]} />
                ) : (
                    ele[0] === 'orderedList'
                ) ? (
                    <OrderedListComp list={ele[1]} />
                ) : (
                    ele[0] === 'bold'
                ) ? (
                    <Bold bold={ele[1]} />
                ) : <></>
            ))}
        </Box>
    )
}