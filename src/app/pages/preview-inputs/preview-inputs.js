import { Form, Input, Upload, Row, Col, Button, notification, Spin } from "antd";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { TemplateContextProvider } from "../../contexts/TemplateContext";
import { templateAction } from "../../../actions/template-action";
import {DownloadOutlined} from "@ant-design/icons";
import './preview-input.scss';

export default function PreviewInputs({ listChecked }) {

    const dispatch = useDispatch();
    const { questionsFontColor, setUploadedCvURL } = useContext(TemplateContextProvider);
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageDisplay, setImageDisplay] = useState(false);

    const plainOptions = [
        { label: "First Name", name: "firstName" },
        { label: "Last Name", name: "lastName" },
        { label: "Country", name: "country" },
        { label: "State", name: "state" },
        { label: "City", name: "city" },
        { label: "Zipcode", name: "zipCode" },
        { label: "Phone Number", name: "phone" },
        { label: "Email", name: "email" },
        { label: "Upload Resume (Optional)", name: "cvUrl" },
    ];


    const uploadSuccess = (res) => {
        setLoading(false);
        setUploadedCvURL(res?.data?.Location)
        setImageDisplay(true)
        notification.success({
            message: 'upload successful'
        })
    }

    const uploadFail = (res) => {
        setLoading(false);
        setImageDisplay(false);
        notification.error({
            message: res?.response?.data?.message
        })
    }

    const propsUpload = {
        multiple: false,
        showUploadList: false,
        beforeUpload: (file) => {
            return false;
        },
        onChange(info) {
            setLoading(true);
            const { fileList } = info;
            setFileList(fileList.slice(-1));
            const uploadedResume = fileList[fileList?.length - 1].originFileObj;
            dispatch(templateAction.uploadCv(uploadedResume, uploadSuccess, uploadFail))
        },
    };

    return (
        <div className="preview-input-container">
            <Row gutter={16}>
                {plainOptions.map((item, index) => (
                    <Col span={12} key={index}>
                        <Form.Item rules={[
                            {
                                required: listChecked.includes(item?.label),
                                message: 'This field is required'
                            },
                        ]} name={item?.name} label={<div style={{ color: questionsFontColor && questionsFontColor }} >
                            {item?.label}</div>}>
                            {item?.label !== "Upload Resume (Optional)" ? (
                                <Input placeholder={item?.label} />
                            ) : (
                                <Spin spinning={loading}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <Upload {...propsUpload} accept=".pdf,.doc,.docx">
                                            <Button icon={<DownloadOutlined/>} style={{borderRadius:'0px'}}>Click to Upload Resume</Button>
                                        </Upload>
                                        {imageDisplay && (
                                            <div style={{ color: questionsFontColor && questionsFontColor }}>{fileList?.[0]?.name}</div>
                                        )}
                                    </div>
                                </Spin>
                            )}
                        </Form.Item>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
