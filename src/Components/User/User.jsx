import React, { useState } from "react";
import "./User.css";
import Sidebar from "../Sidebar/Sidebar";

const User = () => {
  const [open, setOpen] = useState(false);
  const [segmentName, setSegmentName] = useState("");
  const [schemas, setSchemas] = useState([{ id: 1, value: "" }]);
  const [additionalSchemas, setAdditionalSchemas] = useState([]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSegmentNameChange = (e) => {
    setSegmentName(e.target.value);
  };

  const handleSchemaChange = (id, value) => {
    setSchemas((prevSchemas) =>
      prevSchemas.map((schema) =>
        schema.id === id ? { ...schema, value } : schema
      )
    );
  };

  const addNewSchemaDropdown = () => {
    const newId = schemas.length + 1;
    setSchemas([...schemas, { id: newId, value: "" }]);
    setAdditionalSchemas([
      { label: "Age", value: "age" },
      { label: "City", value: "city" },
      { label: "State", value: "state" },
    ]);
  };

  const handleSaveSegment = () => {
    const schemaObj = schemas
      .filter((schema) => schema.value)
      .map((schema) => {
        const [label, value] = schema.value.split(":");
        return { [value]: label };
      });
    console.log({
      segment_name: segmentName,
      schema: schemaObj,
    });

  };

  return (
    <div className="save-segment">
      <button className="btn-save" onClick={handleToggle}>
        {open ? "Close Segment" : "Save Segment"}
      </button>
      {open && (
        <Sidebar
          segmentName={segmentName}
          handleSegmentNameChange={handleSegmentNameChange}
          schemas={schemas}
          handleSchemaChange={handleSchemaChange}
          addNewSchemaDropdown={addNewSchemaDropdown}
          additionalSchemas={additionalSchemas}
          handleSaveSegment={handleSaveSegment}
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default User;
