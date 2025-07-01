
export const StudentsRecord = () => {
  return (
   <div className="bg-white p-8 max-w-4xl mx-auto">
      <form>
        {/* Personal Information Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" name="firstName" id="firstName" defaultValue="John" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                  <input type="text" name="middleName" id="middleName" defaultValue="John" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" name="lastName" id="lastName" defaultValue="Doe" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="relative">
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input type="text" name="dateOfBirth" id="dateOfBirth" placeholder="DD/MM/YYYY" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                   <span className="absolute inset-y-0 right-0 top-7 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                   </span>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <input type="text" name="gender" id="gender" defaultValue="Male" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="stateOfOrigin" className="block text-sm font-medium text-gray-700 mb-1">State of Origin</label>
                  <input type="text" name="stateOfOrigin" id="stateOfOrigin" defaultValue="Oyo" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                  <input type="text" name="nationality" id="nationality" defaultValue="Nigerian" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </div>
            </div>
            <div className="md:col-span-1 flex justify-center">
                <div className="w-40 h-40 bg-gray-200 rounded-md flex items-center justify-center">
                    <svg className="h-16 w-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" id="email" defaultValue="Mack62@Tremblay, Pfeffer and Hermiston" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="phone" id="phone" defaultValue="(465) 212-6079 x28216" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
              <input type="text" name="homeAddress" id="homeAddress" defaultValue="102 Zella Hills, South Valentina 82825-8473" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
        </div>
        
        {/* separator */}
        <div className="h-px bg-red-500 w-4 mb-8"></div>


        {/* Academic Info Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Academic Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div>
              <label htmlFor="matriculationNumber" className="block text-sm font-medium text-gray-700 mb-1">Matriculation Number</label>
              <input type="text" name="matriculationNumber" id="matriculationNumber" defaultValue="28 606" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
             <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Level</label>
              <select name="level" id="level" defaultValue="100L" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>100L</option>
                <option>200L</option>
                <option>300L</option>
                <option>400L</option>
                <option>500L</option>
              </select>
            </div>
             <div>
              <label htmlFor="yearOfAdmission" className="block text-sm font-medium text-gray-700 mb-1">Year of Admission</label>
              <select name="yearOfAdmission" id="yearOfAdmission" defaultValue="2024/2025" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>2024/2025</option>
                <option>2023/2024</option>
                <option>2022/2023</option>
              </select>
            </div>
             <div>
              <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-1">Faculty</label>
              <select name="faculty" id="faculty" defaultValue="Computing and Informatics" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Computing and Informatics</option>
                <option>Engineering</option>
                <option>Sciences</option>
              </select>
            </div>
             <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select name="department" id="department" defaultValue="Information Systems" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Information Systems</option>
                <option>Computer Science</option>
                <option>Cybersecurity</option>
              </select>
            </div>
             <div>
              <label htmlFor="modeOfEntry" className="block text-sm font-medium text-gray-700 mb-1">Mode of Entry</label>
              <select name="modeOfEntry" id="modeOfEntry" defaultValue="UTME" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>UTME</option>
                <option>Direct Entry</option>
                <option>Transfer</option>
              </select>
            </div>
             <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Program</label>
              <select name="program" id="program" defaultValue="Degree" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Degree</option>
                <option>Diploma</option>
              </select>
            </div>
          </div>
        </div>

        {/* Guardian / Parent Info Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Guardian / Parent Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="guardianName" id="guardianName" defaultValue="Randall Koelpin" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="guardianPhone" id="guardianPhone" defaultValue="(394) 507-0834 x064" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">Relationship to Student</label>
              <select name="relationship" id="relationship" defaultValue="Father" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Father</option>
                <option>Mother</option>
                <option>Guardian</option>
              </select>
            </div>
            <div>
              <label htmlFor="guardianEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="guardianEmail" id="guardianEmail" defaultValue="Randall7@yahoo.com" className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4">
          <button type="button" className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </form>
    </div>
    
  )
}
