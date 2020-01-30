import $ from "jquery";
import {Component} from "preact";
import style from "./style/.scss";

const {
    globalapp
} = style;

export default class App extends Component {
    constructor(props) {
        super();
        
      
    }
  
    render() {
        return <div class={globalapp}>Your Preact App is working</div>
    }
} 
