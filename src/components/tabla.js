import DataTable from "react-data-table-component";
import CellTableName from "./CellTableName";
import CellTableChange from "./CellTableChange";

function Tabla(props) {
  const columns = [
    {
      name: "Rank",
      selector: (row) => row.cmc_rank,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      cell: (row) => <CellTableName crypto={row} />,
    },
    {
      name: "Price",
      selector: (row) => row.quote.USD.price,
      format: (row) => "$" + row.quote.USD.price.toLocaleString(),
      sortable: true,
    },
    {
      name: "Market Cap",
      selector: (row) => row.quote.USD.market_cap,
      format: (row) => "$" + row.quote.USD.market_cap.toLocaleString(),
    },
    {
      name: "Volume (24h)",
      selector: (row) => row.quote.USD.volume_24h,
      format: (row) => "$" + row.quote.USD.volume_24h.toLocaleString(),
      sortable: true,
    },
    {
      name: "Change (24h)",
      selector: (row) => row.quote.USD.percent_change_24h,
      cell: (row) => <CellTableChange crypto={row} />,
      sortable: true,
    },
  ];

  return (
    <div className={"App " + props.progressPending } >
      <DataTable
        title="Today's Cryptocurrency Prices by Market Cap"
        columns={columns}
        data={props.cryptos}
        progressPending={props.progressPending}
        defaultSortFieldId={1}
      />
    </div>
  );
}

export default Tabla;
