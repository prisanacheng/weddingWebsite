import React from "react";

function Squad() {
  return (
    <>
      <h1 className="pageTitles">The Wedding Party</h1>
      <div className="squadContainer">
      <div id="bridesmaids">
        <div className="eachPerson">
          <p className="indivName">Michelle Vu, Matron of Honor</p>
          <img className="indivPhoto" src="/images/Michelle.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">Jenny Park, Bridesmaid</p>
          <img className="indivPhoto" src="/images/Jenny.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">Annie Su, Bridesmaid</p>
          <img className="indivPhoto" src="/images/Annie.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">Grace Kang, Bridesmaid</p>
          <img className="indivPhoto" src="/images/Grace.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">Meagan Stanaland, Bridesmaid</p>
          <img className="indivPhoto" src="/images/Meagan.jpg" width="400" />
        </div>
      </div>
      <div id="groomsmen">
        <div className="eachPerson">
          <p className="indivName">Derek Shaw, Best Man</p>
          <img className="indivPhoto" src="/images/Derek.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">Paul Kim, Groomsman</p>
          <img className="indivPhoto" src="/images/Paul.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">John Wan, Groomsman</p>
          <img className="indivPhoto" src="/images/John.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">Kevin Drawe, Groomsman</p>
          <img className="indivPhoto" src="/images/Kevin.jpg" width="400" />
        </div>
        <div className="eachPerson">
          <p className="indivName">Benny Wu, Groomsman</p>
          <img className="indivPhoto" src="/images/Benny.jpg" width="400" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Squad;
