function Dices(prop) {
  let styles = {
    backgroundColor: prop.isHeld ? "#59E391" : "#ffff",
  };
  function dicex() {
    if (prop.value === 1) {
      return (
        <div className="one">
          <div className="dotted"></div>
        </div>
      );
    } else if (prop.value === 2) {
      return (
        <div className="two">
          <div className="dotted"></div>
          <div className="dotted"></div>
        </div>
      );
    } else if (prop.value === 3) {
      return (
        <div className="three">
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="dotted"></div>
        </div>
      );
    } else if (prop.value === 4) {
      return (
        <div className="four">
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="dotted"></div>
        </div>
      );
    } else if (prop.value === 5) {
      return (
        <div className="five">
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="box-three">
            <div className="dotted"></div>
          </div>
          <div className="dotted"></div>
          <div className="dotted"></div>
        </div>
      );
    } else if (prop.value === 6) {
      return (
        <div className="six">
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="dotted"></div>
          <div className="dotted"></div>
        </div>
      );
    }
  }

  return (
    <>
      <div onClick={prop.dieClick} style={styles} className="dices">
        {dicex()}
      </div>
    </>
  );
}

export default Dices;
