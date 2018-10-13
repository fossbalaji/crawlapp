import React, {Component} from 'react';



class PageDetail extends Component{
	constructor(props){
		super(props);
		this.state = {domain: {}, crawled: []};
		this.renderLinks = this.renderLinks.bind(this);
		this.renderImages = this.renderImages.bind(this);
	}

	componentDidMount(){
    	//hit the API and get data now
    	const API = `/api/v1/domain/${this.props.match.params['domainid']}/`;
    	fetch(API, {'mode': 'cors'}).then(response => response.json()).then(data => this.setState({ crawled: data.crawled}));
  	}

  	renderLinks(links){
  		// get item and return list of <p> tags
  		const tempLinks = links;
  		return tempLinks.map((link) => <p>{link}</p>);
  	}

  	renderImages(image_links){
  		const imageLinks = image_links;
  		return imageLinks.map((link) => <img src={link} alt={""}></img>);
  	}


	render(){

		const crawleddata = this.state.crawled;
		return (
			<div className='table-conatiner'>
			<table>
				<tr>
			    	<th>Url</th>
			    	<th>Page Links</th>
			    	<th>Image Links</th>
				</tr>
				<tbody>
		          {crawleddata.map((item) =>
		            <tr>
		            	<td>
		             	{item["url"]}
		             	</td>
		             	<td>
		             	{this.renderLinks(item["links"])}
		             	</td>
		             	<td>
		             	{this.renderImages(item["image_links"])}
		             	</td>
		            </tr>
		          )}
		        </tbody>
			</table>
			</div>
			);
	}
}

export default PageDetail;