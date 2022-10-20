import { UnorderedList, ListItem } from "@chakra-ui/react"
export const UnorderedListComp = ({ list }: { list: Array<string> }) => {

    return <UnorderedList mt='10px'>
        {list.map(ele => <ListItem fontSize={'17px'}>{ele}</ListItem>)}
    </UnorderedList>
}