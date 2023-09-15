- In below I will list out the 3 Project features ::-

  - Management of Credit and Course Selection ->
    In thiis project, users can select multiple courses and keep track the total credit number by adding courses. There is a predefined credit limit(20 credits) which will ensures users that do not exceed the credit limit. For provide a limitations, toast will showing in the web page when the credit limit is crossed and redit hour remaining 0 also showing a toast when select same course multiple times.

  - Cart Details ->
    The cart portion will give clear overview of course registration. Cart componenet displays the selected courses, the totalcredit hours, remaining credit hours, and the total price. So that users can keep tarck his/her associated costs, selected courses which enhance the user experience far better.

  - Course Cards Are Rendering Dynamically ->
    The name, description, cost, and number of credit hours for each course are displayed on each card. With the help of this dynamic rendering capability, the user interface is kept responsive and flexible in the face of changing data sources.

- Here is the explanation how I managed the state in my assignment project ::-

      *In this project I used 'useEffect' hook to fetch data and used list of 'useState ' hook such as ,

      const [allCourses, setAllcourses] = useState([]);
      const [selectCourses, setSelectCourses] = useState([]);
      const [totalCredit, setTotalCredit] = useState(0);
      const [creditRemaining, setCreditRemaining] = useState(20);
      const [totalPrice, setTotalPrice] = useState(0);

      These state variables will store data that is subject to change over time and cause re-renders of my component whenever their values are modified. When the component mounts, useEffect hook to fetch data and update the 'allCourses' state variable with the data. Updating the state variables used the 'set' functions provided by the 'useState' hook then react re-renders my component and reflecting the updated state in the UI.

      This project I used three different components which are Home,Cart and Header. From I passed the states [selectCourses,totalPrice, creditRemainingg, totalCredit] as a props to the Cart component and set the value. I fatched the data and set the data in the [allCourses] state then using loop I accessed the all data dynamically and set the value in the card dynamically. So The state management system enabled me to design dynamic and interactive user interfaces that adapt to user actions and changes in external data.