const calculateCtr = (row) => {
  let ctr;

  if (row.social_clicks !== undefined && row.impressions !== undefined) {
    ctr = (100 / row.impressions) * row.social_clicks;
  } else if (row.clicks !== undefined && row.impressions !== undefined) {
    ctr = (100 / row.impressions) * row.clicks;
  }

  if (ctr !== undefined) {
    return Object.assign(row, { ctr });
  }
  return row;
}

export const formatTableData = (data) => {
  return Object.keys(data.result).map((ID) => {
    const row = calculateCtr(data.result[ID]);
    return Object.assign({ ID }, row);
  });
}