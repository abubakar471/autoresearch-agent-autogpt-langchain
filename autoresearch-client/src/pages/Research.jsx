import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";

const Research = () => {
  const [keyword, setKeyword] = useState("");
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openPopUp, setOpenPopUp] = useState(false);

  const fetchReports = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/reports");
      if (data.result) setReports(data.result);
    } catch (err) {
      console.log("error while fetching reports => ", err);
      if (err?.response?.status === 500) {
        setMessage("Service Currently Off!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReportContent = async (reportName) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/reports/${reportName}`);
      setReportContent(response.data.result);
    } catch (err) {
      console.log("error while fetching report content => ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleReportClick = (reportName) => {
    setSelectedReport(reportName);
    fetchReportContent(reportName);
  };

  const handleResearch = async () => {
    setIsLoading(true);
    await axios.post("/research", { keyword });
    fetchReports();
  };

  const handleRefresh = () => {
    window.location.reload(true);
  };

  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
  };
  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">AutoResearch</h1>
        <div className="mb-4">
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            className="border-2 border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter a keyword"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleResearch}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Start Research
          </button>

          <div className="flex items-center gap-x-1">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mb-4"
              onClick={handleRefresh}
            >
              Refresh
            </button>
            <div className="relative flex flex-col">
              <div>
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded mb-4"
                  onClick={handlePopUp}
                >
                  Profile
                </button>
              </div>
              <div
                style={{
                  background: "white",
                  position: "absolute",
                  top: "90%",
                  opacity: !openPopUp ? "0" : "1",
                  transition: "all .2s",
                  display: !openPopUp ? "hidden" : "block",
                  width: "100px",
                  height: "100px",
                  boxShadow: "0 .125px 2px rgba(0,0,0,0.6)",
                }}
              ></div>
            </div>
          </div>
        </div>
        {isLoading && <p>Loading...</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">Reports</h2>
            {message ? <h1 className="text-lg">{message}</h1> : null}
            {reports.map((report) => (
              <p
                key={report}
                onClick={() => handleReportClick(report)}
                className={`underline cursor-pointer ${
                  report === selectedReport && "text-blue-500"
                }`}
              >
                {report}
              </p>
            ))}
          </div>
          <div className="border p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">Report Content</h2>
            <p>{reportContent}</p>
          </div>
        </div>
      </div>

      {isLoading && <Modal isLoading={isLoading} />}
    </>
  );
};

export default Research;
