/**
 * Created by fernandoorozco on 1/16/17.
 */
import React, {Component} from "react";
import Draggable, {DraggableCore} from "react-draggable";
import Column from "./column";

class Group extends Component{

    render(){
        return (
            <div className="group">
                {this.props.columns.map(colText => <Column content={colText} /> )}
            </div>)
    }

}

export default Group;
