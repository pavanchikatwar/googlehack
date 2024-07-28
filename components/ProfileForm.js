import { useState } from 'react';
import styles from './ProfileForm.module.css'; // Import your CSS module for styling

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    profilePicture: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    address: '',
    socialLinks: {
      linkedin: '',
      twitter: '',
      facebook: '',
    },
    businessName: '',
    businessType: '',
    website: '',
    description: '',
    language: 'English',
    notifications: {
      email: true,
      sms: false,
    },
    bio: '',
    dob: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        notifications: { ...formData.notifications, [name]: checked }
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        profilePicture: files[0]
      });
    } else if (name.startsWith('socialLinks.')) {
      const key = name.split('.')[1];
      setFormData({
        ...formData,
        socialLinks: { ...formData.socialLinks, [key]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className={styles.profileForm}>
      <h2>Profile Information</h2>
      
      {/* Basic Information */}
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <label>
        Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      {/* Profile Picture */}
      <label>
        Profile Picture:
        <input
          type="file"
          name="profilePicture"
          onChange={handleChange}
        />
      </label>

      {/* Password Management */}
      <label>
        Current Password:
        <input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
        />
      </label>

      <label>
        New Password:
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
      </label>

      <label>
        Confirm New Password:
        <input
          type="password"
          name="confirmNewPassword"
          value={formData.confirmNewPassword}
          onChange={handleChange}
        />
      </label>

      {/* Address */}
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      {/* Social Media Links */}
      <label>
        LinkedIn:
        <input
          type="url"
          name="socialLinks.linkedin"
          value={formData.socialLinks.linkedin}
          onChange={handleChange}
        />
      </label>

      <label>
        Twitter:
        <input
          type="url"
          name="socialLinks.twitter"
          value={formData.socialLinks.twitter}
          onChange={handleChange}
        />
      </label>

      <label>
        Facebook:
        <input
          type="url"
          name="socialLinks.facebook"
          value={formData.socialLinks.facebook}
          onChange={handleChange}
        />
      </label>

      {/* Business Information */}
      <label>
        Business Name:
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
        />
      </label>

      <label>
        Business Type:
        <input
          type="text"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
        />
      </label>

      <label>
        Website URL:
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      {/* Preferences and Settings */}
      <label>
        Preferred Language:
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          {/* Add more languages as needed */}
        </select>
      </label>

      <label>
        Notification Preferences:
        <div>
          <label>
            <input
              type="checkbox"
              name="email"
              checked={formData.notifications.email}
              onChange={handleChange}
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              name="sms"
              checked={formData.notifications.sms}
              onChange={handleChange}
            />
            SMS
          </label>
        </div>
      </label>

      {/* Additional Information */}
      <label>
        Bio:
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </label>

      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileForm;
