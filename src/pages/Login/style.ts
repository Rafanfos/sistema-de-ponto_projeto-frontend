import styled from "styled-components";

const PageLogin = styled.div`
    display: flex;
    height: 100vh;

    section {
        display: flex;
        align-items: center;
        
        width: 50%;

        div {
            display: flex;
            flex-direction: column;

            max-width: 660px;
            width: 90%;
            margin: 0 auto;

            p {
                font-weight: 400;
                font-size: 48px;
                
    
                
            }
            h1 {
                margin-bottom: 100px;

                font-weight: 900;
                font-size: 48px;

                color: var(--color-primary);
            }

            form{

                button {
                    width: 100%;
                    height: 80px;
                    margin-top: 60px;

                    font-weight: 900;
                    font-size: 22px;

                    color: var(--color-light);
                    background-color: var(--color-primary);

                    border-radius: 10px;
                    border: transparent;    
                }
            }
        }
    }

    .div_input {

        width: 100%;
        position: relative;

        div {
            display: flex;
            flex-direction: column;

            width: 100%;

            label {
                position: absolute;
                left: 55px;
                top: 10px;

                font-weight: 700;
                font-size: 12px;
                
            }

            input {
                width: 100%;
                height: 60px;

                padding-left: 55px;
                padding-right: 55px;
                padding-top: 15px;
                
                background-color: var(--grey-4);

                border: transparent;
                border-radius: 10px;

                font-weight: 700;
                font-size: 18px;
                
            }
            input::placeholder {
                color: var(--grey-2);
            }

            span {
                margin-left: 20px;
                margin-top: 5px;

                font-size: 13px;

                color: #f14d4d;
            }

        }

        .span_email{
            margin-bottom: 34px;
        }

        .figure_input {
            position: absolute;

            font-size: 26px;

            left: 15px;
            top: 16px;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 36px;
            height: 36px;
            margin: 0;
            position: absolute;

            top: 12px;
            right: 15px;
            background-color: transparent;

            .figure_view {
                font-size: 25px;
                color: var(--grey-1);
            }
        }
    }

    .div_keep_logged {
        display: flex;
        flex-direction: row;

        align-items: center;

        margin: 0;
        margin-top: 19px;

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            margin: 0;
            width: 25px;
            height: 25px;

            background-color: var(--grey-3);

            border-radius: 8px;

            cursor: pointer;

            .figure_check {
                font-size: 26px;
                
            }
        }

        p {
            font-weight: 700;
            font-size: 18px;
            margin-left: 10px;
        }
    }

    @media(max-width: 768px){
        flex-direction: column;
        
        section {
            width: 100%;

            div {

                p {
                    margin-top: 50px;

                    h1 {
                        margin-bottom: 36px;
                    }
                }

                form {

                    button {
                        margin-top: 35px;
                    }
                }
            }
        }

        .div_keep_logged {
            margin-top: 13px;

            p{
                margin: 0;
                margin-left: 10px;
            }
        }

        .div_input {

            .input_email{
                margin-bottom: 12px;
            }
        }
    }
`
export default PageLogin;