import React from "react";

class ScrollButton extends React.Component {
    scroll(){
      window.scrollTo(800, 100);
    }
    render() {
      return (
          <nav>
            <button onClick={()=> this.scroll()}>About</button>
          </nav>
      );
    }
  }

  export default ScrollButton;

