import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Launches from "./components/launches";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isLoading && (
          <React.Fragment>
            <div className="app-loader-background"></div>
            <Loader
              className="app-loader"
              type="Circles"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </React.Fragment>
        )}
        <div className="app-body">
          <Header />
          <Launches />
          <Footer />
        </div>

        <ToastContainer
          hideProgressBar
          position="bottom-right"
          autoClose={3000}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: !!state.apiCallInProgress
  };
};

export default connect(mapStateToProps)(App);
