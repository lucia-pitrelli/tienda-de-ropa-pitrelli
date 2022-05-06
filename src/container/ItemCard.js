const ItemCard = ({ Items }) => {
  return (
    <div
      style={{
        border: "solid grey 10px",
        margin: "15px",
        padding: "5px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
      <div style={{ width: "300px", heigh: "300px" }}>
        <img
          style={{ width: "300px", height: "auto" }}
          src={Items.pictureUrl}
        />
      </div>
    </div>
  );
};

export default ItemCard;
