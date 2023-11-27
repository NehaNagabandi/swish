import { Button } from "antd";
import React, { useContext } from "react";
import parse from "html-react-parser";
import QuestionPreview from "./questions/QuestionPreview";
import { TemplateContextProvider } from "../contexts/TemplateContext";
import PreviewInputs from "./preview-inputs/preview-inputs";
import "./url-template.scss";


const UrlTemplate = () => {

    const {
        headerResizableHeight,
        headerUploadedImage,
        siderLeftResizableWidth,
        siderLeftResizableHeight,
        siderLeftUploadedImage,
        siderRightResizableWidth,
        siderRightResizableHeight,
        siderRightUploadedImage,
        headerResizableWidth,
        headerAlignment,
        siderLeftAlignment,
        siderRightAlignment,
        footerAlignment,
        footerUploadedImage,
        footerResizableHeight,
        footerResizableWidth,
        backgroundColor,
        descValue,
        descriptionBackgroundColor,
        questionBackgroundColor,
        questionsFontColor,
        descWidth,
        listChecked,
        questions
    } = useContext(TemplateContextProvider);


    const headerAlignmentCss = () => {
        switch (headerAlignment) {
            case "center":
                return {
                    height: `${headerResizableHeight}px`,
                    width: `${headerResizableWidth}px`,
                    marginLeft: "auto",
                    marginRight: "auto",
                };
            case "left":
                return {
                    height: `${headerResizableHeight}px`,
                    width: `${headerResizableWidth}px`,
                    marginLeft: 0,
                    marginRight: "auto",
                };
            case "right":
                return {
                    height: `${headerResizableHeight}px`,
                    width: `${headerResizableWidth}px`,
                    marginLeft: "auto",
                    marginRight: 0,
                };
        }
    };
    const siderLeftAlignmentCss = () => {
        switch (siderLeftAlignment) {
            case "center":
                return {
                    height: `${siderLeftResizableHeight}px`,
                    width: `${siderLeftResizableWidth}px`,
                    margin: "auto",
                };
            case "top":
                return {
                    height: `${siderLeftResizableHeight}px`,
                    width: `${siderLeftResizableWidth}px`,
                    marginTop: 0,
                    marginBottom: "auto",
                };
            case "bottom":
                return {
                    height: `${siderLeftResizableHeight}px`,
                    width: `${siderLeftResizableWidth}px`,
                    marginTop: "auto",
                    marginBottom: 0,
                };
        }
    };
    const siderRightAlignmentCss = () => {
        switch (siderRightAlignment) {
            case "center":
                return {
                    height: `${siderRightResizableHeight}px`,
                    width: `${siderRightResizableWidth}px`,
                    margin: "auto",
                };
            case "top":
                return {
                    height: `${siderRightResizableHeight}px`,
                    width: `${siderRightResizableWidth}px`,
                    marginTop: 0,
                    marginBottom: "auto",
                };
            case "bottom":
                return {
                    height: `${siderRightResizableHeight}px`,
                    width: `${siderRightResizableWidth}px`,
                    marginTop: "auto",
                    marginBottom: 0,
                };
        }
    };
    const footerAlignmentCss = () => {
        switch (footerAlignment) {
            case "center":
                return {
                    height: `${footerResizableHeight}px`,
                    width: `${footerResizableWidth}px`,
                    marginLeft: "auto",
                    marginRight: "auto",
                };
            case "left":
                return {
                    height: `${footerResizableHeight}px`,
                    width: `${footerResizableWidth}px`,
                    marginLeft: 0,
                    marginRight: "auto",
                };
            case "right":
                return {
                    height: `${footerResizableHeight}px`,
                    width: `${footerResizableWidth}px`,
                    marginLeft: "auto",
                    marginRight: 0,
                };
        }
    };

    return (
        <div
            className="url-template-page"
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
            }}
        >
            <div style={{ backgroundColor: backgroundColor }}>
                {headerUploadedImage && (
                    <div className="header">
                        <>
                            <img
                                src={headerUploadedImage}
                                alt="Uploaded"
                                style={headerAlignmentCss()}
                            />
                        </>
                    </div>
                )}
                <div className="middle-container">
                    <div style={{ display: "flex" }}>
                        {siderLeftUploadedImage && (
                            <div className="sider">
                                <>
                                    <img
                                        src={siderLeftUploadedImage}
                                        alt="Uploaded"
                                        className="image-uploaded"
                                        style={siderLeftAlignmentCss()}
                                    />
                                </>
                            </div>
                        )}
                        <div className="desc" style={{ background: descriptionBackgroundColor ? descriptionBackgroundColor : 'white' }}>
                            <div className="description-content" style={{ maxWidth: descWidth && `${descWidth}px` }}>
                                {parse(`${descValue}`)}
                            </div>
                        </div>
                        <div className="question-form" style={{ background: questionBackgroundColor && questionBackgroundColor }}>
                            <div className="question-form-content">
                                <p style={{ color: questionsFontColor ? questionsFontColor : 'black' }} >Apply now</p>
                                <PreviewInputs listChecked={listChecked} />
                                <div className="questions-preview-content" style={{ fontWeight: "bold", fontSize: '16px', marginBottom: '10px', color: questionsFontColor && questionsFontColor }}>Questionnaire</div>
                                {questions?.length > 0 &&
                                    questions.map((item, index) => (
                                        <QuestionPreview
                                            type={item.type}
                                            dataQuestion={item}
                                            index={index}
                                            key={index}
                                        />
                                    ))
                                }
                                <div className="apply-preview"><Button>Apply</Button></div>
                            </div>
                        </div>
                        {siderRightUploadedImage && (
                            <div className="sider">
                                <img
                                    src={siderRightUploadedImage}
                                    alt="Uploaded"
                                    className="image-uploaded"
                                    style={siderRightAlignmentCss()}
                                />
                            </div>
                        )}
                    </div>
                </div>
                {footerUploadedImage && (
                    <div className="footer-pre">
                        <>
                            <img
                                src={footerUploadedImage}
                                alt="Uploaded"
                                style={footerAlignmentCss()}
                            />
                        </>
                    </div>
                )}
            </div>
        </div>

    );
};

export default UrlTemplate;
