import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import PropTypes from "prop-types";

const UsersList = ({ currentUserId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((user) => user.id !== currentUserId); // Exclude the current user
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [currentUserId]);

  const sendConnectionRequest = async (userId) => {
    try {
      const connectionRef = doc(db, "connections", `${currentUserId}_${userId}`);
      await setDoc(connectionRef, {
        from: currentUserId,
        to: userId,
        status: "pending", // Connection status
      });
      alert("Connection request sent!");
    } catch (error) {
      console.error("Error sending connection request:", error);
    }
  };

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => sendConnectionRequest(user.id)}>
              Connect
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Prop validation
UsersList.propTypes = {
  currentUserId: PropTypes.string.isRequired, // Adjust the type based on the actual type
};

export default UsersList;
