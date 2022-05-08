const ItemDetail = ({ Items }) => {
  return (
    <div>
      <div>{Items.title}</div>
      <div>{Items.price}</div>
      <div style={{ width: "300px", heigh: "300px" }}>
        <img
          style={{ width: "300px", height: "auto" }}
          src={Items.pictureUrl}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
