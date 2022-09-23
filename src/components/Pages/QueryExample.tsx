import React, { useState, useEffect, useRef } from "react";
import apiClient from "./http-common";
import CatCard from "../Cats/CatCard";

    type Cat = {
      breed: string;
      country: string;
      orign: string;
      coat: string;
      pattern: string;
    };

function QueryExample() {

  const get_id = useRef<HTMLInputElement>(null);
  const [getResult, setGetResult] = useState("");
  const [cats , setCats] = useState<{breed: string;
      country: string;
      orign: string;
      coat: string;
      pattern: string;}[]>([])

  const fortmatResponse = (res: {data:{ data: any;}}) => {
    let temp: Cat[] = JSON.parse(JSON.stringify(res.data.data, null, 2));
    setCats(temp)
    return ("");
  };

  async function getDataById() {
    const id = get_id.current?.value;
    console.log("id: " + id)
    if (id) {
        const res = await apiClient.get(
          `https://catfact.ninja/breeds?limit=${id}`
        );

        const result = {

          data: res.data
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
              <div>
                {cats.map((temp: any) => {
                    return (
                      <CatCard
                        breed={temp.breed}
                        country={temp.country}
                        orign={temp.orign}
                        coat={temp.coat}
                        pattern={temp.pattern}
                        key={Math.random()} 
                      />
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryExample;
