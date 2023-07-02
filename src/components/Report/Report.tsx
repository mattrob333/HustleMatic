import React from 'react';
import { reportProcessing } from '../../utils/reportProcessing';

interface ReportProps {
  reportData: any;
}

const Report: React.FC<ReportProps> = ({ reportData }) => {
  const processedReport = reportProcessing(reportData);

  return (
    <div id="report-component">
      <h2>Daily Report</h2>
      <div id="report-content">
        {processedReport.map((reportItem: any, index: number) => (
          <div key={index} className="report-item">
            <h3>{reportItem.title}</h3>
            <p>{reportItem.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;