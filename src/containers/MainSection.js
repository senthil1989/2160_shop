import React, { useState,useEffect} from "react";
import { connect } from "react-redux";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import { addInbox } from "../actions";

function MainSection(props) {
  const { userData,curuser,addInbox } = props;
  const [composeState, setcomposeState] = useState(false);
  const [formContent, setformContent] = useState({});
  const [switchContent, setswitchContent] = useState("inbox");
  
  const switchlist =(args)=>{
    setswitchContent(args);
  }

  const handleChange =(event)=>{
      const {name,value} =event.target;
      setformContent({...formContent,[name]:value})
  }
useEffect(()=>setformContent(formContent),[formContent])
  const updateForm=(time)=>{
 setformContent({...formContent,Time:time});

  }
  const updateInbox =(time,callback)=>{
    callback(time)
 console.log(formContent)
    addInbox(formContent,curuser.id);
  }
       
  const rendercomposeHandle = () => {
    if (composeState === true) {
      return (
        <div className="compose-container">
          <div className="compose-header">
            <span>New Compose</span>
            <span onClick={() => setcomposeState(false)}>X</span>
          </div>
          <div className="compose-inner">
            <form onSubmit={(event)=>{
                event.preventDefault();
                 setcomposeState(false);
                 var d = new Date();
                 d.toLocaleString();      
                 d.toLocaleDateString();  
              var time= d.toLocaleTimeString();
                 updateInbox(time,updateForm);
                 
            }}>
              <div className="cus-input">
                <label>From:</label>
                <input type="text" name="from" readOnly={true} value={curuser.mailId}/>
              </div>
              <div className="cus-input">
                <label for="To">To:</label>
                <input type="text" name="To" onChange={handleChange}/>
              </div>
              <div>
                <textarea
                name="mailText"
                  type="textarea"
                  className="cus-text-area"
                  rows="4"
                  cols="50"
                  onChange={handleChange}
                />
              </div>
              <div className="cus-btn">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return;
    }
  };
  const composeHandle = boll => {
    console.log("Hi" +boll);
    setcomposeState(boll);
  };
  console.log(formContent)
  return (
    <div className="section-container">
      <LeftPanel userData={userData} composeHandle={composeHandle} switchlist={switchlist}/>
      <RightPanel userData={userData} switchContent={switchContent}currentId={curuser.id}/>
      {rendercomposeHandle()}
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    userData: state.mainSection,
    curuser: state.curuser
  };
};
const mapDispatchToProps  = dispatch => ({
    
    addInbox:(formContent,id)=>  dispatch(addInbox(formContent,id))
  });
export default connect(mapStateToProps,mapDispatchToProps)(MainSection);
