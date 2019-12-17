import React from "react";

/*export default function scrollWin() {
    function scrollSide() {
        window.scrollBy(400, 0);
    }  
    return (
        <button onClick={scrollSide()}>TEST</button>
    )
}*/

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

