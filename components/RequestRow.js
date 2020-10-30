import React, { Component } from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export default class RequestRow extends Component {

    onApprove = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
    };

    onFinalise = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finaliseRequest(this.props.id).send({
            from: accounts[0]
        });
    }

  render() {
    const {Row, Cell, Body} = Table;
    const {id, request, approversCount} = this.props
    const readyToFinalise = request.approvalCount > approversCount/2
    return (
      <Row disabled={request.complete} positive={readyToFinalise && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount}/{approversCount}</Cell>
        
        <Cell>
        { request.complete ? null : (
            <Button basic color='green'  onClick={this.onApprove}>Approve </Button>
            )
        }
        </Cell>
        <Cell>
        { request.complete ? null : (
            <Button basic color='blue'  onClick={this.onFinalise}>Finalise</Button>
            )
        }
        </Cell>
        
        
      </Row>
    )
  }
}
