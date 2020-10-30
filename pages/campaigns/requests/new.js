import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link ,Router} from '../../../routes';
import Layout from '../../../components/Layout';

export default class NewRequest extends Component {

    state = {
        description:'',
        value:'',
        recipient:'',
        loading:false,
        errorMessage:''
    }

    static async getInitialProps(props){
        const address = props.query.address;

        return {address}
    }

    onSubmit = async(event) => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        const {description,value,recipient} = this.state;
        this.setState({loading:true,errorMessage:''})
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description,web3.utils.toWei(value,'ether'),recipient).send({
                from:accounts[0]
            });
            Router.replaceRoute(`/campaigns/${this.props.address}/requests/new`);
        } catch (error) {
            this.setState({errorMessage:error.message});
        }

        this.setState({loading:false,value:'',description:'', recipient:''})
    }
  render() {
    return (
        <Layout>
            <Link route={`/campaigns/${this.props.address}/requests`}>
            <a>
                <Button primary>Back</Button>
            </a>
            </Link>
            <h3>Create a new request!</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input value={this.state.description} onChange={(e) => this.setState({description:e.target.value})}  />
                </Form.Field>
                <Form.Field>
                    <label>Value (in Ether)</label>
                    <Input value={this.state.value} onChange={(e) => this.setState({value:e.target.value})} />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input value={this.state.recipient} onChange={(e) => this.setState({recipient:e.target.value})}  />
                </Form.Field>
                <Message error header="Oops!" content= {this.state.errorMessage} />
                <Button primary loading={this.state.loading}>Create </Button>
            </Form>
        </Layout>
      
    )
  }
}
