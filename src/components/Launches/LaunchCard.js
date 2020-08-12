import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

export default function LaunchCard({
                 imgSrc,
                 missionName,
                 flightNumber,
                 missionIds,
                 launchYear,
                 launchSuccess,
                 launchLanding,
               }) {
                 return (
                   <div className="mb-2">
                     <Card className="launchCard">
                       <CardBody>
                         <CardImg
                           className="imgbackground"
                           top
                           width="60%"
                           src={imgSrc}
                           alt={missionName + " #" + flightNumber}
                         />
                         <CardTitle>
                           {missionName} {"#"+flightNumber}
                         </CardTitle>
                         <CardText>
                           <strong>Mission Ids:</strong>
                           {missionIds.map((id) => (
                             <li style={{ listStyle: "none" }} key={id}>{id}</li>
                           ))}
                         </CardText>
                         <CardText>
                           <strong>Launch Year:</strong>
                           {launchYear}
                         </CardText>
                         <CardText>
                           <strong>Successful Launch:</strong>
                           {launchSuccess}
                         </CardText>
                         <CardText>
                           <strong>Successful Landing:</strong>
                           {launchLanding}
                         </CardText>
                       </CardBody>
                     </Card>
                   </div>
                 );
               }