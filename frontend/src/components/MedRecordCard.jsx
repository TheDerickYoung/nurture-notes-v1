const MedRecordCard = (props) => {
  return (
    <div className="card">
      <div className="card-poster">
        <img
          src={props.item.userImg}
          alt={props.item.userName}
          className="card-avatar"
        ></img>
        <h5>
          <strong>{props.item.userName}</strong>
        </h5>
      </div>
      <div className="card-image-wrapper">
        <img
          src={props.item.img}
          alt={props.item.description}
          className="card-image"
        />
      </div>
      <hr></hr>
      <div className="card-stats">
        <h4 className="card-temp">
          <strong>Temperature: </strong>
          {props.item.temp}º F
        </h4>
        <hr></hr>
        <h4 className="card-medicine">
          <strong>Medicine Given: </strong>
          {props.item.medicine}
        </h4>
        <hr></hr>
        <h5>
          <strong>Time Given: </strong>
          {props.item.timestamp}
        </h5>
        <hr></hr>
      </div>
      <p className="card-notes">
        <strong>Notes: </strong>
        {props.item.notes}
      </p>
    </div>
  );
};

export default MedRecordCard;
