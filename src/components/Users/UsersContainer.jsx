import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../assets/common/Preloader/Preloader";
import { compose } from "redux";
import { gettUsers, getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuper, getUsersSuperSelector } from "../../Redux/users-selector";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
        />
        ;
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: gettUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  };
};


export default compose(
  connect(mapStateToProps, 
    {follow, unfollow, setCurrentPage, getUsers})
)(UsersContainer)
