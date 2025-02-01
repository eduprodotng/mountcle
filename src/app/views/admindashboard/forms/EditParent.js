import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const EditParent = ({ open, onClose, parentId, onSave }) => {
  const [newPassword, setNewPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    address: "",
    password: "", // Set an initial value (e.g., an empty string)
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchParentById = async () => {
      try {
        if (parentId) {
          // Assuming you have the JWT token stored in localStorage
          const token = localStorage.getItem("jwtToken");

          const response = await fetch(`${apiUrl}/api/get-parent/${parentId}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Include your authentication token
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Fetched parent data:", data);

            // Set the state with the fetched data
            setFormData({
              username: data.parent.username || "",
              phone: data.parent.phone || "",
              email: data.parent.email || "",
              address: data.parent.address || "",
              newPassword: "", // Reset new password field
            });
          } else {
            console.error(
              "Error fetching parent data. Status:",
              response.status
            );
          }
        }
      } catch (error) {
        console.error("Error fetching parent data:", error);
      }
    };

    // Only fetch data if the adminId prop has changed
    if (open && parentId !== null && parentId !== undefined) {
      console.log("Fetching data for parentId:", parentId);
      fetchParentById();
    }
  }, [open, parentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      // Update the existing password
      setFormData({ ...formData, [name]: value });
    } else if (name === "newPassword") {
      // Update the new password
      setNewPassword(value);
    } else {
      // Update other form fields
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    onSave({ ...formData, newPassword });
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Parent</DialogTitle>
      <DialogContent>
        <label>Username</label>
        <TextField
          type="text"
          name="username"
          autoFocus
          margin="dense"
          onChange={handleChange}
          value={formData.username}
          placeholder="Username"
          fullWidth
        />
        <label>Email Address</label>
        <TextField
          type="email"
          name="email"
          autoFocus
          margin="dense"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
          fullWidth
        />
        <label>Address</label>
        <TextField
          type="text"
          name="address"
          autoFocus
          margin="dense"
          onChange={handleChange}
          value={formData.address}
          placeholder="Address"
          fullWidth
        />
        {/* Add similar TextField components for other fields */}
        <label>Phone Number</label>
        <TextField
          type="phone"
          name="phone"
          margin="dense"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Phone"
          fullWidth
        />

        {/* Add similar TextField components for other fields */}

        <label>New Password</label>
        <TextField
          type="password"
          name="newPassword"
          margin="dense"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          placeholder="New Password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditParent;
