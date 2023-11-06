import { NavLink } from "react-router-dom";
import "./Table.css"
function Items(props) {

  return (
    <div >
   
      <div className="itemBox d-flex bg-dark text-white " id={props.key}>
        <img
        className="col-1"
          src={props.image}
          alt="auto"
          style={{
            width: "1.5rem",
            height:"1.5rem",
            alignContent: "center",
            justifyContent: "center",
            paddingTop: ".6rem"
          }}
        />
        <h1   className="col-1" >{props.symbol}</h1>
        <NavLink
          
          exact to={`/table/buy/${props.Name}`}
          className="name"
          state={{
            id: props.key,
            name: props.Name,
            price: props.price,
            symbol: props.symbol,
            image: props.image,
            check:props.check
          }}
        >
         
     <h1 className="name col-2">{props.Name}</h1>
         
        </NavLink>
        <h1   className="col-2"  style={{color:props.low24<props.price?"green":"red"}}>{props.price}</h1>
        <h1 className="change col-2">{Math.ceil(props.changePercent)}</h1>
        <h1 className="high col-2">{props.high24}</h1>
        <h1 className="low col-2">{props.low24}</h1>
      </div>
    </div>
  );
}

export default Items;
