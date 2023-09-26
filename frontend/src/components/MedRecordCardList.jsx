import MedRecordCard from "./MedRecordCard";
import data from "../data";

const MedRecordCardList = () => {
  const cards = data.map((item) => {
    return <MedRecordCard key={item.id} item={item} />;
  });
  console.log(data);
  return <div>{cards}</div>;
};

export default MedRecordCardList;
