/**
 * Created by fernandoorozco on 1/16/17.
 */
import React, {Component} from "react";
import Draggable, {DraggableCore} from "react-draggable";

class Column extends Component{

    render(){
        return (
            <div className="column">
                {this.props.content}
            </div>)
    }

}

export default Column;
