import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Button, Grid } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';


export default class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        
        return {
            address: props.query.address,
            minimumContribution:summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const items = [
            {
                header: this.props.manager,
                description:
                'Manager created this campaign and they can create requests. ',
                meta: 'Address of Manager',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: this.props.minimumContribution,
                description:
                'You must contribute this much wei to become anapprover  ',
                meta: 'Minimum Contribution (wei)',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: this.props.requestCount,
                description:
                'Requests to be approved ',
                meta: 'Number of Total Requests',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: this.props.approversCount,
                description:'Number of People who have already donated to the campaign',
                meta: 'Number of Approvers',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: web3.utils.fromWei(this.props.balance),
                description:'How much money the campaign has left',
                meta: 'Campaign Balance (ether)',
                style: {overflowWrap: 'break-word'}
            }
            

        ]

        return <Card.Group items={items} />;
    }
  render() {
    return (
        <Layout>
            <h3>
                Campaign Shown
            </h3>
            <Grid>
                <Grid.Column width={10}>
                <Grid.Row>
                    {this.renderCards()}
                </Grid.Row>
                </Grid.Column>
                <Grid.Column width={6}>
                    <ContributeForm address= {this.props.address} />
                </Grid.Column>

                <Grid.Row> 
                <Grid.Column>
                    <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                    </Link>
                </Grid.Column>
                </Grid.Row>
                
            </Grid>
            
            
        </Layout>
    );
  }
}
