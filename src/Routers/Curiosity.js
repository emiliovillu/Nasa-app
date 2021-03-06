import React, { Component } from 'react'
import { getCuriosity } from '../service/api'
import { Grid, Row, Col,  Thumbnail }  from 'react-bootstrap'



class Curiosity extends Component {
	constructor (props) {
		super(props)
		this.state = {
			photos: []
		}
	}
  
	componentDidMount () {
		getCuriosity()
			.then(data => {
				this.setState({
					photos: data.photos.map(photo => {
						return ({
							image: photo.img_src,
							rover_name: photo.rover.name,
							date_launch: photo.rover.launch_date,
							date_landing: photo.rover.landing_date
						})
					})
				})
			})
	}
	render() {
		console.log(this.state.photos)
		return(
			<Grid>
				<Row>
					{
						this.state.photos.length &&
            this.state.photos.map((photo,i) => {
            	return (
            	
            		<Col xs={12} sm={6} md={3} key={i}>
            			<Thumbnail
            				src={photo.image} 
            				key={i} 
            			>
            				<h5>{`Name of the probe: ${photo.rover_name}`}</h5>
            				<p>{`Release date: ${photo.date_launch}`}</p>
            				<p>{`Date of landing: ${photo.date_landing}`}</p>
            			</Thumbnail>
            		</Col>
            	)
            })
					}
				</Row>
			</Grid>
		)
	}
}
  


export default Curiosity