import React, { useState } from 'react';
import moment from 'moment';
import { Classes, Navbar, Alignment, AnchorButton, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

function Topbar({ className }) {
  const [status] = useState(false);
  const date = moment().format('MMMM Do YYYY');
  const time = moment().format('h:mm:ss a');
  return (
    <Navbar className={`${className} ${Classes.DARK}`} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Navbar.Group align={Alignment.LEFT}>
        <Icon icon={IconNames.OFFLINE} intent={status ? "none" : "danger"} />
        <Navbar.Divider />
        <Navbar.Heading>Device #1</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <div style={{ textAlign: "right" }}>
          <div>{date}</div>
          <div>{time}</div>
        </div>
        <Navbar.Divider />
        <AnchorButton text="ECMV" target="_blank" href="https://www.github.com/ilomon10/ECMV" />
      </Navbar.Group>
    </Navbar>
  )
}

export default Topbar;