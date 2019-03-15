import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./styles.scss";

class Header extends React.Component {
  state = {
    desktop: false,
    menuOpen: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.isDesktop);

    this.isDesktop();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isDesktop);
  }

  isDesktop = debounce(() => {
    const deskTopBp = window.matchMedia("(min-width: 900px)");
    if (deskTopBp.matches) {
      this.setState({
        desktop: true,
      });
    } else {
      this.setState({
        desktop: false,
      });
    }
  }, 500);

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  render() {
    const { menuOpen, desktop } = this.state;
    return (
      <header className="eats-header">
        {!menuOpen && !desktop && (
          <i onClick={this.toggleMenu} className="eats-icon-menu icon-menu" />
        )}
        {menuOpen && !desktop && (
          <i onClick={this.toggleMenu} className="eats-icon-menu icon-close" />
        )}
        <Link className="eats-header-link" to="/">
          <i className="eats-icon-logo icon-logo" />
          <span className="eats-header-name">Eats.</span>
        </Link>

        {(menuOpen || desktop) && <Nav />}
      </header>
    );
  }
}

export default Header;
