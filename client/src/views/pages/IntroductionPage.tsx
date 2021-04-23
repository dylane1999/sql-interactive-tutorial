import React from 'react'
import styled from "styled-components";
import people from "../assets/People.png"
import properties from "../assets/Properties.png"
import "../../styles/IntroductionPage.css"

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const HeadWrap = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
`;

const SubWrap = styled.p`
    margin: 1rem 25rem;
    text-align: center;
`;

const QueryHeadWrap = styled.h2`
    text-align: center;
    font-size: 1rem;
`;

const ImgWrap = styled.img`
    display: flex;
    align-items: center;
    justify-content center;
`;

const IntroductionPage = () => {
    return (
        <Root>
            <div>
                <h1 id="welcome">Welcome to our Interactive SQL Tutorial!</h1>
                <p className="sub">
                    SQL is a programming language used to store, manipulate, and retrieve data in databases.  
                    Review the basics of SQL below and, when you are ready, 
                    click "practice" at the top right of the page to 
                    see what you've learned!
                </p>
                <h2 id="queryHead">SQL Queries</h2>
                <p className="sub">
                    Quries are used for retrieving information from a database in SQL.  SQL databases
                    store information in tables such as these:
                </p>
                <div className="tables">
                    <img src={people} alt="People Table"/>
                    <img src={properties} alt="Properties Table"/>   
                </div>         
                <div className="exampleSection">
                    <h4>General Queries</h4>
                    <p>The general format for a SQL query of one table is as follows:</p>
                    <code>SELECT <em>table_name.column, table_name.column</em></code>
                    <code> FROM <em>table_name</em></code>
                    <p>optionally:</p>
                    <code>WHERE <em>some condition (age &gt; 20)</em></code>
                    <p>If you want to select every column from a table simply put a "*" after <code>SELECT</code>.</p>

                    <h4>Joins</h4>
                    <p>Joins are used to lookup related information in two different tables.
                        To perform a join the two tables must have at least one common column between them. There are several
                        different types of joins, but we will focus on right and left joins for now.  A right join will return 
                        all the connected rows between the tables, along with the unconnected rows in the right table, or second table specified in the 
                        join operation, filling the left rows with nulls. A left join will return all the connected rows between the tables and unconnected rows in the left table, filling 
                        the right rows with nulls.
                    </p>
                    <p>The general format for a join in SQL is as follows:</p>
                    <div className="codeSection">
                        <code>SELECT <em>left_table_name.column, left_table_name.column, right_table_name.column, right_table_name.column</em> FROM <em>left_table_name</em></code>
                        <p><code>LEFT<em>(RIGHT)</em> JOIN <em>right_table_name</em></code></p>
                        <p><code>ON <em>left_table_name.common_column = right_table_name.common_column</em></code></p>
                        <p>Optionally:</p>
                        <p><code>WHERE <em>some condition (Properties.City = "Chicago")</em></code></p>
                    </div>

                    <p>So if we want all the first and last names and addresses of people who live in LA or San Diego:</p>
                    <div className="codeSection">
                        <code>SELECT <em>People.FirstName, People.LastName, Properties.Adddress</em> FROM <em>People</em></code>
                        <p><code>RIGHT JOIN <em>Properties</em></code></p>
                        <p><code>ON <em>People.PropertyId = Properties.PropertyId</em></code></p>
                        <p><code>WHERE <em>Properties.City in ("Los Angeles", "San Diego")</em></code></p>
                    </div>

                    <h4>Now you are ready to try writing your own queries!</h4>
                    <p>Scroll back up and click "practice" at the top right.</p>
                </div>
            </div>
        </Root>
    )
}

export default IntroductionPage
