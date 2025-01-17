import React from 'react';

const IncidentsDaysAgo= React.memo(({ apiDataJson }) => {
    return (
        <div className="incidents-days-ago">
            <p className="body-title">Days without PagerDuty incidents: {apiDataJson.daysAgo}</p>
        </div>
    );
});

export default IncidentsDaysAgo;