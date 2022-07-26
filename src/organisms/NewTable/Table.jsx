import { QueryClient, QueryClientProvider, useQuery } from 'react-query'; 
import { TablewithBrowserPagination, Column } from 'react-rainbow-components';

const fetchProducts = async () => {
    const result = await fetch('https://api.alegra.com/api/v1/items/');
    return result.json();
}

 function ListaProducts(){
    const { data, isLoading } = useQuery('products', fetchProducts);
    return(
        <TablewithBrowserPagination className='products-table' keyField = 'name' isLoading={isLoading} data={data} variant='listview' pageSize={ 10 }>
            <Column header='ID' field='id'/>
            <Column header='Name' field='name'/>
            <Column header='Description' field='description'/>
            <Column header='Reference' field='reference'/>
            <Column header='Status' field='status'/>
        </TablewithBrowserPagination>
    )
}

const queryClient = new QueryClient();

function TablePag(){
    return (
        <QueryClientProvider client = {queryClient}>
            <ListaProducts />
        </QueryClientProvider>
    )
}

export default TablePag;