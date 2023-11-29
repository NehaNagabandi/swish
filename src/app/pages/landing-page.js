import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateAction } from '../../actions/template-action';
import { TemplateContextProvider } from '../contexts/TemplateContext';
import UrlTemplate from './url-template';

const LandingPage = () => {

    const dispatch = useDispatch()
    //const templatePath = window.location.hostname + window.location.pathname
    //const templateURL = `http://${window.location.hostname}${templatePath}`;
    // const templateURL = encodeURIComponent(window.location.pathname.substring(1))
    let templateURL = window.location.ancestorOrigins[0];
    templateURL = templateURL.replace(/^https?:\/\//, '');
    const templateDetailsData = useSelector(state => state.getTemplateDetailsReducer?.data)

    const {
        setTemplateData,
        setHeaderUploadedImage,

        setSiderLeftUploadedImage,
        setSiderRightUploadedImage,
        setFooterUploadedImage,
        setDescValue,

        setHeaderResizableHeight,
        setHeaderResizableWidth,
        setHeaderAlignment,

        setSiderLeftResizableHeight,
        setSiderLeftResizableWidth,
        setSiderLeftAlignment,

        setSiderRightResizableHeight,
        setSiderRightResizableWidth,
        setSiderRightAlignment,

        setFooterResizableHeight,
        setFooterResizableWidth,
        setFooterAlignment,
        setListChecked,
        setLandingURL,

        setQuestionBackgroundColor,
        setDescriptionBackgroundColor,
        setQuestionsFontColor,
        setQuestions

    } = useContext(TemplateContextProvider);


    const setContactInfoGet = (templateDetailsData) => {
        const contactInfo = templateDetailsData?.contactInfo;
        if (contactInfo) {
            const trueKeys = Object.keys(contactInfo).filter(key => contactInfo[key] === true);
            const selectedKeys = trueKeys.map(item => {
                switch (item) {
                    case 'isRequireCity':
                        return 'City';
                    case 'isRequireEmail':
                        return 'Email';
                    case 'isRequireState':
                        return 'State';
                    case 'isRequireResume':
                        return 'Upload Resume';
                    case 'isRequireCountry':
                        return 'Country';
                    case 'isRequireZipCode':
                        return 'Zipcode';
                    case 'isRequireLastName':
                        return 'Last Name';
                    case 'isRequireFirstName':
                        return 'First Name';
                    case 'isRequirePhoneNumber':
                        return 'Phone Number';
                    default:
                        return '';
                }
            }).filter(item => item !== ''); // Remove empty items
            return selectedKeys;
        }
        return [];
    }


    useEffect(() => {
        if (templateDetailsData) {

            const { header, footer, siderLeft, siderRight, descriptionStyles, questionFormStyle } = templateDetailsData.styles || {}; // Destructuring with default empty objects

            setTemplateData(templateDetailsData);

            setHeaderUploadedImage(templateDetailsData?.templateHeaderImg);
            setHeaderResizableHeight(header?.height);
            setHeaderResizableWidth(header?.width);
            setHeaderAlignment(header?.alignment ? header?.alignment : 'center');

            setFooterUploadedImage(templateDetailsData?.templateFooterImg);
            setFooterResizableHeight(footer?.height);
            setFooterResizableWidth(footer?.width);
            setFooterAlignment(footer?.alignment ? footer?.alignment : 'center');

            setSiderLeftUploadedImage(templateDetailsData?.templateLeftImg);
            setSiderLeftResizableHeight(siderLeft?.height);
            setSiderLeftResizableWidth(siderLeft?.width);
            setSiderLeftAlignment(siderLeft?.alignment ? siderLeft?.alignment : 'center');

            setSiderRightUploadedImage(templateDetailsData?.templateRightImg);
            setSiderRightResizableHeight(siderRight?.height);
            setSiderRightResizableWidth(siderRight?.width);
            setSiderRightAlignment(siderRight?.alignment ? siderRight?.alignment : 'center');

            setDescValue(templateDetailsData?.description);

            setDescriptionBackgroundColor(descriptionStyles?.backgroundColor);
            setQuestionBackgroundColor(questionFormStyle?.backgroundColor);
            setQuestionsFontColor(questionFormStyle?.fontColor)

            const selectedKeys = setContactInfoGet(templateDetailsData);
            setListChecked(selectedKeys);

            setQuestions(templateDetailsData?.questions);

            setLandingURL(templateDetailsData?.templateUrl);
        }
    }, [templateDetailsData])


    useEffect(() => {
        if (templateURL) {
            dispatch(templateAction.getTemplateDetails(encodeURIComponent(templateURL)));
        }
    }, [templateURL])

    return <UrlTemplate />
};

export default LandingPage;