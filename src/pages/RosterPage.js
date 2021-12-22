import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import teamPic from "../assets/teampic.jpg"
import bearLogo from "../assets/bearLogo.png"
import NavBar from "./NavBar"
import RosterTag from "../components/rosterTag";
const RosterPage = ({ match  }) => {
    let data = [
        {
          "Timestamp": "9",
          "Headshot": "https://drive.google.com/file/d/1U0Cj9nCZSIk49Go7HN_CGs0NjZlncxf1/view?usp=sharing",
          "First": "Isaiah",
          "Last": "Granet",
          "Year": "Senior",
          "Hometown": "San Diego, CA",
          "Position": "Forward",
          "Team": "Pacific Ridge High School",
          "Player": "Pavel Datsyuk",
          "Height": "5’11",
          "Weight": 185
        },
        {
          "Timestamp": "9/30/2021 13:33:25",
          "Headshot": "https://drive.google.com/file/d/1VY4J3Jj8vztg-8kmgSE1NZkvr_-3Iuwx/view?usp=sharing",
          "First": "Nathan",
          "Last": "Thompson",
          "Year": "Senior",
          "Hometown": "Chandler, AZ",
          "Position": "Forward",
          "Team": "Hamilton High School",
          "Player": "Binnington",
          "Height": "6’0",
          "Weight": 195
        },
        {
          "Timestamp": "9/30/2021 13:58:23",
          "Headshot": "https://drive.google.com/file/d/1UFUeBMYa_qisLcJwTKBeNN4uGv8odZVM/view?usp=sharing",
          "First": "Samuel",
          "Last": "Youkilis",
          "Year": "Senior",
          "Hometown": "St. Louis",
          "Position": "Forward",
          "Team": "Clayton High School",
          "Player": "Tarasenko",
          "Height": "6’1",
          "Weight": 175
        },
        {
          "Timestamp": "10/2/2021 18:59:55",
          "Headshot": "https://drive.google.com/file/d/1Q7S2yw1GGo6QAV-IJrzAvTU5-5vT3uTx/view?usp=sharing",
          "First": "Jake",
          "Last": "Zammiello",
          "Year": "Junior",
          "Hometown": "Boca Raton",
          "Position": "Forward",
          "Team": "Florida Jr Panthers",
          "Player": "Patrice Bergeron ",
          "Height": "5’11",
          "Weight": 190
        },
        {
          "Timestamp": "9/30/2021 13:31:39",
          "Headshot": "https://drive.google.com/file/d/1mEGfeLTmx9yFIGI7w-l5KVb0QO7FwnEx/view?usp=sharing",
          "First": "Ethan",
          "Last": "Sobel",
          "Year": "Sophomore",
          "Hometown": "Glen Head, New York",
          "Position": "Forward",
          "Team": "Friends Academy Quakers",
          "Player": "Matt Barzal",
          "Height": "6’1",
          "Weight": 170
        },
        {
          "Timestamp": "10/1/2021 19:19:22",
          "Headshot": "https://drive.google.com/file/d/1NErRPsFopMWFxtyDjIyrPT9hujTok-8e/view?usp=sharing",
          "First": "Joshua",
          "Last": "Liu",
          "Year": "Sophomore",
          "Hometown": "San Jose",
          "Position": "Forward",
          "Team": "San Jose Sharks",
          "Player": "Connor McDavid",
          "Height": "5’10",
          "Weight": 165
        },
        {
          "Timestamp": "10/2/2021 14:34:12",
          "Headshot": "https://drive.google.com/file/d/1GiNyj2iNg2YlYjPw2AUevbqDpkRz6egQ/view?usp=sharing",
          "First": "Liam",
          "Last": "Mcgourty",
          "Year": "Sophomore",
          "Hometown": "Boston",
          "Position": "Forward",
          "Team": "High school",
          "Player": "Bobby ryan",
          "Height": "6’0",
          "Weight": 175
        },
        {
          "Timestamp": "9/30/2021 13:37:05",
          "Headshot": "https://drive.google.com/file/d/1U_N0z87muisf8SSMODztBn6cL_r2Pn1y/view?usp=sharing",
          "First": "Cole",
          "Last": "Hanan",
          "Year": "Freshman",
          "Hometown": "Watchung ",
          "Position": "Forward",
          "Team": "Rockets Hockey Club",
          "Player": "Nathan MacKinnon ",
          "Height": "5’8",
          "Weight": 170
        },
        {
          "Timestamp": "9/30/2021 15:38:36",
          "Headshot": "https://drive.google.com/file/d/16x1xIX0VYlV6LcY11MIAd3VpfLgHbaNi/view?usp=sharing",
          "First": "Kenta",
          "Last": "Kato",
          "Year": "Freshman",
          "Hometown": "New York City",
          "Position": "Forward",
          "Team": "Loomis Chaffee / Yale",
          "Player": "Matt Barzal",
          "Height": "5’9",
          "Weight": 165
        },
        {
          "Timestamp": "10/1/2021 19:17:17",
          "Headshot": "https://drive.google.com/file/d/1ctwTibATqsAtdcVNCzPKnZKQlKqZTj-e/view?usp=sharing",
          "First": "Noah",
          "Last": "Raimi",
          "Year": "Freshman",
          "Hometown": "Berkeley, CA",
          "Position": "Forward",
          "Team": "San Francisco Sabercats 16U",
          "Player": "Joe Pavelski",
          "Height": "5’7",
          "Weight": 160
        },
        {
          "Timestamp": "10/2/2021 13:12:51",
          "Headshot": "https://drive.google.com/file/d/1qJWZYzDTXeJHS8jQkacKQ1BHBztQcq4d/view?usp=sharing",
          "First": "Sam",
          "Last": "Greco",
          "Year": "Freshman",
          "Hometown": "St. Charles, Illinois ",
          "Position": "Forward",
          "Team": "Marmion Academy",
          "Player": "Patrick Kane",
          "Height": "5’10",
          "Weight": 178
        },
        {
          "Timestamp": "10/2/2021 18:22:00",
          "Headshot": "https://drive.google.com/file/d/1sAh8oSmaLZIcYXANWe_gPnsSGubunv5D/view?usp=sharing",
          "First": "Shua ",
          "Last": "Friedman ",
          "Year": "Sophomore",
          "Hometown": "New Rochelle ",
          "Position": "Forward",
          "Team": "",
          "Player": "Crosby ",
          "Height": "5’10",
          "Weight": 170
        },
        {
          "Timestamp": "9/30/2021 14:41:10",
          "Headshot": "https://drive.google.com/file/d/1_p03ENN4dpPUfTbye6MSDpgCBvViDkZ_/view?usp=sharing",
          "First": "Daniel",
          "Last": "Heintz",
          "Year": "Law Student 1L",
          "Hometown": "Bronx, NY",
          "Position": "Defense",
          "Team": "Hamilton College",
          "Player": "Henrik Lundqvist",
          "Height": "5’10",
          "Weight": 180
        },
        {
          "Timestamp": "9/30/2021 13:26:59",
          "Headshot": "https://drive.google.com/file/d/1bgwuojlV_NNFyO-I5u7pNAzGjI7vA9zK/view?usp=sharing",
          "First": "Daniel ",
          "Last": "Lim",
          "Year": "Sophomore",
          "Hometown": "New York City",
          "Position": "Defense",
          "Team": "Choate Rosemary Hall/ CT Elite 18U AAA",
          "Player": "PK Subban",
          "Height": "6’0",
          "Weight": 187
        },
        {
          "Timestamp": "10/2/2021 9:57:41",
          "Headshot": "https://drive.google.com/file/d/14JQk2rb5B5itYjo5HZDcaGVcKIoshUwm/view?usp=sharing",
          "First": "Edward",
          "Last": "Parsons",
          "Year": "Law Student",
          "Hometown": "Hinsdale, IL",
          "Position": "Defense",
          "Team": "Connecticut College (ACHA DII)",
          "Player": "Orr ",
          "Height": "6’2",
          "Weight": 190
        },
        {
          "Timestamp": "10/2/2021 17:56:03",
          "Headshot": "https://drive.google.com/file/d/1-x9wxGHkc0crHTYaV27rF0YE118dzx3L/view?usp=sharing",
          "First": "Luke",
          "Last": "Wassong",
          "Year": "Senior",
          "Hometown": "Larchmont ",
          "Position": "Defense",
          "Team": "Mamaroneck Tigers ",
          "Player": "Henrik Lundqvist",
          "Height": "6’2",
          "Weight": 185
        },
        {
          "Timestamp": "10/1/2021 19:10:24",
          "Headshot": "",
          "First": "Moshe",
          "Last": "Eskenazi",
          "Year": "2nd Year Dual Degree",
          "Hometown": "Dallas, TX",
          "Position": "Defense",
          "Team": "Allen Americans Youth Hockey Association",
          "Player": "Mike Modano",
          "Height": "5’11",
          "Weight": 170
        },
        {
          "Timestamp": "9/30/2021 18:27:13",
          "Headshot": "https://drive.google.com/open?id=1mXbf6F-acuzHIznumnIHK-SY3j32dOEQ",
          "First": "Ryan",
          "Last": "Mikami",
          "Year": "Sophomore",
          "Hometown": "San Diego",
          "Position": "Defense",
          "Team": "Scrips Ranch High School Falcons",
          "Player": "Wayne Gretzky ",
          "Height": "5’9",
          "Weight": 165
        },
        {
          "Timestamp": "10/2/2021 12:41:00",
          "Headshot": "https://drive.google.com/file/d/1WfWhHOqNPbFVTaQmaR-QAERXzsFWA-rc/view?usp=sharing",
          "First": "Rylan",
          "Last": "Gottron",
          "Year": "Junior",
          "Hometown": "Fort Washington MD",
          "Position": "Defense",
          "Team": "DC stars",
          "Player": "Oshie ",
          "Height": "5’8",
          "Weight": 165
        },
        {
          "Timestamp": "10/2/2021 16:38:19",
          "Headshot": "https://drive.google.com/open?id=1PAQMDeXWjG5c6IrGmdURyTYPr_zB_WEY",
          "First": "Sam",
          "Last": "Schoepke",
          "Year": "Junior",
          "Hometown": "Stowe, Vermont",
          "Position": "Defense",
          "Team": "Stowe high school",
          "Player": "Bergeron",
          "Height": "6’1",
          "Weight": 185
        },
        {
          "Timestamp": "10/2/2021 18:35:34",
          "Headshot": "https://drive.google.com/file/d/182KdqwoNqpjVquLkdqp7lNXZh-RpI-NP/view?usp=sharing",
          "First": "Samuel",
          "Last": "Humphreys",
          "Year": "Senior",
          "Hometown": "Boston, MA",
          "Position": "Defense",
          "Team": "Clayton High",
          "Player": "Marchand",
          "Height": "5’11",
          "Weight": 185
        },
        {
          "Timestamp": "10/2/2021 16:35:16",
          "Headshot": "https://drive.google.com/file/d/1mt5dsNrxvpi5eC061io_gyaBGgUvhuOy/view?usp=sharing",
          "First": "Ty",
          "Last": "Blumberg",
          "Year": "Sophomore",
          "Hometown": "Medford, MA",
          "Position": "Defense",
          "Team": "Malden Catholic Lancers",
          "Player": "Charlie McAvoy",
          "Height": "6’2",
          "Weight": 190
        },
        {
          "Timestamp": "9/30/2021 14:00:21",
          "Headshot": "https://drive.google.com/file/d/19gku_1krHniyt5Q1ijnQORjB1pdlroz3/view?usp=sharing",
          "First": "Jack",
          "Last": "Treiman",
          "Year": "Junior",
          "Hometown": "Bala Cynwyd",
          "Position": "Goalie",
          "Team": "The Lawrenceville School",
          "Player": "Brodeur",
          "Height": "5’10",
          "Weight": 170
        },
        {
          "Timestamp": "9/30/2021 13:37:18",
          "Headshot": "https://drive.google.com/file/d/1LoLRkiMmL6zu3Vbuepyk7MImSjRDSYgh/view?usp=sharing",
          "First": "Jake",
          "Last": "Friedman",
          "Year": "Freshman",
          "Hometown": "Short Hills, NJ",
          "Position": "Goalie",
          "Team": "Jersey Wolves",
          "Player": "Marc Andre Fleury",
          "Height": "6’0",
          "Weight": 175
        },
        {
          "Timestamp": "9/30/2021 14:29:08",
          "Headshot": "https://drive.google.com/file/d/1hM44jUhk296UJKELurKeFIzkneAuy6gh/view?usp=sharing",
          "First": "Nick",
          "Last": "Greco",
          "Year": "Junior",
          "Hometown": "St. Charles, IL",
          "Position": "Goalie",
          "Team": "Geneva Cyclones",
          "Player": "MA Fluery",
          "Height": "6’1",
          "Weight": 180
        },
        {
          "Timestamp": "10/2/2021 12:54:33",
          "Headshot": "",
          "First": "Sam",
          "Last": "Levy",
          "Year": "Junior",
          "Hometown": "Arlington, VA",
          "Position": "Goalie",
          "Team": "",
          "Player": "Braden Holtby",
          "Height": "5’10",
          "Weight": 175
        }
       ]
    return ( 
        <>
        <NavBar></NavBar>
        

    <div className="w-full h-48 bg-red-400 z-10">
            <div className="w-full z-10 absolute"> 
            <p className=" text-8xl text-white text-center mt-24">Roster.</p>
    </div> 
          
           {/* <img className="w-full h-5/6 z-0"src={teamPic}></img> */}
            
    </div>
    <div>
    {
                data.map((index)=>{
                    return (
                        <RosterTag player={index}></RosterTag>
                    )
                })
            }
    </div>
   
    </>
    )
 
};

export default RosterPage;
