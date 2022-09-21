import React, { useState, useEffect, useRef } from "react";
import { useQuery, useMutation } from "react-query";
import { JsxFragment } from "typescript";
import apiClient from "./http-common";
import TutorialService from "../Services/TutorialService";

function QueryExample() {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const get_id = useRef(null);
  const get_title = useRef(null);
  const [getResult, setGetResult] = useState("");
  const [postResult, setPostResult] = useState<string | null>(null);

  const fortmatResponse = (res: { status: string | number; headers: Record<string, string>; data: never; statusText?: string; }) => {
    return JSON.stringify(res, null, 2);
  };

  async function getAllData() {

      const res = await apiClient.get("/tutorials");

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      setGetResult(fortmatResponse(result));
    
  }

  async function getDataById() {
    const id = get_id.current;

    if (id) {
        const res = await apiClient.get(
          `https://catfact.ninja/facts?max_length=60&limit=${id}`
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

  async function getDataByTitle() {
    const title = get_title.current;

    if (title) {
        // const res = await instance.get(`/tutorials?title=${title}`);
        const res = await apiClient.get("/tutorials", {
          params: {
            title: title,
          },
        });

        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
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
                <button className="btn btn-sm btn-primary" onClick={getAllData}>
                  Cat Facts
                </button>

                <input
                  type="text"
                  ref={get_id}
                  className="form-control ml-2"
                  placeholder="number"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={getDataById}
                  >
                    Number
                  </button>
                </div>


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
