import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import logo from '../img/FLogo.jpg';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';


const ChurchNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
                <Navbar color="light" light sticky='top' expand="md">
                <NavbarBrand href="/"><img className='navbar-logo' src={logo} /></NavbarBrand>
                <NavbarToggler onClick={() => toggle()} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Who we are
                            </DropdownToggle>
                            <DropdownMenu end>
                                <NavItem>
                                    <NavLink className='nav-link' to='WhyFormationChurch'>
                                        <DropdownItem>
                                            Why "Formation Church"
                                        </DropdownItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='LeadershipAndStaff'>
                                        <DropdownItem>
                                            Leadership and Staff
                                        </DropdownItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='WhatWeBelieve'>
                                        <DropdownItem>
                                            What We Believe
                                        </DropdownItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='OurMission'>
                                        <DropdownItem>
                                            Our Mission
                                        </DropdownItem>
                                    </NavLink>
                                </NavItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Let's Connect
                            </DropdownToggle>
                            <DropdownMenu end>
                                <NavItem>
                                    <NavLink className="nav-link" to='events'>
                                        <DropdownItem>
                                            Events
                                        </DropdownItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='ChurchGatherings'>
                                        <DropdownItem>
                                            Church Gatherings
                                        </DropdownItem>
                                    </NavLink>
                                </NavItem>
                                    <NavLink className="nav-link" to='ContactPage'>
                                        <DropdownItem>
                                            Contact Us
                                        </DropdownItem>
                                    </NavLink>
                                </NavItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            External Resources
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <a href="https://formed-church.netlify.app/That-Man-Called-Jesus.pdf">Book Club Guide</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="https://www.biblegateway.com/" className='unstyled-link' target='_blank'>Read the Bible Online</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="https://assistcx.org/" className='unstyled-link' target='_blank'><strong>Assist</strong> Church Expansion Ministry</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
        </>
    )
};

export default ChurchNavbar;