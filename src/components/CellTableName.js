function CellTableName(props) {
  return (
    <td >
      <img
        className={"img-cryto"}
        src={"https://s2.coinmarketcap.com/static/img/coins/16x16/" + props.crypto.id +".png"} alt=""
      /> {props.crypto.name}
    </td>
  );
}

export default CellTableName;
