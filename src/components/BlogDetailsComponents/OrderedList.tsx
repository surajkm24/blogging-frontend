import { OrderedList, ListItem } from "@chakra-ui/react"
export const OrderedListComp = ({ list }: { list: Array<string> }) => {

    return <OrderedList mt='10px'>
        {list.map(ele => <ListItem fontSize={'17px'}>{ele}</ListItem>)}
    </OrderedList>
}