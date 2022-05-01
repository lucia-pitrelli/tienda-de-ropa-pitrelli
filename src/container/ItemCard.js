const ItemCard = ({ Items }) => {
  return (
    <div
      style={{
        border: "solid grey 10px",
        margin: "15px",
        padding: "5px",
        width: "300px",
      }}
    >
      <div
        style={{ fontFamily: "monospace", color: "purple", fontSize: "25px" }}
      >
        {" "}
        {Items.title}{" "}
      </div>
      <div
        style={{ fontFamily: "sans-serif", color: "black", fontSize: "18px" }}
      >
        {" "}
        {Items.price}
      </div>
      <div> {Items.pictureUrl}</div>
    </div>
  );
};

export default ItemCard;
