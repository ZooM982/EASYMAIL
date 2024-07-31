import React from "react"

const ResourceDataMap = ({
    resourceData,
    resourceItem: ResourceItem,
    resourceName
}) => {
    return (
        <>
            {
                resourceData.map((resource, i) => (
                    <ResourceItem key={i} {...{ [resourceName]: resource }} />
                ))
            }
        </>
    )
}

export default ResourceDataMap