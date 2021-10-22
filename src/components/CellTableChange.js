function CellTableChange(props) {
  const styles = { green: { color: "#00ff00" }, red: { color: "#ff0000" } };
  return (
    <td
      style={
        props.crypto.quote.USD.percent_change_24h < 0 ? styles.red : styles.green
      }
    >
      {props.crypto.quote.USD.percent_change_24h.toFixed(2)}%
    </td>
  );
}

export default CellTableChange;
