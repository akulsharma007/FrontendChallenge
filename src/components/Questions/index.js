import React from "react";
import {Link} from 'react-router-dom';
import classes from "index.module.css";

const Questions = () => {
  const [data, setData] = useState([]);
  const { error, isLoading, sendRequest:dataReturned } = useFetch();

  useEffect(()=>{
    const handleData = (data) => {
        setData(data);
    };

    dataReturned({url:"https://polls.apiblueprint.org/questions"},handleData);
  },[]);

  console.log(data);

  const presentQuestions = () => {
      return data.map(element=>{
          return (
              <Link to={`${element.url}`}><p>{element.question}</p></Link>
          )
      })
  }

  return (
      <>
        {isLoading?<p>Loading...</p>:null}
        {data.length?presentQuestions:null}
      </>
  );
};

export default Questions;
