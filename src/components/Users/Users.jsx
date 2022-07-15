import React from "react";
import Paginator from "./Paginator";
import User from "./User";

const Users = ({
  users,
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User users={u} unfollow={unfollow} follow={follow} />
        ))}
      </div>
    </div>
  );
};

export default Users;
