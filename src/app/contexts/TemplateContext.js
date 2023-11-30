import React, { useState } from "react";

export const TemplateContextProvider = React.createContext();

const TemplateContext = ({ children }) => {


  const [openModal, setOpenModal] = useState(false);

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
  const [uploadedCvURL, setUploadedCvURL] = useState(null)

  return (
    <TemplateContextProvider.Provider
      value={{
        openModal, 
        setOpenModal,
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
        descriptionBackgroundColor, 
        setDescriptionBackgroundColor,
        questionBackgroundColor, 
        setQuestionBackgroundColor,
        questionsFontColor, 
        setQuestionsFontColor,
        listChecked, 
        setListChecked,
        templateData, 
        setTemplateData,
        questions, 
        setQuestions,
        uploadedCvURL, 
        setUploadedCvURL
      }}
    >
      {children}
    </TemplateContextProvider.Provider>
  );
};
export default TemplateContext;
