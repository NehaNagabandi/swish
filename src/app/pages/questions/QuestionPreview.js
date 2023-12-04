import { Checkbox, Input, Radio } from 'antd';
import { useEffect, useState, useContext } from 'react';
import { TemplateContextProvider } from '../../contexts/TemplateContext';


const QuestionPreview = ({ dataQuestion, type, index }) => {

    const { questionsFontColor, questions, setQuestions } = useContext(TemplateContextProvider);
    const [updatedDataQuestion, setUpdatedDataQuestion] = useState(null);
    const [checkBoxAnswers, setCheckBoxAnswers] = useState([]);
    const [radioAnswer, setRadioAnswer] = useState()
    const [answerText, setAnswerText] = useState();

    const getOptions = () => {
        const options = dataQuestion?.optionQuestions;
        const filteredOptions = options?.filter(item => item.hasOwnProperty('name'));
        if (filteredOptions?.length > 0) {
            return filteredOptions.map(item => item?.name)
        } else {
            return []
        }
    }


    const showQuestionLogic = (dataQuestion) => {
        if (type == 1) {
            if (dataQuestion.hasOwnProperty('name') && dataQuestion['name'] !== "") {
                setUpdatedDataQuestion(dataQuestion)
            } else {
                setUpdatedDataQuestion(null)
            }
        } else {
            const options = dataQuestion?.optionQuestions;
            const filteredOptions = options?.filter(item => item.hasOwnProperty('name') && item['name'] !== "");
            const newQuestion = {
                ...dataQuestion,
                optionQuestions: filteredOptions ? filteredOptions : []
            }
            setUpdatedDataQuestion(newQuestion);
        }
    }

    useEffect(() => {
        showQuestionLogic(dataQuestion)
    }, [dataQuestion]);



    // const getOnlySelected = () => {
    //     const selectedItems = dataQuestion?.optionQuestions?.filter(item => item?.isAnswer === true)?.map(item => item?.name);
    //     return selectedItems;
    // }

    const labelStyle = { marginBottom: '6px', color: questionsFontColor && questionsFontColor }
    const groupStyle = { display: 'flex', gap: '50px', color: questionsFontColor && questionsFontColor }
    const styleContainer = { marginBottom: '25px', }

    useEffect(() => {
        if (type === 2) {
            const radioArea = document.querySelector('.radioArea');
            if (radioArea) {
                const radios = radioArea.querySelectorAll('.ant-radio-wrapper');
                for (let i = 0; i < radios.length; i++) {
                    radios[i].style.color = questionsFontColor && questionsFontColor;
                }
            }
            // const selectedOnly = getOnlySelected();
            // if (selectedOnly?.length > 0) {
            //     setRadioAnswer(selectedOnly[0]);
            // }
        } else {
            const checkboxArea = document.querySelector('.checkbox-area');
            if (checkboxArea) {
                const checkBoxes = checkboxArea.querySelectorAll('.ant-checkbox-wrapper');
                for (let i = 0; i < checkBoxes.length; i++) {
                    checkBoxes[i].style.color = questionsFontColor && questionsFontColor;
                }
            }
            // const selectedOnly = getOnlySelected();
            // if (selectedOnly?.length > 0) {
            //     setCheckBoxAnswers(selectedOnly);
            // }
        }
    }, [dataQuestion]);

    switch (type) {
        case 1:
            const handleInputChange = (e) => {
                const requiredQuestion = questions.find(question => question.id === dataQuestion.id);
                const updatedQuestion = {
                    ...requiredQuestion,
                    answerText: e.target.value
                };
                setQuestions(prevQuestions => prevQuestions.map(question => {
                    if (question.id === updatedQuestion.id) {
                        return updatedQuestion;
                    }
                    return question;
                }));
                setAnswerText(e.target.value);
            };
            return (
                updatedDataQuestion?.hasOwnProperty('name') && updatedDataQuestion['name'] !== "" ? (
                    <div style={styleContainer}>
                        <div style={labelStyle}>{`Q ${index + 1}. ${dataQuestion?.name ? dataQuestion?.name : ''}`}</div>
                        <Input placeholder="Your answer here" onChange={handleInputChange} className="textArea" style={{ borderRadius: '0px', color: questionsFontColor && questionsFontColor }} value={answerText} />
                    </div>
                ) : null
            )

        case 2:
            const radioChange = (e) => {
                const requiredQuestion = questions.find(question => question.id === dataQuestion.id);
                const requiredQuestionOptions = requiredQuestion.optionQuestions.map(option => ({
                    ...option,
                    isAnswer: e.target.value == option.name
                }));
                const updatedQuestion = {
                    ...requiredQuestion,
                    optionQuestions: requiredQuestionOptions
                };
                setQuestions(prevQuestions => prevQuestions.map(question => {
                    if (question.id === updatedQuestion.id) {
                        return updatedQuestion;
                    }
                    return question;
                }));
                setRadioAnswer(e.target.value);
            };
            return (
                updatedDataQuestion?.optionQuestions?.length > 0 && (
                    <div style={styleContainer}>
                        <div style={labelStyle}>{`Q ${index + 1}. ${dataQuestion?.name ? dataQuestion?.name : ''}`}</div>
                        <Radio.Group style={groupStyle} options={getOptions()} onChange={radioChange} value={radioAnswer} className='radioArea' />
                    </div>
                )
            )

        case 3:
            const checkBoxChange = (checkedValues) => {
                const requiredQuestion = questions.find(question => question.id === dataQuestion.id);
                const requiredQuestionOptions = requiredQuestion.optionQuestions.map(option => ({
                    ...option,
                    isAnswer: checkedValues.includes(option.name)
                }));
                const updatedQuestion = {
                    ...requiredQuestion,
                    optionQuestions: requiredQuestionOptions
                };
                setQuestions(prevQuestions => prevQuestions.map(question => {
                    if (question.id === updatedQuestion.id) {
                        return updatedQuestion;
                    }
                    return question;
                }));
                setCheckBoxAnswers(checkedValues)
            }
            return (
                updatedDataQuestion?.optionQuestions?.length > 0 && (
                    <div style={styleContainer}>
                        <div style={labelStyle}>{`Q ${index + 1}. ${dataQuestion?.name ? dataQuestion?.name : ''}`}</div>
                        <Checkbox.Group style={groupStyle} className='checkbox-area' onChange={checkBoxChange} options={getOptions()} value={checkBoxAnswers} />
                    </div>
                )
            );

        default:
            return '';
    }
};

export default QuestionPreview;
