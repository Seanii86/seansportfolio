import React from 'react';

export default function ProjectDetails(projectsData, projectId) {

    const idx = projectsData[projectId]

    return (
        <div className='detail-container'>
            {projectsData[idx].description}
            </div>
    )
}