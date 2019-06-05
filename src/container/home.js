import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { saveUserInfo } from '../actions/actions'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input';

const Container = styled.div`
  display: flex;
  height:100%;
  width:100%;
  flex-direction:column;
  align-items:center;
  background-color:#F0F0F0;
`
const NameFromStore = styled.div`
	font-size:large;
`

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		var userInfo = {
			name: event.target.value
		}
		this.props.saveUserInfo(userInfo)
	}

	render() {
		return (
			<Container>
			<Input placeholder="姓名" onChange={ this.handleChange } />
			<NameFromStore>
				{this.props.userInfo && this.props.userInfo.name}
			</NameFromStore>
			</Container>
		);
	}

}

const mapStateToProps = state => ({
  userInfo: state.home.userInfo
})

const mapDispatchToProps = dispatch => {
  return {
    saveUserInfo: (userInfo) => (
    dispatch(saveUserInfo(userInfo))
    )
  }
}

Home.propTypes = {
  saveUserInfo: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

