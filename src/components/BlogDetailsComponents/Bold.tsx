import { Text } from "@chakra-ui/react"

export const Bold = ({ bold }: { bold: string }) => {

    return (
        <Text fontSize='18px' mt='22px' fontStyle={'bold'} fontWeight={600}>{bold}</Text>
    )
}