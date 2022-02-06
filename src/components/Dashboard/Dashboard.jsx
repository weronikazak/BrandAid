import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { DashboardOutlined, SettingOutlined, ShopOutlined, PayCircleOutlined, LoginOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { BarChartOutlined, DollarOutlined, TrophyOutlined } from "@ant-design/icons";
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import chart from '../../../public/chart_placeholder.PNG';
import { Pie } from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js';

Chart.register(ArcElement);


export class Dashboard extends Component {
  render () {
    return (
      <>
<div style={{width: "100vw", height: "100vh", background: "#fff", position: "fixed", top: 0}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <span style={{fontWeight:"600", color: "black", marginLeft: "330px", fontSize: 28}}>Dashboard</span>
      <br/>
      <br/>

      <Grid container spacing={2}>
        <Grid item xs={2}>
            <Sidebar/>
        </Grid>
        
          <Grid item xs={3}  style={{ marginLeft: 40}}>
            <div style={{padding: 25, background: "#F2F2F2", borderRadius: "10px", height: "140px", marginBottom: "20px"}}>
              <div style={{display: "flex"}}>
                <div style={{fontSize: 36, width: "55px", height:"55px", padding: "5px 10px", borderRadius: "50px", color: "#4A68F0", background: "#DBE1FC"}}>
                  <BarChartOutlined />
                </div>
                  <span style={{fontSize: 16, padding: 16}}>$ 30,893.00</span>
                </div>
                <br/>
                <span style={{color: "#86898D"}}>Sales Generated</span>
            </div>
            <div style={{padding: 25, background: "#F2F2F2", borderRadius: "10px", height: "140px"}}>
              <div style={{display: "flex"}}>
                <div style={{fontSize: 36, width: "55px", height:"55px", padding: "5px 10px", borderRadius: "50px", color: "#29CC7A", background: "#D4F5E4"}}>
                <DollarOutlined />
                </div>
                  <span style={{fontSize: 16, padding: 16}}>105,988.45</span>
                </div>
                <br/>
                <span style={{color: "#86898D"}}>Token Balance</span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div style={{padding: 25, background: "#F2F2F2", borderRadius: "10px", height: "140px", marginBottom: "20px"}}>
            <div style={{display: "flex"}}>
                <div style={{fontSize: 36, width: "55px", height:"55px", padding: "5px 10px", borderRadius: "50px", color: "#fff", background: "#AE39D7"}}>
                <TrophyOutlined />
                </div>
                  <span style={{fontSize: 16, padding: 16}}>$ 2,500.00</span>
                </div>
                <br/>
                <span style={{color: "#86898D"}}>Total Rewards Issued</span>
            </div>
            <div style={{padding: 25, background: "#F2F2F2", borderRadius: "10px", height: "140px"}}>
            <div style={{display: "flex"}}>
                <div style={{fontSize: 36, width: "55px", height:"55px", padding: "5px 10px", borderRadius: "50px", color: "#fff", background: "#7A09D2"}}>
                <PayCircleOutlined />
                </div>
                  <span style={{fontSize: 16, padding: 16}}>1,008</span>
                </div>
                <br/>
                <span style={{color: "#86898D"}}>NFT in Circulation</span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div style={{ padding: 25, background: "#F2F2F2", borderRadius: "10px", height: "300px"}}>
            <span style={{ fontWeight: 600}}>Overview</span>
            <Image src={chart} style={{width: "50px", height: "40px"}}/>
            {/* <BarChart/> */}
            </div>
          </Grid>
        </Grid>
</div>
      </>
    );
  }
}

const BarChart = () => {
  return (
    <Pie
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of votes',
            data: [12, 19, 3, 5, 2, 3],
          },
        ],
        backgroundColor: [
    'orange',
    'blue',
    'red',
    'purple',
    'green'
    ],
    hoverBackgroundColor: [
    'orange',
    'blue',
    'red',
    'purple',
    'green'
    ],
    borderColor: [ 'orange',
    'blue',
    'red',
    'purple',
    'green'
    ]
      }}
      height={200}
      width={200}
    />
  )
}

function SidebarItem() {
    return (
      <div >
      <br/>
      <br/>
      <br/>
        <ListItem button dense>
          <ListItemText style={{padding: "0 30px"}}>
          <span style={{marginRight: "10px", color: "#8209AD", fontSize: "20px"}}>
          <DashboardOutlined />
          </span>
            <span style={{fontSize: "16px"}}>Dashboard</span>
          </ListItemText>
        </ListItem>
        <ListItem button dense >
          <ListItemText style={{padding: "0 30px"}}>
          <span style={{marginRight: "10px", color: "#8209AD", fontSize: "20px"}}>
          <ShopOutlined />
          </span>
            <span style={{fontSize: "16px"}}>Create Ad Campaign</span>
          </ListItemText>
        </ListItem>
        <ListItem button dense >
          <ListItemText style={{padding: "0 30px"}}>
          <span style={{marginRight: "10px", color: "#8209AD", fontSize: "20px"}}>
          <PayCircleOutlined />
          </span>
            <span style={{fontSize: "16px"}}>Create NFT Rewards</span>
          </ListItemText>
        </ListItem>
        <ListItem button dense >
          <ListItemText style={{padding: "0 30px"}}>
          <span style={{marginRight: "10px", color: "#8209AD", fontSize: "20px"}}>
          <VideoCameraOutlined />
          </span>
            <span style={{fontSize: "16px"}}>Active Ads</span>
          </ListItemText>
        </ListItem>
        <ListItem button dense >
          <ListItemText style={{padding: "0 30px"}}>
          <span style={{marginRight: "10px", color: "#8209AD", fontSize: "20px"}}>
          <SettingOutlined />
          </span>
            <span style={{fontSize: "16px"}}>Settings</span>
          </ListItemText>
        </ListItem>
        <ListItem button dense >
          <ListItemText style={{padding: "0 30px"}}>
          <span style={{marginRight: "10px", color: "red", fontSize: "20px"}}>
          <LoginOutlined />
          </span>
            <span style={{color: "red", fontSize: "16px"}}>Log out</span>
          </ListItemText>
        </ListItem>
      </div>
    )
  }
  
  function Sidebar({ items }) {
    return (
      <div className="sidebar" 
      style={{position:"fixed", top:60, left: 0, background: "#DCDCDC", 
      height:"100vh", display: "block"}}>
        <List dense>
          <SidebarItem/>
        </List>
      </div>
    )
  }

export default Dashboard;