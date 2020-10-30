import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import {Button, Table} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

export default class RequestsIndex extends Component {

    static async getInitialProps(props) {
        const address = props.query.address;
        const campaign = await Campaign(address);
        const requestCount = await campaign.methods.getRequestCount().call();
        const approversCount = await campaign.methods.approversCount().call();
        const requests = await Promise.all(
          Array(parseInt(requestCount))
            .fill()
            .map((element,index) => {
              return campaign.methods.requests(index).call()
            })
        );

        return {address, requests, requestCount, approversCount};
    }

    renderRow = () => {
      return this.props.requests.map((request,index) => {
        return <RequestRow 
                key={index}
                request={request}
                address={this.props.address}
                id={index}
                approversCount={this.props.approversCount}
                />;
      });
    }
  render() {
    const {Header, Row, HeaderCell, Body} = Table;
    return (
      <Layout>
          <div>
            <h3>
            List of Requests
            </h3>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>
            <a>
            <Button primary floated="right" style={{marginBottom: "10px"}}> Add Request</Button>
            </a>
            </Link>
            <Table>
              <Header>
                <Row>
                  <HeaderCell>ID</HeaderCell>
                  <HeaderCell>Description</HeaderCell>
                  <HeaderCell>Amount</HeaderCell>
                  <HeaderCell>Recipient</HeaderCell>
                  <HeaderCell>Approval Count</HeaderCell>
                  <HeaderCell>Approve</HeaderCell>
                  <HeaderCell>Finalise</HeaderCell>
                </Row>
              </Header>
              <Body>
                {this.renderRow()}
              </Body>
            </Table>
            <div>
              Found {this.props.requestCount} requests 
            </div>
         </div>
     </Layout> 
    )
  }
}
