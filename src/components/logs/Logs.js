import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import PropTypes from "prop-types";
import { getLogs } from "../../action/logAction";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  console.log("LOGS" + Logs);
  useEffect(() => {
    getLogs();
    /// eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center"> System logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center"> No Logs To show... </p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
