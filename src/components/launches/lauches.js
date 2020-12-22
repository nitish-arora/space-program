import React, { Component } from "react";
import { connect } from "react-redux";

import Filters from "../common/filters";
import { getQueryString, getQueryParams } from "../../lib/helper";
import { getSpaceLaunches } from "./../../redux/actions/spaceLaunchActions";
import LaunchList from "./launchList";
import "./launches.css";
import { withRouter } from "react-router-dom";

class Launches extends Component {
  queryParams = getQueryParams(this.props.location.search);
  state = {
    filters: {
      launch_year: this.queryParams.launch_year || null,
      launch_success: this.queryParams.launch_success || null,
      land_success: this.queryParams.land_success || null
    },
    queryString: getQueryString(this.queryParams)
  };

  componentDidMount() {
    console.log(this.props.location.search);
    if (!this.props.launches.length) {
      this.props.getSpaceLaunches(this.state.queryString);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.queryString !== prevState.queryString) {
      this.props.getSpaceLaunches(this.state.queryString);
    }
  }

  filterAppliedHandler = (name, value) => {
    const filters = { ...this.state.filters };
    const queryParams = getQueryParams(this.state.queryString);
    if (filters[name] && filters[name] === value) {
      filters[name] = null;
      delete queryParams[name];
    } else {
      filters[name] = value;
      queryParams[name] = value;
    }
    const updatedQueryString = getQueryString(queryParams);
    this.props.history.push(`?${updatedQueryString}`);
    this.setState({ filters, queryString: updatedQueryString });
  };

  render() {
    return (
      <div className="launch-program-container">
        <div className="launch-program-body">
          <Filters
            appliedFilters={this.state.filters}
            onFilterApply={this.filterAppliedHandler}
          />
          <LaunchList launchItems={this.props.launches} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    launches: state.launches
  };
};

const mapDispatchToProps = {
  getSpaceLaunches
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Launches)
);
