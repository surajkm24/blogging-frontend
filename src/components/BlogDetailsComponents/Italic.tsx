import { Text } from "@chakra-ui/react"

export const Italic = ({ italic }: { italic: string }) => {

    return (
        <Text fontSize='18px' mt='22px' fontStyle={'italic'}>{italic}</Text>
    )
}