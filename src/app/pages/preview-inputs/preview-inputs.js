import { Form, Input, Upload, Row, Col } from "antd";
import { useContext } from "react";
import { TemplateContextProvider } from "../../contexts/TemplateContext";
import './preview-input.scss';

export default function PreviewInputs({ listChecked }) {

    const { questionsFontColor } = useContext(TemplateContextProvider);
    const plainOptions = [
        "First Name",
        "Last Name",
        "Country",
        "State",
        "City",
        "Zipcode",
        "Phone Number",
        "Email",
        "Upload Resume",
    ];

    return (
        <div className="preview-input-container">
            <Form name="preview-input" layout="vertical">
                <Row gutter={16}> {/* Set the gap between columns */}
                    {plainOptions.map((item, index) => (
                        <Col span={12} key={index}> {/* Display two items in one row */}
                            <Form.Item label={<div style={{ color: questionsFontColor && questionsFontColor }}> {item}<span>{listChecked.includes(item) && '*'}</span></div>}>
                                {item !== "Upload Resume" ? (
                                    <Input placeholder={item} />
                                ) : (
                                    <Upload>
                                        <Input type="file" />
                                    </Upload>
                                )}
                            </Form.Item>
                        </Col>
                    ))}
                </Row>
            </Form>
        </div>
    );
}
