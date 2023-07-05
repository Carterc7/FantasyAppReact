import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8080/adp/player/21685')
      .then(response => {
        const { PlayerID, Name, Team, Position, AverageDraftPosition, AverageDraftPositionPPR, ByeWeek, AuctionValue, AuctionValuePPR, AverageDraftPositionIDP, AverageDraftPositionRookie, AverageDraftPositionDynasty, AverageDraftPosition2QB } = response.data;
        const formattedData = {
          PlayerID,
          Name,
          Team,
          Position,
          AverageDraftPosition,
          AverageDraftPositionPPR,
          ByeWeek,
          AuctionValue,
          AuctionValuePPR,
          AverageDraftPositionIDP,
          AverageDraftPositionRookie,
          AverageDraftPositionDynasty,
          AverageDraftPosition2QB
        };
        setData(formattedData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* Render the fetched data */}
      {data ? (
        <ul>
          <li>
            <strong>Player ID:</strong> {data.PlayerID}
          </li>
          <li>
            <strong>Name:</strong> {data.Name}
          </li>
          <li>
            <strong>Team:</strong> {data.Team}
          </li>
          <li>
            <strong>Position:</strong> {data.Position}
          </li>
          <li>
            <strong>Average Draft Position:</strong> {data.AverageDraftPosition}
          </li>
          <li>
            <strong>Average Draft Position PPR:</strong> {data.AverageDraftPositionPPR}
          </li>
          <li>
            <strong>Bye Week:</strong> {data.ByeWeek}
          </li>
          <li>
            <strong>Auction Value:</strong> {data.AuctionValue}
          </li>
          <li>
            <strong>Auction Value PPR:</strong> {data.AuctionValuePPR}
          </li>
          <li>
            <strong>Average Draft Position IDP:</strong> {data.AverageDraftPositionIDP}
          </li>
          <li>
            <strong>Average Draft Position Rookie:</strong> {data.AverageDraftPositionRookie}
          </li>
          <li>
            <strong>Average Draft Position Dynasty:</strong> {data.AverageDraftPositionDynasty}
          </li>
          <li>
            <strong>Average Draft Position 2QB:</strong> {data.AverageDraftPosition2QB}
          </li>
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Test;

  