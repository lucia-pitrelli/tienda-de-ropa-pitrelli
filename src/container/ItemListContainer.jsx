import  ItemList from "./ItemList"


const ItemListContainer = ( {greeting} ) => {
    return (

        <div>
        <div style={{color: 'purple', fontSize:'32px', fontFamily:'sans-serif', padding: '190px'}}> {greeting} </div>
        
    <ItemList></ItemList>
    </div>
    )
}

export default ItemListContainer;

