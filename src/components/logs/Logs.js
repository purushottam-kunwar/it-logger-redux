import React, { useState, useEffect } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    /// eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    console.log(data);

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4> Loading... </h4>;
  }

  return (
    <div>
      <ul className="collection-with-header">
        <li className="collection-header">
          <h4 className="center"> System logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center"> No Logs To show... </p>
        ) : (
          logs.map((log) => <li>{log.message}</li>)
        )}
      </ul>
    </div>
  );
};

export default Logs;
