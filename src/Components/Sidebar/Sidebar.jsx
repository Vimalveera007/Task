import React from "react";
import "./Side.css";

const Sidebar = ({
  segmentName,
  handleSegmentNameChange,
  schemas,
  handleSchemaChange,
  addNewSchemaDropdown,
  additionalSchemas,
  handleSaveSegment,
  handleToggle,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <input
          type="text"
          placeholder="Segment Name"
          value={segmentName}
          onChange={handleSegmentNameChange}
          className="input-box"
        />
        {schemas.map((schema) => (
          <select
            key={schema.id}
            value={schema.value}
            onChange={(e) => handleSchemaChange(schema.id, e.target.value)}
            className="input-box"
          >
            <option value="">Add schema to segment</option>
            <option value="First Name:first_name">First Name</option>
            <option value="Last Name:last_name">Last Name</option>
            <option value="Gender:gender">Gender</option>
            {additionalSchemas.map((additionalSchema) => (
              <option
                key={additionalSchema.value}
                value={`${additionalSchema.label}:${additionalSchema.value}`}
              >
                {additionalSchema.label}
              </option>
            ))}
          </select>
        ))}
        <button className="btn-add-schema" onClick={addNewSchemaDropdown}>
          +Add new schema
        </button>
        <button className="btn-save-segment" onClick={handleSaveSegment}>
          Save the Segment
        </button>
        <button className="btn-close" onClick={handleToggle}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
