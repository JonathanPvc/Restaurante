import './style.scss';

const data = [
    { id : 1, name : 'burger', priceUnit : 10.000, priceCost : 6000, discont : '4%', unit: 5, category: 'meet', actions : 'action1' },
    { id : 2, name : 'soda', priceUnit : 20.000, priceCost : 6000, discont : '3%',  unit: 5, category: 'meet', actions : 'action1' },
    { id : 3, name : 'potato chips', priceUnit : 30.000, priceCost : 6000, discont : '0%', unit: 5, category: 'meet', actions : 'action1' },
    { id : 5, name : 'sanwich', priceUnit : 40.000, priceCost : 6000, discont : '2%',  unit: 5 , category: 'meet', actions : 'action1'},
    { id : 6, name : 'pizza', priceUnit : 50.000, priceCost : 6000, discont : '10%', unit: 5 , category: 'meet', actions : 'action1'},
    { id : 7, name : 'meat', priceUnit : 60.000, priceCost : 6000, discont : '5%', unit: 5, category: 'meet', actions : 'action1'},
    { id : 9, name : 'chicken', priceUnit : 70.000, priceCost : 6000, discont : '9%',  unit: 5, category: 'meet', actions : 'action1'},
    { id : 10, name : 'chicken', priceUnit : 70.000, priceCost : 6000, discont : '9%', unit: 5, category: 'meet', actions : 'action1'},
    { id : 11, name : 'chicken', priceUnit : 70.000, priceCost : 6000, discont : '9%', unit: 5, category: 'meet', actions : 'action1' },
    { id : 12, name : 'chicken', priceUnit : 70.000, priceCost : 6000, discont : '9%', unit: 5, category: 'meet', actions : 'action1' },
    
    
]

 const TableProduct = () => {

    
    return (
        <>
        
           
            <div className='tbackcolor'>
            <h1 className='h1Tittle'> List Products</h1>

                <table className='productTable'>
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th>Name</th>
                            <th>Price Unit</th>
                            <th>Price Cost</th>
                            <th>Discont</th>
                            <th>Unit</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element ) => (
                            <tr>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.priceUnit}</td>
                                <td>{element.priceCost}</td>
                                <td>{element.discont}</td>
                                <td>{element.unit}</td>
                                <td>{element.category}</td>
                                <td>{element.actions}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                
            </div>
        </>
    )
};

export default TableProduct