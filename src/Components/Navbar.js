import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';

import {useState} from 'react';

import CrossGreaterThan from '../fontawesomeicons/CrossGreaterThan';

const ChurchNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (isOpen) => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Container>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><CrossGreaterThan/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Who we are
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Why "Formation Church?"
                                </DropdownItem>
                                <DropdownItem>
                                    Leadership and Staff
                                </DropdownItem>
                                <DropdownItem>
                                    What We Believe
                                </DropdownItem>
                                <DropdownItem>
                                    Our Mission
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Let's Connect
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Church Gatherings
                                </DropdownItem>
                                <DropdownItem>
                                    Contact Us
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Resources
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Book Club Guide
                                </DropdownItem>
                                <DropdownItem>
                                    Read the Bible Online
                                </DropdownItem>
                                <DropdownItem>
                                    <strong>Assist</strong> Church Expansion Ministry
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </>
    )
};

export default ChurchNavbar;