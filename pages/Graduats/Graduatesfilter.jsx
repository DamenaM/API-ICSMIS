// EmployeeList.js
import React, { useState, useEffect } from 'react';
import EmployeeData from '/data.json';

export default function Graduatesfilter() {
  const [data, setData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedUnivesity, setselectedUnivesity] = useState('');

  const [searchTerm, setSearchTerm] = useState(''); // Filter EmployeeData based on the selected category
  
 
  useEffect(() => {
    setData(EmployeeData);
    setFilteredEmployeeData(EmployeeData);
  }, []);

   useEffect(() => { // Initialize both EmployeeData and filteredEmployeeData with data from JSON
        if (selectedCategory === '') {
          setFilteredEmployeeData(data);
        }    else  {
          const filtered = data.filter((Employee) => Employee.obtainedCertificate === selectedCategory);
          setFilteredEmployeeData(filtered);
        }
      }, [selectedCategory]);

//-----  selectedYear
  useEffect(() => {
          if (selectedYear === '') {
            setFilteredEmployeeData(data);
          } else  {
            const filtered = data.filter((Employee) => Employee.yearOfGraduation === selectedYear.toString());
            setFilteredEmployeeData(filtered);
          }
        }, [selectedYear]);

  // selected University
  useEffect(() => {
          if (selectedUnivesity === '') {
            setFilteredEmployeeData(data);
          } else  {
            const filtered = data.filter((Employee) => Employee.institutionUni === selectedUnivesity);
            setFilteredEmployeeData(filtered);
          }
        }, [selectedUnivesity]);

  const handleSearch = () => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filtered = data.filter((Employee) =>
          Employee.studentFullName.toLowerCase().includes(searchTermLowerCase)
        );
         setFilteredEmployeeData(filtered);
  };
        const categoryOptions = [...new Set(data.map((Employee) => Employee.obtainedCertificate))];
        const yearOptions = [...new Set(data.map((Employee) => Employee.yearOfGraduation))];
        const universityOptions = [...new Set(data.map((Employee) => Employee.institutionUni))];
      

  const handleFilter = () => {
      const filtered = data.filter((employee) => {
      const yearMatch = selectedYear === '' || employee.yearOfGraduation === selectedYear;
      const departmentMatch = selectedCategory === '' || employee.obtainedCertificate === selectedCategory;
      const universityMatch = selectedUnivesity === '' || employee.institutionUni === selectedUnivesity;
      return yearMatch && departmentMatch && universityMatch;
    });

    setFilteredEmployeeData(filtered);
  };
  const resetFilters = () => {
    setSelectedYear('');
    setSelectedCategory('');
    setSearchTerm('');
    setselectedUnivesity('');
    setFilteredEmployeeData(data);
  };

  return (
    <div >
      <div  className="Search_filter">
        <div className="Search_Cont" >
        <input
        type="text" className="serachText"  placeholder="Search by FullName"
        value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}
      />
            <button  className="serachbtn" onClick={handleSearch}>Search</button> 
            <button className="serachbtn" onClick={resetFilters}>Reset All</button>
        </div>
      </div>
      <div>
      <h2>Employee List</h2>
      <div className="experience_filter">
          <label htmlFor="yearSelect">Filter by Year of Graduation: </label>
          <select
            id="yearSelect"
            onChange={(e) => setSelectedYear(e.target.value)}  value={selectedYear.toString()}
                  >
            <option value="">All</option>
            {yearOptions.map((yearOfGraduation) => (
              <option key={yearOfGraduation} value={yearOfGraduation.toString()}> {yearOfGraduation.toString()}
              </option>
            ))}
          </select>
      </div>
      {/* select University  */}
      <div className="experience_filter">
          <label htmlFor="yearSelect">Filter by Year of University: </label>
          <select
            id="yearSelect"
            onChange={(e) => setselectedUnivesity(e.target.value)}  value={selectedUnivesity.toString()}
                  >
            <option value="">All</option>
            {universityOptions.map((institutionUni) => (
              <option key={institutionUni} value={institutionUni}> {institutionUni}
              </option>
            ))}
          </select>
      </div>
      </div>
      <div className="experience_filter">
            <label htmlFor="categorySelect">  Filter by Category:</label>
            <select
                    id="categorySelect"
                    onChange={(e) => setSelectedCategory(e.target.value)}   value={selectedCategory}
                  >
                    <option value="">All</option>
                    {categoryOptions.map((obtainedCertificate) => (
                      <option key={obtainedCertificate} value={obtainedCertificate}>  {obtainedCertificate}
                      </option>
                    ))}
            </select>
      </div>
              <button onClick={() => handleFilter(data)}>Filter</button>
      <ul>
        {filteredEmployeeData.map((Employee) => (
          <li key={Employee.studentNationalId}>
            <div>  FullName: <strong>{Employee.studentFullName}</strong> </div>
            <p> University Name : {Employee.institutionUni}</p>
            {Employee.studentFullName} - {Employee.obtainedCertificate} -{Employee.yearOfGraduation} 
          </li>
        ))}
        {filteredEmployeeData.length === 0 && (
            <p>No Employees matching the filter</p>
          )}
      </ul>
    </div>
  );
}

