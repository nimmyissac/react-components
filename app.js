
var GroceryList = (props) => (
  <ul>
    {props.items.map( item =>
       <GroceryListItem groceryItem = {item} />
    )}
  </ul>
)

    

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	done: false,
    	hover: false
    }
  }
  onclick () {
  	this.setState({done: !this.state.done})
  }
  mouseOver () {
    this.setState({hover: true});
  }
  mouseOut () {
    this.setState({hover: false});
  }
  render() {
  	var style = {'text-decoration': this.state.done ? 'line-through' : 'none', 'font-weight' : this.state.hover ? 'bold' : 'normal'}
  	return  (<li style = {style} onClick ={this.onclick.bind(this)} onMouseOver = {this.mouseOver.bind(this)} onMouseOut = {this.mouseOut.bind(this)}> {this.props.groceryItem} </li>);
  }
 

}

ReactDOM.render(<GroceryList items={['Rice', 'Pasta']}/> , document.getElementById('app'));
