import {useEffect, useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";
import JudgeEditor from "./CodeEditorWindow";
import OutputWindow from "./OutputWindows";
import OutputDetails from "./OutputDetails";
import CustomInput from "./CustomInput";
import {languageOptions} from "../constants/languageOptions";
import useKeyPress from "../hooks/useKeyPress";
import {defineTheme} from "../lib/defineTheme";
import axios from "axios";


const javascriptDefault = `// The language is set to javascript. Happy Hacking!`

const Div1 = styled.div`
    background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops)); 
    background-color: #EC4899; 
    background-color: #EF4444; 
    background-color: #F59E0B; 
    width: 100%; 
    height: 1rem; 
    
`;
const Div2 = styled.div`
    display: flex; 
    flex-direction: row; 
`;
const Div3 = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
`;
const Div4 = styled.div`
    display: flex; 
    padding-top: 1rem;
    padding-bottom: 1rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
    margin-left: 1rem; 
    flex-direction: row; 
    align-items: flex-start; 
`;
const Div5 = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-end; 
    width: 100%; 
    height: 100%; 
`;
const Div6 = styled.div`
    display: flex; 
    flex-direction: column; 
    flex-shrink: 0; 
    width: 30%;
`;
const Div7 = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-end; 
`;
const CustomButton = styled.button`
    z-index: 10; 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
    margin-top: 1rem; 
    background-color: #ffffff; 
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; 
    transition-duration: 200ms; 
    flex-shrink: 0; 
    border-radius: 0.375rem; 
    border-width: 2px; 
    border-color: #000000; 
    opacity: !code ? 50 : 0
    :hover {
         box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
         }       
`;

// STYLED COMPONENTS -end

const JudgeLanding = () => {
    const [code, setCode] = useState(javascriptDefault);
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [theme, setTheme] = useState("cobalt");
    const [language, setLanguage] = useState(languageOptions[0]);

    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    const onSelectChange = (sl) => {
        console.log("selected Option...", sl);
        setLanguage(sl);
    };

    useEffect((handleCompile) => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
            handleCompile();
        }
    }, [ctrlPress, enterPress]);

    const onChange = (action, data) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled!", action, data);
            }
        }
    };
    const handleCompile = () => {
        setProcessing(true);
        const formData = new FormData();
        formData.append('language_id', language.id)
        formData.append('source_code', btoa(code))
        formData.append('stdin', btoa(customInput))
        const config = {
            method: "POST",
            url: "https://code-media.propulsion-learn.ch/judge/submissions/",
            params: { base64_encoded: "true", wait: "false" },
            header: {
                "Content-Type": "application/json",
                "X-Auth-Token": "f6583e60-b13b-4228-b554-2eb332ca64e7"

            },
            data: formData,
        };

        axios
          .request(config)
          .then(function (response) {
            console.log("res.data", response.data);
            const token = response.data.token;
            checkStatus(token);
          })
          .catch((err) => {
              let error = err.response ? err.response.data : err;
              let status = err.response.status;
              console.log("status", status);
              if (status === 429) {
                  console.log("too many requests", status);
              }
              setProcessing(false);
              console.log("catch block...", error);
          })
    };

    const checkStatus = async (token) => {
        const config = {
            method: "GET",
            url:`https://code-media.propulsion-learn.ch/judge/submissions/` + token,
            params: { base64_encoded: "true", fields: "*" },
            header: {
                "X-Auth-Token": "f6583e60-b13b-4228-b554-2eb332ca64e7"
            },
        };
        try {
            let response = await axios.request(config);
            let statusId = response.data.status?.id;

            if (statusId === 1 || statusId === 2) {
                setTimeout(() => {
                    checkStatus(token);
                }, 2000);
                return;
            }else{
                setProcessing(false);
                setOutputDetails(response.data);
                showSuccessToast(`Compile Successfully!`);
                console.log("response.data", response.data);
                return;
            }
        } catch (err) {
            console.log("err", err);
            setProcessing(false);
            showErrorToast();
        }
    };

    function handleThemeChange(th) {
        const theme = th;
        console.log("theme...", theme);

        if (["light", "vs-dark"].includes(theme.value)) {
            setTheme(theme);
        }else{
            defineTheme(theme.value).then((_) => setTheme(theme));
        }
    }

    useEffect(() => {
        defineTheme("oceanic-next").then((_) =>
            setTheme({value: "oceanic-next", label: "Oceanic Next"})
        );
    }, []);

    const showSuccessToast = (msg) => {
        toast.success(msg || `Compiled Successfully!`, {
            position: "top-right",
            autoClose: 100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const showErrorToast = (msg) => {
        toast.success(msg || `Something went wrong! Please try again.`, {
            position: "top-right",
            autoClose: 100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Div1/>
                <Div2>
                    <Div3>
                        <LanguagesDropdown onSelectChange={onSelectChange} theme={theme} />
                    </Div3>
                    <Div3>
                        <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
                    </Div3>

                </Div2>
            <Div4>
                <Div5>
                    <JudgeEditor
                        code={code}
                        onChange={onChange}
                        language={language?.value}
                        theme={theme.value}
                    />
                </Div5>

                <Div6>
                    <OutputWindow outputDetails={outputDetails} />
                    <Div7>
                        <CustomInput
                          customInput={customInput}
                          setCustomInput={setCustomInput}
                        />
                        <CustomButton
                          onClick={handleCompile}
                          disabled={!code}

                        >
                          {processing ? "Processing..." : "Compile and Execute"}
                        </CustomButton>
                    </Div7>
                    {outputDetails && <OutputDetails outputDetails={outputDetails} />}
                </Div6>
            </Div4>
        </>
    );
};
export default JudgeLanding;