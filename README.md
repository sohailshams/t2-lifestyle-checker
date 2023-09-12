# T2 Lifestyle Checker Web App

- [Live Link](https://t2-lifestyle.netlify.app/)

- [Github Repo Frontend](https://github.com/sohailshams/t2-lifestyle-checker)

- [Live Link Api](https://t2-lifestyle.onrender.com/api/)

- [Github Repo Backend](https://github.com/sohailshams/be-t2-lifestyle-checker)

## Description

This web application takes NHS number, surname and dob as input and makes an api call to varify the patient and renders relevant message to the user. If patient is varified successfully then patient is asked a few questions and relevant message is rendered at the end.

## Api info

Api only handles the GET request and there are only five patients added in the database. Patient's data structure is as follows;

| Nhs Number | First Name | Surname | Age |  DOB   |
| :--------: | :--------: | :-----: | :-: | :----: |
| 111222333  |    DOE     |  John   | 18  | Jan 14 |
| 222333444  |   SMITH    |  Alice  | 25  | Mar 2  |
| 333444555  |   CARTER   |   Bob   | 46  | May 20 |
| 444555666  |    BOND    | Charles | 70  | Jul 18 |
| 555666777  |    MAY     |  Megan  | 14  | Nov 14 |

## Technologies Used

- [Ract JS](https://react.dev/)
  I chose to complete this project in React because most recently I have been working with React and it is one of the most popular react library. If I did not choose React then other choice was djano.
- [Vite JS](https://vitejs.dev/)
  Vite is powerfull tool to create react app and and comes recommended by the [Ract docs](https://react.dev/learn/start-a-new-react-project#can-i-use-react-without-a-framework) which is why I am using it.
- [Axios](https://axios-http.com/docs/intro)
- [Tailwindcss](https://tailwindcss.com/)
  I used tailwindcss instead of raw css because using tailwindcss make less code to write and makes development quick.

## Local Deployment

Please follow these steps to run this project locally on your machine;

1. Go to [GitHub repository](https://github.com/sohailshams/t2-lifestyle-checker), first fork it and clone to your local machine.
2. Now run **npm install**
3. Now run **npm run dev**
