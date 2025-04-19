import React, {Component} from 'react';
import Image from './image';
class List extends Component{
    render(){
        return(
            <div>
                <Image/>
                <ol>
                    <li> <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" alt="Food" width="500"/> </li>
                    <li> <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/rendang.jpg" alt="Food" width="500"/> </li>
                    <li> <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.jpg" alt="Food" width="500"/> </li>
                </ol>
            </div>
        );
    }
}export default List;
