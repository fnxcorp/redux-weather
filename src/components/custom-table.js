/**
 * Created by fernandoorozco on 1/16/17.
 */
import React, {Component} from 'react';
import Group from './group';

class CustomTable extends Component{

    render(){
        return (
            <div>
                <Group columns={["hi","Hi2"]} />
                <Group columns={["bye","bye2"]} />
            </div>)
        }
    }


export default CustomTable;