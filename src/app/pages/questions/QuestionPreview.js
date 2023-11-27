import { Checkbox, Input, Radio } from 'antd';
import { useEffect, useState, useContext } from 'react';
import { TemplateContextProvider } from '../../contexts/TemplateContext';


const QuestionPreview = ({ dataQuestion, type, index }) => {


    const { questionsFontColor } = useContext(TemplateContextProvider);

    const [checkBoxAnswers, setCheckBoxAnswers] = useState([]);
    const [radioAnswer, setRadioAnswer] = useState('')
    const [answerText, setAnswerText] = useState('');

    const getOptions = () => {
        const options = dataQuestion?.optionQuestions;
        const filteredOptions = options?.filter(item => item.hasOwnProperty('name'));
        if (filteredOptions?.length > 0) {
            return filteredOptions.map(item => item?.name)
        } else {
            return []
        }
    }

    const getOnlySelected = () => {
        const selectedItems = dataQuestion?.optionQuestions?.filter(item => item?.isAnswer === true)?.map(item => item?.name);
        return selectedItems;
    }

    const labelStyle = { marginBottom: '6px', color: questionsFontColor && questionsFontColor }
    const groupStyle = { display: 'flex', gap: '50px', color: questionsFontColor && questionsFontColor }
    const styleContainer = { marginBottom: '25px', }

    useEffect(() => {
        if (type === 1) {
            setAnswerText(dataQuestion?.answerText ? dataQuestion?.answerText : "");
        } else if (type === 2) {
            const radioArea = document.querySelector('.radioArea');
            if (radioArea) {
                const radios = radioArea.querySelectorAll('.ant-radio-wrapper');
                for (let i = 0; i < radios.length; i++) {
                    radios[i].style.color = questionsFontColor && questionsFontColor;
                }
            }
            const selectedOnly = getOnlySelected();
            if (selectedOnly?.length > 0) {
                setRadioAnswer(selectedOnly[0]);
            }
        } else {
            const checkboxArea = document.querySelector('.checkbox-area');
            if (checkboxArea) {
                const checkBoxes = checkboxArea.querySelectorAll('.ant-checkbox-wrapper');
                for (let i = 0; i < checkBoxes.length; i++) {
                    checkBoxes[i].style.color = questionsFontColor && questionsFontColor;
                }
            }
            const selectedOnly = getOnlySelected();
            if (selectedOnly?.length > 0) {
                setCheckBoxAnswers(selectedOnly);
            }
        }
    }, [dataQuestion]);


    switch (type) {
        case 1:
            return (
                <div style={styleContainer}>
                    <div style={labelStyle}>{`Q ${index + 1}. ${dataQuestion?.name ? dataQuestion?.name : ''}`}</div>
                    <Input readOnly placeholder="Your answer here" className="textArea" style={{ borderRadius: '0px', color: questionsFontColor && questionsFontColor }} value={answerText} />
                </div>
            )

        case 2:
            return (
                <div style={styleContainer}>
                    <div style={labelStyle}>{`Q ${index + 1}. ${dataQuestion?.name ? dataQuestion?.name : ''}`}</div>
                    <Radio.Group style={groupStyle} options={getOptions()} value={radioAnswer} className='radioArea' />
                </div>
            )

        case 3:
            return (
                <div style={styleContainer}>
                    <div style={labelStyle}>{`Q ${index + 1}. ${dataQuestion?.name ? dataQuestion?.name : ''}`}</div>
                    <Checkbox.Group style={groupStyle} className='checkbox-area' options={getOptions()} value={checkBoxAnswers} />
                </div>
            );

        default:
            return '';
    }
};

export default QuestionPreview;
