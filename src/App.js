import React, { useEffect, useState } from 'react';
import PlayLogo from '@/images/play-logo.png';
import MobilePhone from '@/images/mobile-phone.png';
import '@/utils/rem.js';
import { Col, Row } from 'antd';
import LabelValue from './components/LabelValue';
import CoverflowSlider from './components/CoverflowSlider';

import './App.less';

const prefix = 'app'

function App() {

  return (
    <div className={prefix}>
    <CoverflowSlider />
      <div>
        <h1 className={`${prefix}-element`}>Alberto Nuñez Upper Lower Program</h1>
        <p className={`${prefix}-element`}>4-day a week upper lower split by bodybuilding coach Alberto Nuñez, with 4 program variations..</p>
        <Row>
          <Col className={`${prefix}-element`} sm={16} xs={24}>
            <h2>Program Description</h2>
            <p>
              This 4-Day Upper Lower Program is designed by Alberto Nuñez, who is the head bodybuilding coach at 3D Muscle Journey. Alberto is an accomplished lifelong natural bodybuilder, having most recently won Mr. Universe at the 2022 WNBF.

              Alberto Nuñez designed this program to target your upper and lower body muscles twice a week. Additionally, there are 4 program variations for you to choose from, with each focused more on a specific muscle group.
            </p>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3FfYC_uH-RPLKc57T2GhOA.png" alt="" />
          </Col>
          <Col className={`${prefix}-element`} sm={8} xs={24}>
            <div className={`${prefix}-card`}>
              <h2>Program Overview</h2>
              <LabelValue label="Cooch" value="Alberto Nuñez" />
              <LabelValue label="Level" value="Beginner,Novice,Intermediate" />
              <LabelValue label="Equipment" value="Full Gym" />
              <LabelValue label="Time Per Workout" value="60 minutes" />
              <LabelValue label="Days Per Week" value="4 days" />
              <LabelValue label="Program Length" value="15 weeks" />
            </div>
            <div className={`${prefix}-download-info`}>
              <p>Start the program on Boostcamp for free</p>
              <img className={`${prefix}-mobile-phone`} src={MobilePhone} alt="" />
              <img src={PlayLogo} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

