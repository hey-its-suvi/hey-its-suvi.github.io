import React, { useState, useEffect } from 'react';
import {Select, Input, Option} from 'antd'

function App() {
  const peopleList = `Tanvee Kulkarni,T1
  Avnee Kulkarni,T1
  Suvi Marathe,T1
  Om Pathak,T1
  Aryan Manohar,T1
  Smita Mahajan,T1
  Sunil Mahajan,T1
  Adeel Markatia,T1
  Simi Landry,T1
  Soham Joshi,T1
  Sidney Gish,T2
  Ted Gershon,T2
  Sophie Gershon,T2
  Shawn O'Mally,T2
  Meghan Byrnes,T2
  Zahra Markatia,T2
  Aiden Byrnes,T2
  Unnati Sachdev,T2
  Salsa Deshmukh,T2
  Neha Saoji,T2
  Sachin Kirtane,T3
  Toby Creelan,T3
  Soniya Gadre,T3
  Saurab Gadre,T3
  Sagar Saoji,T3
  Nathan Clark,T3
  Tiffany Edwell,T3
  Zach Johnson,T3
  Hannah Brennan,T4
  Colin Brennan,T4
  Amanda Fix,T4
  Jacob Fix,T4
  Katie Grandich,T4
  Zach Grandich,T4
  Ariel LePack,T4
  Casey LePack,T4
  Cassandra Sieben,T4
  Logan Sieben,T4
  Steven Wallace,T5
  Emily Rzonca,T5
  Zach Aulie,T5
  Megan Kramer,T5
  Courtney Fink,T5
  Bobby Atwood,T5
  Ricky Hamann,T5
  Courtney McKinnon,T5
  Khang Nguyen,T5
  Cathy Nguyen,T5
  Blythe Creelan,T6
  Ben Creelan,T6
  Morgan Woodard,T6
  Joe Becker,T6
  Namrata Palsule,T6
  Nabeel Markatia,T6
  Kathryn Pinto,T6
  Lucas Pinto,T6
  Layne Woodard,T6
  Chris Gish,T6
  Thais Totzke,T7
  John Totzke,T7
  Jamie Byrnes,T7
  Tim Byrnes,T7
  Nina Woodard,T7
  Blythe Woodard,T7
  Polly Woodard,T7
  Martha Broecker,T7
  Mary K Gershon,T7
  Mike Gershon,T7
  Annette Tromp,T8
  Felix Tromp,T8
  Veronica Lobban,T8
  Cary Lobban,T8
  Marcelo Lopes,T8
  Alessandra Lopes,T8
  Eric Boughman,T9
  Heather Boughman,T9
  Ashwini Swami,T9
  Jagan Swami,T9
  Tracy Henderson,T9
  James Henderson,T9
  Lisa Rosen,T9
  Marie Spoon,T9
  Shilpa Telang,T9
  Jiten Telang,T9
  Harita Cherukuri,T10
  Madhu Cherukuri,T10
  Rachna Ranjan,T10
  Devesh Ranjan,T10
  Shabana Jameel,T10
  Syed Jameel,T10
  Mike Lind,T10
  Durga Landry,T10
  Vaishnavi Sharma,T10
  Giri Sharma,T10
  Shobhana Manohar,T11
  Shekhar Manohar,T11
  Netra Pathak,T11
  Milind Pathak,T11
  Leena Joshi,T11
  Sachin Joshi,T11
  Shubha Mahajan,T11
  Satish Mahajan,T11
  Alka Mahajan,T11
  Shridhar Palsule,T11
  Nalini Adhav,T12
  Ratan Adhav,T12
  Nina Adhav,T12
  Sanjay Adhav,T12
  Priya Kirtane,T12
  Prafulla Kirtane,T12
  Nalini Patil,T12
  Jagdish Patil,T12
  Kalpana Kirtane,T12
  Shirish Kirtane,T12
  Maya Saoji,T13
  Mohan Saoji,T13
  Minal Saoji,T13
  Prashant Saoji,T13
  Palavi Jahagirdar,T13
  Sudhir Jahagirdar,T13
  Amita Save,T13
  Sangeeta Kulkarni,T13
  Shashank Kulkarni,T13
  Rahul Save,T13
  Devayani Belsare,T14
  Sachin Belsare,T14
  Anagha Shukla,T14
  Mangesh Shukla,T14
  Yasha Angal,T14
  Ravi Angal,T14
  Shaila Mandke,T14
  Vinay Mandke,T14
  Shilpa Garude,T14
  Chetan Garude,T14
  Vrushali Kakade,T15
  Ajay Kakade,T15
  Sunita Shinde,T15
  Shubhangi Chumble,T15
  Atul Chumble,T15
  Satej Shinde,T15
  Rupali Paramar,T15
  Ghanshyam Paramar,T15
  Vinay Sonje,T15
  Tejashree Sonje,T15
  Suyasha Ghulghule,T16
  Milind Ghulghule,T16
  Prachiti Likhite,T16
  Anand Likhite,T16
  Prachi Muley,T16
  Nishant Muley,T16
  Smita Save,T16
  Vinod Save,T16
  Minal Jajoo,T16
  Ajay Jajoo,T16
  Janhvi Kulkarni,T17
  Jagdish Kulkarni,T17
  Sanjana Deshmukh,T17
  Anita Kulkarni,T17
  Magesh Kulkarni,T17
  Yogini Joshi,T17
  Geeta Karkera,T17
  Vaibhav Joshi,T17
  Sheetal Shetye,T17
  Mr Sheetal Shetye,T17
  Sadanand Pande,T18
  Jyoti Pande,T18
  Radha Desai,T18
  Anil Desai,T18
  Meera Tankhiwale,T18
  Ajay Tankhiwale,T18
  Chandu Gadre,T18
  Priya Gadre,T18
  Paru Kulkarni,T18
  Kiran Kulkarni,T18
  Vipul Jain,T19
  Jain Jain,T19
  Raju Karne,T19
  Karne Karne,T19
  Ani Phadanis,T19
  Somesh Phadanis,T19
  Ramesh Joshi,T19
  mrs Ramesh Joshi,T19
  Gauri Telang,T19
  Milind Kale,T20
  Mrunal Kale,T20
  Vijay Patange,T20
  Rita Patange,T20
  Sanjay Patange,T20
  Sonal Joshi,T20
  Surekha Patange,T20
  Vivek Joshi,T20
  Supriya Kaisare,T20
  Sameer Kaisare,T20
  Poonam Hadavale,T21
  Archana Watane,T21
  Anand Watane,T21
  Vasudha Kudrumoti,T21
  Sanjay Kudrumoti,T21
  Snehal Ambare,T21
  Sameer Ambare,T21
  Pranjali Saravade,T21
  Ganesh Saravade,T21
  Archana Kulkarni,T22
  Subodh Kulkarni,T22
  Abhay Marathe,T22
  Ashwini Marathe,T22
  Rishikesh Ambardekar,T22
  Ashwini Ambardekar,T22
  Supriya Deval,T22
  Mohan Deval,T22
  Nilofer Markatia,T22
  Mohammad Markatia,T22
  Anjali Palsule,T23
  Nitin Palsule,T23
  Theodore James Broecker,T23
  Mary Blythe Broecker,T23`


  const peopleDict = {}

  peopleList.split('\n').forEach((line) => {
    const [key, value] = line.split(',');
    peopleDict[key.trim()] = value.trim();
  });

  // const [typedLastName, setTypedLastName] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);

  const handleInputChange = (e) => {
    const inputLastName = e.target.value


    // setTypedLastName(inputLastName);
    const updatedFilteredNames = Object.keys(peopleDict).filter((name) => {
      const lastNameFromName = name.split(' ').pop();
      return lastNameFromName.toLowerCase() === inputLastName.toLowerCase();
    });
    setFilteredNames(updatedFilteredNames);
    setTableNumber('')
    // console.log(updatedFilteredNames)
  };

  const handleSelectChange = (value) => {
    setSelectedName(value);
    setTableNumber((prevSelectedName) => peopleDict[value]);
  };

  
  return (
    <div className="MainPage">
      <header className="App-header">
      <p>
          Hello and welcome to Asmita and TJ's wedding! Please enter your Last Name
      </p>
      <Input placeholder="Last Name" 
      onChange={handleInputChange}/>

      {filteredNames.length > 0 ? (
          <div>
          <p>
          Hi! Please choose your name from the list
          </p>
          <Select
            showSearch
            allowClear
            style={{ width: 200 }}
            onChange={handleSelectChange}
          >
            {filteredNames.map((name) => (
              <Select.Option key={name} value={name}>
                {name}
              </Select.Option>
            ))}
          </Select>
          {tableNumber && (
          <p>
          Hi  {selectedName.substring(0, selectedName.lastIndexOf(' '))}! Table {tableNumber} awaits you for a joyous fun filled night
          </p>
        )}
          </div>
        ) : (
          <p>Sorry but we could not find any names corresponding to the last name.</p>
        )}
      {/* <Select
      showSearch='true'
      allowClear
      style={{ width: 200 }}
      onChange={handleSelectChange}
      
      options={Object.entries(peopleDict).map(([key, value]) => ({'value': key}))}
      /> */}

      {/* {tableNumber && (
          <p>
          Hi  {selectedName.split(' ')[0]}! Table {tableNumber} awaits you for a joyous fun filled night
          </p>
        )} */}
      </header>
    </div>
  );
}

export default App;
