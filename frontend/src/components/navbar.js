import React from 'react';
import { Sidenav, Nav, IconButton } from 'rsuite';
import MenuIcon from '@rsuite/icons/Menu';

const Navbar = ({ handleSelect, activeKey, expanded, setExpanded, menuItems }) => {
  return (
    <div style={{ width: 240 }}>
      <IconButton
        icon={<MenuIcon style={{ color: '#293d75' }} />}
        onClick={() => setExpanded(!expanded)}
        appearance="subtle"
        style={{ marginBottom: 10 }}
      />
      <Sidenav expanded={expanded} style={{ backgroundColor: '#293d75' }}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={handleSelect} style={{ color: '#293d75' }}>
            {menuItems.map((item, index) => (
              <Nav.Item
                key={index}
                eventKey={item.eventKey}
                icon={item.icon}
              >
                {item.label}
              </Nav.Item>
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Navbar;
