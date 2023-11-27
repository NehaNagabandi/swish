import React, { useState } from "react";

export const TemplateContextProvider = React.createContext();

const TemplateContext = ({ children }) => {


  const [openModal, setOpenModal] = useState(false);
  const [landingURL, setLandingURL] = useState("");
  const [templateBtn, setTemplateBtn] = useState(true);
  const [atsBtn, setAtsBtn] = useState(true);
  const [applicantsBtn, setapplicantsBtn] = useState(true);
  const [headerResizableHeight, setHeaderResizableHeight] = useState();
  const [headerResizableWidth, setHeaderResizableWidth] = useState();
  const [headerUploadedImage, setHeaderUploadedImage] = useState(null);
  const [footerResizableHeight, setFooterResizableHeight] = useState();
  const [footerResizableWidth, setFooterResizableWidth] = useState();
  const [footerUploadedImage, setFooterUploadedImage] = useState(null);
  const [siderLeftResizableHeight, setSiderLeftResizableHeight] = useState();
  const [siderLeftResizableWidth, setSiderLeftResizableWidth] = useState();
  const [siderLeftUploadedImage, setSiderLeftUploadedImage] = useState(null);
  const [siderRightResizableHeight, setSiderRightResizableHeight] = useState();
  const [siderRightResizableWidth, setSiderRightResizableWidth] = useState();
  const [siderRightUploadedImage, setSiderRightUploadedImage] = useState(null);
  const [headerAlignment, setHeaderAlignment] = useState("center");
  const [siderLeftAlignment, setSiderLeftAlignment] = useState("center");
  const [siderRightAlignment, setSiderRightAlignment] = useState("center");
  const [footerAlignment, setFooterAlignment] = useState("center");
  const [showPreview, setShowPreview] = useState(false);
  const [questions, setQuestions] = useState(false)

  const [backgroundColor, setBackgroundColor] = useState();
  const [descriptionBackgroundColor, setDescriptionBackgroundColor] = useState();
  
  const [questionBackgroundColor, setQuestionBackgroundColor] = useState();
  const [questionsFontColor, setQuestionsFontColor] = useState()

  const [descValue, setDescValue] = useState("");
  const [descWidth, setDescWidth] = useState("")

  const [listChecked, setListChecked] = useState([]);
  const [templateData, setTemplateData] = useState(null)

  const [imagesName, setImagesName] = useState({
    header: '',
    footer: '',
    siderLeft: '',
    siderRight: ''
  })

  const showTemplate = () => {
    setTemplateBtn(true);
    setAtsBtn(false);
    setapplicantsBtn(false);
  };
  const showAtsDetails = () => {
    setTemplateBtn(false);
    setAtsBtn(true);
    setapplicantsBtn(false);
  };
  const showApplicants = () => {
    setTemplateBtn(false);
    setAtsBtn(false);
    setapplicantsBtn(true);
  };

  const clearTemplateStates = () => {

    setHeaderUploadedImage(null);
    setHeaderResizableHeight(0);
    setHeaderResizableWidth(0);
    setHeaderAlignment('center');

    setSiderLeftResizableHeight(0);
    setSiderLeftResizableWidth(0);
    setSiderLeftAlignment('center');
    setSiderLeftUploadedImage(null);

    setSiderRightAlignment('center');
    setSiderRightResizableHeight(0);
    setSiderRightResizableWidth(0);
    setSiderRightUploadedImage(null);

    setFooterAlignment('center');
    setFooterResizableHeight(0);
    setFooterResizableWidth(0);
    setFooterUploadedImage(null);

    setDescValue("");
    setImagesName({
      header: '',
      footer: '',
      siderLeft: '',
      siderRight: ''
    });

    setBackgroundColor(null);
  };


  return (
    <TemplateContextProvider.Provider
      value={{
        openModal, 
        setOpenModal,
        templateBtn,
        setTemplateBtn,
        atsBtn,
        setAtsBtn,
        applicantsBtn,
        setapplicantsBtn,
        showTemplate,
        showAtsDetails,
        showApplicants,
        clearTemplateStates,
        headerResizableHeight,
        setHeaderResizableHeight,
        headerResizableWidth,
        setHeaderResizableWidth,
        headerUploadedImage,
        setHeaderUploadedImage,
        siderLeftResizableHeight,
        setSiderLeftResizableHeight,
        siderLeftUploadedImage,
        setSiderLeftUploadedImage,
        siderLeftResizableWidth,
        setSiderLeftResizableWidth,
        siderRightResizableHeight,
        setSiderRightResizableHeight,
        siderRightUploadedImage,
        setSiderRightUploadedImage,
        siderRightResizableWidth,
        setSiderRightResizableWidth,
        footerResizableHeight,
        setFooterResizableHeight,
        footerUploadedImage,
        setFooterUploadedImage,
        headerAlignment,
        setHeaderAlignment,
        siderLeftAlignment,
        setSiderLeftAlignment,
        siderRightAlignment,
        setSiderRightAlignment,
        footerAlignment,
        setFooterAlignment,
        footerResizableWidth,
        setFooterResizableWidth,
        showPreview,
        setShowPreview,
        backgroundColor,
        setBackgroundColor,
        descValue,
        setDescValue,
        descWidth, 
        setDescWidth,
        imagesName, 
        setImagesName,
        descriptionBackgroundColor, 
        setDescriptionBackgroundColor,
        questionBackgroundColor, 
        setQuestionBackgroundColor,
        questionsFontColor, 
        setQuestionsFontColor,
        listChecked, 
        setListChecked,
        landingURL, 
        setLandingURL,
        templateData, 
        setTemplateData,
        questions, 
        setQuestions
      }}
    >
      {children}
    </TemplateContextProvider.Provider>
  );
};
export default TemplateContext;
