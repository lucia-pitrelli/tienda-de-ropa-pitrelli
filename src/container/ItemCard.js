

const ItemCard = ( { Items }) => {
    return ( 
        < div style= {{ border: 'solid grey 10px', margin: '15px', padding: '5px' }}>
             <div style={{ fontFamily: "monospace", color: "purple", fontSize:"30px"}}> {Items.title} </div>
             <div style={{ fontFamily: "sans-serif", color: "black", fontSize:"20px"}}> {Items.price}</div>
             <div> {Items.pictureUrl}</div>
        </div>
       )
}

export default ItemCard