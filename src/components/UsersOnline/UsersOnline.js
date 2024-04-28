
import React from "react";

const UsersOnline = ({ users }) => {
    // Slice the array to only the first 20 users
    const displayedUsers = users.slice(0, 20);

    // Map over the displayed users to create the list with commas
    const usersList = displayedUsers.map((user, index) => (
        <span key={user.id}>
            {user.name}{index < displayedUsers.length - 1 ? ', ' : ''}
        </span>
    ));

    return (
        <div className="list_users">
            <p className="list">
                {usersList}
                {users.length > 20 && '...'}
            </p>
            <p>
                Total: 32 (users: 25, guests: 7)
            </p>
        </div>
    );
};

export default UsersOnline;