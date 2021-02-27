import React from "react";
import "./Resources.css";
import ResourceCard from "../../components/resourceCard/ResourceCard";
const Resources = () => {
  return (
    <div className="resources_container">
      <ResourceCard
        name="Org. Name"
        description="Org. Description short"
        resources="Resource"
      />
      <ResourceCard
        name="Org. Name"
        description="Org. Description short"
        resources="Resource"
      />
      <ResourceCard
        name="Org. Name"
        description="Org. Description short"
        resources="Resource"
      />
      <ResourceCard
        name="Org. Name"
        description="Org. Description short"
        resources="Resource"
      />
    </div>
  );
};

export default Resources;
