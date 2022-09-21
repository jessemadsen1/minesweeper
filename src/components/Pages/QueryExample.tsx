import React, { useState, useEffect, useRef } from "react";
import { useQuery, useMutation } from "react-query";
import { JsxFragment } from "typescript";
import apiClient from "./http-common";
import TutorialService from "../Services/TutorialService";

function QueryExample() {

  const get_id = useRef<HTMLInputElement>(null);
  const [getResult, setGetResult] = useState("");

  const fortmatResponse = (res: { status: string | number; headers: Record<string, string>; data: never; statusText?: string; }) => {
    return JSON.stringify(res, null, 2);
  };

  async function getDataById() {
    const id = get_id.current?.value;
    console.log("id: " + id)
    if (id) {
        const res = await apiClient.get(
          `https://catfact.ninja/breeds?limit=${id}`
        );

        const result = {
          data: res.data,
          status: res.status,
          statusText: res.statusText,
          headers: res.headers,
        };

        setGetResult(fortmatResponse(result));
    }
  }
    const clearGetOutput = () => {
      setGetResult("");
    };

  return (
    <div>
      <div id="app" className="container">
        <div className="card">
          <div className="card-header">
            <div className="card-body">
              <div className="input-group input-group-sm">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={getDataById}
                >
                  Cat Breed
                </button>

                <input
                  type="text"
                  ref={get_id}
                  className="form-control ml-2"
                  placeholder="number"
                />
                {/* <div className="input-group-append">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={getDataById}
                  >
                    Number
                  </button>
                </div> */}

                <button
                  className="btn btn-sm btn-warning ml-2"
                  onClick={clearGetOutput}
                >
                  Clear
                </button>
              </div>

              {getResult && (
                <div className="alert alert-secondary mt-2" role="alert">
                  <pre>{getResult}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryExample;
