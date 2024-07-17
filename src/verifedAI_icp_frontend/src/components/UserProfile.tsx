import React from "react";

interface ProfileProps {
  id: string;
  name: string;
  certifications: number;
}

const UserProfile: React.FC<ProfileProps> = ({ id, name, certifications }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-52">
      <figure className="">
        <img
          className=""
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <h2>User Profile</h2>
        </h2>

        <div className="profile-info">
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Certifications:</strong> {certifications}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
