import React, { useEffect, useState } from "react";
import "../Styles/Dashboard.css";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 20;

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=1000")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.first.localeCompare(b.name.first);
    } else if (sortBy === "age") {
      return a.dob.age - b.dob.age;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleUserClick = (user) => {
    if (selectedUser && selectedUser.login.uuid === user.login.uuid) {
      setSelectedUser(null);  // Close details when clicking on the same user
    } else {
      setSelectedUser(user);  // Open details for the selected user
    }
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);  // Close details on "Close" button click
  };

  return (
    <div className="main">
      <h1 className="text-3xl font-bold mb-4 text-center">User Dashboard</h1>

      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by name..."
              className="p-2 border rounded flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="p-2 border rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="age">Sort by Age</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-3">Photo</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Country</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-200 transition cursor-pointer"
                    onClick={() => handleUserClick(user)}
                  >
                    <td className="p-3 text-center">
                      <img
                        src={user.picture.thumbnail}
                        alt="User"
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    </td>
                    <td className="p-3">{`${user.name.first} ${user.name.last}`}</td>
                    <td className="p-3">{user.gender}</td>
                    <td className="p-3">{user.dob.age}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.location.country}</td>
                    <td className="p-3">
                      <button onClick={() => handleUserClick(user)}>
                        {selectedUser && selectedUser.login.uuid === user.login.uuid
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedUser && (
            <div className="user-details mt-6 p-4 border-t border-gray-300">
              <h2 className="text-2xl font-bold">User Details</h2>
              <div className="mt-4">
                <strong>Name:</strong> {`${selectedUser.name.first} ${selectedUser.name.last}`}
              </div>
              <div>
                <strong>Gender:</strong> {selectedUser.gender}
              </div>
              <div>
                <strong>Age:</strong> {selectedUser.dob.age}
              </div>
              <div>
                <strong>Email:</strong> {selectedUser.email}
              </div>
              <div>
                <strong>Phone:</strong> {selectedUser.phone}
              </div>
              <div>
                <strong>Location:</strong> {`${selectedUser.location.street.number} ${selectedUser.location.street.name}, ${selectedUser.location.city}, ${selectedUser.location.state}, ${selectedUser.location.country}`}
              </div>
              <div>
                <strong>Nationality:</strong> {selectedUser.nat}
              </div>
              <div>
                <button
                  onClick={handleCloseDetails}
                  className="px-4 py-2 bg-red-500 text-white rounded mt-4"
                >
                  Close
                </button>
              </div>
              <div>
                <img
                  src={selectedUser.picture.large}
                  alt="User"
                  className="mt-4 w-32 h-32 rounded-full mx-auto"
                />
              </div>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <button
              className="px-3 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="px-3 py-2 mx-1 bg-gray-200 rounded">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
