import React, { useEffect, useState } from 'react';
import './index.less';

const prefix = 'label-value'
const LabelValue = ({ label, value }) => {
  return (
    <div className={prefix}>
      <div className={`${prefix}-label`}>{label}</div>
      <div className={`${prefix}-value`}>{value}</div>
    </div>
  )
}
export default LabelValue;