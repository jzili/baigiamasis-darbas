import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    }
    
    body {
        font-family: 'Comfortaa', cursive;
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    header {
        flex: 0 0 auto;
    }

    main {
        flex: 1 0 auto;
    }
    
    footer {
        flex: 0 0 auto;
    }

    section {
        width: 100%;
        height: 100%;
    }

    h1 {
        font-size: 1.5rem;
    }

    .styledDiv {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }   

    @media (min-width: 1100px) {
    .styledDiv {
        width: 1020px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        }   
    }
    

    /* swall style */
    .swal-modal {
        border-radius: 10px;
    }

    .swal-text {
        color: black;
        font-weight:700;
    }

    .swal-button {
        background-color: #137956 !important;
        color: black;
        border: 1px solid #137956;
        border-radius: 10px;
         font-family:'Comfortaa', cursive;
    }

    .swal-button:hover {
        background-color: #fff;
        color: #fff;
        font-weight:700;
    }

    .swal-footer {
        text-align: center;
    }
`;

export default GlobalStyles;
