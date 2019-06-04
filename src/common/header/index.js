import React,{Component} from 'react';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper
} from './style.js';

class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			focused:true
		}
		this.handleInputFocus=this.handleInputFocus.bind(this)
	}
	render() {
	    return (
	      <HeaderWrapper>
	        <Logo />
	        <Nav>
	        	<NavItem className='left active'>首页</NavItem>
	        	<NavItem className='left'>下载App</NavItem>
	        	<NavItem className='right'>登录</NavItem>
	        	<NavItem className='right'>
	        		<i className="iconfont">&#xe636;</i>
	        	</NavItem>
	        	<SearchWrapper>
		        	<NavSearch className={this.state.focused?'focused':''}
		        				onFocus={this.handleInputFocus}
		        	></NavSearch>
		        	<i className={this.state.focused?'focused iconfont':'iconfont'}>&#xe60b;</i>
	        	</SearchWrapper>
	        </Nav>
	        <Addition>
	        	<Button className='writing'>
	        	<i className='iconfont'>&#xe62b;</i>
	        	写文章
	        	</Button>
	        	<Button className='reg'>注册</Button>
	        </Addition>
	      </HeaderWrapper>
	    )
  	}
  	handleInputFocus(){
  		this.setState({
  			focused:true
  		})
  	}
}

export default Header;